const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const VOOM_STORES = require('./linevoom-stores');

const CUTOFF = new Date('2026-08-25T00:00:00+08:00');
const GIVEAWAY_KEYWORDS = ['陀螺', '抽選', '抽籤', '購買券', '購買資格', '抽獎連結', '抽選連結'];
const DATA_FILE = path.resolve(__dirname, '../src/app/giveaway-data.ts');
const SYNC_MODE = process.argv.includes('--sync');

function normalizeName(value = '') {
  return value.toLowerCase().replace(/funbox|toys|sanrio/g, '').replace(/[\s&\-－_()（）]/g, '');
}

function parseGiveawayData(source) {
  const stores = [];
  const regionRegex = /^\s{2}([^\s][^:]*): \[$/gm;
  const regions = [...source.matchAll(regionRegex)];
  for (let r = 0; r < regions.length; r += 1) {
    const region = regions[r][1].trim().replace(/^\],\s*/, '');
    const start = regions[r].index + regions[r][0].length;
    const end = r + 1 < regions.length ? regions[r + 1].index : source.lastIndexOf('};');
    const block = source.slice(start, end);
    const storeRegex = /\{\s*store:\s*'([^']+)'[\s\S]*?storeUrl:\s*'([^']*)'[\s\S]*?items:\s*\[([\s\S]*?)\]\s*,?\s*\}/g;
    for (const match of block.matchAll(storeRegex)) {
      const [, name, url, itemsText] = match;
      const items = [...itemsText.matchAll(/\{\s*name:\s*'([^']+)',\s*url:\s*'(https:\/\/lin\.ee\/[^']+)'\s*\}/g)]
        .map((m) => ({ name: m[1], url: m[2] }));
      stores.push({ region, name, url, items });
    }
  }
  return stores;
}

function findDataStore(master, dataStores) {
  const masterUrl = master.url.replace(/[?#].*$/, '');
  let found = dataStores.find((s) => (s.url || '').replace(/[?#].*$/, '') === masterUrl);
  if (found) return found;
  const key = normalizeName(master.name);
  return dataStores.find((s) => normalizeName(s.name) === key) || null;
}

function productCode(name) {
  return (name.match(/\b(BXG|BX|UX|CX)-?\d+\b/i)?.[0] || '').toUpperCase().replace(/^(BXG|BX|UX|CX)(\d+)/, '$1-$2');
}

function cleanName(name) {
  return name.replace(/^\d+[.、]\s*/, '').replace(/\s*-?\s*\$?\d+(?:,\d{3})*元?\s*$/i, '').replace(/\s+-\s*$/, '').trim();
}

function escapeTs(value) { return String(value).replace(/\\/g, '\\\\').replace(/'/g, "\\'"); }
function formatItems(items, indent = '        ') { return items.map((item) => `${indent}{ name: '${escapeTs(item.name)}', url: '${escapeTs(item.url)}' },`).join('\n'); }

function syncExistingStore(source, dataStore, latestItems) {
  const escapedName = dataStore.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const storeRegex = new RegExp(`(\\{\\s*store:\\s*'${escapedName}'[\\s\\S]*?items:\\s*\\[)([\\s\\S]*?)(\\]\\s*,?\\s*\\})`);
  if (!storeRegex.test(source)) throw new Error(`找不到 DATA 店家區塊：${dataStore.name}`);
  return source.replace(storeRegex, (_, before, __, after) => `${before}\n${formatItems(latestItems)}\n      ${after}`);
}

function syncNewStore(source, master, latestItems) {
  const regionHeader = `  ${master.region}: [`;
  const start = source.indexOf(regionHeader);
  if (start < 0) throw new Error(`giveaway-data.ts 尚未建立地區：${master.region}`);
  const afterHeader = start + regionHeader.length;
  const rest = source.slice(afterHeader);
  const nextRegionMatch = rest.match(/^  [^\s][^:\n]*: \[$/m);
  const regionEnd = nextRegionMatch ? afterHeader + nextRegionMatch.index : source.lastIndexOf('\n};');
  if (regionEnd < afterHeader) throw new Error(`找不到地區範圍：${master.region}`);
  const regionBlock = source.slice(start, regionEnd);
  const closeOffset = regionBlock.lastIndexOf('\n  ],');
  if (closeOffset < 0) throw new Error(`找不到地區結尾：${master.region}`);
  const close = start + closeOffset + 1;
  const block = `    {\n      store: '${escapeTs(master.name)}',\n      storeUrl: '${escapeTs(master.url)}',\n      items: [\n${formatItems(latestItems)}\n      ],\n    },\n`;
  return source.slice(0, close) + block + source.slice(close);
}

function ensureRegion(source, region) {
  if (source.includes(`  ${region}: [`)) return source;
  const end = source.lastIndexOf('\n};');
  if (end < 0) throw new Error('找不到 GIVEAWAYS 結尾');
  return source.slice(0, end) + `\n  ${region}: [\n  ],` + source.slice(end);
}

function parseItems(text) {
  const lines = text.split('\n').map((line) => line.trim()).filter(Boolean);
  const items = [];
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const inline = line.match(/^(\d+[.、]\s*)?((?:BXG|BX|UX|CX)-?\d+[^\n]*?)\s*-?\s*(https:\/\/lin\.ee\/[A-Za-z0-9_-]+)/i);
    if (inline) { items.push({ name: cleanName(inline[2]), url: inline[3] }); continue; }
    if (/^(\d+[.、]\s*)?(?:BXG|BX|UX|CX)-?\d+/i.test(line)) {
      for (let j = i + 1; j <= Math.min(i + 3, lines.length - 1); j += 1) {
        const link = lines[j].match(/https:\/\/lin\.ee\/[A-Za-z0-9_-]+/i);
        if (link) { items.push({ name: cleanName(line), url: link[0] }); i = j; break; }
      }
    }
  }
  const deduped = new Map();
  for (const item of items) deduped.set(`${productCode(item.name) || item.name}|${item.url}`, item);
  return [...deduped.values()];
}

function parseRelativeTime(text, now = new Date()) {
  const value = (text || '').trim(); const result = new Date(now); let m;
  if ((m = value.match(/^(\d+)分鐘前$/))) { result.setMinutes(result.getMinutes() - Number(m[1])); return result; }
  if ((m = value.match(/^(\d+)小時前$/))) { result.setHours(result.getHours() - Number(m[1])); return result; }
  if ((m = value.match(/^昨天\s*(\d{1,2}):(\d{2})$/))) { result.setDate(result.getDate() - 1); result.setHours(+m[1], +m[2], 0, 0); return result; }
  if ((m = value.match(/^前天\s*(\d{1,2}):(\d{2})$/))) { result.setDate(result.getDate() - 2); result.setHours(+m[1], +m[2], 0, 0); return result; }
  if ((m = value.match(/^(\d{1,2})月\s*(\d{1,2})日\s*(\d{1,2}):(\d{2})$/))) return new Date(now.getFullYear(), +m[1] - 1, +m[2], +m[3], +m[4]);
  if ((m = value.match(/^(\d{4})年\s*(\d{1,2})月\s*(\d{1,2})日\s*(\d{1,2}):(\d{2})$/))) return new Date(+m[1], +m[2] - 1, +m[3], +m[4], +m[5]);
  return null;
}

async function expandVisiblePosts(page) {
  let expanded = 0;
  for (let round = 0; round < 30; round += 1) {
    const controls = page.getByText('顯示更多', { exact: false });
    const count = await controls.count();
    let clicked = false;
    for (let i = 0; i < count; i += 1) {
      const control = controls.nth(i);
      try {
        if (!(await control.isVisible())) continue;
        await control.scrollIntoViewIfNeeded().catch(() => {});
        await control.click({ timeout: 2000 }).catch(async () => {
          await control.evaluate((el) => (el.closest('button, a, [role="button"]') || el).click());
        });
        await page.waitForTimeout(350);
        expanded += 1; clicked = true; break;
      } catch (_) {}
    }
    if (!clicked) break;
  }
  if (expanded) console.log(`🔓 已展開 ${expanded} 個「顯示更多」`);
}

async function expandCouponLinks(page) {
  let expanded = 0;
  const clickedTexts = new Set();
  for (let round = 0; round < 30; round += 1) {
    const controls = page.getByText(/優惠券連結|抽獎連結|抽選連結/, { exact: false });
    const count = await controls.count();
    let clicked = false;
    for (let i = 0; i < count; i += 1) {
      const control = controls.nth(i);
      try {
        if (!(await control.isVisible())) continue;
        const info = await control.evaluate((el) => {
          const target = el.closest('button, [role="button"], details > summary, a') || el;
          const anchor = target.closest('a');
          return { text: (target.textContent || '').trim(), href: anchor ? (anchor.getAttribute('href') || '') : '', tag: target.tagName };
        });
        if (/^https?:\/\/lin\.ee\//i.test(info.href)) continue;
        const key = `${info.text}|${i}`;
        if (clickedTexts.has(key)) continue;
        await control.scrollIntoViewIfNeeded().catch(() => {});
        await control.click({ timeout: 2000 }).catch(async () => {
          await control.evaluate((el) => { const target = el.closest('button, [role="button"], details > summary') || el; target.click(); });
        });
        clickedTexts.add(key);
        await page.waitForTimeout(500);
        expanded += 1; clicked = true; break;
      } catch (_) {}
    }
    if (!clicked) break;
  }
  if (expanded) console.log(`🎟️ 已展開 ${expanded} 個「優惠券/抽獎/抽選連結」區塊`);
}

async function parseItemsFromPostDom(page) {
  const candidates = await page.evaluate(() => {
    const viewers = [...document.querySelectorAll('.text_viewer.page_feed')];
    return viewers.map((viewer) => {
      const text = (viewer.innerText || viewer.textContent || '').trim();
      const links = [...viewer.querySelectorAll('a[href^="https://lin.ee/"]')];
      const items = links.map((link) => {
        let name = '';
        let node = link.nextSibling;
        while (node) {
          if (node.nodeType === Node.TEXT_NODE) name += node.textContent || '';
          else if (node.nodeName === 'BR') break;
          else name += node.textContent || '';
          node = node.nextSibling;
        }
        return { name: name.replace(/\s+/g, ' ').trim(), url: link.href };
      }).filter((item) => /\b(?:BXG|BX|UX|CX)-?\d+\b/i.test(item.name));
      return { text, items };
    }).filter((x) => x.items.length > 0 && /陀螺|抽選|抽籤|購買券|購買資格|抽選連結|抽獎連結/.test(x.text));
  });
  if (!candidates.length) return [];
  candidates.sort((a, b) => b.items.length - a.items.length);
  const deduped = new Map();
  for (const item of candidates[0].items) {
    const cleaned = { name: cleanName(item.name), url: item.url };
    deduped.set(`${productCode(cleaned.name) || cleaned.name}|${cleaned.url}`, cleaned);
  }
  return [...deduped.values()];
}

async function getLatestGiveaway(page) {
  const posts = await page.evaluate(() => {
    const lines = (document.body.innerText || '').replace(/\r/g, '').split('\n').map((line) => line.trim()).filter(Boolean);
    const timePattern = /^(?:\d+分鐘前|\d+小時前|昨天\s*\d{1,2}:\d{2}|前天\s*\d{1,2}:\d{2}|\d{1,2}月\s*\d{1,2}日\s*\d{1,2}:\d{2}|\d{4}年\s*\d{1,2}月\s*\d{1,2}日\s*\d{1,2}:\d{2})$/;
    const result = []; let start = 0;
    for (let i = 0; i < lines.length - 1; i += 1) {
      if (lines[i] !== 'Public' || !timePattern.test(lines[i + 1])) continue;
      const segment = lines.slice(start, i + 2);
      result.push({ text: segment.join('\n'), timeLabel: lines[i + 1] });
      start = i + 2;
    }
    return result;
  });
  const now = new Date(); const parsedPosts = [];
  for (const post of posts) {
    const publishedAt = parseRelativeTime(post.timeLabel, now);
    if (!publishedAt || publishedAt < CUTOFF) continue;
    parsedPosts.push({ ...post, publishedAt, textLength: post.text.length });
  }
  parsedPosts.sort((a, b) => b.publishedAt - a.publishedAt || a.textLength - b.textLength);
  if (!parsedPosts.length) return null;
  const latestRelevant = parsedPosts.find(({ text }) => GIVEAWAY_KEYWORDS.some((keyword) => text.includes(keyword)));
  if (!latestRelevant) return null;
  let items = parseItems(latestRelevant.text);
  if (!items.length) {
    items = await parseItemsFromPostDom(page);
    if (items.length) console.log(`🧩 DOM fallback 解析到 ${items.length} 個商品連結`);
  }
  if (!items.length) return { ...latestRelevant, items: [], pending: true, hasLineLinks: /https:\/\/lin\.ee\//i.test(latestRelevant.text) };
  return { ...latestRelevant, items, pending: false };
}

function compareItems(dataItems, voomItems) {
  const dataByCode = new Map(dataItems.map((x) => [productCode(x.name) || x.name, x]));
  const voomByCode = new Map(voomItems.map((x) => [productCode(x.name) || x.name, x]));
  const differences = [];
  for (const [code, voom] of voomByCode) {
    const data = dataByCode.get(code);
    if (!data) differences.push({ type: 'MISSING_IN_DATA', code, voom });
    else if (data.url !== voom.url) differences.push({ type: 'URL_CHANGED', code, data, voom });
  }
  for (const [code, data] of dataByCode) if (!voomByCode.has(code)) differences.push({ type: 'NOT_IN_LATEST_POST', code, data });
  return differences;
}

(async () => {
  let dataSource = fs.readFileSync(DATA_FILE, 'utf8');
  let dataStores = parseGiveawayData(dataSource);
  let changed = 0;
  console.log(`\n🧪 LINE VOOM ${SYNC_MODE ? '同步' : '完整店家母清單稽核'}`);
  console.log('⏱️ 只檢查 2026/08/25 00:00 Asia/Taipei 之後文章');
  console.log(`🏪 LINE VOOM 母清單：${VOOM_STORES.length} 間\n`);
  if (SYNC_MODE) console.log('✍️ SYNC MODE：只更新確認店家一致且最新相關貼文含商品連結的資料；PENDING / SKIP / STORE MISMATCH / ERROR 不修改。\n');

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({ locale: 'zh-TW', timezoneId: 'Asia/Taipei' });
  const page = await context.newPage();
  const summary = { match: 0, different: 0, skipped: 0, pending: 0, mismatch: 0, newStore: 0, error: 0, synced: 0 };

  for (let index = 0; index < VOOM_STORES.length; index += 1) {
    const master = VOOM_STORES[index]; let dataStore = findDataStore(master, dataStores);
    console.log(`\n[${index + 1}/${VOOM_STORES.length}] 🔎 ${master.region} / ${master.name}`);
    try {
      await page.goto(master.url, { waitUntil: 'domcontentloaded', timeout: 60000 });
      await page.waitForTimeout(2500);
      await expandVisiblePosts(page);
      await expandCouponLinks(page);
      await expandVisiblePosts(page);
      const title = (await page.title()).replace(/\s*\|\s*LINE VOOM.*$/i, '').trim();
      console.log(`📄 ${title}`);
      if (normalizeName(title) && normalizeName(master.name) && !normalizeName(title).includes(normalizeName(master.name)) && !normalizeName(master.name).includes(normalizeName(title))) {
        console.log(`🚨 STORE MISMATCH - 母清單=${master.name} / PAGE=${title}`); summary.mismatch += 1; continue;
      }
      const latest = await getLatestGiveaway(page);
      if (!latest) { console.log('⏭️ SKIP - 8/25 後找不到陀螺抽籤相關文章'); summary.skipped += 1; continue; }
      console.log(`🕐 ${latest.timeLabel}`);
      if (latest.pending) { console.log('🕒 PENDING - 最新陀螺抽籤相關貼文尚無可解析的 lin.ee 商品連結，不使用較舊貼文商品'); summary.pending += 1; continue; }

      if (!dataStore) {
        console.log(`🆕 NEW STORE - giveaway-data.ts 尚未建立，VOOM 商品 ${latest.items.length} 個`);
        if (SYNC_MODE) {
          dataSource = ensureRegion(dataSource, master.region); dataSource = syncNewStore(dataSource, master, latest.items);
          dataStores = parseGiveawayData(dataSource); changed += 1; summary.synced += 1; console.log('💾 SYNCED - 已新增店家與商品');
        } else for (const item of latest.items) console.log(`  ➕ ${productCode(item.name)} ${item.name}\n     ${item.url}`);
        summary.newStore += 1; continue;
      }

      console.log(`📦 VOOM ${latest.items.length} / DATA ${dataStore.items.length}`);
      const differences = compareItems(dataStore.items, latest.items);
      if (!differences.length && latest.items.length === dataStore.items.length) { console.log('✅ MATCH'); summary.match += 1; continue; }
      console.log('⚠️ DIFFERENT');
      if (SYNC_MODE) {
        dataSource = syncExistingStore(dataSource, dataStore, latest.items); dataStores = parseGiveawayData(dataSource);
        changed += 1; summary.synced += 1; console.log(`💾 SYNCED - 已以最新 VOOM 貼文完整取代 items (${latest.items.length})`);
      } else {
        for (const diff of differences) {
          if (diff.type === 'URL_CHANGED') console.log(`  🔄 ${diff.code} ${diff.voom.name}\n     DATA: ${diff.data.url}\n     VOOM: ${diff.voom.url}`);
          else if (diff.type === 'MISSING_IN_DATA') console.log(`  ➕ ${diff.code} ${diff.voom.name}\n     VOOM: ${diff.voom.url}`);
          else console.log(`  ➖ ${diff.code} ${diff.data.name}\n     DATA only: ${diff.data.url}`);
        }
      }
      summary.different += 1;
    } catch (error) { console.log(`❌ ERROR: ${error.message}`); summary.error += 1; }
  }

  if (SYNC_MODE && changed > 0) {
    fs.writeFileSync(DATA_FILE, dataSource, 'utf8');
    console.log(`\n💾 已寫入 ${DATA_FILE}`);
    console.log(`🔄 共同步 ${changed} 間店家。請先 git diff，再重新跑 npm run test:linevoom 驗證。`);
  }
  console.log('\n================ AUDIT SUMMARY ================');
  console.log(`✅ MATCH:          ${summary.match}`);
  console.log(`⚠️ DIFFERENT:      ${summary.different}`);
  console.log(`🆕 NEW STORE:      ${summary.newStore}`);
  console.log(`🕒 PENDING:        ${summary.pending}`);
  console.log(`🚨 STORE MISMATCH: ${summary.mismatch}`);
  console.log(`⏭️ SKIP:           ${summary.skipped}`);
  console.log(`❌ ERROR:          ${summary.error}`);
  if (SYNC_MODE) console.log(`💾 SYNCED:         ${summary.synced}`);
  console.log('================================================');
  if (!SYNC_MODE) console.log('ℹ️ Audit 模式不會修改 giveaway-data.ts。\n');
  await browser.close();
})().catch((error) => {
  console.error('\n❌ LINE VOOM audit/sync failed'); console.error(error); process.exitCode = 1;
});