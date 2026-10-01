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
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://lin.ee/YMVtTVb',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://lin.ee/zL9A0bU',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://lin.ee/q1KM7Ua',
        },
        {
          name: 'UX-14 天蠍長矛0-70Z',
          url: 'https://lin.ee/TIvACn4',
        },
        {
          name: 'UX-16 時鐘幻象 隨機強化組',
          url: 'https://lin.ee/Nryv8zhu',
        },
        {
          name: 'UX-17 隕星龍騎士3-70J',
          url: 'https://lin.ee/Tp67h5G',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://lin.ee/5NY1bAc',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://lin.ee/sSPVTS8',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://lin.ee/oAvh403',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://lin.ee/Rq18wdb',
        },
        {
          name: 'CX-05 隨機強化組 Vol.6',
          url: 'https://lin.ee/N1c520K',
        },
        {
          name: 'CX-08 隨機強化組 Vol.7',
          url: 'https://lin.ee/pciMk1q',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://lin.ee/sOyJHV4',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://lin.ee/siHEN7F',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://lin.ee/svqzhdlh',
        },
        {
          name: 'CX-16 極限衝擊對戰組C',
          url: 'https://lin.ee/8P8N87X',
        },
        {
          name: 'CX-19 鱷魚裂甲',
          url: 'https://lin.ee/SpqGO7v',
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
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://lin.ee/ozAu9Hp',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://lin.ee/tqYq5ai',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://lin.ee/vjuRENY',
        },
        {
          name: 'UX-14 天蠍長矛0-70Z',
          url: 'https://lin.ee/t5JoVOZ',
        },
        {
          name: 'UX-16 時鐘幻象 隨機強化組',
          url: 'https://lin.ee/Zw7zOX8',
        },
        {
          name: 'UX-17 隕星龍騎士3-70J',
          url: 'https://lin.ee/n51N5Su',
        },
        {
          name: 'UX-19 子彈獅鷲H',
          url: 'https://lin.ee/SKirLcd',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://lin.ee/rq9WA14',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://lin.ee/wl6n4ZB',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://lin.ee/VAzPsVy',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://lin.ee/YQuuvbFH',
        },
        {
          name: 'CX-05 隨機強化組 Vol.6',
          url: 'https://lin.ee/ZPgX6Fn',
        },
        {
          name: 'CX-08 隨機強化組 Vol.7',
          url: 'https://lin.ee/oIA4UCI',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://lin.ee/Uzy5qqB',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://lin.ee/6oKq3Hi',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://lin.ee/pYYm51a',
        },
        {
          name: 'CX-16 極限衝擊對戰組C',
          url: 'https://lin.ee/trPxoT5',
        },
        {
          name: 'CX-17 隨機強化組 Vol.10',
          url: 'https://lin.ee/ydGwzvN',
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
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://lin.ee/yF6X0kS',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://lin.ee/vjM90kw',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://lin.ee/sNu8WCk',
        },
        {
          name: 'UX-14 天蠍長矛',
          url: 'https://lin.ee/z6Wbn1Q',
        },
        {
          name: 'UX-16 時鐘幻象 隨機強化組',
          url: 'https://lin.ee/Wu7KWWS',
        },
        {
          name: 'UX-17 隕星龍騎士（左迴旋）',
          url: 'https://lin.ee/uZzH2S6',
        },
        {
          name: 'UX-19 子彈獅鷲',
          url: 'https://lin.ee/7RQgmux',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://lin.ee/rdX8gu7',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://lin.ee/nHUAzJ0',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://lin.ee/WmkOaO1',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://lin.ee/XuvQPtao',
        },
        {
          name: 'CX-05 隨機強化組Vol.6',
          url: 'https://lin.ee/OPkYwve',
        },
        {
          name: 'CX-08 隨機強化組Vol.7',
          url: 'https://lin.ee/9uUlN6m2',
        },
        {
          name: 'CX-11 帝王威能改造組',
          url: 'https://lin.ee/QaqrfPC',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://lin.ee/NFpN4G4',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://lin.ee/St82m6y',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://lin.ee/sMNeBW7',
        },
        {
          name: 'CX-16 極限衝擊對戰組C',
          url: 'https://lin.ee/yYWqrgR',
        },
        {
          name: 'CX-19 鱷魚裂甲',
          url: 'https://lin.ee/PvQSP4Z',
        },
        {
          name: 'BXG-01 烈焰飛鳳S',
          url: 'https://lin.ee/x2ykNes',
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
      startTime: '抽選/購買時間：2026/10/02 12:00~2026/10/03 19:30',
      items: [
        {
          name: 'BX-09 戰鬥陀螺X通行證',
          url: 'https://lin.ee/o9j4Wjs',
        },
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://lin.ee/rGCyqe7',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://lin.ee/UxlHm8I',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://lin.ee/NG3AzZh',
        },
        {
          name: 'UX-14 天蠍長矛0-70Z',
          url: 'https://lin.ee/yTSDGHU',
        },
        {
          name: 'UX-15 鮫鯊狂鱗改造組',
          url: 'https://lin.ee/PrarqQV',
        },
        {
          name: 'UX-16 時鐘幻象 隨機強化組',
          url: 'https://lin.ee/RFo0Uzh',
        },
        {
          name: 'UX-17 隕星龍騎士3-70J',
          url: 'https://lin.ee/qzWUbnx4',
        },
        {
          name: 'UX-19 子彈獅鷲H',
          url: 'https://lin.ee/oSqPZ5a',
        },
        {
          name: 'UX-20 榮耀武神LF',
          url: 'https://lin.ee/PSnFJUv',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://lin.ee/udhNKxQ',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://lin.ee/X25O8hC',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://lin.ee/pIl9zDS',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://lin.ee/PLV2INh',
        },
        {
          name: 'CX-05 隨機強化組 Vol.6',
          url: 'https://lin.ee/z5EoRaK',
        },
        {
          name: 'CX-08 隨機強化組 Vol.7',
          url: 'https://lin.ee/u8q8A63',
        },
        {
          name: 'CX-11帝王威能',
          url: 'https://lin.ee/xYbNzrt',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://lin.ee/ovMCFg4',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://lin.ee/nuSmRPs',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://lin.ee/VU24YXu',
        },
        {
          name: 'CX-16 極限衝擊對戰組C',
          url: 'https://lin.ee/9S44qNk',
        },
        {
          name: 'CX-17 隨機強化組 Vol.10',
          url: 'https://lin.ee/YJIo6R7',
        },
        {
          name: 'CX-19 鱷魚裂甲 隨機強化組',
          url: 'https://lin.ee/75PGLJm',
        },
      ],
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
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [
        {
          name: 'BX-37 雙重極限衝擊戰鬥盤 豪華組',
          url: 'https://lin.ee/t8NtMOc',
        },
        {
          name: 'UX-14 天蠍長矛0-70Z',
          url: 'https://lin.ee/sJ6eqYX',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://lin.ee/T99i58x',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://lin.ee/olgl2YT',
        },
        {
          name: 'CX-16 極限衝擊對戰組C',
          url: 'https://lin.ee/5LcZkAX',
        },
        {
          name: 'CX-17 隨機強化組 Vol.10',
          url: 'https://lin.ee/6Tmc1uG',
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
      startTime: '抽籤/兌獎/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [
        {
          name: 'BX-09 戰鬥陀螺X通行證',
          url: 'https://lin.ee/8ycqyoA',
        },
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://lin.ee/VV1awfY',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://lin.ee/yLuncJl',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://lin.ee/udttdNX',
        },
        {
          name: 'UX-14 天蠍長矛0-70Z',
          url: 'https://lin.ee/VrVMqHy',
        },
        {
          name: 'UX-15 鮫鯊狂鱗改造組',
          url: 'https://lin.ee/9Fh7ZGs',
        },
        {
          name: 'UX-16 時鐘幻象 隨機強化組',
          url: 'https://lin.ee/xle15Mf',
        },
        {
          name: 'UX-17 隕星龍騎士3-70J',
          url: 'https://lin.ee/5uOj4dq',
        },
        {
          name: 'UX-19 子彈獅鷲H',
          url: 'https://lin.ee/87VKARB',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://lin.ee/RWm4agBw',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://lin.ee/vWznWmr',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://lin.ee/7ZIonFO',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://lin.ee/O2RJecC',
        },
        {
          name: 'CX-05 隨機強化組 Vol.6',
          url: 'https://lin.ee/Sfkwb5D',
        },
        {
          name: 'CX-11 帝王威能',
          url: 'https://lin.ee/8eiKSa4',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://lin.ee/Wdcw5fr',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://lin.ee/twS2U90',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://lin.ee/qTEEoMM',
        },
        {
          name: 'CX-16 極限衝擊對戰組C',
          url: 'https://lin.ee/QLeQWfG',
        },
        {
          name: 'CX-17 隨機強化組 Vol.10',
          url: 'https://lin.ee/TBYus1X',
        },
        {
          name: 'CX-19 鱷魚裂甲 隨機強化組',
          url: 'https://lin.ee/PFcp4007',
        },
        {
          name: 'BXG-01 烈焰飛鳳S',
          url: 'https://lin.ee/O2n1viOU',
        },
        {
          name: 'X-08 隨機強化組 Vol.7',
          url: 'https://lin.ee/ronnAry',
        },
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
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://lin.ee/yJQF6Kn',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://lin.ee/ntDeAVb',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://lin.ee/wy4GieJ',
        },
        {
          name: 'UX-17 隕星龍騎士3-70J',
          url: 'https://lin.ee/tqijn8k',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://lin.ee/U8syXaY',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://lin.ee/UaKmVDa',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://lin.ee/oiSXAn1',
        },
        {
          name: 'CX-11 帝王威能',
          url: 'https://lin.ee/TciLCEC',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://lin.ee/TozK3fz',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://lin.ee/pbUgIUI',
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
      startTime: '抽籤時間&使用期限：2026/10/02 11:00~2026/10/03 20:30',
      items: [
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://lin.ee/ZofKvDO',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://lin.ee/OFaJA5y',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://lin.ee/NdOrtym',
        },
        {
          name: 'UX-14 天蠍長矛0-70Z',
          url: 'https://lin.ee/Zr2U2xb',
        },
        {
          name: 'UX-15 鮫鯊狂鱗改造組',
          url: 'https://lin.ee/soLfDqD',
        },
        {
          name: 'UX-16 時鐘幻象 隨機強化組',
          url: 'https://lin.ee/X4QZpE2',
        },
        {
          name: 'UX-17 隕星龍騎士3-70J',
          url: 'https://lin.ee/PwNIwGj',
        },
        {
          name: 'UX-19 子彈獅鷲H',
          url: 'https://lin.ee/py7n7LO',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://lin.ee/oHuDgZs',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://lin.ee/YsvZVoC',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://lin.ee/pi0x0uz',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://lin.ee/Sdho5Am',
        },
        {
          name: 'CX-05 隨機強化組 Vol.6',
          url: 'https://lin.ee/7sxiuN5',
        },
        {
          name: 'CX-08 隨機強化組 Vol.7',
          url: 'https://lin.ee/yZjWuvr',
        },
        {
          name: 'CX-11 帝王威能',
          url: 'https://lin.ee/Sk0DG3c',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://lin.ee/VB3gqT1',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://lin.ee/pfb4TOG',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://lin.ee/ptCxdlW',
        },
        {
          name: 'CX-16 極限衝擊對戰組C',
          url: 'https://lin.ee/zcHBslZ',
        },
        {
          name: 'CX-17 隨機強化組 Vol.10',
          url: 'https://lin.ee/UOcsn5j',
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
      startTime:
        '抽選資格時間：2026/10/02 11:00~2026/10/03 20:30｜中籤購買時間：10/02 11:00~21:30、10/03 11:00~20:30',
      items: [
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://lin.ee/rKR6qB5',
        },
        {
          name: 'UX-03魔導神杖',
          url: 'https://lin.ee/PUd2uJ7',
        },
        {
          name: 'UX-13 磨像奇岩',
          url: 'https://lin.ee/ZMbDZs9',
        },
        {
          name: 'UX-14 天蠍長矛0-70Z',
          url: 'https://lin.ee/zonca9T',
        },
        {
          name: 'UX-15  鮫殺狂鱗改造組',
          url: 'https://lin.ee/oku89Nc',
        },
        {
          name: 'UX-16 時鐘幻象隨機強化組',
          url: 'https://lin.ee/W3g7MR8',
        },
        {
          name: 'UX-17 隕星龍騎士3-70j',
          url: 'https://lin.ee/90xHqHG',
        },
        {
          name: 'UX-19 子彈獅鷲H',
          url: 'https://lin.ee/PSBO1nv',
        },
        {
          name: 'UX-20 榮耀武神LF',
          url: 'https://lin.ee/Slz335O',
        },
        {
          name: 'CX-00新世紀福音戰士改造組',
          url: 'https://lin.ee/6FpqaM2',
        },
        {
          name: 'CX-01蒼龍勇氣',
          url: 'https://lin.ee/vqL0nv9P',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://lin.ee/sCz8Nue',
        },
        {
          name: 'CX-03英仙幽冥',
          url: 'https://lin.ee/YBaWJjn',
        },
        {
          name: 'CX-05 隨機強化組Vo1.6',
          url: 'https://lin.ee/WnFaaq6',
        },
        {
          name: 'CX-08 隨機強化組Vo1.7',
          url: 'https://lin.ee/sjjH8wx',
        },
        {
          name: 'CX-11 帝王威能',
          url: 'https://lin.ee/OUjqcUE',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://lin.ee/OfAD2r2',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://lin.ee/TSYLlwI4',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://lin.ee/OiC0bbH',
        },
        {
          name: 'CX-16 極限衝擊對戰組',
          url: 'https://lin.ee/VtcGQhP',
        },
        {
          name: 'CX-17 隨機強化組Vol.10',
          url: 'https://lin.ee/tD9iWfyF',
        },
        {
          name: 'CX-19  鱷魚裂甲',
          url: 'https://lin.ee/OUjqcUE',
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
        '抽選開始：2026/10/02 11:00｜購買資格券有效期間：2026/10/02 11:00~22:00、2026/10/03 11:00~21:00',
      items: [
        {
          name: 'BX-09戰鬥陀螺X通行證',
          url: 'https://lin.ee/rgTp6Mgi',
        },
        {
          name: 'UX-01蒼龍爆刃',
          url: 'https://lin.ee/zD0JjPuW',
        },
        {
          name: 'UX-03魔導神杖',
          url: 'https://lin.ee/YJ5XCJo',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://lin.ee/7wFtTWW',
        },
        {
          name: 'UX-14 天蠍長矛0-70z',
          url: 'https://lin.ee/QnNhAM5',
        },
        {
          name: 'UX-15鮫鯊狂鱗改造組',
          url: 'https://lin.ee/7FMj5BY',
        },
        {
          name: 'UX-16 時鐘幻象 隨機強化組',
          url: 'https://lin.ee/xarGnx5',
        },
        {
          name: 'UX-17隕星騎士3-70j',
          url: 'https://lin.ee/NDA1WOf',
        },
        {
          name: 'UX-19子彈獅鷲H',
          url: 'https://lin.ee/XSThFsw',
        },
        {
          name: 'CX-00新世紀福音戰士改造組',
          url: 'https://lin.ee/Nq1APGfU',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://lin.ee/PpgK1kC',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://lin.ee/uYnFeNO',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://lin.ee/WJXPuDP',
        },
        {
          name: 'CX-05 隨機強化組Vol.6',
          url: 'https://lin.ee/rjEx7fd',
        },
        {
          name: 'CX-08 隨機強化組Vol.7',
          url: 'https://lin.ee/Ty7j6oJ',
        },
        {
          name: 'CX-11帝王威能',
          url: 'https://lin.ee/74nrVPa',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://lin.ee/6PCYBqz',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://lin.ee/ykzjKgN',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://lin.ee/tp5OWJF',
        },
        {
          name: 'CX-16 極限衝擊對戰組C',
          url: 'https://lin.ee/op4s1U2',
        },
        {
          name: 'CX-17 隨機強化組Vol.10',
          url: 'https://lin.ee/7KgFa7I',
        },
      ],
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
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 20:00',
      items: [
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://lin.ee/nuYlmLH',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://lin.ee/yEo1r1E',
        },
        {
          name: 'UX-14 天蠍長矛0-70Z',
          url: 'https://lin.ee/n6dqbHP',
        },
        {
          name: 'UX-16 時鐘幻象 隨機強化組',
          url: 'https://lin.ee/rhLjZmm',
        },
        {
          name: 'UX-17 隕星龍騎士3-70J',
          url: 'https://lin.ee/tTAhGT3',
        },
        {
          name: 'CX-00福音戰士改造組',
          url: 'https://lin.ee/oSniLZu',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://lin.ee/tq0RqsK',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://lin.ee/ZE5JUbJ',
        },
        {
          name: 'CX-05 隨機強化組 Vol.6',
          url: 'https://lin.ee/UoYioG9',
        },
        {
          name: 'CX-08 隨機強化組 Vol.7',
          url: 'https://lin.ee/sNxPaLF',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://lin.ee/nl38y5L',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://lin.ee/qrUV8kv',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://lin.ee/UmlFuwJ',
        },
        {
          name: 'CX-16 極限衝擊對戰組C',
          url: 'https://lin.ee/u3FDNal',
        },
        {
          name: 'CX-17 隨機強化組 Vol.10',
          url: 'https://lin.ee/5o4Q1jz',
        },
      ],
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
      startTime: '戰鬥陀螺X抽籤及販售時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://lin.ee/QIU3f5L',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://lin.ee/zAXa02c',
        },
        {
          name: 'UX-14 天蠍長矛',
          url: 'https://lin.ee/rjur6g8',
        },
        {
          name: 'UX-16 時鐘幻想 隨機強化組',
          url: 'https://lin.ee/8ynP27v',
        },
        {
          name: 'UX-17 隕星龍騎士',
          url: 'https://lin.ee/ZfRp9R8',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://lin.ee/QQs5HUL',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://lin.ee/ZueURr97',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://lin.ee/wQdownCB',
        },
        {
          name: 'CX-05 隨機強化組 Vol.6',
          url: 'https://lin.ee/SE55y5l',
        },
        {
          name: 'CX-08 隨機強化組 Vol.7',
          url: 'https://lin.ee/QftfrRz',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://lin.ee/wyUzq7J',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://lin.ee/nBeVOX9',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://lin.ee/rTw5wF9',
        },
      ],
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
      startTime: '抽選&購買資格時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [
        {
          name: 'UX-00 新世紀福音戰士改造組',
          url: 'https://lin.ee/oyKH4wQ',
        },
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://lin.ee/81tOkxF',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://lin.ee/UijMi5S',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://lin.ee/sX58vwZ',
        },
        {
          name: 'UX-16 時鐘幻象 隨機強化組',
          url: 'https://lin.ee/6QMQM5B',
        },
        {
          name: 'UX-17 隕星龍騎士3-70J',
          url: 'https://lin.ee/9koxJav',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://lin.ee/wRuc0uS',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://lin.ee/OFw3T5v',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://lin.ee/WxXXulW',
        },
        {
          name: 'CX-05 隨機強化組vol.6',
          url: 'https://lin.ee/vWWJcim',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://lin.ee/RIf1qzX',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://lin.ee/OXlsQe3',
        },
        {
          name: 'CX-16 極限衝擊對戰組C',
          url: 'https://lin.ee/WhXJzlPi',
        },
      ],
    },
    {
      store: 'Funbox 屏東環球',
      storeUrl: 'https://linevoom.line.me/user/_dfq4IRS_qaEaR4Svk0SKsB78xW9x2-lkU1wSpKU',
      startTime: '抽選/購買時間：2026/09/24 11:00~2026/09/25 21:00',
      items: [],
    },
    {
      store: '來玩聚 新屏店',
      storeUrl: 'https://line.me/ti/p/~@308oaews',
      startTime: '抽選資格&購買時間：2026/10/02 11:00~2026/10/03 20:00',
      items: [
        {
          name: 'UX-03 魔導神杖',
          url: 'https://lin.ee/9d3mdEt',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://lin.ee/qZNTgWS',
        },
        {
          name: 'UX-14 天蠍長矛0-70Z',
          url: 'https://lin.ee/sK3IHqZ',
        },
        {
          name: 'UX-16 時鐘幻象 隨機強化組',
          url: 'https://lin.ee/vGMRk3n',
        },
        {
          name: 'UX-17 隕星龍騎士3-70J',
          url: 'https://lin.ee/swWkCuT',
        },
        {
          name: 'UX-19 子彈獅鷲H',
          url: 'https://lin.ee/op5iPxx',
        },
        {
          name: 'UX-20 榮耀武神LF',
          url: 'https://lin.ee/NwHC5S5',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://lin.ee/UCkBxJA',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://lin.ee/XqvShoG',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://lin.ee/64yqFgq',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://lin.ee/WwZZx5e',
        },
        {
          name: 'CX-05 隨機強化組 Vol.6',
          url: 'https://lin.ee/oEHawqv',
        },
        {
          name: 'CX-08 隨機強化組 Vol.7',
          url: 'https://lin.ee/vKcRLoR',
        },
        {
          name: 'CX-11 帝王威能',
          url: 'https://lin.ee/o5eRuke',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://lin.ee/6JvrabQ',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://lin.ee/vqAdkpZt',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://lin.ee/WPA2XJQ',
        },
        {
          name: 'CX-16 極限衝擊對戰組C',
          url: 'https://lin.ee/9mxn3bm',
        },
        {
          name: 'CX-17 隨機強化組 Vol.10',
          url: 'https://lin.ee/rR5CKk1',
        },
      ],
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
      startTime: '抽選/購買時間：2026/10/02 10:00~2026/10/03 20:30',
      items: [
        {
          name: 'BX-00 暴風天馬3-70RA',
          url: 'https://lin.ee/Nnze89U',
        },
        {
          name: 'BX-00 蒼龍神劍3-60F V2',
          url: 'https://lin.ee/ZXkqR9A',
        },
        {
          name: 'BX-37 雙重極限衝擊戰鬥盤 豪華組',
          url: 'https://lin.ee/7dzeaFf',
        },
        {
          name: 'UX-20 榮耀武神LF',
          url: 'https://lin.ee/n6lijdb',
        },
        {
          name: 'UX-21 惡魔冥界改造組',
          url: 'https://lin.ee/ZulMe3b',
        },
        {
          name: 'CX-00 迪卡狂怒 FT3-60T',
          url: 'https://lin.ee/VDERO6e',
        },
      ],
    },
  ],
};
