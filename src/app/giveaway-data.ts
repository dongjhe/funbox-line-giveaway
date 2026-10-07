export interface GiveawayItem {
  name: string;
  url: string;
}

export interface StoreGiveaway {
  store: string;
  storeUrl?: string;
  startTime?: string;
  items: GiveawayItem[];
}

export interface Region {
  name: string;
}

export const REGIONS: Region[] = [
  { name: '全部' },
  { name: '台北市' },
  { name: '新北市' },
  { name: '宜蘭縣' },
  { name: '桃園市' },
  { name: '新竹市' },
  { name: '新竹縣' },
  { name: '苗栗縣' },
  { name: '台中市' },
  { name: '彰化縣' },
  { name: '雲林縣' },
  { name: '嘉義市' },
  { name: '台南市' },
  { name: '高雄市' },
  { name: '屏東縣' },
  { name: '花蓮縣' },
  { name: '台東縣' },
  { name: '澎湖縣' },
];

export const GIVEAWAYS: Record<string, StoreGiveaway[]> = {
  台北市: [
    {
      store: 'Funbox 新光三越站前店',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 21:00',
      items: [
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/oJulAO6' },
        { name: 'UX-16 時鐘幻象 隨機強化組', url: 'https://lin.ee/nXrKCAI' },
        { name: 'UX-19 子彈獅鷲', url: 'https://lin.ee/rxjmMb4' },
        { name: 'CX-01 蒼龍勇氣', url: 'https://lin.ee/5saSA6r' },
        { name: 'CX-02 魔導至尊', url: 'https://lin.ee/sIuem9x' },
        { name: 'CX-03 英仙幽冥', url: 'https://lin.ee/zGiC84W' },
        { name: 'CX-08 隨機強化組 Vol.7', url: 'https://lin.ee/nsZ79zb' },
        { name: 'CX-13 龍王閃擊', url: 'https://lin.ee/ZIhzBi0' },
        { name: 'CX-14 騎士堡壘', url: 'https://lin.ee/qHPJ7wO' },
        { name: 'CX-15 邪神狂怒', url: 'https://lin.ee/SA9oRXnn' },
        { name: 'CX-17 隨機強化組 Vol.10', url: 'https://lin.ee/yFQHFqj' },
      ],
    },
  ],
  新北市: [],
  宜蘭縣: [],
  桃園市: [],
  新竹市: [],
  新竹縣: [],
  苗栗縣: [],
  台中市: [],
  彰化縣: [],
  雲林縣: [],
  嘉義市: [],
  台南市: [],
  高雄市: [],
  屏東縣: [],
  花蓮縣: [],
  台東縣: [],
  澎湖縣: [],
};
