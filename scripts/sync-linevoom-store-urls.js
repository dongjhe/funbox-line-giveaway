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
    .replace(/funbox|toys|toy|sanrio/g, '')
    .replace(/lalaport/g, 'lalaport')
    .replace(/[\s&\-－_()（）]/g, '')
    .replace(/店$/g, '');
}
function cleanUrl(s = '') { return s.trim().replace(/[?#].*$/, ''); }
function escRe(s = '') { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
function esc(s = '') { return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'"); }

function getDataStores(src) {
  const re = /\{\s*store:\s*'([^']+)'([\s\S]*?)items:\s*\[/g;
  return [...src.matchAll(re)].map((m, index) => ({
    index,
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
const ambiguous = [];
const usedIndexes = new Set();

log(`🔗 LINE VOOM 主檔同步 — ${STORES.length} 間`);
log('規則：linevoom-stores.js 為唯一主檔；store 與 storeUrl 必須完全一致。');
log('配對：先正規化店名，找不到時才用相同 VOOM URL；舊錯誤 URL 不會阻止店名修正。\n');

for (const master of STORES) {
  // Name is used first on purpose: giveaway-data.ts may contain a stale/wrong URL.
  // Once the intended store is identified, BOTH name and URL are overwritten by master data.
  let candidates = dataStores.filter(x => !usedIndexes.has(x.index) && norm(x.name) === norm(master.name));

  if (candidates.length > 1) {
    const byUrl = candidates.filter(x => cleanUrl(x.url) === cleanUrl(master.url));
    if (byUrl.length === 1) candidates = byUrl;
  }

  let data = candidates.length === 1 ? candidates[0] : null;

  // Fallback for renamed stores: exact VOOM URL is safe enough to identify the block.
  if (!data && candidates.length === 0) {
    const byUrl = dataStores.filter(x => !usedIndexes.has(x.index) && x.url && cleanUrl(x.url) === cleanUrl(master.url));
    if (byUrl.length === 1) data = byUrl[0];
  }

  if (!data) {
    if (candidates.length > 1) ambiguous.push(`${master.region} / ${master.name}（同名候選 ${candidates.length} 筆）`);
    else missing.push(`${master.region} / ${master.name}`);
    continue;
  }

  usedIndexes.add(data.index);
  const nameOk = data.name === master.name;
  const urlOk = cleanUrl(data.url) === cleanUrl(master.url);
  if (nameOk && urlOk) {
    unchanged++;
    log(`✅ OK ${master.region} / ${master.name}`);
    continue;
  }

  const oldName = data.name;
  const oldUrl = data.url || '(無 storeUrl)';
  src = replaceStoreIdentity(src, oldName, master);
  updated++;
  log(`🔄 FIX ${master.region} / ${oldName}`);
  if (!nameOk) log(`   store: ${oldName} -> ${master.name}`);
  if (!urlOk) log(`   url:   ${oldUrl} -> ${master.url}`);

  // Keep indexes stable by reparsing and marking the canonical block as used again.
  dataStores = getDataStores(src);
  const canonical = dataStores.find(x => norm(x.name) === norm(master.name) && cleanUrl(x.url) === cleanUrl(master.url));
  if (canonical) usedIndexes.add(canonical.index);
}

fs.writeFileSync(DATA_FILE, src, 'utf8');

// Strict post-sync audit: every master store that exists in DATA must now have exactly
// the canonical master name and URL. Report anything still inconsistent instead of silently passing.
const finalStores = getDataStores(src);
const auditErrors = [];
for (const master of STORES) {
  const matches = finalStores.filter(x => norm(x.name) === norm(master.name) || cleanUrl(x.url) === cleanUrl(master.url));
  const exact = matches.filter(x => x.name === master.name && cleanUrl(x.url) === cleanUrl(master.url));
  if (exact.length === 1) continue;
  if (matches.length) auditErrors.push(`${master.region} / ${master.name}（找到 ${matches.length} 筆，但沒有唯一正確的 store + storeUrl）`);
}

// Also detect duplicate master identities, because duplicate names/URLs would make parser/prune unsafe.
const masterNameSeen = new Map();
const masterUrlSeen = new Map();
for (const master of STORES) {
  const n = norm(master.name);
  const u = cleanUrl(master.url);
  if (masterNameSeen.has(n)) auditErrors.push(`主檔重複店名：${masterNameSeen.get(n)} <-> ${master.name}`);
  else masterNameSeen.set(n, master.name);
  if (masterUrlSeen.has(u)) auditErrors.push(`主檔重複 URL：${masterUrlSeen.get(u)} <-> ${master.name}`);
  else masterUrlSeen.set(u, master.name);
}

log(`\nSUMMARY: updated=${updated} unchanged=${unchanged} missing=${missing.length} ambiguous=${ambiguous.length} auditErrors=${auditErrors.length}`);
if (missing.length) {
  log('\n⚠️ DATA 尚未存在的主檔店家（交給 new-store sync；不亂配）：');
  for (const x of missing) log(`- ${x}`);
}
if (ambiguous.length) {
  log('\n❌ 無法唯一配對：');
  for (const x of ambiguous) log(`- ${x}`);
}
if (auditErrors.length) {
  log('\n❌ 同步後稽核錯誤：');
  for (const x of auditErrors) log(`- ${x}`);
}
if (!ambiguous.length && !auditErrors.length) log('\n✅ 已完成主檔一致性稽核。');
save();

if (ambiguous.length || auditErrors.length) process.exitCode = 1;
