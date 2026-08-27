const { chromium } = require('playwright');

const STORE = {
  name: 'Funbox樹林秀泰店',
  url: 'https://linevoom.line.me/user/_dSj7fhnsKdDEm1q2ehrYEJTOyrm4OuI2NFsN3I0',
};

const CUTOFF = new Date('2026-08-27T00:00:00+08:00');

(async () => {
  const browser = await chromium.launch({
    headless: false,
  });

  const context = await browser.newContext({
    locale: 'zh-TW',
    timezoneId: 'Asia/Taipei',
  });

  const page = await context.newPage();

  console.log(`\n🔎 Testing: ${STORE.name}`);
  console.log(`🌐 ${STORE.url}`);
  console.log(`⏱️ Cutoff: ${CUTOFF.toISOString()}\n`);

  page.on('console', (msg) => {
    if (msg.type() === 'error') console.log('[browser error]', msg.text());
  });

  await page.goto(STORE.url, {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  });

  // Give LINE VOOM time to render its client-side feed.
  await page.waitForTimeout(5000);

  // Scroll a few times so lazy-loaded posts can appear.
  for (let i = 0; i < 5; i += 1) {
    await page.mouse.wheel(0, 1200);
    await page.waitForTimeout(1200);
  }

  const result = await page.evaluate(() => {
    const bodyText = document.body?.innerText || '';

    const links = [...document.querySelectorAll('a[href]')]
      .map((a) => ({
        text: (a.innerText || '').trim(),
        href: a.href,
      }))
      .filter((x) => x.href);

    const lineLinks = links.filter(
      (x) => x.href.includes('lin.ee/') || x.text.includes('lin.ee/')
    );

    return {
      title: document.title,
      url: location.href,
      bodyText,
      links,
      lineLinks,
    };
  });

  console.log('PAGE TITLE:', result.title);
  console.log('FINAL URL:', result.url);
  console.log('\n========== PAGE TEXT ==========\n');
  console.log(result.bodyText.slice(0, 30000));

  console.log('\n========== LIN.EE LINKS ==========\n');
  if (!result.lineLinks.length) {
    console.log('No lin.ee links found in rendered DOM.');
  } else {
    result.lineLinks.forEach((link, index) => {
      console.log(`${index + 1}. ${link.text || '(no text)'}`);
      console.log(`   ${link.href}`);
    });
  }

  console.log(`\nTotal anchors: ${result.links.length}`);
  console.log(`Total lin.ee links: ${result.lineLinks.length}`);
  console.log('\n瀏覽器先保持開啟 30 秒，方便人工確認畫面。');

  await page.waitForTimeout(30000);
  await browser.close();
})().catch((error) => {
  console.error('\n❌ LINE VOOM test failed');
  console.error(error);
  process.exitCode = 1;
});
