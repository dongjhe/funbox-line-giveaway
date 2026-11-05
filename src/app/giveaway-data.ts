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
      items: [],
    },
    {
      store: 'Funbox 台北大巨蛋店',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 21:00',
      items: [],
    },
    {
      store: 'Funbox 南港潤泰店',
      startTime: '抽選時間：2026/11/06 11:00~2026/11/07 21:00',
      items: [
        {
          name: 'BX-53 極限衝擊對戰組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M6ND2QFJNARK1C9G8SE3JCGY',
        },
      ],
    },
    {
      store: 'Funbox 天母SOGO店',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 21:00',
      items: [],
    },
    {
      store: 'Funbox 高島屋百貨店',
      startTime: '抽選/購買時間：2026/10/08 10:30~2026/10/09 21:00',
      items: [],
    },
    {
      store: '來玩聚-台北地下街店',
      startTime: '抽選/購買時間：2026/10/08 12:00 ~ 2026/10/09 19:30 止',
      items: [],
    },
    {
      store: 'Funbox 遠百信義A13店',
      startTime: '抽選/購買時間：2026/10/08 11:00 ~ 2026/10/09 21:00 止',
      items: [],
    },
    {
      store: 'Funbox 信義A8店',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 21:00',
      items: [],
    },
    {
      store: 'Funbox 天母三越店',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 21:00',
      items: [],
    },
    {
      store: 'Funbox 台北忠孝遠東SOGO店',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 21:00',
      items: [],
    },
    {
      store: 'Funbox 美麗華店',
      startTime: '抽選時間：2026/11/06 各店開店時間~2026/11/07 各店閉店前1小時',
      items: [
        {
          name: 'BX-53 極限衝擊對戰組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M6N4P9EDNAZH8HZ7P7PTDK93',
        },
      ],
    },
    {
      store: 'Funbox 南港LaLaport',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 21:00',
      items: [],
    },
  ],
  新北市: [
    {
      store: 'Funbox 樹林秀泰店',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 21:00',
      items: [],
    },
    {
      store: 'Funbox 板橋大遠百店',
      startTime: '抽選/購買時間：2026/10/08 11:00 ~ 2026/10/09 21:00 止',
      items: [],
    },
    {
      store: 'Funbox 中和環球店',
      startTime: '抽選時間：2026/11/06 11:00~2026/11/07 21:00',
      items: [
        {
          name: 'BX-53 極限衝擊對戰組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M6N7CE15YCPBHBRA81DGP2RW',
        },
      ],
    },
    {
      store: 'Funbox 新店誠品店',
      startTime: '抽選/購買時間：2026/10/08 11:00起',
      items: [],
    },
    {
      store: 'Funbox 淡水禮萊廣場店',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 21:00',
      items: [],
    },
    {
      store: 'Funbox 汐科遠雄',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 21:00',
      items: [],
    },
    {
      store: 'Funbox 板橋遠東',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 21:00',
      items: [],
    },
    {
      store: 'Funbox 比漾廣場',
      startTime: '抽選/購買時間：2026/10/08 開店~2026/10/09 21:00',
      items: [],
    },
  ],
  宜蘭縣: [
    {
      store: 'Funbox 宜蘭新月廣場店',
      startTime: '抽選時間：2026/11/06 11:00 起（截止時間待確認）',
      items: [
        {
          name: 'BX-53 極限衝擊對戰組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M6N143EKDVAC16ZQJBHMDGT2',
        },
      ],
    },
  ],
  桃園市: [
    {
      store: 'Funbox 桃園新光站前店',
      startTime: '抽選時間：2026/11/06 11:00~2026/11/07 21:00',
      items: [
        {
          name: 'BX-53 極限衝擊對戰組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M6N3D9CAC35M97V87QTZV01H',
        },
      ],
    },
    {
      store: 'Funbox 桃園環球A8',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 21:00',
      items: [],
    },
    {
      store: 'Funbox 桃園遠東',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 21:00',
      items: [],
    },
    {
      store: 'Funbox 中壢大江',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 21:00',
      items: [],
    },
    {
      store: 'Funbox 桃園環球A19',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 21:00',
      items: [],
    },
    {
      store: 'Funbox 中壢SOGO',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 21:00',
      items: [],
    },
  ],
  新竹市: [
    {
      store: 'Funbox 新竹遠東店',
      startTime: '抽選時間：2026/11/06 11:00~2026/11/07 21:00',
      items: [
        {
          name: 'BX-53 極限衝擊對戰組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M6N7FVK7MWJFXX07JY8MP8GB',
        },
      ],
    },
    {
      store: 'Fun Box 新竹巨城',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 21:00',
      items: [],
    },
    {
      store: 'Funbox 新竹遠雄湳雅店',
      startTime: '抽選日期：2026/11/06~2026/11/07（原文結帳截止日期有矛盾，時間請向店家確認）',
      items: [
        {
          name: 'BX-53 極限衝擊對戰組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M6JQJQ32WZ92WQXT0YVK254B',
        },
      ],
    },
  ],
  新竹縣: [
    {
      store: 'Funbox 竹北遠東店',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 21:00',
      items: [],
    },
  ],
  苗栗縣: [
    {
      store: 'Funbox 苗栗尚順',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 20:30',
      items: [],
    },
  ],
  台中市: [
    {
      store: 'Funbox 台中港三井店',
      startTime: '抽選時間：2026/11/06 11:00~2026/11/07 20:30',
      items: [
        {
          name: 'BX-53 極限衝擊對戰組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M6NFSHD815ACFAN841PTTS04',
        },
      ],
    },
    {
      store: 'Funbox 廣三SOGO店',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 21:00',
      items: [],
    },
    {
      store: 'Funbox 台中中友店',
      startTime: '抽選/購買時間：2026/10/08 11:00 ~ 2026/10/09 21:00 止',
      items: [],
    },
    {
      store: 'Funbox 新光三越台中中港店',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 21:00',
      items: [],
    },
    {
      store: 'Funbox 台中遠東',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 21:00',
      items: [],
    },
    {
      store: 'Funbox 台中新時代',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 21:00',
      items: [],
    },
    {
      store: 'Funbox 文心秀泰',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 21:00',
      items: [],
    },
    {
      store: 'Funbox 台中漢神洲際',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 21:00',
      items: [],
    },
  ],
  彰化縣: [
    {
      store: '來玩聚-員林店',
      startTime: '抽選/購買時間：2026/10/08 10:00~2026/10/09 21:00',
      items: [],
    },
    {
      store: '來玩聚-彰化家樂福',
      startTime: '抽選/購買時間：2026/10/08 10:00~2026/10/09 21:00',
      items: [],
    },
  ],
  雲林縣: [
    {
      store: '來玩聚-斗六店',
      startTime: '抽選/購買時間：2026/10/08 10:00~2026/10/09 21:00',
      items: [],
    },
  ],
  嘉義市: [
    {
      store: 'Funbox 嘉義遠東店',
      startTime:
        '抽選資格：2026/10/08 11:00~2026/10/09 20:30；中籤購買：10/08 11:00~21:30、10/09 11:00~20:30',
      items: [],
    },
    {
      store: 'Funbox 嘉義耐斯',
      startTime: '抽選/購買時間：2026/10/08 11:00~22:00；2026/10/09 11:00~21:00',
      items: [],
    },
    {
      store: 'Funbox 嘉義三越',
      startTime: '抽選/購買時間：2026/10/08 11:00~22:00；2026/10/09 11:00~21:00',
      items: [],
    },
  ],
  台南市: [
    {
      store: 'Funbox 台南三井店',
      startTime: '抽選時間：2026/11/06 11:00~2026/11/07 20:30',
      items: [
        {
          name: 'BX-53 極限衝擊對戰組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M6NEA52KDW2WVCP4VPH1MQ4P',
        },
      ],
    },
    {
      store: 'Funbox 台南遠百店',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 21:00',
      items: [],
    },
    {
      store: 'Funbox 南紡購物中心',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 21:00',
      items: [],
    },
    {
      store: 'Funbox 台南西門',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 21:00',
      items: [],
    },
  ],
  高雄市: [
    {
      store: 'Funbox 高雄漢神店',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 21:00',
      items: [],
    },
    {
      store: 'Funbox 漢神巨蛋店',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 21:00',
      items: [],
    },
    {
      store: 'Funbox 高雄大立店',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 20:30',
      items: [],
    },
    {
      store: 'Funbox 夢時代店',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 21:00',
      items: [],
    },
    {
      store: 'Funbox 大魯閣新光店',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 21:00',
      items: [],
    },
    {
      store: 'Funbox 崇光高雄店',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 21:00',
      items: [],
    },
    {
      store: 'Funbox 高雄大遠百店',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 21:00',
      items: [],
    },
    {
      store: '來玩聚-新楠家樂福',
      startTime: '抽選/購買時間：2026/10/08 10:00 ~ 2026/10/09 21:00 止',
      items: [],
    },
    {
      store: '來玩聚-楠梓家樂福',
      startTime: '抽選/購買時間：2026/10/08 10:00~2026/10/09 21:00',
      items: [],
    },
    {
      store: 'Funbox 高雄左營',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 21:00',
      items: [],
    },
    {
      store: 'Funbox 義大二館',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 21:00',
      items: [],
    },
    {
      store: 'Funbox 義享天地',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 21:00',
      items: [],
    },
  ],
  屏東縣: [
    {
      store: '來玩聚-新屏店',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 20:00',
      items: [],
    },
    {
      store: 'Funbox 屏東太平洋店',
      startTime: '抽選時間：2026/11/06 11:00~2026/11/07 21:00',
      items: [
        {
          name: 'BX-53 極限衝擊對戰組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M6N089EWQ6MFVWKPEQQ2QTVW',
        },
      ],
    },
    {
      store: 'Funbox 屏東環球',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 21:00',
      items: [],
    },
  ],
  花蓮縣: [],
  台東縣: [
    {
      store: '來玩聚-台東家樂福',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 20:00',
      items: [],
    },
    {
      store: 'Funbox 台東秀泰店',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 21:00',
      items: [],
    },
  ],
  澎湖縣: [
    {
      store: 'Funbox 澎湖3號港店',
      startTime: '抽選/購買時間：2026/10/08 10:00~2026/10/09 20:30',
      items: [],
    },
  ],
};
