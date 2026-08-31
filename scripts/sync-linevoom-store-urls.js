const fs = require('fs');
const path = require('path');
const STORES = require('./linevoom-stores');

const DATA_FILE = path.resolve(__dirname, '../src/app/giveaway-data.ts');

function norm(s = '') {
  return s
    .toLowerCase()
    .replace(/funbox|toys|sanrio/g, '')
    .replace(/[\s&\-－_()（）]/g, '');
}

function escRe(s = '') {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getDataStores(src) {
  return [...src.matchAll(/store:\s*'([^']+)'/g)].map(m => m[1]);
}

function setStoreUrl(src, dataName, url) {
  const name = escRe(dataName);
  const re = new RegExp(`(store:\\s*'${name}'\\s*,)([\\s\\S]*?)(\\n\\s*items:\\s*\\[)`);
  return src.replace(re, (all, storeLine, header, itemsLine) => {
    const indent = storeLine.match(/^(\s*)/)?.[1] || '      ';
    if (/\n\s*storeUrl:\s*'[^']*'\s*,?/.test(header)) {
      header = header.replace(/(\n\s*storeUrl:\s*)'[^']*'(\s*,?)/, `$1'${url}'$2`);
    } else {
      header = `\n${indent}storeUrl: '${url}',${header}`;
    }
    return `${storeLine}${header}${itemsLine}`;
  });
}

let src = fs.readFileSync(DATA_FILE, 'utf8');
const dataStores = getDataStores(src);
let updated = 0;
let unchanged = 0;
const missing = [];

for (const master of STORES) {
  const dataName = dataStores.find(name => norm(name) === norm(master.name));
  if (!dataName) {
    missing.push(`${master.region} / ${master.name}`);
    continue;
  }

  const before = src;
  src = setStoreUrl(src, dataName, master.url);
  if (src === before) {
    missing.push(`${master.region} / ${master.name}（store block 未匹配）`);
    continue;
  }

  const name = escRe(dataName);
  const block = src.match(new RegExp(`store:\\s*'${name}'[\\s\\S]*?items:\\s*\\[`))?.[0] || '';
  if (block.includes(`storeUrl: '${master.url}'`)) {
    const oldBlock = before.match(new RegExp(`store:\\s*'${name}'[\\s\\S]*?items:\\s*\\[`))?.[0] || '';
    if (oldBlock.includes(`storeUrl: '${master.url}'`)) unchanged++;
    else updated++;
  }
}

fs.writeFileSync(DATA_FILE, src, 'utf8');
console.log(`🔗 storeUrl 同步完成：更新 ${updated}、原本正確 ${unchanged}、未匹配 ${missing.length}`);
if (missing.length) {
  console.log('⚠️ 未匹配店家：');
  for (const x of missing) console.log(`- ${x}`);
}
