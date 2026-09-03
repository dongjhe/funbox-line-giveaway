const fs = require('fs');
const path = require('path');

const DATA_FILE = path.resolve(__dirname, '../src/app/giveaway-data.ts');
const RESULT_FILE = path.resolve(__dirname, '../linevoom-parser-v2-result.txt');
const OUTPUT_FILE = path.resolve(__dirname, '../linevoom-prune-result.txt');
const out = [];

function log(s = '') { console.log(s); out.push(s); }
function save() { fs.writeFileSync(OUTPUT_FILE, out.join('\n') + '\n', 'utf8'); }
function norm(s = '') {
  return s.toLowerCase().replace(/funbox|toys|sanrio/g, '').replace(/[\s&\-－_()（）]/g, '');
}
function escRe(s = '') { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

if (!fs.existsSync(RESULT_FILE)) {
  log('❌ 找不到 linevoom-parser-v2-result.txt，請先執行 parser');
  save();
  process.exit(1);
}

let src = fs.readFileSync(DATA_FILE, 'utf8');
const result = fs.readFileSync(RESULT_FILE, 'utf8');

// Only stores whose newest relevant post after 9/1 actually produced products are allowed to keep items.
// This deliberately treats every other DATA store as stale, including legacy stores that are no longer
// present in the current 57-store monitor list.
const active = new Set();
for (const block of result.split(/\n(?=\[\d+\/\d+\] )/)) {
  const head = block.match(/^\[\d+\/\d+\]\s+([^/\n]+?)\s+\/\s+([^\n]+)$/m);
  if (!head) continue;
  const name = head[2].trim();
  const count = Number(block.match(/^📦 VOOM\s+(\d+)\s+\/\s+DATA/m)?.[1] || 0);
  if (count > 0) active.add(norm(name));
}

let cleared = 0;
let kept = 0;
const storeRe = /\{\s*store:\s*'([^']+)'[\s\S]*?items:\s*\[([\s\S]*?)\]\s*,?\s*\}/g;
const stores = [...src.matchAll(storeRe)].map(m => ({ name: m[1], body: m[2] }));

for (const store of stores) {
  const itemCount = (store.body.match(/\{\s*name:\s*'/g) || []).length;
  if (!itemCount) continue;
  if (active.has(norm(store.name))) {
    kept++;
    log(`✅ KEEP ${store.name}：${itemCount} 商品（9/1 後最新文章）`);
    continue;
  }

  const name = escRe(store.name);
  const re = new RegExp(`(\\{\\s*store:\\s*'${name}'[\\s\\S]*?items:\\s*\\[)([\\s\\S]*?)(\\]\\s*,?\\s*\\})`);
  const next = src.replace(re, '$1$3');
  if (next !== src) {
    src = next;
    cleared++;
    log(`🧹 CLEAR ${store.name}：${itemCount} → 0（不是 9/1 後最新有效商品）`);
  }
}

fs.writeFileSync(DATA_FILE, src, 'utf8');
log(`\nSUMMARY: active=${active.size} kept=${kept} cleared=${cleared}`);
save();
