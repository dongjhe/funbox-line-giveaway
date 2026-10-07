#!/usr/bin/env node
import { readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const dataFile = resolve(root, 'src/app/giveaway-data.ts');
const sourceUrl = process.env.FUNBOX_ONLINE_SOURCE_URL ?? 'https://uxux11.github.io/funbox-line/';
const dryRun = process.argv.includes('--dry-run');

const regionOrder = [
  '台北市',
  '新北市',
  '宜蘭縣',
  '桃園市',
  '新竹市',
  '新竹縣',
  '苗栗縣',
  '台中市',
  '彰化縣',
  '雲林縣',
  '嘉義市',
  '台南市',
  '高雄市',
  '屏東縣',
  '花蓮縣',
  '台東縣',
  '澎湖縣',
];

function decodeHtml(value) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

function stripTags(value) {
  return decodeHtml(value.replace(/<[^>]*>/g, '')).replace(/\s+/g, ' ').trim();
}

function quoteTs(value) {
  return `'${String(value).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
}

function normalizeStoreName(value) {
  let text = value.toLowerCase().replace(/[\s\-_/()（）．.,，。:：｜|&＆]+/g, '');
  for (const token of ['funbox', 'toys', 'toy', '店', '館', '百貨', '購物中心', '廣場']) {
    text = text.replaceAll(token, '');
  }

  const aliases = [
    ['新光三越南西', '三越南西'],
    ['南西', '三越南西'],
    ['來玩聚楠梓', '來玩聚楠梓'],
    ['楠梓', '來玩聚楠梓'],
    ['台中lalaport', '台中lalaport'],
    ['台中laport', '台中lalaport'],
    ['漢神洲際', '台中漢神洲際'],
    ['台中漢神洲際', '台中漢神洲際'],
    ['高雄義享', '高雄義享'],
    ['義享天地', '高雄義享'],
    ['台茂', '桃園台茂'],
    ['桃園台茂', '桃園台茂'],
    ['宜蘭新月', '宜蘭新月'],
    ['新月廣場', '宜蘭新月'],
    ['新月', '宜蘭新月'],
    ['享平方', '新竹享平方'],
    ['新竹享平方', '新竹享平方'],
    ['環球桃園a19', '桃園環球a19'],
    ['桃園環球a19', '桃園環球a19'],
    ['南港潤泰', '南港潤泰'],
    ['潤泰南港', '南港潤泰'],
    ['桃園站前', '桃園新光站前'],
    ['桃園新光站前', '桃園新光站前'],
    ['南紡', '台南南紡'],
    ['高雄sogo', '高雄sogo'],
    ['崇光高雄', '高雄sogo'],
    ['板橋遠東', '板橋遠百中山'],
    ['板橋遠百中山', '板橋遠百中山'],
    ['汐止遠雄', '汐科遠雄'],
    ['汐科遠雄', '汐科遠雄'],
    ['新竹遠雄湳雅', '新竹遠雄'],
    ['新竹遠雄', '新竹遠雄'],
    ['澎坊商場', '澎湖3號港'],
    ['澎湖3號港', '澎湖3號港'],
  ].sort((a, b) => b[0].length - a[0].length);

  return aliases.find(([needle]) => text.includes(needle))?.[1] ?? text;
}

function parseOnlineStores(html) {
  const starts = [...html.matchAll(/<div class="draw-store"/g)].map((match) => match.index);
  const stores = [];

  for (let index = 0; index < starts.length; index += 1) {
    const start = starts[index];
    const end = starts[index + 1] ?? html.length;
    const block = html.slice(start, end);
    const store = block.match(/<div class="draw-store-name">(.*?)<\/div>/s);
    if (!store) continue;

    const city = block.match(/data-draw-city="([^"]*)"/);
    const startTime = block.match(/<div class="draw-start">(.*?)<\/div>/s);
    const items = [
      ...block.matchAll(
        /<div class="draw-item[^>]*data-draw-href="([^"]*)"[^>]*>\s*<div class="draw-product">(.*?)<\/div>/gs,
      ),
    ].map((match) => ({
      name: stripTags(match[2]),
      url: decodeHtml(match[1]),
    }));

    if (!items.length) continue;
    stores.push({
      region: decodeHtml(city?.[1] ?? ''),
      store: stripTags(store[1]),
      storeUrl: '',
      startTime: stripTags(startTime?.[1] ?? ''),
      items,
    });
  }

  return stores;
}

function parseLocalStores(source) {
  const data = new Map(regionOrder.map((region) => [region, []]));

  for (let regionIndex = 0; regionIndex < regionOrder.length; regionIndex += 1) {
    const region = regionOrder[regionIndex];
    const nextRegion = regionOrder[regionIndex + 1];
    const regionStart = source.indexOf(`  ${region}: [`);
    if (regionStart < 0) continue;

    const regionEnd = nextRegion
      ? source.indexOf(`  ${nextRegion}: [`, regionStart)
      : source.indexOf('\n};', regionStart);
    const section = source.slice(regionStart, regionEnd < 0 ? source.length : regionEnd);

    const storeStarts = [...section.matchAll(/^    \{\n      store:/gm)].map((match) => match.index);
    for (let i = 0; i < storeStarts.length; i += 1) {
      const storeStart = storeStarts[i];
      const storeEnd = storeStarts[i + 1] ?? section.length;
      const text = section.slice(storeStart, storeEnd);
      const store = text.match(/store:\s*'([^']*)'/);
      if (!store) continue;

      data.get(region).push({
        region,
        store: store[1],
        storeUrl: text.match(/storeUrl:\s*'([^']*)'/)?.[1] ?? '',
        startTime: text.match(/startTime:\s*'([^']*)'/)?.[1] ?? '',
        items: [
          ...text.matchAll(/\{\s*name:\s*'([^']*)',\s*url:\s*'([^']*)'\s*,?\s*\}/gs),
        ].map((match) => ({ name: match[1], url: match[2] })),
      });
    }
  }

  return data;
}

function renderData(data) {
  const lines = [
    'export interface GiveawayItem {',
    '  name: string;',
    '  url: string;',
    '}',
    '',
    'export interface StoreGiveaway {',
    '  store: string;',
    '  storeUrl?: string;',
    '  startTime?: string;',
    '  items: GiveawayItem[];',
    '}',
    '',
    'export interface Region {',
    '  name: string;',
    '}',
    '',
    'export const REGIONS: Region[] = [',
    "  { name: '全部' },",
    ...regionOrder.map((region) => `  { name: ${quoteTs(region)} },`),
    '];',
    '',
    'export const GIVEAWAYS: Record<string, StoreGiveaway[]> = {',
  ];

  for (const region of regionOrder) {
    lines.push(`  ${region}: [`);
    for (const store of data.get(region) ?? []) {
      lines.push('    {');
      lines.push(`      store: ${quoteTs(store.store)},`);
      if (store.storeUrl) lines.push(`      storeUrl: ${quoteTs(store.storeUrl)},`);
      if (store.startTime) lines.push(`      startTime: ${quoteTs(store.startTime)},`);
      lines.push('      items: [');
      for (const item of store.items) {
        lines.push(`        { name: ${quoteTs(item.name)}, url: ${quoteTs(item.url)} },`);
      }
      lines.push('      ],');
      lines.push('    },');
    }
    lines.push('  ],');
  }

  lines.push('};', '');
  return lines.join('\n');
}

const response = await fetch(sourceUrl);
if (!response.ok) throw new Error(`Failed to fetch ${sourceUrl}: ${response.status}`);

const onlineStores = parseOnlineStores(await response.text());
if (!onlineStores.length) throw new Error(`No stores were parsed from ${sourceUrl}`);

const local = parseLocalStores(await readFile(dataFile, 'utf8'));
const existingStoreKeys = new Set(
  [...local.values()].flat().map((store) => normalizeStoreName(store.store)),
);
const index = new Map();
for (const [region, stores] of local) {
  stores.forEach((store, position) => {
    index.set(normalizeStoreName(store.store), { region, position });
  });
}

let updated = 0;
let added = 0;
for (const online of onlineStores) {
  const key = normalizeStoreName(online.store);
  const match = index.get(key);
  if (match) {
    const current = local.get(match.region)[match.position];
    local.get(match.region)[match.position] = {
      ...online,
      region: match.region,
      storeUrl: current.storeUrl,
    };
    updated += 1;
    continue;
  }

  const region = regionOrder.includes(online.region) ? online.region : '台北市';
  local.get(region).push({ ...online, region });
  index.set(key, { region, position: local.get(region).length - 1 });
  added += 1;
}


const syncedStores = [...local.values()].flat();
const syncedItemCount = syncedStores.reduce((sum, store) => sum + store.items.length, 0);
const syncedStoreKeys = new Set(syncedStores.map((store) => normalizeStoreName(store.store)));
const missingExistingStores = [...existingStoreKeys].filter((key) => !syncedStoreKeys.has(key));
if (missingExistingStores.length > 0) {
  throw new Error(
    `Refusing destructive sync. ${missingExistingStores.length} existing stores would disappear: ${missingExistingStores.join(', ')}`,
  );
}
if (!syncedStores.length || syncedItemCount === 0) {
  throw new Error('Refusing to write empty giveaway data. Parsed result has no synced items.');
}

if (!dryRun) await writeFile(dataFile, renderData(local));

const totalItems = onlineStores.reduce((sum, store) => sum + store.items.length, 0);
console.log(
  `${dryRun ? 'Parsed' : 'Synced'} ${onlineStores.length} stores and ${totalItems} items from ${sourceUrl}`,
);
console.log(`Updated ${updated} existing stores, added ${added} stores.`);
console.log('Stores parsed from online page:');
for (const store of onlineStores) {
  console.log(`- ${store.region} / ${store.store} (${store.items.length} items)`);
}
if (dryRun) console.log('Dry run only; giveaway-data.ts was not changed.');
