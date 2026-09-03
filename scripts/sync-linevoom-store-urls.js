const fs = require('fs');
const path = require('path');
const STORES = require('./linevoom-stores');

const DATA_FILE = path.resolve(__dirname, '../src/app/giveaway-data.ts');
const OUTPUT_FILE = path.resolve(__dirname, '../linevoom-store-sync-result.txt');
const out = [];

function log(s = '') { console.log(s); out.push(s); }
function save() { fs.writeFileSync(OUTPUT_FILE, out.join('\n') + '\n', 'utf8'); }
function norm(s = '') {
  return s
    .toLowerCase()
    .replace(/funbox|toys|sanrio/g, '')
    .replace(/[\s&\-－_()（）]/g, '')
    .replace(/店$/g, '');
}
function escRe(s = '') { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
function esc(s = '') { return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'"); }

function getDataStores(src) {
  const re = /\{\s*store:\s*'([^']+)'([\s\S]*?)items:\s*\[/g;
  return [...src.matchAll(re)].map(m => ({
    name: m[1],
    header: m[2],
    url: m[2].match(/storeUrl:\s*'([^']+)'/)?.[1] || '',
  }));
}

function replaceStoreIdentity(src, oldName, master) {
  const name = escRe(oldName);
  const re = new RegExp(`(store:\\s*)'${name}'(\\s*,)([\\s\\S]*?)(\\n\\s*items:\\s*\\[)`);
  return src.replace(re, (all, prefix, comma, header, itemsLine) => {
    const indent = all.match(/^(\s*)store:/)?.[1] || '      ';
    header = header.replace(/\n\s*storeUrl:\s*'[^']*'\s*,?/g, '');
    return `${prefix}'${esc(master.name)}'${comma}\n${indent}storeUrl: '${esc(master.url)}',${header}${itemsLine}`;
  });
}

let src = fs.readFileSync(DATA_FILE, 'utf8');
let dataStores = getDataStores(src);
let updated = 0;
let unchanged = 0;
const missing = [];
const used = new Set();

for (const master of STORES) {
  // URL is the stable identity. If DATA already has this VOOM URL, always use that block,
  // then make its displayed store name exactly match linevoom-stores.js.
  let data = dataStores.find(x => x.url && x.url.replace(/[?#].*$/, '') === master.url.replace(/[?#].*$/, '') && !used.has(x.name));

  // For legacy DATA blocks without storeUrl, fall back to normalized name matching once.
  if (!data) data = dataStores.find(x => norm(x.name) === norm(master.name) && !used.has(x.name));

  if (!data) {
    missing.push(`${master.region} / ${master.name}`);
    continue;
  }

  used.add(data.name);
  const nameOk = data.name === master.name;
  const urlOk = data.url === master.url;
  if (nameOk && urlOk) {
    unchanged++;
    continue;
  }

  const oldName = data.name;
  src = replaceStoreIdentity(src, oldName, master);
  updated++;
  log(`🔄 ${oldName} -> ${master.name}`);

  // Reparse after every write so subsequent matches see the canonical name/url.
  dataStores = getDataStores(src);
}

fs.writeFileSync(DATA_FILE, src, 'utf8');
log(`\n🔗 店名＋storeUrl 同步完成：更新 ${updated}、原本一致 ${unchanged}、未匹配 ${missing.length}`);
if (missing.length) {
  log('⚠️ 未匹配店家（不自動改名，避免配錯）：');
  for (const x of missing) log(`- ${x}`);
}
save();
