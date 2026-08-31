const { chromium } = require('playwright');
const VOOM_STORES = require('./linevoom-stores');

const CUTOFF = new Date('2026-08-25T00:00:00+08:00');
const GIVEAWAY_KEYWORDS = ['陀螺', '抽選', '抽籤', '購買券', '購買資格', '抽獎連結', '抽選連結'];

function parseRelativeTime(text, now = new Date()) {
  const value = (text || '').trim();
  const result = new Date(now);
  let m;
  if ((m = value.match(/^(\d+)分鐘前$/))) { result.setMinutes(result.getMinutes() - Number(m[1])); return result; }
  if ((m = value.match(/^(\d+)小時前$/))) { result.setHours(result.getHours() - Number(m[1])); return result; }
  if ((m = value.match(/^昨天\s*(\d{1,2}):(\d{2})$/))) { result.setDate(result.getDate() - 1); result.setHours(+m[1], +m[2], 0, 0); return result; }
  if ((m = value.match(/^前天\s*(\d{1,2}):(\d{2})$/))) { result.setDate(result.getDate() - 2); result.setHours(+m[1], +m[2], 0, 0); return result; }
  if ((m = value.match(/^(\d{1,2})月\s*(\d{1,2})日\s*(\d{1,2}):(\d{2})$/))) return new Date(now.getFullYear(), +m[1] - 1, +m[2], +m[3], +m[4]);
  if ((m = value.match(/^(\d{4})年\s*(\d{1,2})月\s*(\d{1,2})日\s*(\d{1,2}):(\d{2})$/))) return new Date(+m[1], +m[2] - 1, +m[3], +m[4], +m[5]);
  return null;
}

async function markRecentPosts(page) {
  return page.evaluate(() => {
    const timePattern = /^(?:\d+分鐘前|\d+小時前|昨天\s*\d{1,2}:\d{2}|前天\s*\d{1,2}:\d{2}|\d{1,2}月\s*\d{1,2}日\s*\d{1,2}:\d{2}|\d{4}年\s*\d{1,2}月\s*\d{1,2}日\s*\d{1,2}:\d{2})$/;
    const result = [];
    for (const el of [...document.querySelectorAll('body *')]) {
      if (el.children.length > 3) continue;
      const label = (el.innerText || el.textContent || '').trim();
      if (!timePattern.test(label)) continue;
      let post = el;
      for (let i = 0; i < 8 && post.parentElement; i += 1) {
        post = post.parentElement;
        const t = (post.innerText || '').trim();
        if (t.includes('Public') && (t.includes('Like') || t.includes('Comment') || t.includes('Share'))) break;
      }
      if (!post || post === document.body) continue;
      if (!post.dataset.pendingDiagId) post.dataset.pendingDiagId = `pending-${result.length}-${Math.random().toString(36).slice(2)}`;
      result.push({ id: post.dataset.pendingDiagId, timeLabel: label });
    }
    return result;
  });
}

async function getRecent(page) {
  const raw = await markRecentPosts(page);
  const now = new Date();
  const seen = new Set();
  return raw.map((x) => ({ ...x, publishedAt: parseRelativeTime(x.timeLabel, now) }))
    .filter((x) => x.publishedAt && x.publishedAt >= CUTOFF && !seen.has(x.id) && seen.add(x.id))
    .sort((a, b) => b.publishedAt - a.publishedAt);
}

async function expandRecent(page) {
  const recent = await getRecent(page);
  for (const post of recent) {
    const root = page.locator(`[data-pending-diag-id="${post.id}"]`);
    for (let round = 0; round < 5; round += 1) {
      const controls = root.getByText('顯示更多', { exact: false });
      let clicked = false;
      for (let i = 0; i < await controls.count(); i += 1) {
        const control = controls.nth(i);
        try {
          if (!(await control.isVisible())) continue;
          await control.click({ timeout: 1500 });
          await page.waitForTimeout(250);
          clicked = true;
          break;
        } catch (_) {}
      }
      if (!clicked) break;
    }
  }
}

async function diagnoseStore(page, store) {
  console.log(`\n============================================================`);
  console.log(`🏪 ${store.region} / ${store.name}`);
  console.log(`🔗 ${store.url}`);
  await page.goto(store.url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(2500);
  await expandRecent(page);
  const recent = await getRecent(page);
  const rows = await page.evaluate(() => [...document.querySelectorAll('[data-pending-diag-id]')].map((post) => {
    const viewer = post.querySelector('.text_viewer.page_feed') || post;
    const text = (viewer.innerText || viewer.textContent || '').trim();
    const anchors = [...viewer.querySelectorAll('a')].map((a) => ({
      href: a.href || a.getAttribute('href') || '',
      text: (a.innerText || a.textContent || '').trim(),
      parentText: (a.parentElement?.innerText || a.parentElement?.textContent || '').trim().slice(0, 300),
    })).filter((a) => /lin\.ee|優惠券|抽獎|抽選/i.test(`${a.href} ${a.text} ${a.parentText}`));
    return { id: post.dataset.pendingDiagId, text, anchors };
  }));
  const byId = new Map(rows.map((x) => [x.id, x]));
  for (const post of recent) {
    const row = byId.get(post.id);
    if (!row || !GIVEAWAY_KEYWORDS.some((k) => row.text.includes(k))) continue;
    console.log(`\n🕐 ${post.timeLabel}`);
    console.log('----- 展開後文章文字 -----');
    console.log(row.text.slice(0, 5000));
    console.log('----- 可疑連結 / anchor -----');
    if (!row.anchors.length) console.log('(DOM 中沒有找到 lin.ee / 優惠券 / 抽選 anchor)');
    for (const [i, a] of row.anchors.entries()) {
      console.log(`[${i + 1}] href=${a.href || '(empty)'}`);
      console.log(`    text=${a.text || '(empty)'}`);
      console.log(`    parent=${a.parentText || '(empty)'}`);
    }
    break;
  }
}

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({ locale: 'zh-TW', timezoneId: 'Asia/Taipei' });
  const page = await context.newPage();
  console.log('🔬 LINE VOOM PENDING 診斷模式');
  console.log('🛡️ 只讀取頁面，不會修改 giveaway-data.ts，也不會點 lin.ee 商品連結。');
  for (const store of VOOM_STORES) {
    try { await diagnoseStore(page, store); }
    catch (error) { console.log(`❌ ${store.name}: ${error.message}`); }
  }
  await browser.close();
})().catch((error) => { console.error(error); process.exitCode = 1; });
