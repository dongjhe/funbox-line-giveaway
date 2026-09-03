const fs = require('fs');
const path = require('path');
const STORES = require('./linevoom-stores');

const DATA_FILE = path.resolve(__dirname, '../src/app/giveaway-data.ts');
const RESULT_FILE = path.resolve(__dirname, '../linevoom-parser-v2-result.txt');
const OUTPUT_FILE = path.resolve(__dirname, '../linevoom-new-store-sync-result.txt');
const out = [];

function log(s = '') { console.log(s); out.push(s); }
function save() { fs.writeFileSync(OUTPUT_FILE, out.join('\n') + '\n', 'utf8'); }
function norm(s = '') { return s.toLowerCase().replace(/funbox|toys|sanrio/g, '').replace(/[\s&\-－_()（）]/g, ''); }
function esc(s = '') { return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'"); }
function escRe(s = '') { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

if (!fs.existsSync(RESULT_FILE)) {
  log('❌ 找不到 linevoom-parser-v2-result.txt，請先執行 parser');
  save();
  process.exit(1);
}

let src = fs.readFileSync(DATA_FILE, 'utf8');
const result = fs.readFileSync(RESULT_FILE, 'utf8');
const existing = [...src.matchAll(/store:\s*'([^']+)'/g)].map(m => m[1]);
const blocks = result.split(/\n(?=\[\d+\/\d+\] )/);
let added = 0, skipped = 0;

for (const block of blocks) {
  const head = block.match(/^\[\d+\/\d+\]\s+([^/\n]+?)\s+\/\s+([^\n]+)$/m);
  if (!head || !block.includes('🆕 NEW STORE')) continue;
  const region = head[1].trim();
  const name = head[2].trim();
  const master = STORES.find(s => s.region === region && norm(s.name) === norm(name));
  if (!master) { log(`⚠️ SKIP ${region} / ${name}：不在 master store list`); skipped++; continue; }
  if (existing.some(x => norm(x) === norm(name))) { log(`↪️ SKIP ${region} / ${name}：DATA 已存在`); skipped++; continue; }

  const items = [];
  for (const line of block.split('\n')) {
    const m = line.match(/^\s{2}(.+?)\s+->\s+(https:\/\/lin\.ee\/[A-Za-z0-9_-]+)\s*$/);
    if (m) items.push({ name: m[1].trim(), url: m[2] });
  }
  if (!items.length) { log(`⚠️ SKIP ${region} / ${name}：沒有安全解析商品`); skipped++; continue; }

  // IMPORTANT: insert only immediately before the region array's closing `  ],`.
  // The previous regex allowed the body match to stop at an inner `items: [...]` closing,
  // which could inject a new store inside the previous store's items array and break TS formatting.
  const regionStartRe = new RegExp(`^\\s{2}${escRe(region)}:\\s*\\[\\s*$`, 'm');
  const startMatch = regionStartRe.exec(src);
  if (!startMatch) { log(`⚠️ SKIP ${region} / ${name}：找不到區域陣列`); skipped++; continue; }

  const bodyStart = startMatch.index + startMatch[0].length;
  const rest = src.slice(bodyStart);
  const regionEndMatch = /^\s{2}\],\s*$/m.exec(rest);
  if (!regionEndMatch) { log(`⚠️ SKIP ${region} / ${name}：找不到區域結尾`); skipped++; continue; }

  const insertAt = bodyStart + regionEndMatch.index;
  const object = `\n    {\n      store: '${esc(name)}',\n      storeUrl: '${esc(master.url)}',\n      items: [\n${items.map(x => `        { name: '${esc(x.name)}', url: '${esc(x.url)}' },`).join('\n')}\n      ],\n    },\n`;

  src = src.slice(0, insertAt) + object + src.slice(insertAt);
  existing.push(name);
  added++;
  log(`✅ ADD ${region} / ${name}：${items.length} 商品`);
}

if (added) fs.writeFileSync(DATA_FILE, src, 'utf8');
log(`\nSUMMARY: added=${added} skipped=${skipped}`);
save();
