const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const STORES = require('./linevoom-stores');

const DATA_FILE = path.resolve(__dirname, '../src/app/giveaway-data.ts');
const OUTPUT_FILE = path.resolve(__dirname, '../linevoom-start-time-result.txt');
const CUTOFF = new Date('2026-08-25T00:00:00+08:00');
const SYNC = process.argv.includes('--sync');
const KEYWORDS = ['陀螺', '抽選', '抽籤', '購買券', '購買資格', '抽獎連結', '抽選連結'];
const LALAPORT_ID = '_dWbmVBOBVpcGPA3UWP953LsGWVx32VkrDcGrqRQ';
const output = [];

function log(...args) {
  const s = args.join(' ');
  console.log(s);
  output.push(s);
}
function save() { fs.writeFileSync(OUTPUT_FILE, output.join('\n') + '\n', 'utf8'); }
function norm(s = '') { return s.toLowerCase().replace(/funbox|toys|sanrio/g, '').replace(/[\s&\-－_()（）]/g, ''); }
function escRe(s = '') { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
function esc(s = '') { return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'"); }

function parsePostTime(label, now = new Date()) {
  const d = new Date(now); let m;
  if ((m = label.match(/^(\d+)分鐘前$/))) { d.setMinutes(d.getMinutes() - +m[1]); return d; }
  if ((m = label.match(/^(\d+)小時前$/))) { d.setHours(d.getHours() - +m[1]); return d; }
  if ((m = label.match(/^昨天\s*(\d{1,2}):(\d{2})$/))) { d.setDate(d.getDate() - 1); d.setHours(+m[1], +m[2], 0, 0); return d; }
  if ((m = label.match(/^前天\s*(\d{1,2}):(\d{2})$/))) { d.setDate(d.getDate() - 2); d.setHours(+m[1], +m[2], 0, 0); return d; }
  if ((m = label.match(/^(\d{1,2})月\s*(\d{1,2})日\s*(\d{1,2}):(\d{2})$/))) return new Date(now.getFullYear(), +m[1] - 1, +m[2], +m[3], +m[4]);
  if ((m = label.match(/^(\d{4})年\s*(\d{1,2})月\s*(\d{1,2})日\s*(\d{1,2}):(\d{2})$/))) return new Date(+m[1], +m[2] - 1, +m[3], +m[4], +m[5]);
  return null;
}

function extractStartTime(text = '') {
  const lines = text.split('\n').map(x => x.trim()).filter(Boolean);
  const labelRe = /(抽選\s*\/\s*購買時間|抽選時間|抽籤時間|抽獎時間|購買時間|購買資格券?有效期間|購買資格[^\n]{0,8}期間|優惠券有效期間|有效期間)/i;
  const dateRe = /(?:20\d{2}\s*[\/.-]\s*)?\d{1,2}\s*[\/.-]\s*\d{1,2}(?:\s*[（(][一二三四五六日天][）)])?/;
  const clockRe = /\d{1,2}\s*:\s*\d{2}/;
  const rangeRe = /(?:~|～|〜|至|到|起[\s\S]{0,80}止)/;
  for (let i = 0; i < lines.length; i++) {
    if (!labelRe.test(lines[i])) continue;
    const candidates = [lines[i], [lines[i], lines[i + 1] || ''].join(' '), [lines[i], lines[i + 1] || '', lines[i + 2] || ''].join(' ')];
    for (const raw of candidates) {
      const s = raw.replace(/\s+/g, ' ').trim();
      if (dateRe.test(s) && clockRe.test(s) && rangeRe.test(s)) return s.slice(0, 240);
    }
  }
  return null;
}

function parseData(src) {
  const out = [];
  const re = /\{\s*store:\s*'([^']+)'([\s\S]*?)items:\s*\[([\s\S]*?)\]\s*,?\s*\}/g;
  for (const m of src.matchAll(re)) {
    const header = m[2];
    const url = header.match(/storeUrl:\s*'([^']*)'/)?.[1] || '';
    const startTime = header.match(/startTime:\s*'([^']*)'/)?.[1] || '';
    const itemCount = [...m[3].matchAll(/\{\s*name:\s*'[^']+'\s*,\s*url:\s*'https:\/\/lin\.ee\/[^']+'\s*\}/g)].length;
    out.push({ name: m[1], url, startTime, itemCount });
  }
  return out;
}
function findStore(master, data) {
  return data.find(x => x.url && x.url.replace(/[?#].*$/, '') === master.url.replace(/[?#].*$/, '')) || data.find(x => norm(x.name) === norm(master.name));
}
function setStartTime(src, storeName, value) {
  const name = escRe(storeName);
  const re = new RegExp(`(store:\\s*'${name}'\\s*,)([\\s\\S]*?)(\\n\\s*items:\\s*\\[)`);
  return src.replace(re, (all, storeLine, header, itemsLine) => {
    if (/\n\s*startTime:\s*'[^']*'\s*,?/.test(header)) {
      header = header.replace(/(\n\s*startTime:\s*)'[^']*'(\s*,?)/, `$1'${esc(value)}'$2`);
    } else {
      const indent = all.match(/^(\s*)store:/)?.[1] || '      ';
      header += `\n${indent}startTime: '${esc(value)}',`;
    }
    return `${storeLine}${header}${itemsLine}`;
  });
}

async function recentPosts(page) {
  const rows = await page.evaluate(() => {
    const timeRe = /^(?:\d+分鐘前|\d+小時前|昨天\s*\d{1,2}:\d{2}|前天\s*\d{1,2}:\d{2}|\d{1,2}月\s*\d{1,2}日\s*\d{1,2}:\d{2}|\d{4}年\s*\d{1,2}月\s*\d{1,2}日\s*\d{1,2}:\d{2})$/;
    const out = [];
    for (const el of document.querySelectorAll('body *')) {
      if (el.children.length > 3) continue;
      const label = (el.innerText || el.textContent || '').trim();
      if (!timeRe.test(label)) continue;
      let p = el;
      for (let i = 0; i < 8 && p.parentElement; i++) {
        p = p.parentElement;
        const s = p.innerText || '';
        if (s.includes('Public') && (s.includes('Like') || s.includes('Comment') || s.includes('Share'))) break;
      }
      if (!p || p === document.body) continue;
      const text = ((p.querySelector('.text_viewer.page_feed') || p).innerText || '').trim();
      out.push({ label, text });
    }
    return out;
  });
  const now = new Date();
  return rows.map(x => ({ ...x, date: parsePostTime(x.label, now) })).filter(x => x.date && x.date >= CUTOFF).sort((a, b) => b.date - a.date);
}

(async () => {
  let src = fs.readFileSync(DATA_FILE, 'utf8');
  let data = parseData(src);
  let updated = 0, detected = 0, skippedHasData = 0;
  log(`⏰ LINE VOOM startTime ${SYNC ? 'SYNC' : 'AUDIT'} — ${STORES.length} 間`);
  log(`📄 完整結果：${OUTPUT_FILE}`);
  const browser = await chromium.launch({ headless: false });
  const ctx = await browser.newContext({ locale: 'zh-TW', timezoneId: 'Asia/Taipei' });
  const page = await ctx.newPage();
  try {
    for (let i = 0; i < STORES.length; i++) {
      const s = STORES[i];
      log(`\n[${i + 1}/${STORES.length}] ${s.region} / ${s.name}`);
      const ds = findStore(s, data);
      if (!ds) { log('⏭️ DATA 無對應店家，不自動新增'); continue; }
      if (ds.itemCount > 0) { skippedHasData++; log(`🛡️ DATA ${ds.itemCount}：只稽核，不更新 startTime`); }
      if (s.url.includes(LALAPORT_ID)) { log('⏭️ LaLaport 多文章模式：不自動寫入單一 startTime'); continue; }
      try {
        await page.goto(s.url, { waitUntil: 'domcontentloaded', timeout: 60000 });
        await page.waitForTimeout(2200);
        const more = page.getByText('顯示更多', { exact: false });
        for (let n = 0; n < Math.min(await more.count(), 10); n++) { try { if (await more.nth(n).isVisible()) await more.nth(n).click({ timeout: 1000 }); } catch {} }
        const posts = await recentPosts(page);
        let found = null;
        for (const p of posts) {
          if (!KEYWORDS.some(k => p.text.includes(k))) continue;
          const t = extractStartTime(p.text);
          if (t) { found = t; break; }
        }
        if (!found) { log('— 未偵測到明確抽獎/購買時間'); continue; }
        detected++;
        log(`⏰ ${found}`);
        if (!SYNC) continue;
        if (ds.itemCount > 0) { log('🛡️ DATA 已有商品：依安全規則不寫入'); continue; }
        if (ds.startTime === found) { log('✅ startTime 已相同'); continue; }
        src = setStartTime(src, ds.name, found);
        updated++;
        log(`💾 startTime 已更新${ds.startTime ? '（取代舊值）' : ''}`);
      } catch (e) { log(`❌ ${e.message}`); }
    }
  } finally {
    await browser.close();
    if (SYNC && updated) fs.writeFileSync(DATA_FILE, src, 'utf8');
    log(`\nSUMMARY: detected=${detected} updated=${updated} data>0-audit-only=${skippedHasData}`);
    save();
  }
})().catch(e => { log(`FATAL: ${e.stack || e}`); save(); process.exitCode = 1; });
