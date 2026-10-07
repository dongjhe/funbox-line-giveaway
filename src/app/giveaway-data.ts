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
  新北市: [
    {
      store: 'Funbox 樹林秀泰店',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 21:00',
      items: [
        { name: 'BX-09 戰鬥陀螺X通行證', url: 'https://lin.ee/xQzTBxs' },
        { name: 'BX-37 雙重極限衝擊戰鬥盤 豪華組', url: 'https://lin.ee/zEQOoIwh' },
        { name: 'UX-01 蒼龍爆刃', url: 'https://lin.ee/NEsU899' },
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/PlpDb94' },
        { name: 'UX-13 魔像奇岩', url: 'https://lin.ee/XERO49F' },
        { name: 'UX-14 天蠍長矛0-70Z', url: 'https://lin.ee/SeEoPDH' },
        { name: 'UX-16 時鐘幻象 隨機強化組', url: 'https://lin.ee/NASBQT0' },
        { name: 'UX-17 隕星龍騎士3-70J', url: 'https://lin.ee/7hmvx3g' },
        { name: 'UX-19 子彈獅鷲', url: 'https://lin.ee/XxKUmGU' },
        { name: 'UX-20 榮耀武神', url: 'https://lin.ee/ymKurCK' },
        { name: 'CX-00 新世紀福音戰士改造組', url: 'https://lin.ee/X0XRNCs' },
        { name: 'CX-01 蒼龍勇氣', url: 'https://lin.ee/nn9EqMf' },
        { name: 'CX-02 魔導至尊', url: 'https://lin.ee/yE3YnY8' },
        { name: 'CX-03 英仙幽冥', url: 'https://lin.ee/Os7IV1L' },
        { name: 'CX-05 隨機強化組 Vol.6', url: 'https://lin.ee/WGw7dLQ' },
        { name: 'CX-08 隨機強化組Vol.7', url: 'https://lin.ee/PUDgu4H' },
        { name: 'CX-13 龍王閃擊', url: 'https://lin.ee/YMWNO4M' },
        { name: 'CX-14 騎士堡壘', url: 'https://lin.ee/Pk7LZpq' },
        { name: 'CX-15 邪神狂怒', url: 'https://lin.ee/zhVlSzD' },
        { name: 'CX-16 極限衝擊對戰組', url: 'https://lin.ee/VKEiKc8' },
        { name: 'CX-19 鱷魚裂甲', url: 'https://lin.ee/xnPvW0Q' },
      ],
    },
  ],
  宜蘭縣: [
    {
      store: 'Funbox 宜蘭新月廣場店',
      startTime: '抽選/購買時間：2026/10/08 11:00~22:00；2026/10/09 11:00~21:00',
      items: [
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/zXdC7xY' },
        { name: 'UX-13 魔像奇岩', url: 'https://lin.ee/TJOfGgU' },
        { name: 'UX-16 時鐘幻象 隨機強化組', url: 'https://lin.ee/vbA9YEm' },
        { name: 'UX-17 隕星龍騎士3-70J', url: 'https://lin.ee/TLMWH8n' },
        { name: 'CX-01 蒼龍勇氣', url: 'https://lin.ee/YN9bxke' },
        { name: 'CX-02 魔導至尊', url: 'https://lin.ee/5N914Ay' },
        { name: 'CX-03 英仙幽冥', url: 'https://lin.ee/YmWwBAq' },
        { name: 'CX-08 隨機強化組 Vol.7', url: 'https://lin.ee/tPYQjo7' },
        { name: 'CX-13 龍王閃擊', url: 'https://lin.ee/uD0djjc' },
        { name: 'CX-14 騎士堡壘', url: 'https://lin.ee/Y0HCABd' },
        { name: 'CX-15 邪神狂怒', url: 'https://lin.ee/YOOhukN' },
      ],
    },
  ],
  桃園市: [],
  新竹市: [
    {
      store: 'Funbox 新竹遠東店',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 21:00',
      items: [
        { name: 'BX-09 戰鬥陀螺X通行證', url: 'https://lin.ee/xQzTBxs' },
        { name: 'BX-37 雙重極限衝擊戰鬥盤 豪華組', url: 'https://lin.ee/zEQOoIwh' },
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/6mEByIU' },
        { name: 'UX-15 鮫鯊狂鱗改造組', url: 'https://lin.ee/rzMAyhB' },
        { name: 'UX-19 子彈獅鷲H', url: 'https://lin.ee/W8AGvkC' },
        { name: 'CX-00 新世紀福音戰士改造組', url: 'https://lin.ee/n4jETfe' },
        { name: 'CX-11 帝王威能', url: 'https://lin.ee/rJ8xpBH' },
        { name: 'CX-13 龍王閃擊', url: 'https://lin.ee/NRPDRBU' },
        { name: 'CX-16 極限衝擊對戰組C', url: 'https://lin.ee/xfVYwQ2' },
        { name: 'CX-19 鱷魚裂甲 隨機強化組', url: 'https://lin.ee/TUwp9Sy' },
      ],
    },
  ],
  新竹縣: [],
  苗栗縣: [],
  台中市: [
    {
      store: 'Funbox 台中港三井店',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 20:30',
      items: [
        { name: 'UX-16 時鐘幻象 隨機強化組', url: 'https://lin.ee/p2JpYdB' },
        { name: 'CX-02 魔導至尊', url: 'https://lin.ee/8OMrFV3' },
        { name: 'CX-03 英仙幽冥', url: 'https://lin.ee/Q2l1DBQ' },
        { name: 'CX-08 隨機強化組 Vol.7', url: 'https://lin.ee/RW4JXbB' },
        { name: 'CX-13 龍王閃擊', url: 'https://lin.ee/nSWeRAs' },
        { name: 'CX-15 邪神狂怒', url: 'https://lin.ee/Rmo1tWK' },
      ],
    },
    {
      store: 'Funbox 廣三SOGO店',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 21:00',
      items: [
        { name: 'UX-16 時鐘幻象 隨機強化組', url: 'https://lin.ee/oFmM2jQ' },
        { name: 'UX-17 隕星龍騎士3-70J', url: 'https://lin.ee/Xs9i1fk' },
        { name: 'CX-02 魔導至尊', url: 'https://lin.ee/VFGBzz7' },
        { name: 'CX-03 英仙幽冥', url: 'https://lin.ee/TmgOuVy' },
        { name: 'CX-05 隨機強化組 Vol.6', url: 'https://lin.ee/xVMdipI' },
        { name: 'CX-08 隨機強化組 Vol.7', url: 'https://lin.ee/9ZSeaxX' },
        { name: 'CX-11 帝王威能', url: 'https://lin.ee/9iXuu0l' },
        { name: 'CX-13 龍王閃擊', url: 'https://lin.ee/TNHQRkk' },
        { name: 'CX-15 邪神狂怒', url: 'https://lin.ee/6CqgJzT' },
      ],
    },
  ],
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
