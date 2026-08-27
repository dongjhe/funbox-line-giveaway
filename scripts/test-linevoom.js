const { chromium } = require('playwright');

const STORE = {
  name: 'Funbox-新竹遠雄店',
  url: 'https://linevoom.line.me/user/_dYdtj10kF6eWUWfcb0xr0dYExX6yYVDk1EksNTU',
};

const CUTOFF = new Date('2026-08-27T00:00:00+08:00');
const GIVEAWAY_KEYWORDS = ['陀螺', '抽選', '抽籤', '購買券', '購買資格'];

function parseRelativeTime(text, now = new Date()) {
  const value = (text || '').trim();
  const result = new Date(now);

  let match = value.match(/^(\d+)分鐘前$/);
  if (match) {
    result.setMinutes(result.getMinutes() - Number(match[1]));
    return result;
  }

  match = value.match(/^(\d+)小時前$/);
  if (match) {
    result.setHours(result.getHours() - Number(match[1]));
    return result;
  }

  match = value.match(/^昨天\s*(\d{1,2}):(\d{2})$/);
  if (match) {
    result.setDate(result.getDate() - 1);
    result.setHours(Number(match[1]), Number(match[2]), 0, 0);
    return result;
  }

  match = value.match(/^前天\s*(\d{1,2}):(\d{2})$/);
  if (match) {
    result.setDate(result.getDate() - 2);
    result.setHours(Number(match[1]), Number(match[2]), 0, 0);
    return result;
  }

  match = value.match(/^(\d{1,2})月\s*(\d{1,2})日\s*(\d{1,2}):(\d{2})$/);
  if (match) {
    return new Date(now.getFullYear(), Number(match[1]) - 1, Number(match[2]), Number(match[3]), Number(match[4]));
  }

  match = value.match(/^(\d{4})年\s*(\d{1,2})月\s*(\d{1,2})日\s*(\d{1,2}):(\d{2})$/);
  if (match) {
    return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]), Number(match[4]), Number(match[5]));
  }

  return null;
}

function parseItems(text) {
  const lines = text.split('\n').map((line) => line.trim()).filter(Boolean);
  const items = [];

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const inline = line.match(/^((?:BXG|BX|UX|CX)-?\d+[^\n]*?)\s*-?\s*(https:\/\/lin\.ee\/[A-Za-z0-9_-]+)/i);
    if (inline) {
      items.push({ name: inline[1].replace(/\s*-?\s*\$?\d+元?\s*$/, '').trim(), url: inline[2] });
      continue;
    }

    if (/^(?:BXG|BX|UX|CX)-?\d+/i.test(line)) {
      const next = lines[i + 1] || '';
      const link = next.match(/https:\/\/lin\.ee\/[A-Za-z0-9_-]+/i);
      if (link) {
        const name = line.replace(/\s*-?\s*\$?\d+元?\s*$/, '').trim();
        items.push({ name, url: link[0] });
        i += 1;
      }
    }
  }

  return items;
}

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({ locale: 'zh-TW', timezoneId: 'Asia/Taipei' });
  const page = await context.newPage();

  console.log(`\n🔎 Testing: ${STORE.name}`);
  console.log(`🌐 ${STORE.url}`);
  console.log(`⏱️ Cutoff: 2026/08/27 00:00 Asia/Taipei\n`);

  await page.goto(STORE.url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(5000);

  // Only a small scroll is needed. We want recent posts, not the whole history.
  await page.mouse.wheel(0, 500);
  await page.waitForTimeout(1200);

  const posts = await page.evaluate(() => {
    const candidates = [...document.querySelectorAll('article, [role="article"]')];

    // LINE VOOM currently does not always expose semantic article nodes.
    // Fall back to blocks containing the repeated post footer marker "Public".
    if (!candidates.length) {
      const all = [...document.querySelectorAll('div')];
      const blocks = all.filter((el) => {
        const text = el.innerText || '';
        return text.includes('Public') && /lin\.ee\//.test(text) && text.length < 10000;
      });
      return blocks.map((el) => el.innerText).filter(Boolean);
    }

    return candidates.map((el) => el.innerText || '').filter(Boolean);
  });

  // Deduplicate nested DOM blocks, preferring shorter/more specific post blocks.
  const uniquePosts = [...new Set(posts)].sort((a, b) => a.length - b.length);
  const now = new Date();
  let matched = null;

  for (const text of uniquePosts) {
    const hasKeyword = GIVEAWAY_KEYWORDS.some((keyword) => text.includes(keyword));
    const hasLineLink = /https:\/\/lin\.ee\//i.test(text);
    if (!hasKeyword || !hasLineLink) continue;

    const timeMatch = text.match(/(?:^|\n)(\d+分鐘前|\d+小時前|昨天\s*\d{1,2}:\d{2}|前天\s*\d{1,2}:\d{2}|\d{1,2}月\s*\d{1,2}日\s*\d{1,2}:\d{2}|\d{4}年\s*\d{1,2}月\s*\d{1,2}日\s*\d{1,2}:\d{2})(?:\n|$)/);
    if (!timeMatch) continue;

    const publishedAt = parseRelativeTime(timeMatch[1], now);
    if (!publishedAt || publishedAt < CUTOFF) continue;

    const items = parseItems(text);
    if (!items.length) continue;

    matched = { text, timeLabel: timeMatch[1], publishedAt, items };
    break;
  }

  console.log(`PAGE TITLE: ${await page.title()}`);

  if (!matched) {
    console.log('\n⏭️ SKIP - 找不到 2026/08/27 00:00 之後符合條件的陀螺抽籤貼文。');
  } else {
    console.log(`\n🎯 最新符合貼文：${matched.timeLabel}`);
    console.log(`🕐 解析時間：${matched.publishedAt.toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })}`);
    console.log(`📦 商品數：${matched.items.length}\n`);

    matched.items.forEach((item, index) => {
      console.log(`${index + 1}. ${item.name}`);
      console.log(`   → ${item.url}`);
    });

    console.log('\n✅ ACCEPT');
  }

  console.log('\n瀏覽器先保持開啟 15 秒，方便人工確認畫面。');
  await page.waitForTimeout(15000);
  await browser.close();
})().catch((error) => {
  console.error('\n❌ LINE VOOM test failed');
  console.error(error);
  process.exitCode = 1;
});
