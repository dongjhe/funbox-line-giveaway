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
function escRe(s = '') { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

if (!fs.existsSync(RESULT_FILE)) {
  log('❌ 找不到 linevoom-parser-v2-result.txt，請先執行 parser');
  save();
  process.exit(1);
}

let src = fs.readFileSync(DATA_FILE, 'utf8');
const result = fs.readFileSync(RESULT_FILE, 'utf8');

// Build active identities from the parser result. Store URL is the primary key;
// normalized name is only a fallback for legacy DATA blocks without storeUrl.
const activeUrls = new Set();
const activeNames = new Set();
for (const block of result.split(/\n(?=\[\d+\/\d+\] )/)) {
  const head = block.match(/^\[\d+\/\d+\]\s+([^/\n]+?)\s+\/\s+([^\n]+)$/m);
  if (!head) continue;
  const region = head[1].trim();
  const name = head[2].trim();
  const count = Number(block.match(/^📦 VOOM\s+(\d+)\s+\/\s+DATA/m)?.[1] || 0);
  if (count <= 0) continue;

  const master = STORES.find(s => s.region === region && (s.name === name || norm(s.name) === norm(name)));
  if (master) activeUrls.add(cleanUrl(master.url));
  activeNames.add(norm(name));
}

let cleared = 0;
let kept = 0;
const storeRe = /\{\s*store:\s*'([^']+)'([\s\S]*?)items:\s*\[([\s\S]*?)\]\s*,?\s*\}/g;
const stores = [...src.matchAll(storeRe)].map(m => ({
  name: m[1],
  header: m[2],
  body: m[3],
  url: cleanUrl(m[2].match(/storeUrl:\s*'([^']+)'/)?.[1] || ''),
}));

for (const store of stores) {
  const itemCount = (store.body.match(/\{\s*name:\s*'/g) || []).length;
  if (!itemCount) continue;

  const isActive = (store.url && activeUrls.has(store.url)) || activeNames.has(norm(store.name));
  if (isActive) {
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
log(`\nSUMMARY: active=${activeUrls.size || activeNames.size} kept=${kept} cleared=${cleared}`);
save();
