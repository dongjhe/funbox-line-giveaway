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
      store: 'Funbox 忠孝SOGO店',
      storeUrl: 'https://line.me/R/ti/p/@lcn7452p',
      startTime: '抽選時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V18JX6GE1TBK80DQ7ZNHF1',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V1WKXYG92KGE3S1CRK10KD',
        },
        {
          name: 'CX-19 鱷魚裂甲',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V1XXSJR4K0R5HHBKJB9EXH',
        },
        {
          name: 'CX-16 極限衝擊對戰組C',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V206N4P28SCAX0YQ806X52',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V214EENT91DXMRHSFYP25C',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V22EYPT0NHXHKA6MR3BT58',
        },
        {
          name: 'UX-14 天蠍長矛0-70Z',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V2GBY9HD5QVDX6M0W13KPK',
        },
        {
          name: 'CX-05 隨機強化組 Vol.6',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V25PVY8ZVMRDPZXSMZG1PR',
        },
        {
          name: 'CX-08 隨機強化組 Vol.7',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V26T17QXD093VPWZEJ4TDE',
        },
        {
          name: 'UX-16 時鐘幻象 隨機強化組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V27Z375F3RFYNF60B78YDC',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V28XBRV5MCKA2SEYB8NPCJ',
        },
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V2AAE88KFH6KVRN51G8J64',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V2B5A6NFTSCDTRJX5N408Q',
        },
        {
          name: 'UX-17 隕星龍騎士3-70J',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V2C7CPK7BVZ6BV7TRPWM63',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V2DB08D0HNN3MYGC0Y2FTJ',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V2E5ZA4JEQ04HDW2SY00WM',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V2EXV6B3XYYEMW16787T1R',
        },
      ],
    },
    {
      store: 'Funbox 三越南西店',
      storeUrl: 'https://linevoom.line.me/user/_dXRCeNI62-wxECClrgjwMfi8HnY2ow5Onw6aC1A',
      startTime: '抽選/購買時間 2026/09/18 11:00 - 2026/09/19 21:00',
      items: [],
    },
    {
      store: 'Funbox 三越站前店',
      storeUrl: 'https://linevoom.line.me/user/_dTQ_Ar8kG3TZeWoB_i2PtLW_TclZiMtldppUzAQ',
      startTime: '抽選/購買時間：2026/09/24 11:00~2026/09/25 21:00',
      items: [],
    },
    {
      store: 'Funbox 天母SOGO店',
      storeUrl: 'https://linevoom.line.me/user/_db3MM1gifrvefmBbBLPWOhPAw0aPUL9K3IvLDTk',
      startTime:
        '抽選開放：2026/09/24 11:00｜購買資格券有效：2026/09/24 11:00~22:00、2026/09/25 11:00~21:00',
      items: [],
    },
    {
      store: 'Funbox 高島屋百貨',
      items: [],
    },
    {
      store: 'Funbox 信義A8店',
      storeUrl: 'https://line.me/R/ti/p/@983dfazy',
      startTime: '抽選時間：2026/10/02 11:00 ~ 2026/10/03 21:00',
      items: [
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3TSQ42N0FAFKC962NE21RB3',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3TSXYDH5EJSPT41G1FW4WAG',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3TT0HN8MSH8CAVQH9PHW2CV',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3TT1Z18V2CNKDYVCCNQX7VP',
        },
        {
          name: 'CX-05 隨機強化組 Vol.6',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3TT4FQZ5RB7TGG4EN5VQ31S',
        },
        {
          name: 'CX-08 隨機強化組 Vol.7',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3TT5RS3886KF2JMBG1ZVTGV',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3TT6ZH5D6M2FPAA44WQBTJY',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3TV2RA57MA7VR0A0AAB77MV',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3TV3ZM498S9ZRP3B7PAJ6JN',
        },
        {
          name: 'CX-16 極限衝擊對戰組C',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3TV57K975P0HTP7NS02MZ54',
        },
        {
          name: 'CX-17 隨機強化組 Vol.10',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3TV6T002N3Q2NMPSZ0PXE8C',
        },
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3TV88EMH7TJ395K47MNGS23',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3TV9WT22S8TEFBYWR79PY6S',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3TVB8FWX0YMXX4PDJE24BMH',
        },
        {
          name: 'UX-14 天蠍長矛0-70Z',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3TVHXWPQT5BS9M4Y61M7JV3',
        },
        {
          name: 'UX-16 時鐘幻象 隨機強化組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3TVK5DWRDGGM8Z2GHYYZXT7',
        },
        {
          name: 'UX-17 隕星龍騎士3-70J',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3TVM6ASES4FJPFCWS23MNJZ',
        },
        {
          name: 'UX-19 子彈獅鷲H',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M34GHNGZN3R09QM4BZ83D6ZE',
        },
      ],
    },
    {
      store: 'Funbox 美麗華',
      storeUrl: 'https://linevoom.line.me/user/_dS6PecGuAayr8FMQ6NoCcETN1oXZ0zgwun4Uivc',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
    {
      store: 'Funbox 潤泰南港車站店',
      storeUrl: 'https://line.me/R/ti/p/@924tguor',
      startTime: '抽選時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3SN9NW2MDJ2RSRA8EWNR3B0',
        },
        {
          name: 'CX-19 鱷魚裂甲',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3SMMJ0YPSCXFWCR9CM69X62',
        },
        {
          name: 'CX-05 隨機強化組Vol.6',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3SNFYA6PCAVAF1JSSHKFBJ6',
        },
        {
          name: 'CX-08 隨機強化組Vol.7',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3SNMP11ASF2HJKE4Z5HYQK7',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3SN2JZRG8CFR1KXX5F7VRJN',
        },
        {
          name: 'CX-16 極限衝擊對戰組C',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3SM7YDXQWSKF26FY49C253B',
        },
        {
          name: 'CX-11 帝王威能改造組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3SMD18PNQV19T5BWPAMR417',
        },
        {
          name: 'UX-16 時鐘幻象 隨機強化組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3SNTD3JYJMDNY5M4WDW0W5G',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3SMXPSVW5V9FAG4B5SF7XQ2',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3SMRSCTBVX1MMH0MCR34SRC',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3SP48ZFZSQS2R06G4MJSYJD',
        },
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3SP9Z9N0XTN2CVG8A3JERZ0',
        },
        {
          name: 'UX-17 隕星龍騎士（左迴旋）',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3SPFD1414VQA69NZ2YA5ZXJ',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3SPMCFZEPY4MSRBZ4TQ8YAF',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3SPSGNMBHKXD2PYN0HZXXQ1',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3SKF9RBVTRBTAJ881TKTYTN',
        },
        {
          name: 'BXG-01 烈焰飛鳳S',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3SKMFHH44YEYRKAS96WFAQ6',
        },
        {
          name: 'UX-14 天蠍長矛',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3SKSDD0MXAHDCR83QWYK9Q0',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3SKXPBP1K37FWT4MMN0K2RR',
        },
        {
          name: 'UX-19 子彈獅鷲',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3SM2WKKA9QXZT2FAZVJA5N6',
        },
      ],
    },
    {
      store: 'Funbox 天母三越店',
      storeUrl: 'https://line.me/R/ti/p/@237annfd',
      startTime: '抽選時間：2026/09/24(11:00)-2026/09/25(21:00',
      items: [],
    },
    {
      store: 'Funbox 遠百信義A13',
      storeUrl: 'https://linevoom.line.me/user/_dZWTe6za3_22gXVkl46uAq37zC6nwkQQCwZnBoA',
      startTime: '抽選/購買時間：2026/09/24 11:00~2026/09/25 21:00',
      items: [],
    },
    {
      store: 'Funbox 南港LaLaport',
      storeUrl: 'https://linevoom.line.me/user/_dVgaAWKsM1ofi6bVa7iJV1_zOspCOrdSv0vgXKw',
      startTime: '抽選/購買時間 2026/09/11 11:00 - 2026/09/12 21:00',
      items: [],
    },
    {
      store: 'Funbox 台北大巨蛋',
      storeUrl: 'https://www.facebook.com/profile.php?id=61593737335376',
      startTime: '抽選/購買時間：2026/09/24 11:00~2026/09/25 21:00',
      items: [],
    },
    {
      store: '來玩聚-北車地下街',
      storeUrl: 'https://linevoom.line.me/user/_dXjo38IGuVk3obdbWWB8DVc86lCei15_6UkRuW8',
      startTime: '抽選時間：2026/09/18 12:00~2026/09/19 19:30',
      items: [],
    },
  ],
  新北市: [
    {
      store: 'FUNBOX 比漾廣場店',
      storeUrl: 'https://linevoom.line.me/user/_dQbxr4jKpXDT3BtXULflBCgU9GujoUvNaAUOOZo',
      startTime: '抽選/購買時間 2026/09/18 開店 - 2026/09/19 21:00',
      items: [],
    },
    {
      store: 'Funbox 板橋遠百中山店',
      storeUrl: 'https://linevoom.line.me/user/_dUcATZnmDAam7Low6HB0-JXZC1DzUJEbh8hA8Gg',
      startTime: '抽選/購買時間：2026/09/24 11:00~2026/09/25 21:00',
      items: [],
    },
    {
      store: 'Funbox 中和環球店',
      storeUrl: 'https://linevoom.line.me/user/_dSg6slLn5Zg47l9CPlGC-LezlX4EP3fmltKvQRs',
      startTime: '抽選/購買時間：2026/09/24 11:00~2026/09/25 21:00',
      items: [],
    },
    {
      store: 'Funbox 板橋大遠百',
      storeUrl: 'https://linevoom.line.me/user/_dblyPGfsKpebVOKvBaP8gs72hysvg-G0EVYLyv4',
      startTime: '抽選/購買時間：2026/09/24 11:00~2026/09/25 21:00',
      items: [],
    },
    {
      store: 'Funbox 汐科遠雄',
      storeUrl: 'https://linevoom.line.me/user/_dXWlFT8AyCrEdtsk_fRRUYuqERc8rWDzx3c6DUA',
      startTime: '抽選/購買時間：2026/09/24 11:00~2026/09/25 21:00',
      items: [],
    },
    {
      store: 'Funbox 樹林秀泰店',
      storeUrl: 'https://linevoom.line.me/user/_dSj7fhnsKdDEm1q2ehrYEJTOyrm4OuI2NFsN3I0',
      startTime: '抽選/販售時間：2026/09/24 11:00~2026/09/25 21:00',
      items: [],
    },
    {
      store: 'Funbox 淡水禮萊廣場',
      storeUrl: 'https://line.me/R/ti/p/@944creff',
      items: [],
    },
    {
      store: 'Funbox 宏匯廣場',
      items: [],
    },
    {
      store: 'Funbox 新店誠品-裕隆城',
      startTime:
        '抽選：2026/09/24 11:00 開放｜購買資格券有效：2026/09/24 11:00~21:30、2026/09/25 11:00~21:00',
      items: [],
    },
  ],
  宜蘭縣: [
    {
      store: 'Funbox 宜蘭新月店',
      storeUrl: 'https://line.me/R/ti/p/@027iendl',
      startTime:
        '抽選開放：2026/09/24 11:00｜購買資格券有效：2026/09/24 11:00~22:00、2026/09/25 11:00~21:00',
      items: [],
    },
  ],
  桃園市: [
    {
      store: 'Funbox 桃園站前店',
      storeUrl: 'https://line.me/R/ti/p/@fcm1241y',
      startTime: '抽選時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [
        {
          name: 'CX-16 極限衝擊對戰組C',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RPABTJ7CM9748YM5HDNDHS',
        },
        {
          name: 'BX-37 雙重極限衝擊戰鬥盤 豪華組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RPW0CTK4CN399Z43QXCSB9',
        },
        {
          name: 'UX-14 天蠍長矛0-70Z',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RP85VS6DB8Q4GY8AA3MZPX',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RNZKCDY48MMDN3MXK4ZFKR',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RNWJYT0N3MAFVPETTVJMMZ',
        },
        {
          name: 'CX-17 隨機強化組 Vol.10',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RNPHFAWKNNABW2X7V9SCWY',
        },
      ],
    },
    {
      store: 'Funbox 桃園遠東',
      storeUrl: 'https://line.me/R/ti/p/@bix0595a',
      items: [],
    },
    {
      store: 'Funbox 中壢SOGO',
      storeUrl: 'https://line.me/R/ti/p/@xcs3672w',
      items: [],
    },
    {
      store: 'Funbox 中壢大江店',
      storeUrl: 'https://linevoom.line.me/user/_daOwg6Nz08TwGFzWoVR264J1CWj5Lp8g0Lgf-QM',
      startTime: '抽選&購買時間 2026/09/11 11:00 - 2026/09/12 21:00',
      items: [],
    },
    {
      store: 'Funbox 桃園環球A8',
      storeUrl: 'https://lin.ee/sWtYTIo',
      startTime: '戰鬥陀螺X抽籤及販售時間：2026/09/24 11:00~2026/09/25 21:00',
      items: [],
    },
    {
      store: 'Funbox Toys 桃園台茂店',
      storeUrl: 'https://lin.ee/RawWy0S',
      startTime: '戰鬥陀螺X抽籤及販售時間：2026/09/24 11:00~2026/09/25 21:30',
      items: [],
    },
    {
      store: 'Funbox 環球桃園A19',
      storeUrl: 'https://linevoom.line.me/user/_dQguBN50HV7T3jjTaZbJKVwoET6cJJH2Kj43Y2E',
      startTime: '抽選/購買時間：2026/09/24 11:00~2026/09/25 21:00',
      items: [],
    },
  ],
  新竹市: [
    {
      store: 'Funbox-新竹遠東店',
      storeUrl: 'https://linevoom.line.me/user/_dYjgWm0vwMyoPEcmLUOBhOQ55A0WaB7EuLfW5Mw',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
    {
      store: 'Funbox 新竹巨城店',
      storeUrl: 'https://linevoom.line.me/user/_dSYAGjN3DhBtiB8tU2pa3kl5yoRdBG7ucZNUZvo',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
    {
      store: 'Funbox 新竹遠雄',
      storeUrl: 'https://line.me/R/ti/p/@agl4214l',
      startTime: '抽選/購買時間：2026/09/24 11:00~2026/09/25 21:00',
      items: [],
    },
  ],
  新竹縣: [
    {
      store: 'Funbox 竹北遠東店',
      storeUrl: 'https://line.me/R/ti/p/@642vdyvq',
      startTime: '抽選時間：2026/10/02 11:00 -2026/10/03 21:00',
      items: [
        {
          name: 'UX-16 時鐘幻象 隨機強化組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3S06N0D351XQTW0YN0CVFR0',
        },
        {
          name: 'CX-05 隨機強化組 Vol.6',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3S0MRVWJYH5HEFATHYN3JQN',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3S0XRD24XRA81ZW6GYB9Y51',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3S11N0X494V0VNZNRFDYGH0',
        },
        { name: 'UX-01 蒼龍爆刃', url: 'https://lin.ee/VV1aw' },
      ],
    },
    {
      store: 'funbox 享平方店',
      storeUrl: 'https://linevoom.line.me/user/_dfuDiJPQBJn4ih1iarevDIEIB9XvR-_q44VI6bE',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19（依原公告）',
      items: [],
    },
  ],
  苗栗縣: [
    {
      store: 'Funbox 苗栗尚順',
      storeUrl: 'https://line.me/R/ti/p/@185vowmo',
      items: [],
    },
  ],
  台中市: [
    {
      store: 'Funbox 台中中友',
      storeUrl: 'https://linevoom.line.me/user/_dVExgXo7x7ugfZBDIYzfRF8XR9geWiZncXXAkNM',
      startTime: '抽選/購買時間：2026/09/24 11:00~2026/09/25 21:00',
      items: [],
    },
    {
      store: 'Funbox 豐原太平洋店',
      storeUrl: 'https://linevoom.line.me/user/_dWUEiTQIz0C550q-X-t3o65-r0CLa8-fBL6b6u8',
      startTime: '抽選/購買時間：2026/09/24 11:00~2026/09/25 21:00',
      items: [],
    },
    {
      store: 'Funbox 台中遠東',
      storeUrl: 'https://line.me/R/ti/p/@147vfxjr',
      items: [],
    },
    {
      store: 'Funbox 廣三SOGO店',
      storeUrl: 'https://line.me/R/ti/p/@526bsjmb',
      startTime: '抽選時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [
        {
          name: 'UX-03 魔導神杖(原價$295)',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V0BHC1HEEQW6Z70W69BTK5',
        },
        {
          name: 'UX-13 魔像奇岩(原價$295)',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3TZQ74DXTN762SD86F5Z5RB',
        },
        {
          name: 'CX-15 邪神狂怒(原價$350)',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3TZGV5GPX33BGGAAEGRT227',
        },
        {
          name: 'CX-03 英仙幽冥(原價$350)',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3TZSR0G2WPMBNV1JHYM0E87',
        },
        {
          name: 'UX-01 蒼龍爆刃(原價$395)',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V006CTAQA68AEHG122N2HK',
        },
        {
          name: 'CX-13 龍王閃擊(原價$495)',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3TZWVMVM7XSBGDTWED2R0YM',
        },
        {
          name: 'CX-02 魔導至尊(原價$495)',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V02ERFXX2ET780GBDSHEP1',
        },
        {
          name: 'UX-17 隕星龍騎士3-70J (原價$550)',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V059D63ZFHNDEP6GJP25NW',
        },
        {
          name: 'CX-11 帝王威能 (原價$995)',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V0E30JZZ1KWDX6Y3CDSBJ8',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組(原價$1395)',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V09KERSAE5BPGH4MP35201',
        },
      ],
    },
    {
      store: 'Funbox 新光三越台中中港店',
      storeUrl: 'https://linevoom.line.me/user/_dcavY93jrqjYaLVO8JR44m7jxZNARF__lfYuyIo',
      startTime: '抽選/購買時間：2026/09/24 11:00~2026/09/25 21:00',
      items: [],
    },
    {
      store: 'Funbox 台中新時代店',
      storeUrl: 'https://line.me/R/ti/p/@hdg3289a',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
    {
      store: 'Funbox 文心秀泰店',
      storeUrl: 'https://linevoom.line.me/user/_dVbUMDyduUeLgyWJWRb0k8o55Sa-xzXFMnCJxpE',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
    {
      store: 'Funbox 麗寶一期',
      storeUrl: 'https://linevoom.line.me/user/_dZD8OLWoBDH7CMfvg3nqfJoIb3wQMGpZ_V7DOOI',
      startTime: '抽選/購買時間：2026/09/24 11:00~2026/09/25 21:00',
      items: [],
    },
    {
      store: 'Funbox 台中港三井店',
      storeUrl: 'https://line.me/R/ti/p/@816xpruh',
      startTime: '抽選時間：2026/10/02 11:00~2026/10/03 20:30',
      items: [
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3P6X5HC3X7M9SB7MMDCWQRJ',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3P717F499ZD2K99E2ES0AFB',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3P6T3G70Q1EHFTWZ70EA44F',
        },
        {
          name: 'CX-05 隨機強化組 Vol.6',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3P75CX7WH09H6D2MZJGEWGV',
        },
        {
          name: 'CX-08 隨機強化組 Vol.7',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3P78K1FZETX54XK8X1ED47V',
        },
        {
          name: 'CX-11 帝王威能',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3P7B8XPV8Q06R4XCH9BW2XB',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3P7FWB51C7DD89BG6WDJD8T',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3P7R1YC6EB0H02YCQSEGTXP',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3P7K53E6KMHQ9V4BPMJH8WW',
        },
        {
          name: 'CX-16 極限衝擊對戰組C',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3P7NM6SQ4KSM62YMDYWSS2P',
        },
        {
          name: 'CX-17 隨機強化組 Vol.10',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3P7TF0CMWVR9ZH0Q5VB4S6R',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3P7WRRTAE1X8G1XMH8MM9CY',
        },
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3P85GVQKZAGAA397CYX8VFT',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3P8808EGWE0714Q6X3P397S',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3P8AZPXPYJS518JJ83A4PRP',
        },
        {
          name: 'UX-14 天蠍長矛0-70Z',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3P8D4TYJVGFMPDK84MQB6B4',
        },
        {
          name: 'UX-15 鮫鯊狂鱗改造組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3P8F5MF12A3C1RXWBYD35CK',
        },
        {
          name: 'UX-16 時鐘幻象 隨機強化組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3P8J4GGTD4MTH5XRGE13KJT',
        },
        {
          name: 'UX-17 隕星龍騎士3-70J',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3P8N07YMD761DT6JMTVY3ZR',
        },
        {
          name: 'UX-19 子彈獅鷲H',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3P8Q6WQ5E7RH7RNJHMWVKH8',
        },
      ],
    },
    {
      store: 'Funbox 台中Lalaport',
      storeUrl: 'https://line.me/R/ti/p/@620dfrfm',
      items: [],
    },
    {
      store: 'Funbox 台中漢神洲際',
      storeUrl: 'https://line.me/R/ti/p/@218xxrbx',
      items: [],
    },
  ],
  彰化縣: [
    {
      store: '來玩聚 彰化店',
      storeUrl: 'https://linevoom.line.me/user/_deL1i2Bb8uUCbeQ10yCnEvVLz_iZbXwvFtNNTRM',
      startTime: '抽選/購買時間：2026/09/24 10:00~2026/09/25 21:00',
      items: [],
    },
    {
      store: '來玩聚 員林店',
      storeUrl: 'https://linevoom.line.me/user/_dar-0z1aYQPkB0W-BiwgwDp6XsDKAdehbmupEaI',
      startTime: '抽選/購買時間：2026/09/24 10:00~2026/09/25 21:00',
      items: [],
    },
  ],
  雲林縣: [
    {
      store: '來玩聚 斗六店',
      storeUrl: 'https://linevoom.line.me/user/_ddu256ZXwJCBqOeIfKwY6QYdeIvbrVOmBRIOKfo',
      startTime: '抽選/購買時間：2026/09/24 10:00~2026/09/25 21:00',
      items: [],
    },
  ],
  嘉義市: [
    {
      store: 'Funbox 嘉義遠東店',
      storeUrl: 'https://line.me/R/ti/p/@gno1826d',
      startTime: '抽選時間：2026/10/02 11:00~2026/10/03 20:30',
      items: [
        {
          name: 'UX-20 榮耀武神LF',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3GYDRW1C20D1JX8MQTZ8R6D',
        },
        {
          name: 'CX-11 帝王威能',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3GYAF7MX57SCPPK002KW26A',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3GXP7EJW82KVJPKYKQR6TJN',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3GXBFNASD6DP02BPWRMBK9F',
        },
        {
          name: 'UX-15 鮫殺狂鱗改造組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3GY23HGZ4EDD3VTJPXEXW1P',
        },
        {
          name: 'CX-19 鱷魚裂甲',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3GYAF7MX57SCPPK002KW26A',
        },
        {
          name: 'UX-19 子彈獅鷲H',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3GXVYDJ8AJAZSFQ76EN23PH',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3GZ0170KJF7MXPDDDPG79HK',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3GZFD36FPZK0CP6606K29DF',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3GZS6MWZRQHY6PEKADFEXZ8',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3H01SXRQ1SEMZHMRF0VFCQB',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3H0BSSMYM74Z8C43QTD5CS8',
        },
        {
          name: 'CX-08 隨機強化組Vo1.7',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3H0PYNYYZ9K8WD2YWVZP7SJ',
        },
        {
          name: 'CX-05 隨機強化組Vo1.6',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3H10MRWJPQF16NWEFD9V00P',
        },
        {
          name: 'CX-17 隨機強化組Vol.10',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3H18EP43HDW94VPQVGHWCN7',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3H1GSPQM1H6F7MS8CKZHP21',
        },
        {
          name: 'CX-16 極限衝擊對戰組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3H1R7NS9TGF6JT4Q4ZFBA2M',
        },
        {
          name: 'UX-14 天蠍長矛0-70Z',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3H2XBPE7FG5RC3ZMGF6MSSR',
        },
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3H34X4CVZATK44VJD0SZ800',
        },
      ],
    },
    {
      store: 'Funbox 嘉義耐斯',
      storeUrl: 'https://line.me/R/ti/p/@121vsdww',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
    {
      store: 'Funbox 嘉義三越',
      storeUrl: 'https://linevoom.line.me/user/_dVZ_jIBO92xnDLzsC9JfjVWMgA2TNLQ2hncb3Ok',
      startTime:
        '抽選開放：2026/09/24 11:00｜購買資格券有效：2026/09/24 11:00~22:00、2026/09/25 11:00~21:00',
      items: [],
    },
  ],
  台南市: [
    {
      store: 'Funbox 台南遠百店',
      storeUrl: 'https://linevoom.line.me/user/_dWKgSOpFJ9bwQuysxkGH0jnCsb22vMfW7kuZDzU',
      startTime: '抽選/購買資格時間：2026/09/24 11:00~2026/09/25 21:00',
      items: [],
    },
    {
      store: 'Funbox 台南新天地',
      startTime: '抽選/購買時間：2026/09/24 11:00~2026/09/25 21:00',
      items: [],
    },
    {
      store: 'Funbox 台南南紡店',
      startTime: '抽選/購買時間：2026/09/24 11:00~2026/09/25 21:00',
      items: [],
    },
    {
      store: 'Funbox 台南三井',
      storeUrl: 'https://linevoom.line.me/user/_dTp06Slhdio7LDmd8xKxz3J2mw25-ZMRXZtXQ9I',
      startTime: '抽選/購買資格時間：2026/09/24 11:00~2026/09/25 20:30',
      items: [],
    },
    {
      store: '來玩聚 新仁店',
      startTime: '抽選/購買時間：2026/09/24 11:00~2026/09/25 20:00',
      items: [],
    },
  ],
  高雄市: [
    {
      store: 'Funbox 高雄漢神店',
      storeUrl: 'https://linevoom.line.me/user/_dZFySf-_Iy1JFk7B9OJx3p-R8KIqsjXVk6wMx_s',
      startTime: '抽選/購買時間：2026/09/24 11:00~2026/09/25 21:00',
      items: [],
    },
    {
      store: 'Funbox 高雄SOGO店',
      storeUrl: 'https://linevoom.line.me/user/_dV2_iZGnvicFJijn62vXHA57ANIeliHDGI7gnRo',
      startTime: '抽選/購買時間：2026/09/24 11:00~2026/09/25 21:00',
      items: [],
    },
    {
      store: 'Funbox 高雄大遠百',
      storeUrl: 'https://linevoom.line.me/user/_dYOR2VczscGNCah5bglUoA62Gj_YR_lq2R-UoMs',
      startTime: '抽選/購買時間：2026/09/24 11:00~2026/09/25 21:00',
      items: [],
    },
    {
      store: 'Funbox 漢神巨蛋店',
      storeUrl: 'https://linevoom.line.me/user/_dZuBlwRH9v-DXFkhIH9m1xAU7En6xl4R3qc363s',
      startTime: '抽選/購買時間：2026/09/24 11:00~2026/09/25 21:00',
      items: [],
    },
    {
      store: 'Funbox 高雄左營店',
      storeUrl: 'https://line.me/R/ti/p/@obz8096L',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
    {
      store: 'Funbox 夢時代店',
      storeUrl: 'https://linevoom.line.me/user/_dVHpcOhwVrBQ3ZY1xQBHuGMcluZ-yMcOSsSnRfU',
      startTime: '抽選/購買時間：2026/09/24 10:30~2026/09/25 21:00',
      items: [],
    },
    {
      store: 'Funbox 高雄大立店',
      storeUrl: 'https://linevoom.line.me/user/_dQjEieF9ohNmyCT1yYbOpfT_jw3DHpatmfmuM5o',
      startTime: '抽選/購買時間：2026/09/24 11:00~2026/09/25 20:30',
      items: [],
    },
    {
      store: 'Funbox 義大2館',
      storeUrl: 'https://line.me/R/ti/p/@bxd6822t',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
    {
      store: 'Funbox 高雄義享店',
      storeUrl: 'https://line.me/R/ti/p/@777nkbeo',
      startTime: '抽選/購買時間：2026/09/24 10:30~2026/09/25 21:00',
      items: [],
    },
    {
      store: 'Funbox 大魯閣新光',
      storeUrl: 'https://linevoom.line.me/user/_dQ0ecVMFJ6V-NPSlxQbE5hqjsBH-WOBO5HdSv4Q',
      startTime: '抽選/購買時間：2026/09/24 11:00~2026/09/25 21:00',
      items: [],
    },
    {
      store: '鳳山來玩聚',
      storeUrl: 'https://linevoom.line.me/user/_dYHKZsEifm4hbpeUB6f8DAHE-NaYM-f4lmS_yxc',
      startTime: '戰鬥陀螺X抽籤及販售時間：2026/09/24 11:00~2026/09/25 21:00',
      items: [],
    },
    {
      store: '來玩聚 楠梓店',
      storeUrl: 'https://linevoom.line.me/user/_dVPoSlHQT0aqmC-EZpckQXYHAMiL802BM23S7qk',
      startTime: '抽選/購買時間：2026/09/24 10:00~2026/09/25 21:00',
      items: [],
    },
    {
      store: '來玩聚 新楠店',
      storeUrl: 'https://linevoom.line.me/user/_deAwpKm1kymi62-wvUqTCvK1LpCSk5bvwxAubMQ',
      startTime: '抽選/購買時間：2026/09/24 10:00~2026/09/25 21:00',
      items: [],
    },
  ],
  屏東縣: [
    {
      store: 'Funbox 屏東太平洋店',
      storeUrl: 'https://linevoom.line.me/user/_dTnMNq0eoiZ5jnuQaFUz2oVpxylrT13ojfI_Ko8',
      startTime: '抽選/購買時間：2026/09/24 11:00~2026/09/25 21:00',
      items: [],
    },
    {
      store: 'Funbox 屏東環球',
      storeUrl: 'https://linevoom.line.me/user/_dfq4IRS_qaEaR4Svk0SKsB78xW9x2-lkU1wSpKU',
      startTime: '抽選/購買時間：2026/09/24 11:00~2026/09/25 21:00',
      items: [],
    },
  ],
  花蓮縣: [
    {
      store: 'Funbox 花蓮店',
      startTime: '抽選開始：2026/09/24（四）11:00（貼文未註明截止時間）',
      items: [],
    },
  ],
  台東縣: [
    {
      store: 'Funbox 台東秀泰店',
      storeUrl: 'https://linevoom.line.me/user/_dWiMasxT4CrK1ogY11eoxXAVvwO-U9Fchsvba6o',
      startTime: '抽選/購買時間：2026/09/24 11:00~2026/09/25 21:00',
      items: [],
    },
    {
      store: '來玩聚 台東家樂福',
      startTime: '抽選/購買時間：2026/09/24 11:00~2026/09/25 20:00',
      items: [],
    },
  ],
  澎湖縣: [
    {
      store: 'Funbox 澎湖3號港店',
      startTime: '抽選/購買時間：2026/09/24 10:00~2026/09/25 20:30',
      items: [],
    },
  ],
};
