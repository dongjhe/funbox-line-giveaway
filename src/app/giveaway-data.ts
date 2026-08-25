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

export const REGIONS: Region[] = [{ name: '全部' }, { name: '新北市' }];

export const GIVEAWAYS: Record<string, StoreGiveaway[]> = {
  新北市: [
    {
      store: 'Funbox樹林秀泰店',
      storeUrl: 'https://linevoom.line.me/user/_dSj7fhnsKdDEm1q2ehrYEJTOyrm4OuI2NFsN3I0',
      startTime: '2026年08月28日（五）11:00 ~ 08月30日（日）21:00',
      items: [
        { name: 'BX-18 X旋風發射器', url: 'https://lin.ee/RwsXFtz' },
        { name: 'BX-26 獨角刺心', url: 'https://lin.ee/ROoRZV6' },
        { name: 'BX-32 寬型極限衝擊戰鬥盤', url: 'https://lin.ee/XpJioQh' },
        { name: 'BX-33 皓戰猛虎', url: 'https://lin.ee/rq33vhwb' },
        { name: 'BX-40 發射器(酒紅)', url: 'https://lin.ee/qy718zc' },
        { name: 'BX-50 天堂日輪 隨機強化組', url: 'https://lin.ee/of1NqqQ' },
        { name: 'BX-51 旋風發射器 黑綠', url: 'https://lin.ee/NqNXsra' },
        { name: 'UX-02 惡魔戰錘', url: 'https://lin.ee/WAf9KCM' },
        { name: 'UX-19 子彈獅鷲H', url: 'https://lin.ee/5dsxkiI' },
        { name: 'BX-00 暴風天馬3-70RA', url: 'https://lin.ee/OwuyNOA' },
        { name: 'BXG-01 烈焰飛鳳S', url: 'https://lin.ee/ya9DXYg' },
        { name: 'BXG-04 銀牙烈虎S', url: 'https://lin.ee/TYzKKyV' },
      ],
    },
  ],
};
