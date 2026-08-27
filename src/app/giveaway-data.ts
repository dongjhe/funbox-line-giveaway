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

export const REGIONS: Region[] = [{ name: '全部' }, { name: '台北市' }, { name: '新北市' }, { name: '台中市' }];

export const GIVEAWAYS: Record<string, StoreGiveaway[]> = {
  台北市: [
    {
      store: 'Funbox-忠孝SOGO店',
      storeUrl: 'https://www.facebook.com/funboxsogo',
      startTime: '2026年08月28日（五）11:00 ~ 08月29日（六）21:00',
      items: [
        { name: 'BX-57 3V3對戰收納盒 黑', url: 'https://lin.ee/xe0367ja' },
        { name: 'BX-25 戰鬥陀螺X專業收納包', url: 'https://lin.ee/xxqkyvC' },
        { name: 'BX-45 武士魂斬', url: 'https://lin.ee/TmhBnu9' },
        { name: 'BX-10 極限衝擊戰鬥盤', url: 'https://lin.ee/9xvdY8S' },
        { name: 'BX-37 雙重極限衝擊戰鬥盤 豪華組', url: 'https://lin.ee/yP3r8Lq' },
        { name: 'UX-19 子彈獅鷲H', url: 'https://lin.ee/tratm8F' },
        { name: 'BX-51 旋風發射器 黑綠', url: 'https://lin.ee/zrGLkVA' },
        { name: 'BX-40 發射器(酒紅)', url: 'https://lin.ee/QrlSYOm' },
        { name: 'UX-02 惡魔戰錘', url: 'https://lin.ee/suYW8By' },
        { name: 'CX-18 腕龍鞭打 隨機強化組', url: 'https://lin.ee/XoUgnBE' },
      ],
    },
  ],
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
    {
      store: 'Funbox 新店誠品店',
      startTime: '2026年08月28日（五）11:00',
      items: [
        { name: 'BX-57 3V3 對戰收納盒 黑色版（不含陀螺）', url: 'https://lin.ee/NZhMQ4x' },
        { name: 'BX-25 專業收納包（不含陀螺）', url: 'https://lin.ee/UMZIIXH' },
        { name: 'BX-10 極限衝擊戰鬥盤', url: 'https://lin.ee/r5My0c3' },
        { name: 'BX-45 武士魂斬 6-70M', url: 'https://lin.ee/sOWP5E27' },
        { name: 'BX-51 蒼旋風發射器/黑綠', url: 'https://lin.ee/PBP4vgc' },
        { name: 'BXG系列 孩之寶聯名款', url: 'https://lin.ee/xAK6Al9' },
        { name: 'BX-40 發射器 左迴旋 酒紅', url: 'https://lin.ee/T003MNz' },
        { name: 'BXG-01 烈焰飛鳳S', url: 'https://lin.ee/oL6Aqh7' },
        { name: 'BXG-04 銀牙烈虎S', url: 'https://lin.ee/nIkFU1w' },
      ],
    },
  ],
  台中市: [
    {
      store: 'Funbox 台中港三井店',
      startTime: '2026年08月28日（五）11:00 ~ 08月29日（六）20:30',
      items: [
        { name: 'BX-25 戰鬥陀螺X專業收納包', url: 'https://lin.ee/n3TPmTn' },
        { name: 'BX-51 旋風發射器 黑綠', url: 'https://lin.ee/UICzg33' },
        { name: 'BX-57 3V3對戰收納盒 黑', url: 'https://lin.ee/S1dOPWk' },
        { name: 'UX-02 惡魔戰錘', url: 'https://lin.ee/QjhI9MP' },
        { name: 'UX-19 子彈獅鷲H', url: 'https://lin.ee/OtVbNFm' },
        { name: 'UX-11 衝擊龍神 豪華組', url: 'https://lin.ee/pmfKR4L' },
      ],
    },
  ],
};
