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
      store: 'Funbox-新光三越站前店',
      startTime: '抽選/購買時間：2026/11/20 11:00～2026/11/21 21:00',
      items: [
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/PMQDdkz' },
        { name: 'BX-52 輝耀龍騎士6-60LC', url: 'https://lin.ee/yBPLkVN' },
        { name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/5mnBc67' },
      ],
    },
    {
      store: 'Funbox-台北大巨蛋',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [],
    },
    {
      store: 'Funbox-南港潤泰',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [],
    },
    {
      store: 'Funbox-天母SOGO店',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [],
    },
    {
      store: 'Funbox 高島屋百貨店',
      startTime: '抽選/購買時間：2026/10/08 10:30~2026/10/09 21:00',
      items: [],
    },
    {
      store: '來玩聚-台北地下街店',
      startTime: '抽選/購買時間：2026/11/20 12:00～2026/11/21 19:30',
      items: [
        { name: 'BX-09 戰鬥陀螺X通行證', url: 'https://lin.ee/qcnCS0Fp' },
        { name: 'BX-52 輝耀龍騎士6-60LC', url: 'https://lin.ee/Tv9Wpfs' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/slp9OtD' },
      ],
    },
    {
      store: 'FunBox Toys 遠百信義 A13',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [],
    },
    {
      store: 'Funbox-信義A8',
      startTime: '抽選/購買時間：2026/11/20 11:00～2026/11/21 21:00',
      items: [
        { name: 'BX-52 輝耀龍騎士6-60LC', url: 'https://lin.ee/U5j46EN' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/VDBzFRx' },
      ],
    },
    {
      store: 'Funbox 天母三越店',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [],
    },
    {
      store: 'Funbox 台北忠孝遠東SOGO店',
      startTime: '抽選/購買時間：2026/11/06 11:00~2026/11/07 21:00',
      items: [],
    },
    {
      store: 'Fun box-美麗華',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [],
    },
    {
      store: 'Funbox-南港LaLaport',
      startTime: '抽選/購買時間：2026/11/06 11:00~2026/11/07 21:00',
      items: [],
    },
    {
      store: 'Funbox Toys-大葉高島屋店',
      startTime:
        '抽選/購買時間：2026/11/13～2026/11/14 購買資格券有效期間：11/13 11:00～22:00、11/14 11:00～21:00',
      items: [],
    },
    {
      store: 'Funbox-忠孝SOGO店',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
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
      store: 'Funbox-板橋大遠百',
      startTime: '抽選/購買時間：2026/11/06 11:00~2026/11/07 21:00',
      items: [],
    },
    {
      store: 'Funbox-中和環球店',
      startTime: '抽選/購買時間：2026/11/06 11:00~2026/11/07 21:00',
      items: [],
    },
    {
      store: 'Funbox 新店誠品店',
      startTime: '抽選開始：2026/11/06 11:00｜兌獎：11/06 11:00~22:00、11/07 11:00~21:00',
      items: [],
    },
    {
      store: 'Funbox-淡水禮萊廣場店',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [],
    },
    {
      store: 'Fun box & 星奇市 汐科遠雄店',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [],
    },
    {
      store: 'Funbox-板橋遠百中山店',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [],
    },
    {
      store: 'Funbox-比漾廣場',
      startTime: '抽選/購買時間：2026/11/06 11:00~2026/11/07 21:00前',
      items: [],
    },
    {
      store: 'Funbox-新店誠品-裕隆城',
      startTime:
        '抽選開放：2026/11/13 11:00；購買資格券有效期間：11/13 11:00～22:00、11/14 11:00～21:00',
      items: [],
    },
    {
      store: 'Funbox&Sanrio板橋大遠百',
      startTime: '抽選/販售時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [],
    },
    {
      store: 'Funbox-宏匯廣場',
      startTime:
        '抽選開放：2026/11/13 11:00；購買資格券有效期間：11/13 11:00～22:00、11/14 11:00～21:00',
      items: [],
    },
    {
      store: 'Funbox & 星潮玩 - 中和環球',
      startTime: '抽選/販售時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [],
    },
  ],
  宜蘭縣: [
    {
      store: 'Funbox Toy-宜蘭新月廣場店',
      startTime: '購買資格券有效期間：2026/11/13 11:00～22:00；2026/11/14 11:00～21:00',
      items: [],
    },
  ],
  桃園市: [
    {
      store: 'Funbox Toys 桃園新光站前店',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [],
    },
    {
      store: 'Funbox-桃園環球A8',
      startTime:
        '抽選時間：2026/11/13 11:00～2026/11/14 21:00（抽完為止）購買資格時間：11/13 11:00～21:00、11/14 11:00～21:00',
      items: [],
    },
    {
      store: 'Funbox-桃園遠東店',
      startTime: '抽選/購買時間：2026/11/06 11:00~2026/11/07 21:00',
      items: [],
    },
    {
      store: 'Funbox-中壢大江店',
      startTime: '抽選/購買時間：2026/11/06 11:00~21:00',
      items: [],
    },
    {
      store: 'Funbox-桃園環球A19',
      startTime: '抽選/購買時間：2026/11/13 11:00~2026/11/14 21:00',
      items: [],
    },
    {
      store: 'Funbox-中壢SOGO',
      startTime: '抽選/購買時間：2026/11/06 11:00~2026/11/07 21:00',
      items: [],
    },
    {
      store: 'Funbox-桃園台茂店',
      startTime:
        '抽選/購買資格券抽籤期間：2026/11/06 11:00～2026/11/07 21:30（逾時恕不受理）｜請於營業時間內來店購買',
      items: [],
    },
  ],
  新竹市: [
    {
      store: 'Funbox-新竹遠東',
      startTime: '抽選/購買時間：2026/11/13～2026/11/14；結帳時間：11:00～21:00',
      items: [],
    },
    {
      store: 'Fun Box 新竹巨城',
      startTime: '抽選/販售時間：2026/11/13 11:00開始～2026/11/14（截止時間未公告）',
      items: [],
    },
    {
      store: 'Funbox-新竹遠雄',
      startTime: '抽選/販售時間：2026/11/13 11:00～2026/11/14',
      items: [],
    },
  ],
  新竹縣: [
    {
      store: 'Funbox-竹北遠東店',
      startTime: '抽選／兌獎／購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [],
    },
    {
      store: 'FunBox享平方店',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [],
    },
  ],
  苗栗縣: [
    {
      store: 'Funbox-苗栗尚順店',
      startTime: '抽選/購買時間：2026/11/06 11:00~2026/11/07 20:30',
      items: [],
    },
  ],
  台中市: [
    {
      store: 'Funbox-台中港三井店',
      startTime: '抽選時間&使用期限：2026/11/13 11:00～2026/11/14 20:30',
      items: [],
    },
    {
      store: 'Funbox-廣三SOGO',
      startTime: '抽選/販售時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [],
    },
    {
      store: 'Funbox-台中中友',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [],
    },
    {
      store: 'Funbox-新光三越台中中港店',
      startTime: '抽選/販售時間：2026/11/13 11:00～2026/11/14 21:00',
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
      store: 'Funbox-文心秀泰',
      startTime: '抽選/購買時間：2026/11/20 11:00～2026/11/21 21:00',
      items: [
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/5iu16JK' },
        { name: 'BX-52 輝耀龍騎士6-60LC', url: 'https://lin.ee/s4ZaMpn' },
        { name: 'BX-09 戰鬥陀螺X通行證', url: 'https://lin.ee/oHrh9gr' },
      ],
    },
    {
      store: 'Funbox-漢神洲際',
      startTime: '抽選/購買時間：2026/11/06 11:00～2026/11/07 21:00',
      items: [],
    },
    {
      store: 'Funbox-豐原太平洋店',
      storeUrl: 'https://line.me/R/ti/p/@094mvrhb',
      startTime: '抽籤/販售時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [],
    },
    {
      store: 'Funbox-麗寶一期',
      startTime: '抽選&購買時間：2026/11/06 10:30～2026/11/07 21:00',
      items: [],
    },
    {
      store: 'Funbox-台中LaLaport店',
      startTime: '抽選/購買時間：2026/11/06 11:00~2026/11/07 21:00',
      items: [],
    },
  ],
  彰化縣: [
    {
      store: '來玩聚-員林店',
      startTime: '抽選/購買時間：2026/11/13 10:00～2026/11/14 21:00',
      items: [],
    },
    {
      store: '來玩聚-彰化家樂福',
      startTime: '抽選/購買時間：2026/10/08 10:00~2026/10/09 21:00',
      items: [],
    },
    {
      store: 'Funbox-員林大潤發',
      startTime: '抽選/購買時間：2026/11/06 10:00~2026/11/07 21:00',
      items: [],
    },
    {
      store: 'Funbox-彰化萬家福店',
      startTime: '抽選/購買時間：2026/11/06 10:00~2026/11/07 21:00',
      items: [],
    },
    {
      store: '來玩聚-彰化店',
      startTime: '抽選/購買時間：2026/11/13 10:00～2026/11/14 21:00',
      items: [],
    },
  ],
  雲林縣: [
    {
      store: '來玩聚-斗六店',
      startTime: '抽選/購買時間：2026/11/13 10:00～2026/11/14 21:00',
      items: [],
    },
    {
      store: 'Funbox-斗六家樂福',
      startTime: '抽選/購買時間：2026/11/06 10:00~2026/11/07 21:00',
      items: [],
    },
  ],
  嘉義市: [
    {
      store: 'Funbox-嘉義遠東',
      startTime:
        '抽選資格時間：2026/11/13 11:00～2026/11/14 20:30；中籤購買時間：11/13 11:00～21:30、11/14 11:00～20:30',
      items: [],
    },
    {
      store: 'Funbox-嘉義耐斯',
      startTime:
        '抽選時間：2026/11/06 11:00~2026/11/07 21:00 ｜ 中籤購買時間：2026/11/06 11:00~22:00、2026/11/07 11:00~21:00',
      items: [],
    },
    {
      store: 'Funbox-嘉義三越',
      startTime: '購買資格券有效期間：11/13 11:00～22:00、11/14 11:00～21:00',
      items: [],
    },
  ],
  台南市: [
    {
      store: 'Funbox-台南三井',
      startTime: '抽選&購買資格時間：2026/11/13 11:00～2026/11/14 20:30',
      items: [],
    },
    {
      store: 'Funbox-台南遠百店',
      startTime: '抽選/購買資格時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [],
    },
    {
      store: 'Funbox-台南南紡店',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [],
    },
    {
      store: 'Funbox-新光三越南西店',
      startTime: '抽選/購買時間：2026/11/06 11:00~2026/11/07 21:00',
      items: [],
    },
    {
      store: '來玩聚-新仁店',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 20:00',
      items: [],
    },
    {
      store: 'Funbox-新仁店',
      startTime: '抽選/購買時間：2026/11/06 11:00~2026/11/07 20:00',
      items: [],
    },
    {
      store: 'Funbox-台南新天地店',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [],
    },
  ],
  高雄市: [
    {
      store: 'Funbox-高雄漢神店',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [],
    },
    {
      store: 'Funbox-漢神巨蛋店',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [],
    },
    {
      store: 'Funbox-高雄大立店',
      startTime: '抽選/購買資格時間：2026/11/13 11:00～2026/11/14 20:30',
      items: [],
    },
    {
      store: 'Funbox-夢時代店',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [],
    },
    {
      store: 'Funbox大魯閣新光',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [],
    },
    {
      store: 'Funbox-高雄SOGO店',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [],
    },
    {
      store: 'Funbox-高雄大遠百',
      startTime: '抽選/購買資格時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [],
    },
    {
      store: '來玩聚-新楠家樂福',
      startTime: '抽選/購買時間：2026/10/08 10:00 ~ 2026/10/09 21:00 止',
      items: [],
    },
    {
      store: '來玩聚-楠梓店',
      startTime: '抽選/購買時間：2026/11/13 10:00～2026/11/14 21:00',
      items: [],
    },
    {
      store: 'Funbox-高雄左營店',
      startTime: '抽選&購買資格時間：2026/11/06 10:30～2026/11/07 21:00',
      items: [],
    },
    {
      store: 'Funbox-義大二館',
      startTime: '抽選/購買時間：2026/11/06 11:00～2026/11/07 21:00',
      items: [],
    },
    {
      store: 'Funbox-高雄義享店',
      startTime: '抽選/購買資格時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [],
    },
    {
      store: '鳳山來玩聚',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [],
    },
    {
      store: '來玩聚-新楠店',
      startTime: '抽選/購買時間：2026/11/13 10:00～2026/11/14 21:00',
      items: [],
    },
    {
      store: 'Funbox-新楠店',
      startTime: '抽選/購買時間：2026/11/06 10:00~2026/11/07 21:00',
      items: [],
    },
  ],
  屏東縣: [
    {
      store: '來玩聚-新屏店',
      startTime: '抽選資格&購買時間：2026/11/13 11:00～2026/11/14 20:00',
      items: [],
    },
    {
      store: 'Funbox-屏東太平洋店',
      startTime: '抽選/購買資格時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [],
    },
    {
      store: 'Funbox-屏東環球',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [],
    },
  ],
  花蓮縣: [
    {
      store: 'Funbox-花蓮店',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14',
      items: [],
    },
  ],
  台東縣: [
    {
      store: '來玩聚-台東家樂福',
      startTime: '抽選/購買時間：2026/10/08 11:00~2026/10/09 20:00',
      items: [],
    },
    {
      store: 'Funbox-台東秀泰店',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00止',
      items: [],
    },
  ],
  澎湖縣: [
    {
      store: 'Funbox-澎湖3號港店',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 20:00',
      items: [],
    },
  ],
};
