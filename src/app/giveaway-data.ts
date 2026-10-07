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
  台北市: [],
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
