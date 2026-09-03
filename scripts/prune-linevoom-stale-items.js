const fs = require('fs');
const path = require('path');
const STORES = require('./linevoom-stores');

const DATA_FILE = path.resolve(__dirname, '../src/app/giveaway-data.ts');
const RESULT_FILE = path.resolve(__dirname, '../linevoom-parser-v2-result.txt');
const OUTPUT_FILE = path.resolve(__dirname, '../linevoom-prune-result.txt');
const out = [];

function log(s = '') { console.log(s); out.push(s); }
function save() { fs.writeFileSync(OUTPUT_FILE, out.join('\n') + '\n', 'utf8'); }
function norm(s = '') {
  return s.toLowerCase().replace(/funbox|toys|sanrio/g, '').replace(/[\s&\-－_()（）]/g, '').replace(/店$/g, '');
}
function cleanUrl(s = '') { return s.trim().replace(/[?#].*$/, ''); }
function esc(s = '') { return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'"); }

if (!fs.existsSync(RESULT_FILE)) {
  log('❌ 找不到 linevoom-parser-v2-result.txt，請先執行 parser');
  save();
  process.exit(1);
}

let src = fs.readFileSync(DATA_FILE, 'utf8');
const result = fs.readFileSync(RESULT_FILE, 'utf8');

// Parser result is authoritative. Re-read every store block and reconcile the
// items from the result file. This is intentionally independent from the
// parser's in-memory DATA regex, so a log saying SYNCED can never be lost.
function parseResult(text) {
  const map = new Map();
  const blocks = text.split(/\n(?=\[\d+\/\d+\] )/);
  for (const block of blocks) {
    const head = block.match(/^\[\d+\/\d+\]\s+([^/\n]+?)\s+\/\s+([^\n]+)$/m);
    if (!head) continue;
    const region = head[1].trim();
    const name = head[2].trim();
    const countMatch = block.match(/^📦 VOOM\s+(\d+)\s+\/\s+DATA/m);
    const items = [];
    if (countMatch) {
      for (const m of block.matchAll(/^  (.+?) -> (https:\/\/lin\.ee\/[A-Za-z0-9_-]+)$/gm)) {
        items.push({ name: m[1].trim(), url: m[2] });
      }
    }
    map.set(`${region}|${norm(name)}`, {
      region,
      name,
      hasCount: !!countMatch,
      count: Number(countMatch?.[1] || 0),
      items,
      block,
    });
  }
  return map;
}

function findDataObject(source, master) {
  const candidates = [];
  const storeRe = /store:\s*'([^']+)'/g;
  for (const m of source.matchAll(storeRe)) {
    if (norm(m[1]) !== norm(master.name)) continue;
    const lineStart = source.lastIndexOf('\n', m.index) + 1;
    let start = source.lastIndexOf('\n    {', lineStart);
    if (start < 0) continue;
    start += 1;

    let depth = 0;
    let quote = false;
    let escaped = false;
    let end = -1;
    for (let i = start; i < source.length; i++) {
      const ch = source[i];
      if (quote) {
        if (escaped) escaped = false;
        else if (ch === '\\') escaped = true;
        else if (ch === "'") quote = false;
        continue;
      }
      if (ch === "'") { quote = true; continue; }
      if (ch === '{') depth++;
      else if (ch === '}') {
        depth--;
        if (depth === 0) {
          end = i + 1;
          if (source[end] === ',') end++;
          break;
        }
      }
    }
    if (end < 0) continue;
    const text = source.slice(start, end);
    const url = cleanUrl(text.match(/storeUrl:\s*'([^']+)'/)?.[1] || '');
    candidates.push({ start, end, text, url, name: m[1] });
  }

  const exactUrl = candidates.find(x => x.url && x.url === cleanUrl(master.url));
  return exactUrl || candidates[0] || null;
}

function replaceObjectItems(source, obj, items) {
  const itemStartMatch = /\n(\s*)items:\s*\[/.exec(obj.text);
  if (!itemStartMatch) return source;
  const indent = itemStartMatch[1];
  const open = itemStartMatch.index + itemStartMatch[0].length;

  let depth = 1;
  let quote = false;
  let escaped = false;
  let close = -1;
  for (let i = open; i < obj.text.length; i++) {
    const ch = obj.text[i];
    if (quote) {
      if (escaped) escaped = false;
      else if (ch === '\\') escaped = true;
      else if (ch === "'") quote = false;
      continue;
    }
    if (ch === "'") { quote = true; continue; }
    if (ch === '[') depth++;
    else if (ch === ']') {
      depth--;
      if (depth === 0) { close = i; break; }
    }
  }
  if (close < 0) return source;

  const itemIndent = indent + '  ';
  const body = items.length
    ? `\n${items.map(x => `${itemIndent}{ name: '${esc(x.name)}', url: '${esc(x.url)}' },`).join('\n')}\n${indent}`
    : '';
  const newObj = obj.text.slice(0, open) + body + obj.text.slice(close);
  return source.slice(0, obj.start) + newObj + source.slice(obj.end);
}

function currentItemCount(obj) {
  return (obj.text.match(/\{\s*name:\s*'/g) || []).length;
}

const parsed = parseResult(result);
let reconciled = 0;
let kept = 0;
let cleared = 0;
let missing = 0;
let mismatch = 0;

for (const master of STORES) {
  const key = `${master.region}|${norm(master.name)}`;
  const r = parsed.get(key);
  const obj = findDataObject(src, master);
  if (!obj) {
    missing++;
    continue;
  }

  // If parser emitted VOOM count, the product lines must equal that count.
  // Refuse partial writes rather than silently losing products.
  if (r?.hasCount && r.items.length !== r.count) {
    mismatch++;
    log(`⚠️ COUNT MISMATCH ${master.name}：VOOM=${r.count} parsed-lines=${r.items.length}，不寫入`);
    continue;
  }

  const target = r?.hasCount ? r.items : [];
  const before = currentItemCount(obj);
  const next = replaceObjectItems(src, obj, target);
  if (next === src) {
    if (before === target.length) {
      if (target.length) { kept++; log(`✅ KEEP ${master.name}：${target.length} 商品（9/1 後最新文章）`); }
    } else {
      mismatch++;
      log(`⚠️ WRITE FAILED ${master.name}：${before} → ${target.length}`);
    }
    continue;
  }

  src = next;
  reconciled++;
  if (target.length) {
    log(`🔧 RECONCILE ${master.name}：${before} → ${target.length} 商品`);
  } else if (before > 0) {
    cleared++;
    log(`🧹 CLEAR ${master.name}：${before} → 0（不是 9/1 後最新有效商品）`);
  }
}

fs.writeFileSync(DATA_FILE, src, 'utf8');
log(`\nSUMMARY: reconciled=${reconciled} kept=${kept} cleared=${cleared} missing=${missing} mismatch=${mismatch}`);
if (mismatch > 0) {
  log('❌ 有商品數量不一致或寫入失敗，請勿視為同步完成。');
  process.exitCode = 1;
} else {
  log('✅ Parser 結果與 giveaway-data.ts 商品已完成一致性同步。');
}
save();
