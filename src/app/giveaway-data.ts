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
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [
        { name: 'BX-09 戰鬥陀螺X通行證', url: 'https://lin.ee/VSroPaB' },
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/7z8grp7' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/qg4FeRw' },
      ],
    },
    {
      store: 'Funbox-台北大巨蛋',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [
        { name: 'BX-09 戰鬥陀螺X通行證', url: 'https://lin.ee/qdr29bh' },
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/tKq2tkE' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/PNlhNj3' },
      ],
    },
    {
      store: 'Funbox-南港潤泰',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/nhXyQXF' },
        { name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/ZRrk19b' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/ZRba1Y3' },
      ],
    },
    {
      store: 'Funbox-天母SOGO店',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [
        { name: 'BX-09 戰鬥陀螺X通行證', url: 'https://lin.ee/8JIb8g5P' },
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/RJhrpSD' },
        { name: 'BX-56 左旋風發射器 白紫', url: 'https://lin.ee/YkkWWEx' },
      ],
    },
    {
      store: 'Funbox 高島屋百貨店',
      startTime: '抽選/購買時間：2026/10/08 10:30~2026/10/09 21:00',
      items: [],
    },
    {
      store: '來玩聚-台北地下街店',
      startTime: '抽選/購買時間：2026/11/13 12:00～2026/11/14 19:30',
      items: [{ name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/RrDA78M' }],
    },
    {
      store: 'FunBox Toys 遠百信義 A13',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [
        { name: 'BX-09 戰鬥陀螺X通行證', url: 'https://lin.ee/T9uK9ON' },
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/ROOFaKGP' },
        { name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/q5AZY7TI' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/6m8bzx4' },
      ],
    },
    {
      store: 'Funbox-信義A8',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [
        { name: 'BX-09 戰鬥陀螺X通行證', url: 'https://lin.ee/rOMMoA5' },
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/tyBPJuM' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/qL30b7q' },
      ],
    },
    {
      store: 'Funbox 天母三越店',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [
        { name: 'BX-09 戰鬥陀螺X通行證', url: 'https://lin.ee/7EPet04' },
        { name: 'BX-52 輝耀龍騎士', url: 'https://lin.ee/9WYgV1t' },
        { name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/79zPKAV' },
        { name: 'BX-56 左旋發射器', url: 'https://lin.ee/qnxdoD5' },
      ],
    },
    {
      store: 'Funbox 台北忠孝遠東SOGO店',
      startTime: '抽選/購買時間：2026/11/06 11:00~2026/11/07 21:00',
      items: [{ name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/zUOYgbu' }],
    },
    {
      store: 'Funbox-美麗華',
      startTime: '抽選開始：2026/11/06 11:11 ｜ 抽選/購買時間：2026/11/06 11:11~2026/11/07 21:00',
      items: [{ name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/Zkgl6KR' }],
    },
    {
      store: 'Funbox-南港LaLaport',
      startTime: '抽選/購買時間：2026/11/06 11:00~2026/11/07 21:00',
      items: [{ name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/YCM7TCI' }],
    },
    {
      store: 'Funbox Toys-大葉高島屋店',
      startTime:
        '抽選/購買時間：2026/11/13～2026/11/14 購買資格券有效期間：11/13 11:00～22:00、11/14 11:00～21:00',
      items: [
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/TGFVXtn' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/9IJRxWT' },
      ],
    },
    {
      store: 'Funbox-忠孝SOGO店',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [
        { name: 'BX-09 戰鬥陀螺X通行證', url: 'https://lin.ee/RTqgCaz' },
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/SA4s1A4' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/yNDIw5Q' },
      ],
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
      items: [{ name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/pdG2WRf' }],
    },
    {
      store: 'Funbox-中和環球店',
      startTime: '抽選/購買時間：2026/11/06 11:00~2026/11/07 21:00',
      items: [{ name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/6t8OV07' }],
    },
    {
      store: 'Funbox 新店誠品店',
      startTime: '抽選開始：2026/11/06 11:00｜兌獎：11/06 11:00~22:00、11/07 11:00~21:00',
      items: [
        {
          name: 'BX-53 極限衝擊對戰組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M6NHXZMQJ1TNY3YMGV5HP6ZR',
        },
      ],
    },
    {
      store: 'Funbox-淡水禮萊廣場店',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [
        { name: 'BX-09 戰鬥陀螺X通行證', url: 'https://lin.ee/SHSUO72' },
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/77c5Fev' },
        { name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/OUSw2Qq' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/pXcImrF' },
      ],
    },
    {
      store: 'Fun box & 星奇市 汐科遠雄店',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [
        { name: 'BX-52 耀輝龍騎士 6-60LC', url: 'https://lin.ee/RxjB9wg' },
        { name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/oxmdKSJ' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/nEOXcH6' },
      ],
    },
    {
      store: 'Funbox-板橋遠百中山店',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/SHtPtuE' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/ZcBileI' },
      ],
    },
    {
      store: 'Funbox-比漾廣場',
      startTime: '抽選/購買時間：2026/11/06 11:00~2026/11/07 21:00前',
      items: [{ name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/tvn4mmW' }],
    },
    {
      store: 'Funbox-新店誠品-裕隆城',
      startTime:
        '抽選開放：2026/11/13 11:00；購買資格券有效期間：11/13 11:00～22:00、11/14 11:00～21:00',
      items: [
        { name: 'BX-09 戰鬥陀螺X通行證', url: 'https://lin.ee/NmVcLgLk' },
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/psCnKio' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/oEfqL4Y' },
      ],
    },
    {
      store: 'Funbox&Sanrio板橋大遠百',
      startTime: '抽選/販售時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [
        { name: 'BX-09 戰鬥陀螺X通行證', url: 'https://lin.ee/N2K86MU' },
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/n9VZHII' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/vEEwRLv' },
      ],
    },
    {
      store: 'Funbox-宏匯廣場',
      startTime:
        '抽選開放：2026/11/13 11:00；購買資格券有效期間：11/13 11:00～22:00、11/14 11:00～21:00',
      items: [
        { name: 'BX-09 戰鬥陀螺X通行證', url: 'https://lin.ee/Ugif0fq' },
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/OwHJvb4' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/WwjmtBK' },
      ],
    },
    {
      store: 'Funbox & 星潮玩 - 中和環球',
      startTime: '抽選/販售時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [
        { name: 'BX-09 通行證', url: 'https://lin.ee/ni9ImMS' },
        { name: 'BX-52 光輝龍騎士', url: 'https://lin.ee/9lkBfy5' },
        { name: 'BX-56 左迴旋拉線發射器白紫色', url: 'https://lin.ee/sgYcP5L' },
      ],
    },
  ],
  宜蘭縣: [
    {
      store: 'Funbox Toy-宜蘭新月廣場店',
      startTime: '購買資格券有效期間：2026/11/13 11:00～22:00；2026/11/14 11:00～21:00',
      items: [
        { name: 'BX-09 通行證', url: 'https://lin.ee/NEgcgvi' },
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/9SxS4M0' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/P8s230E' },
      ],
    },
  ],
  桃園市: [
    {
      store: 'Funbox Toys 桃園新光站前店',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/qDpNE0Y' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/ZEpDP8c' },
      ],
    },
    {
      store: 'Funbox-桃園環球A8',
      startTime:
        '抽選時間：2026/11/13 11:00～2026/11/14 21:00（抽完為止）購買資格時間：11/13 11:00～21:00、11/14 11:00～21:00',
      items: [{ name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/6MMHJPr' }],
    },
    {
      store: 'Funbox-桃園遠東店',
      startTime: '抽選/購買時間：2026/11/06 11:00~2026/11/07 21:00',
      items: [{ name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/69Fzp8o' }],
    },
    {
      store: 'Funbox-中壢大江店',
      startTime: '抽選/購買時間：2026/11/06 11:00~21:00',
      items: [{ name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/ZKBjVZn' }],
    },
    {
      store: 'Funbox-桃園環球A19',
      startTime: '抽選/購買時間：2026/11/06 11:00~2026/11/07 21:00',
      items: [{ name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/8qlf64g' }],
    },
    {
      store: 'Funbox-中壢SOGO',
      startTime: '抽選/購買時間：2026/11/06 11:00~2026/11/07 21:00',
      items: [{ name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/8J5DQlz' }],
    },
    {
      store: 'Funbox-桃園台茂店',
      startTime:
        '抽選/購買資格券抽籤期間：2026/11/06 11:00～2026/11/07 21:30（逾時恕不受理）｜請於營業時間內來店購買',
      items: [{ name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/xu4ngXk' }],
    },
  ],
  新竹市: [
    {
      store: 'Funbox-新竹遠東',
      startTime: '抽選/購買時間：2026/11/13～2026/11/14；結帳時間：11:00～21:00',
      items: [
        { name: 'BX-09 戰鬥陀螺X通行證', url: 'https://lin.ee/Pj6Obbh' },
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/8K8Kisu' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/8ofXw9k' },
      ],
    },
    {
      store: 'Fun Box 新竹巨城',
      startTime: '抽選/販售時間：2026/11/13 11:00開始～2026/11/14（截止時間未公告）',
      items: [
        { name: 'BX-09 戰鬥陀螺X戰鬥通行證 $995', url: 'https://lin.ee/SryGWrs' },
        { name: 'BX-52 輝耀龍騎士 $495', url: 'https://lin.ee/PVw2ZYf' },
        { name: 'BX-53 極限衝擊對戰組 $1995', url: 'https://lin.ee/oHDQ5BU' },
        { name: 'BX-56 左迴旋旋風發射器 白紫 $250', url: 'https://lin.ee/pdc9NOT' },
      ],
    },
    {
      store: 'Funbox-新竹遠雄',
      startTime: '抽選/販售時間：2026/11/13 11:00～2026/11/14',
      items: [
        { name: 'BB90524 BX-09 戰鬥陀螺X通行證', url: 'https://lin.ee/RbMveeT' },
        { name: 'BB08555 BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/T4jRht1' },
        { name: 'BB05891 BX-56 左迴旋風發射器（白）', url: 'https://lin.ee/yDI27Vx' },
      ],
    },
  ],
  新竹縣: [
    {
      store: 'Funbox-竹北遠東店',
      startTime: '抽選／兌獎／購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [
        { name: 'BX-52 輝耀龍騎士 6-60LC $495', url: 'https://lin.ee/td4kgoc' },
        { name: 'BX-53 極限衝擊對戰組 $1995', url: 'https://lin.ee/7ikpwGZ' },
        { name: 'BX-56 左迴旋風發射器 白紫 $250', url: 'https://lin.ee/VktiksV' },
      ],
    },
    {
      store: 'Funbox-新竹享平方',
      startTime: '抽選/購買時間：2026/11/06 11:00~2026/11/07 21:00',
      items: [{ name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/uE0o6oA' }],
    },
  ],
  苗栗縣: [
    {
      store: 'Funbox-苗栗尚順店',
      startTime: '抽選/購買時間：2026/11/06 11:00~2026/11/07 20:30',
      items: [{ name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/S3BQ2Y3' }],
    },
  ],
  台中市: [
    {
      store: 'Funbox-台中港三井店',
      startTime: '抽選時間&使用期限：2026/11/13 11:00～2026/11/14 20:30',
      items: [
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/XzMDrIh' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/wqn6V1I' },
      ],
    },
    {
      store: 'Funbox-廣三SOGO',
      startTime: '抽選/販售時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/n3Zz35w' },
        { name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/nPniAdJ' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/XTb9Jfy' },
      ],
    },
    {
      store: 'Funbox-台中中友',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [
        { name: 'BX-09 戰鬥陀螺X通行證', url: 'https://lin.ee/6uUmcKC' },
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/U9Em3yY' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/XHgstSE' },
      ],
    },
    {
      store: 'Funbox-新光三越台中中港店',
      startTime: '抽選/販售時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [
        { name: 'BX-09 戰鬥陀螺X通行證', url: 'https://lin.ee/5p4kqBx' },
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/SG0k75s' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/NFukQwC' },
      ],
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
      store: 'Funbox-文心秀泰店',
      startTime: '抽選/購買時間：2026/11/06 11:00~2026/11/07 21:00',
      items: [{ name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/OHPoiXA' }],
    },
    {
      store: 'Funbox-漢神洲際',
      startTime: '抽選/購買時間：2026/11/06 11:00～2026/11/07 21:00',
      items: [{ name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/74bssDIr' }],
    },
    {
      store: 'Funbox-豐原太平洋店',
      storeUrl: 'https://line.me/R/ti/p/@094mvrhb',
      startTime: '抽籤/販售時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [
        { name: 'BX-09 戰鬥陀螺X通行證', url: 'https://lin.ee/zhb12tW' },
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/urmVvKG' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/5RMqoRo' },
      ],
    },
    {
      store: 'Funbox-麗寶一期',
      startTime: '抽選&購買時間：2026/11/06 10:30～2026/11/07 21:00',
      items: [{ name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/UecqWGi' }],
    },
    {
      store: 'Funbox-台中LaLaport店',
      startTime: '抽選/購買時間：2026/11/06 11:00~2026/11/07 21:00',
      items: [{ name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/R5eQluD' }],
    },
  ],
  彰化縣: [
    {
      store: '來玩聚-員林店',
      startTime: '抽選/購買時間：2026/11/13 10:00～2026/11/14 21:00',
      items: [
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/P7GvuXR' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/oq8Xenh' },
      ],
    },
    {
      store: '來玩聚-彰化家樂福',
      startTime: '抽選/購買時間：2026/10/08 10:00~2026/10/09 21:00',
      items: [],
    },
    {
      store: 'Funbox-員林大潤發',
      startTime: '抽選/購買時間：2026/11/06 10:00~2026/11/07 21:00',
      items: [{ name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/xL2EDyF' }],
    },
    {
      store: 'Funbox-彰化萬家福店',
      startTime: '抽選/購買時間：2026/11/06 10:00~2026/11/07 21:00',
      items: [{ name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/tPLQUjp' }],
    },
    {
      store: '來玩聚-彰化店',
      startTime: '抽選/購買時間：2026/11/13 10:00～2026/11/14 21:00',
      items: [
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/UUhgKLU' },
        { name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/8kauGy9' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/sRFR1lj' },
      ],
    },
  ],
  雲林縣: [
    {
      store: '來玩聚-斗六店',
      startTime: '抽選/購買時間：2026/11/13 10:00～2026/11/14 21:00',
      items: [
        { name: 'BX-09 戰鬥陀螺X通行證', url: 'https://lin.ee/XjdKKgK' },
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/SY0koV7' },
        { name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/tE9mOIF' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/xWxnryM' },
      ],
    },
    {
      store: 'Funbox-斗六家樂福',
      startTime: '抽選/購買時間：2026/11/06 10:00~2026/11/07 21:00',
      items: [{ name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/9SCnRAA' }],
    },
  ],
  嘉義市: [
    {
      store: 'Funbox-嘉義遠東',
      startTime:
        '抽選資格時間：2026/11/13 11:00～2026/11/14 20:30；中籤購買時間：11/13 11:00～21:30、11/14 11:00～20:30',
      items: [
        { name: 'BX-52 輝躍龍騎士 6-60LC', url: 'https://lin.ee/Nb18l65' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/SFcEimY' },
      ],
    },
    {
      store: 'Funbox-嘉義耐斯',
      startTime:
        '抽選時間：2026/11/06 11:00~2026/11/07 21:00 ｜ 中籤購買時間：2026/11/06 11:00~22:00、2026/11/07 11:00~21:00',
      items: [{ name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/575d8lX' }],
    },
    {
      store: 'Funbox-嘉義三越',
      startTime: '購買資格券有效期間：11/13 11:00～22:00、11/14 11:00～21:00',
      items: [
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/U77OGbA' },
        { name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/QtWEedG' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/zLZTR2g' },
      ],
    },
  ],
  台南市: [
    {
      store: 'Funbox-台南三井',
      startTime: '抽選&購買資格時間：2026/11/13 11:00～2026/11/14 20:30',
      items: [
        { name: 'BX-09 戰鬥陀螺X通行證', url: 'https://lin.ee/uvCzsWq' },
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/68NyGqJ9' },
        { name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/pMjvB3u' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/pzJXtUV' },
      ],
    },
    {
      store: 'Funbox-台南遠百店',
      startTime: '抽選/購買資格時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/ogtXWvb' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/RB5qSTN' },
      ],
    },
    {
      store: 'Funbox-台南南紡店',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [
        { name: 'BX-09 戰鬥陀螺X通行證', url: 'https://lin.ee/O6wfsCg' },
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/xUDDwKS' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/5grOP1u' },
      ],
    },
    {
      store: 'Funbox-新光三越南西店',
      startTime: '抽選/購買時間：2026/11/06 11:00~2026/11/07 21:00',
      items: [{ name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/6RUJsXy' }],
    },
    {
      store: '來玩聚-新仁店',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 20:00',
      items: [
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/W5gWFeg' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/WNkEQoZ' },
      ],
    },
    {
      store: 'Funbox-新仁店',
      startTime: '抽選/購買時間：2026/11/06 11:00~2026/11/07 20:00',
      items: [{ name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/8J8uWXa' }],
    },
    {
      store: 'Funbox-台南新天地店',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [
        { name: 'BX-52 輝耀龍騎士 6-60C', url: 'https://lin.ee/93E7sti' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/5mZUTSug' },
      ],
    },
  ],
  高雄市: [
    {
      store: 'Funbox-高雄漢神店',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [
        { name: 'BX-09 戰鬥陀螺X通行證', url: 'https://lin.ee/pdXRfli' },
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/6QLkplb' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/v6SzsMm' },
      ],
    },
    {
      store: 'Funbox-漢神巨蛋店',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/O8aPOOD' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/Tqpl3Uzl' },
      ],
    },
    {
      store: 'Funbox-高雄大立店',
      startTime: '抽選/購買資格時間：2026/11/13 11:00～2026/11/14 20:30',
      items: [
        { name: 'BX-09 戰鬥陀螺X通行證', url: 'https://lin.ee/NwTUvdB' },
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/RZYgylr' },
        { name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/NX0auYu' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/5U4B9V7' },
      ],
    },
    {
      store: 'Funbox-夢時代店',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [
        { name: 'BX-09 戰鬥陀螺X通行證', url: 'https://lin.ee/51dzcwO' },
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/Ur9k6Fy' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/Yaxo90T' },
      ],
    },
    {
      store: 'Funbox大魯閣新光',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/XUrrEx4' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/8CCMdLr' },
      ],
    },
    {
      store: 'Funbox-高雄SOGO店',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [
        { name: 'BX-09 戰鬥陀螺X通行證', url: 'https://lin.ee/OqzTfPfs' },
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/770tOYA' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/OdvlbVO' },
      ],
    },
    {
      store: 'Funbox-高雄大遠百',
      startTime: '抽選/購買資格時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [
        { name: 'BX-09 戰鬥陀螺X通行證', url: 'https://lin.ee/slzGjit' },
        { name: 'BX-52 輝耀龍騎士', url: 'https://lin.ee/rHsGG6g' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/wEDh91O' },
      ],
    },
    {
      store: '來玩聚-新楠家樂福',
      startTime: '抽選/購買時間：2026/10/08 10:00 ~ 2026/10/09 21:00 止',
      items: [],
    },
    {
      store: '來玩聚-楠梓店',
      startTime: '抽選/購買時間：2026/11/13 10:00～2026/11/14 21:00',
      items: [
        { name: 'BX-09 戰鬥陀螺X通行證', url: 'https://lin.ee/T2fJSCG' },
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/yAIwtCL' },
        { name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/xkgPePy' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/nFZSZbg' },
      ],
    },
    {
      store: 'Funbox-高雄左營店',
      startTime: '抽選&購買資格時間：2026/11/06 10:30～2026/11/07 21:00',
      items: [{ name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/7AHngjX' }],
    },
    {
      store: 'Funbox-義大二館',
      startTime: '抽選/購買時間：2026/11/06 11:00～2026/11/07 21:00',
      items: [{ name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/Ub94gYU' }],
    },
    {
      store: 'Funbox-高雄義享店',
      startTime: '抽選/購買資格時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [
        { name: 'BX-09 戰鬥陀螺X通行證', url: 'https://lin.ee/wahaKVq' },
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/ZRAuQL4' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/PdcQqri' },
      ],
    },
    {
      store: '鳳山來玩聚',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [
        { name: 'BX-09 戰鬥陀螺X通行證', url: 'https://lin.ee/QewLUYm' },
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/9YbKnh9A' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/9yvTi3c' },
      ],
    },
    {
      store: '來玩聚-新楠店',
      startTime: '抽選/購買時間：2026/11/13 10:00～2026/11/14 21:00',
      items: [
        { name: 'BX-09 戰鬥陀螺X通行證', url: 'https://lin.ee/ZmIh4yS' },
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/PYATXWt' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/rZ2CzQ0' },
      ],
    },
    {
      store: 'Funbox-新楠店',
      startTime: '抽選/購買時間：2026/11/06 10:00~2026/11/07 21:00',
      items: [{ name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/ObOlKaZ' }],
    },
  ],
  屏東縣: [
    {
      store: '來玩聚-新屏店',
      startTime: '抽選資格&購買時間：2026/11/13 11:00～2026/11/14 20:00',
      items: [
        { name: 'BX-09 戰鬥陀螺X通行證', url: 'https://lin.ee/sSrtbw1' },
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/vl2QoEa' },
        { name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/NAH1H9kQ' },
        { name: 'BX-56 左迴旋風發射器', url: 'https://lin.ee/pBwZ9bX' },
      ],
    },
    {
      store: 'Funbox-屏東太平洋店',
      startTime: '抽選/購買資格時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/VmV74RJV' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/ODkSAaj' },
      ],
    },
    {
      store: 'Funbox-屏東環球',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 21:00',
      items: [
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/5KjrRyY' },
        { name: 'BX-56 左迴旋風發射器', url: 'https://lin.ee/WrJqtsZ' },
      ],
    },
  ],
  花蓮縣: [
    {
      store: 'Funbox-花蓮店',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14',
      items: [
        { name: 'BX-09 戰鬥陀螺X通行證', url: 'https://lin.ee/S09AhV5' },
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/PR5W4Po' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/PoJDK3u' },
      ],
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
      items: [
        { name: 'BX-09 戰鬥陀螺X通行證（原價 $995）', url: 'https://lin.ee/uUvqy6e' },
        { name: 'BX-52 輝耀龍騎士6-60LC（原價 $495）', url: 'https://lin.ee/O13VpFr' },
        { name: 'BX-56 左迴旋旋風發射器白紫（原價 $250）', url: 'https://lin.ee/6nOHIpW' },
      ],
    },
  ],
  澎湖縣: [
    {
      store: 'Funbox-澎湖3號港店',
      startTime: '抽選/購買時間：2026/11/13 11:00～2026/11/14 20:00',
      items: [
        { name: 'BX-09 戰鬥陀螺X通行證', url: 'https://lin.ee/P4o5WYm' },
        { name: 'BX-52 輝耀龍騎士 6-60LC', url: 'https://lin.ee/YVwwi0n' },
        { name: 'BX-53 極限衝擊對戰組', url: 'https://lin.ee/tEEC17g' },
        { name: 'BX-56 左迴旋風發射器 白紫', url: 'https://lin.ee/RUZT9Sl' },
      ],
    },
  ],
};
