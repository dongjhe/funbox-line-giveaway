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
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://lin.ee/o8810aQ',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://lin.ee/pblsN5C',
        },
        {
          name: 'UX-16 時鐘幻象 隨機強化組',
          url: 'https://lin.ee/Pj6OSLb',
        },
        {
          name: 'UX-17 隕星龍騎士3-70J',
          url: 'https://lin.ee/tE0lLIl',
        },
        {
          name: 'UX-19 子彈獅鷲',
          url: 'https://lin.ee/7fnafVD',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://lin.ee/n0jLrLo',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://lin.ee/Qq7NVfS',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://lin.ee/t18MK3O',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://lin.ee/ZjadsF8S',
        },
        {
          name: 'CX-05 隨機強化組 Vol.6',
          url: 'https://lin.ee/8IF8Fw0',
        },
        {
          name: 'CX-08 隨機強化組 Vol.7',
          url: 'https://lin.ee/UZJPl88',
        },
        {
          name: 'CX-11 帝王威能',
          url: 'https://lin.ee/Swd88ge',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://lin.ee/z4A9PMU',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://lin.ee/UcYWBvC',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://lin.ee/W3oylJr',
        },
        {
          name: 'CX-16 極限衝擊對戰組C',
          url: 'https://lin.ee/u2ePqBw',
        },
        {
          name: 'CX-17 隨機強化組 Vol.10',
          url: 'https://lin.ee/pHAGpIE',
        },
      ],
    },
    {
      store: 'Funbox 天母SOGO店',
      storeUrl: 'https://linevoom.line.me/user/_db3MM1gifrvefmBbBLPWOhPAw0aPUL9K3IvLDTk',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://lin.ee/zbjAj7p',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://lin.ee/yJR7TRI',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://lin.ee/rlZcB2W',
        },
        {
          name: 'UX-14 天蠍長矛',
          url: 'https://lin.ee/YZfWhFx',
        },
        {
          name: 'UX-15 鮫鯊狂麟改造組',
          url: 'https://lin.ee/SVed7Pm',
        },
        {
          name: 'UX-16 時鐘幻象隨機強化組',
          url: 'https://lin.ee/rjsV6az',
        },
        {
          name: 'UX-17 隕星龍騎士',
          url: 'https://lin.ee/6QTN6Yx',
        },
        {
          name: 'UX-19 子彈獅鷲',
          url: 'https://lin.ee/QUaIkqA',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://lin.ee/VIJcAFI',
        },
        {
          name: 'CX-00 迪卡狂怒 FT3-60T',
          url: 'https://lin.ee/6J0gZ5J',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://lin.ee/VkFfw5D',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://lin.ee/8fdD6Zq',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://lin.ee/ufvmuGc',
        },
        {
          name: 'CX-05 隨機強化組Vol.6',
          url: 'https://lin.ee/qufyKwo',
        },
        {
          name: 'CX-08 隨機強化組 Vol.7',
          url: 'https://lin.ee/81EnYAx',
        },
        {
          name: 'CX-11 帝王威能改造組',
          url: 'https://lin.ee/utIbCw7',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://lin.ee/5phE2oV',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://lin.ee/wVlKJOW',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://lin.ee/ZL98gep',
        },
        {
          name: 'CX-16 極限衝擊對戰組C',
          url: 'https://lin.ee/sBdPMJK',
        },
        {
          name: 'CX-17 隨機強化組Vo1.10',
          url: 'https://lin.ee/S34eutu',
        },
        {
          name: 'CX-17 隨機強化組Vol.10（此券可購買數量2個）',
          url: 'https://lin.ee/QS7rQzV',
        },
      ],
    },
    {
      store: 'Funbox 高島屋百貨',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [
        {
          name: 'BX-00 暴風天馬3-70RA',
          url: 'https://lin.ee/ODZbHsOr',
        },
        {
          name: 'BX-00 蒼龍神劍3-60F V2',
          url: 'https://lin.ee/p4bVNjA',
        },
        {
          name: 'BX-09 戰鬥陀螺X通行證',
          url: 'https://lin.ee/VwbjjA7',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://lin.ee/5O2tp06',
        },
        {
          name: 'UX-11 衝擊龍神 豪華組',
          url: 'https://lin.ee/wpdCKkG',
        },
        {
          name: 'UX-15 鮫鯊狂鱗改造組',
          url: 'https://lin.ee/YagpM0p',
        },
        {
          name: 'UX-16 時鐘幻象 隨機強化組',
          url: 'https://lin.ee/XLD9DBm',
        },
        {
          name: 'UX-19 子彈獅鷲H',
          url: 'https://lin.ee/X27BzlA',
        },
        {
          name: 'UX-21 惡魔冥界改造組',
          url: 'https://lin.ee/5HyQ4D3',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://lin.ee/qWf0LKD',
        },
        {
          name: 'CX-00 迪卡狂怒 FT3-60T',
          url: 'https://lin.ee/trid9qZ',
        },
        {
          name: 'CX-05 隨機強化組 Vol.6',
          url: 'https://lin.ee/5NEAw6G6',
        },
        {
          name: 'CX-11 帝王威能',
          url: 'https://lin.ee/YiB5It3',
        },
        {
          name: 'CX-16 極限衝擊對戰組C',
          url: 'https://lin.ee/ZyrIGHU',
        },
        {
          name: 'BXG-01 烈焰飛鳳S',
          url: 'https://lin.ee/zJsbFdl',
        },
        {
          name: 'BXG-04 銀牙烈虎S',
          url: 'https://lin.ee/9oMCi24',
        },
      ],
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
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [
        {
          name: 'BX-09 通行證',
          url: 'https://lin.ee/qD2t8hR',
        },
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://lin.ee/vc5kkX5',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://lin.ee/WW9vF8h',
        },
        {
          name: 'UX-15 鮫鯊狂鱗',
          url: 'https://lin.ee/UIyy2DH',
        },
        {
          name: 'UX-16 時鐘幻象',
          url: 'https://lin.ee/9iCSc6H',
        },
        {
          name: 'UX-17 隕星龍騎士',
          url: 'https://lin.ee/yQzvQYr',
        },
        {
          name: 'UX-19 子彈獅鷲',
          url: 'https://lin.ee/7sJa0lR',
        },
        {
          name: 'UX-20 榮耀武神',
          url: 'https://lin.ee/u1uVdLq',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://lin.ee/wy0eMZU',
        },
        {
          name: 'CX-00 迪卡狂怒',
          url: 'https://lin.ee/7ELoYW5',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://lin.ee/SLSCFcE',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://lin.ee/5kMgzlC',
        },
        {
          name: 'CX-05 惡魔獵魂',
          url: 'https://lin.ee/ZLACuEoS',
        },
        {
          name: 'CX-08 魔犬烈焰',
          url: 'https://lin.ee/PJJsEk5',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://lin.ee/TsxyhiO',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://lin.ee/p06zQvo',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://lin.ee/P4cDMFE',
        },
        {
          name: 'CX-16 極限衝擊豪華對戰組（藍色龍王那包）',
          url: 'https://lin.ee/OWABDsF',
        },
        {
          name: 'CX-17 獨角極變',
          url: 'https://lin.ee/znP28or',
        },
        {
          name: 'BX09通行證',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V6EN3MJ2A250BN2ZM0X2JM',
        },
      ],
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
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://lin.ee/osE7m3u1',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://lin.ee/r9D3eXf',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://lin.ee/ydVP9Uf',
        },
        {
          name: 'UX-14 天蠍長矛0-70Z',
          url: 'https://lin.ee/7IE50Xyo',
        },
        {
          name: 'UX-16 時鐘幻象 隨機強化組',
          url: 'https://lin.ee/uMF8bXt',
        },
        {
          name: 'UX-17 隕星龍騎士',
          url: 'https://lin.ee/RQpJZ9u',
        },
        {
          name: 'UX-19 子彈獅鷲',
          url: 'https://lin.ee/wcxsmm5',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://lin.ee/8PEaWlW',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://lin.ee/oSvT2m3',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://lin.ee/TX8INWp',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://lin.ee/Vl52eOV',
        },
        {
          name: 'CX-05 隨機強化組 Vol.6',
          url: 'https://lin.ee/qJleYng',
        },
        {
          name: 'CX-08 隨機強化組 Vol.7',
          url: 'https://lin.ee/6WEkekN',
        },
        {
          name: 'CX-11 帝王威能',
          url: 'https://lin.ee/zEyF7vgN',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://lin.ee/q6EGTZQ',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://lin.ee/uo9w8SU',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://lin.ee/oijvsMO',
        },
        {
          name: 'CX-16 極限對戰組C',
          url: 'https://lin.ee/XzCiLt9',
        },
        {
          name: 'CX-17 隨機強化組 Vol.10',
          url: 'https://lin.ee/71u1IHy',
        },
        {
          name: 'CX-19 鱷魚裂甲',
          url: 'https://lin.ee/r2lNix9',
        },
        {
          name: 'BXG-04 銀牙烈虎S',
          url: 'https://lin.ee/ybQ5t8d',
        },
      ],
    },
    {
      store: 'Funbox 遠百信義A13',
      storeUrl: 'https://linevoom.line.me/user/_dZWTe6za3_22gXVkl46uAq37zC6nwkQQCwZnBoA',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://lin.ee/6bEpdX9',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://lin.ee/q7Kh1FZ5',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://lin.ee/Wy2q8yG',
        },
        {
          name: 'UX-14 天蠍長矛',
          url: 'https://lin.ee/YxXRpSZ',
        },
        {
          name: 'UX-15 鮫鯊狂鱗改造組',
          url: 'https://lin.ee/sgCOhX2',
        },
        {
          name: 'UX-16 時鐘幻象 隨機強化組',
          url: 'https://lin.ee/V7HYOlQ',
        },
        {
          name: 'UX-17 隕星龍騎士',
          url: 'https://lin.ee/XPY8FrN',
        },
        {
          name: 'UX-19 子彈獅鷲H',
          url: 'https://lin.ee/PB6hLtH',
        },
        {
          name: 'UX-20 榮耀武神LF',
          url: 'https://lin.ee/R5mIGa7',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://lin.ee/xOoOKc5',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://lin.ee/yLCQf8J',
        },
        {
          name: 'CX-05 隨機強化組 Vol.6',
          url: 'https://lin.ee/rqF0X0J9',
        },
        {
          name: 'CX-08 隨機強化組 Vol.7',
          url: 'https://lin.ee/Vt50le6',
        },
        {
          name: 'CX-11 帝王威能',
          url: 'https://lin.ee/QcSNg23',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://lin.ee/P05Mmf3',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://lin.ee/9gE5bKt',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://lin.ee/rZPGcEY',
        },
        {
          name: 'CX-16 極限衝擊對戰組',
          url: 'https://lin.ee/qYUtOtW',
        },
        {
          name: 'CX-17 隨機強化組 Vol.10',
          url: 'https://lin.ee/nMn4CWx',
        },
      ],
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
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://lin.ee/V9Kyc7M',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://lin.ee/Wt9rhXX',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://lin.ee/yi71TNR',
        },
        {
          name: 'UX-14 天蠍長矛0-70Z',
          url: 'https://lin.ee/ponxoMi',
        },
        {
          name: 'UX-16 時鐘幻象 隨機強化組',
          url: 'https://lin.ee/UV338W0',
        },
        {
          name: 'UX-17 隕星龍騎士3-70J',
          url: 'https://lin.ee/umU2dFOd',
        },
        {
          name: 'UX-19 子彈獅鷲H',
          url: 'https://lin.ee/Xd4VE6Q',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://lin.ee/vgP2Xau',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://lin.ee/SLGzp6P',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://lin.ee/RFBqMwv',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://lin.ee/wvrVaas',
        },
        {
          name: 'CX-05 隨機強化組 Vol.6',
          url: 'https://lin.ee/9978Egp',
        },
        {
          name: 'CX-08 隨機強化組 Vol.7',
          url: 'https://lin.ee/6HPS7xV',
        },
        {
          name: 'CX-11 帝王威能',
          url: 'https://lin.ee/zDczrmS',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://lin.ee/8VZrLM0',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://lin.ee/sP7gv4y',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://lin.ee/QUXg5le',
        },
        {
          name: 'CX-16 極限衝擊對戰組C',
          url: 'https://lin.ee/XSzsYHf',
        },
      ],
    },
    {
      store: 'Funbox 中和環球店',
      storeUrl: 'https://linevoom.line.me/user/_dSg6slLn5Zg47l9CPlGC-LezlX4EP3fmltKvQRs',
      startTime: '抽選/販售時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://lin.ee/Sf1xZKSC',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://lin.ee/w9Hhljk',
        },
        {
          name: 'UX-16 時鐘幻象 隨機強化組',
          url: 'https://lin.ee/tcoa3iX',
        },
        {
          name: 'UX-17 隕星龍騎士',
          url: 'https://lin.ee/Q29zbZW',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://lin.ee/Xg9VQ6p',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://lin.ee/pS2z29A',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://lin.ee/87pqbZT',
        },
        {
          name: 'CX-05 隨機強化組 Vol.6',
          url: 'https://lin.ee/SuTUPoI',
        },
        {
          name: 'CX-08 隨機強化組 Vol.7',
          url: 'https://lin.ee/VlBYDRr',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://lin.ee/8g9YRqh',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://lin.ee/xjJqxhe',
        },
        {
          name: 'CX-16 極限衝擊對戰組C',
          url: 'https://lin.ee/YNWv577',
        },
      ],
    },
    {
      store: 'Funbox 板橋大遠百',
      storeUrl: 'https://linevoom.line.me/user/_dblyPGfsKpebVOKvBaP8gs72hysvg-G0EVYLyv4',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [
        {
          name: 'BX-09 戰鬥陀螺X通行證',
          url: 'https://lin.ee/97Ygnj2',
        },
        {
          name: 'BX-37 雙重極限衝擊戰鬥盤',
          url: 'https://lin.ee/rBKZzJG',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://lin.ee/rCks2L4',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://lin.ee/RxTu0D9h',
        },
        {
          name: 'UX-14 天蠍長矛0-70Z',
          url: 'https://lin.ee/7MBT6qe',
        },
        {
          name: 'UX-16 時鐘幻象 隨機強化組',
          url: 'https://lin.ee/RJjFeyi',
        },
        {
          name: 'UX-17 隕星龍騎士3-70J',
          url: 'https://lin.ee/ZGdXTpI',
        },
        {
          name: 'UX-19 子彈獅鷲H',
          url: 'https://lin.ee/xvMccmh',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://lin.ee/Tj8Iny6u',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://lin.ee/UBjCNAZ',
        },
        {
          name: 'CX-08 隨機強化組 Vol.7',
          url: 'https://lin.ee/Qe6kDiW',
        },
        {
          name: 'CX-11 帝王威能',
          url: 'https://lin.ee/qlFAzgl',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://lin.ee/NlV7s4sS',
        },
        {
          name: 'CX-17 隨機強化組 Vol.10',
          url: 'https://lin.ee/60vDkP5',
        },
      ],
    },
    {
      store: 'Funbox 汐科遠雄',
      storeUrl: 'https://linevoom.line.me/user/_dXWlFT8AyCrEdtsk_fRRUYuqERc8rWDzx3c6DUA',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [
        {
          name: 'BX-00 蒼龍神劍3-60F V2',
          url: 'https://lin.ee/8mK29XG',
        },
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://lin.ee/Vux0hiCb',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://lin.ee/ZpDr8wK',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://lin.ee/ZKusmWH',
        },
        {
          name: 'UX-14 天蠍長矛0-70Z',
          url: 'https://lin.ee/OjOXfcZ',
        },
        {
          name: 'UX-16 時鐘幻象-隨機強化組',
          url: 'https://lin.ee/o2SafcD',
        },
        {
          name: 'UX-17 隕星龍騎士3-70J',
          url: 'https://lin.ee/8CZWcif',
        },
        {
          name: 'UX-19 子彈獅鷲H',
          url: 'https://lin.ee/VK6LOiA',
        },
        {
          name: 'UX-20 榮耀武神LF',
          url: 'https://lin.ee/sG1GUlJ',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://lin.ee/TL8S3g1',
        },
        {
          name: 'CX-00 迪卡狂怒FT3-60T',
          url: 'https://lin.ee/zsTv97m',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://lin.ee/Xah3III',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://lin.ee/vzlo3zw',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://lin.ee/S3odZ9d',
        },
        {
          name: 'CX-05 隨機強化組vol.6',
          url: 'https://lin.ee/xERHH3GK',
        },
        {
          name: 'CX-08 隨機強化組vol.7',
          url: 'https://lin.ee/8bR8Dsa',
        },
        {
          name: 'CX-11 帝王威能',
          url: 'https://lin.ee/7KH8Obe',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://lin.ee/8FT07gL',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://lin.ee/wp2LTBi',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://lin.ee/6eGwThO',
        },
        {
          name: 'CX-16 極限衝擊對戰組',
          url: 'https://lin.ee/Sb5VxsR',
        },
        {
          name: 'CX-17 隨機強化組vol.10',
          url: 'https://lin.ee/ODvECQx',
        },
        {
          name: 'CX-19 鱷魚裂甲 隨機強化組',
          url: 'https://lin.ee/r8ar45f',
        },
      ],
    },
    {
      store: 'Funbox 樹林秀泰店',
      storeUrl: 'https://linevoom.line.me/user/_dSj7fhnsKdDEm1q2ehrYEJTOyrm4OuI2NFsN3I0',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [
        {
          name: 'BX-10 極限衝擊戰鬥盤',
          url: 'https://lin.ee/PNiQSLe',
        },
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://lin.ee/s5XWs2I',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://lin.ee/VVFn6FZ',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://lin.ee/v4U38t3',
        },
        {
          name: 'UX-14 天蠍長矛0-70Z',
          url: 'https://lin.ee/W2PyY7s',
        },
        {
          name: 'UX-16 時鐘幻象 隨機強化組',
          url: 'https://lin.ee/QWcemJs',
        },
        {
          name: 'UX-17 隕星龍騎士3-70J',
          url: 'https://lin.ee/r5huLYj',
        },
        {
          name: 'UX-19 子彈獅鷲',
          url: 'https://lin.ee/sN5Qfgs',
        },
        {
          name: 'UX-20 榮耀武神',
          url: 'https://lin.ee/OvUXIJB',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://lin.ee/tgrHall',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://lin.ee/wLe76Kj',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://lin.ee/rUB8bSP',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://lin.ee/8Qdjvmc',
        },
        {
          name: 'CX-05 隨機強化組 Vol.6',
          url: 'https://lin.ee/72wmkct',
        },
        {
          name: 'CX-08 隨機強化組Vol.7',
          url: 'https://lin.ee/y65uFAK',
        },
        {
          name: 'CX-11 帝王威能',
          url: 'https://lin.ee/p9nk1rr',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://lin.ee/SHPV3xf',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://lin.ee/vT2noTN',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://lin.ee/UQhJ1fA',
        },
        {
          name: 'CX-16 極限衝擊對戰組',
          url: 'https://lin.ee/vgQQ3qL',
        },
        {
          name: 'CX-17 隨機強化組 Vol.10',
          url: 'https://lin.ee/vrmaTSG9',
        },
        {
          name: 'CX-19 鱷魚裂甲',
          url: 'https://lin.ee/PfJ7d2W',
        },
      ],
    },
    {
      store: 'Funbox 淡水禮萊廣場',
      storeUrl: 'https://line.me/R/ti/p/@944creff',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [
        {
          name: 'BX-00 蒼龍神劍3-60F V2',
          url: 'https://lin.ee/vsqa3Mm',
        },
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://lin.ee/PLRN6q54',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://lin.ee/WvzokGYi',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://lin.ee/TE08UuT',
        },
        {
          name: 'UX-14 天蠍長矛0-70Z',
          url: 'https://lin.ee/pRyJyQS',
        },
        {
          name: 'UX-15 鮫鯊狂鱗改造組',
          url: 'https://lin.ee/ZmThtu8',
        },
        {
          name: 'UX-16 時鐘幻象 隨機強化組',
          url: 'https://lin.ee/xitZ9s6',
        },
        {
          name: 'UX-17 隕星龍騎士3-70J',
          url: 'https://lin.ee/8MZjuz2',
        },
        {
          name: 'UX-19 子彈獅鷲H',
          url: 'https://lin.ee/ZjgS8xb',
        },
        {
          name: 'UX-20 榮耀武神LF',
          url: 'https://lin.ee/tYAyZIC',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://lin.ee/syWNto6',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://lin.ee/uDKeXQL',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://lin.ee/oQ9bdvN',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://lin.ee/zShJtKv',
        },
        {
          name: 'CX-05 隨機強化組 Vol.6',
          url: 'https://lin.ee/QJynbBe',
        },
        {
          name: 'CX-08 隨機強化組 Vol.7',
          url: 'https://lin.ee/YswCTJd',
        },
        {
          name: 'CX-11 帝王威能',
          url: 'https://lin.ee/RB6UntD',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://lin.ee/yRbKwHf',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://lin.ee/y0vC3LE',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://lin.ee/9b6FyTj',
        },
        {
          name: 'CX-16 極限衝擊對戰組C',
          url: 'https://lin.ee/QglhFT4',
        },
      ],
    },
    {
      store: 'Funbox 宏匯廣場',
      items: [],
    },
    {
      store: 'Funbox 新店誠品-裕隆城',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [
        {
          name: 'BX-09 通行證',
          url: 'https://lin.ee/zmfSmni',
        },
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://lin.ee/U78GmoV',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://lin.ee/vSt9dCs',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://lin.ee/QzwFeApo',
        },
        {
          name: 'UX-14 天蠍長矛',
          url: 'https://lin.ee/ZvSOGwM',
        },
        {
          name: 'UX-16 抽抽包',
          url: 'https://lin.ee/QFMgkB0',
        },
        {
          name: 'UX-17 隕星龍騎士',
          url: 'https://lin.ee/VefTkzx',
        },
        {
          name: 'UX-19 子彈獅驚',
          url: 'https://lin.ee/qJZFaM9',
        },
        {
          name: 'UX-20 榮耀武神',
          url: 'https://lin.ee/s177Tev',
        },
        {
          name: 'CX-00 新世紀福音',
          url: 'https://lin.ee/5HSxcgb',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://lin.ee/PM4Nqlq',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://lin.ee/Ujbn7L3',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://lin.ee/pqGchBTK',
        },
        {
          name: 'CX-05 抽抽包',
          url: 'https://lin.ee/x9IvoVjE',
        },
        {
          name: 'CX-08 抽抽包',
          url: 'https://lin.ee/u3zfmtC',
        },
        {
          name: 'CX-11 帝王威能',
          url: 'https://lin.ee/8wAjE0S',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://lin.ee/YDZLbwg',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://lin.ee/q8PMZmh',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://lin.ee/7rETd14',
        },
        {
          name: 'CX-16 極限衝擊對戰組',
          url: 'https://lin.ee/PSmk8mN',
        },
        {
          name: 'CX-17 抽抽包',
          url: 'https://lin.ee/UnOJO5m1',
        },
        {
          name: 'CX-00 迪卡狂怒 FT3-60T',
          url: 'https://lin.ee/zjtf56P',
        },
      ],
    },
    {
      store: 'Funbox 新店裕隆城',
      storeUrl: 'https://line.me/R/ti/p/@491uicsm',
      startTime: '抽選時間：2026/10/01 11:00~2026/10/01 21:00',
      items: [
        {
          name: 'UX-20 榮耀武神',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VS2WCFA1RDJR71CH173K2E',
        },
        {
          name: 'BX-09 通行證',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VRT9F0CEKY9KQ8V442YRP5',
        },
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VQG5NF2Q10MA2YWM7YPXDQ',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VQ7SVAY1HRV6ZZ0WHRYV9Q',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VQBSV1BNBW9DQT6F748M23',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VRK528B8YZDR9V2TPJS4DW',
        },
        {
          name: 'CX-00 新世紀福音',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VQPZ11PAAG5DQRREQ72N7V',
        },
        {
          name: 'UX-17 隕星龍騎士',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VRFQ8YKDX41A215W2X1ZZ5',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VR93QJVV2674GQVE6XY96R',
        },
        {
          name: 'UX-14 天蠍長矛',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VRDDXZZ9V8XE7FYV78SHGM',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VR7T0DJTM6PZAK1BS8XA14',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VR5WXHJVKV4DF1QZ9BARW5',
        },
        {
          name: 'CX-11 帝王威能',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VQS0RN0ZNEE3RQEER0HSYY',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VQVWC59NNF39D2CR0P5NSN',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VQXV5VY4RYET3QDMVT6M9T',
        },
        {
          name: 'UX-19 子彈獅驚',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VRBE04GN2DH9SF4Z321HCX',
        },
        {
          name: 'CX-16 極限衝擊對戰組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VRQEK7TMR9VN92TF1PA5EK',
        },
        {
          name: 'CX-05 抽抽包',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VR2B8EWWG84HBJQHQE6R9J',
        },
      ],
    },
  ],
  宜蘭縣: [
    {
      store: 'Funbox 宜蘭新月店',
      storeUrl: 'https://line.me/R/ti/p/@027iendl',
      startTime:
        '抽選開放：2026/09/24 11:00｜購買資格券有效：2026/09/24 11:00~22:00、2026/09/25 11:00~21:00',
      items: [
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RCJF46YNW660QNF51EP5GQ',
        },
        {
          name: 'UX-19 子彈獅鷲H',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RCHV9W8304JH2Y634YN66R',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RCH85TT0E1N1DGG4CF7XGT',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RCGQFVSR00WRQYMYKGVT93',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RCMHB7QYKEY514WRJVPPK1',
        },
        {
          name: 'CX-16 極限衝擊對戰組C',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RCP254D4XB5T5WRP985QH5',
        },
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RCT4WW9XJ50TZ96RCACGRM',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RCW3HE522BRCF77K5AAT6Z',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://lin.ee/V5',
        },
      ],
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
      store: 'Funbox 桃園環球A8店',
      storeUrl: 'https://line.me/R/ti/p/@lae4656h',
      startTime: '抽選時間：2026/10/02 11:00~ 2026/10/03 21:00',
      items: [
        {
          name: 'UX-03 魔導神杖',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V9GS4T8KZ1FTG4SSZH3DJC',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V9012RFCS2BABCT2FD3XQ4',
        },
        {
          name: 'UX-19 子彈獅鷲H',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V99ZREPK97V9ARZMB7RDAC',
        },
        {
          name: 'UX-15 鮫鯊狂鱗改造組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V9BBPE5DNY5HGZKVB9YHYE',
        },
        {
          name: 'CX-11 帝王威能',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V91J0S4Z4SYFKGCEQV14WK',
        },
        {
          name: 'UX-14 天蠍長矛0-70Z',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V9F5SMPFXBTK7XNN4GHXV6',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V8TT5H7ACG7H73W74G26WS',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V8X6DM3XKS9HHHC3RKEA7G',
        },
        {
          name: 'CX-17 隨機強化組 Vol.10',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V8YHC9RMB6M5JKCQY4NY16',
        },
        {
          name: 'CX-08 隨機強化組 Vol.7',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V8B5YMHK26TZJ4EZXVCT56',
        },
        {
          name: 'CX-05 隨機強化組 Vol.6',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V87B0E24QDZ0BF4NWD9V1F',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V8FJSDG0ZGQVJZEQGAN5CG',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V8HA0MD6SFQ4NYX1FMK99D',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V8K3C93RQ2ZGA57CAD61MK',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://lin.ee/Rz5',
        },
      ],
    },
    {
      store: 'Funbox 台茂購物中心店',
      storeUrl: 'https://line.me/R/ti/p/@504tdsbb',
      startTime: '抽選時間：2026/10/01 11:00~2026/10/01 21:00',
      items: [
        {
          name: 'UX-03 魔導神杖',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RG206Z5MXR9RQ5KQGWYN8K',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RG7JPNTTXZ0AE7JDPHN7K7',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RGAS9R986162PSA446ZJH4',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RGDC09QARM3Z87BPDVNSTY',
        },
        {
          name: 'UX-17 隕星龍騎士',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RGG47GNGKD8WXRV6FWY1AJ',
        },
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RGHR7ZN24GS1N8MFD3KJBZ',
        },
        {
          name: 'CX-05 隨機強化組 Vol.6',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RGMQD0VYKGZ6EGG5S543FW',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RGP6GVW31M3XEA9ZQQSGCS',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RGW6YZCZT1MMWS606SPCQN',
        },
        {
          name: 'CX-08 隨機強化組 Vol.7',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RGY9F7VER77CT68RHS25RN',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RH0GHK60MAWZ2QXR5KNAEW',
        },
      ],
    },
    {
      store: 'Funbox 桃園環球A19店',
      storeUrl: 'https://line.me/R/ti/p/@403qwxdn',
      startTime: '抽選時間：2026/10/02 (11:00',
      items: [
        {
          name: 'UX-03 魔導神杖',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RV2R8YYW7P85DT11G361A9',
        },
        {
          name: 'CX-05 隨機強化組 Vol.6',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RVCWRPJVH63HC6161KNXQ7',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RVGBS01W6RDZ28DBZMYD1D',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RVHXN7EHJ5SR2ZRYTP1XVR',
        },
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RVK99R9P44ZWVPNWNABJC2',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RVME3FV2D9QP2A6J1J2GTF',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RVNWEFE92RHXE00EVCAVJ8',
        },
        {
          name: 'CX-17 隨機強化組 Vol.10',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RVQVNJZSE6BP3BBNT4MHV5',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RVV43ZVTZWGGDJD2R5WC10',
        },
        {
          name: 'CX-08 隨機強化組 Vol.7',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RVWFY8J25NAGVZKZM9FJM3',
        },
        {
          name: 'CX-11 帝王威能',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RVZ1G40P3R3GR6954H7WB6',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RW2WGHV5TFYTMKJJPKQN86',
        },
        {
          name: 'UX-19 子彈獅鷲',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RW41K75XDG40P6VZ88WE6G',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RW59XT5JVST8QDKSCX3W3W',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RW64ZY0022C60H85Q3N65N',
        },
        {
          name: 'UX-16 時鐘幻象 隨機強化組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RW7QEMGN633P5DVDQ2960A',
        },
        {
          name: 'UX-17 隕星龍騎士',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RWA3H2PG9HJ6KCFZ94M0G4',
        },
      ],
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
      items: [
        {
          name: 'BX-37 雙重極限衝擊戰鬥盤 豪華組 採取上架販售*',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VXXM3S3P015SGCNSPDZSV9',
        },
        {
          name: 'CX-17 隨機強化組 Vol. 10 $350 限購*3',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VXXM3S3P015SGCNSPDZSV9',
        },
        {
          name: 'UX-19 子彈獅鷲',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VXZMGHDGWNW35NA4WSBJ75',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VY22R44SD0K5QXHR91ZFTW',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VY5BRFSGXMBCMJK6NEEBYB',
        },
        {
          name: 'UX-14 天蠍長矛',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VY6WYDR3AJK2ABAS61VV3G',
        },
        {
          name: 'UX-20 榮耀武神',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VYGP3NPSCWFH9AP1CYMW95',
        },
        {
          name: 'CX-05 隨機強化組 Vol.6 $350 限購*3',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VYQYFY2SENC69QJFCT3CPD',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VYV1137M1ZSW163RQNW4KC',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VYYB5J4FWS26MGQ38QJC5Q',
        },
        {
          name: 'CX-00 EVA 福音戰士聯名款套組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VYZR9H7XV1QFEBGAMHEZZY',
        },
        {
          name: 'UX-15 絞鯊狂鱗改造組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VZ1GQ7TRP0SZ2RHMVH7Y2S',
        },
        {
          name: 'UX-16 時鐘幻象 $295 限購*3',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VZ4XF0PDZH9DW10TET03FB',
        },
        {
          name: 'CX-08 隨機強化組Vol.7 $350 限購*3',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VZ89WMZ17F1J2TQKQ995D2',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VZACVQTSNV1PRKAFTX03DP',
        },
        {
          name: 'CX-11 帝王威能',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VZBYRQ9X2WPH0N5MHKM19P',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VZETJ3SQ7ZZ9Q2GF2SKXK4',
        },
        {
          name: 'UX-17 隕星龍騎士',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VZH471BZ4KH7RXN52P6AXK',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VZJW9WR1FEVNQ5Y4H3PK11',
        },
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VZN6XN22RE0BEMM2JC97TA',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VZY47QGQWQV1JFHPVZSNZA',
        },
      ],
    },
    {
      store: 'Funbox 新竹遠雄',
      storeUrl: 'https://line.me/R/ti/p/@agl4214l',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://lin.ee/uTnxSg9',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://lin.ee/YZ455oE',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://lin.ee/sOVLtYK',
        },
        {
          name: 'UX-14 天蠍長矛0-70Z',
          url: 'https://lin.ee/Ufq571X',
        },
        {
          name: 'UX-16 時鐘幻象 隨機強化組',
          url: 'https://lin.ee/75jlb5l',
        },
        {
          name: 'UX-17 隕星龍騎士3-70J',
          url: 'https://lin.ee/pxHCTQvz',
        },
        {
          name: 'UX-19 子彈獅鷲H',
          url: 'https://lin.ee/RrpzwhV',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://lin.ee/WH6zwIf',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://lin.ee/Q8QNHUr',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://lin.ee/PCyMVWZ',
        },
        {
          name: 'CX-05 隨機強化組 Vol.6',
          url: 'https://lin.ee/8vbjrTW',
        },
        {
          name: 'CX-08 隨機強化組 Vol.7',
          url: 'https://lin.ee/XO3qThl',
        },
        {
          name: 'CX-11 帝王威能',
          url: 'https://lin.ee/Zg8klWX',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://lin.ee/x45Im9in',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://lin.ee/zBBalYF',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://lin.ee/pXjg5Jw',
        },
        {
          name: 'CX-16 極限衝擊對戰組C',
          url: 'https://lin.ee/wa8c3LQ',
        },
      ],
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
          name: 'CX-08 隨機強化組 Vol.7',
          url: 'https://lin.ee/ronnAry',
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
      items: [
        {
          name: 'BX-37 雙重極限衝擊戰鬥盤 豪華組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RQWEFJQZ07W4Y03ZD9D9Z7',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RRA1NC7P8RJZ53QMNJZ9YG',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RRBTZN1RDX79CHS0B608KF',
        },
        {
          name: 'CX-05 隨機強化組 Vol.6',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RREFRKREMS8WPV5CBKWKGB',
        },
        {
          name: 'CX-08 隨機強化組 Vol.7',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RRG9RWWTMQKJ2XPJB6KD96',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RRKESFGQVC3BWTVA65SCNR',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RRPSM8CCERA9YG620E02PY',
        },
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RRT450S91TV1NEHZSXRWV5',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RRVHTTSQ2YRDHK01TPGA9G',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RRXJPVV93QFXF8X72GQ7K7',
        },
        {
          name: 'UX-14 天蠍長矛0-70Z',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RRZ5Q29ZV9V2R7CNWHX0EX',
        },
        {
          name: 'UX-16 時鐘幻象 隨機強化組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RS111VV2TCMH6ZZWH4JWVJ',
        },
        {
          name: 'UX-17 隕星龍騎士3-70J',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3RS2F2VKY7PRCY30RV8Y1R9',
        },
      ],
    },
    {
      store: 'Funbox 豐原太平洋店',
      storeUrl: 'https://linevoom.line.me/user/_dWUEiTQIz0C550q-X-t3o65-r0CLa8-fBL6b6u8',
      startTime: '抽選/購買時間：2026/09/24 11:00~2026/09/25 21:00',
      items: [
        {
          name: 'CX-16 極限衝擊對戰組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VDCW3BRCMR6HB10ZBJ3RR4',
        },
        {
          name: 'UX-17 隕星龍騎士',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VDF5B2QR32WV30XQTPZG9F',
        },
        {
          name: 'CX-17 隨機強化組 Vol.10',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VDHH0CVFNNHZYA56VAX953',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VDM9HKB61N7BJG8FZSJVVY',
        },
        {
          name: 'UX-14 天蠍長矛',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VDQWGCD72A8DXDNMZRXKYA',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VDXFBNWMXZBFV96QC2AMA0',
        },
        {
          name: 'CX-05 隨機強化組 Vol.6',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VE02Z2QSPVYXP1H0DRJBMG',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VE43Q11GVYJRSH503MPVAV',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VE6GD1ERA1D0WWFX616G18',
        },
        {
          name: 'CX-08 隨機強化組 Vol.7',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VE8TEMGPENACEG5PGHMWZ9',
        },
        {
          name: 'UX-16 時鐘幻象 隨機強化組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VEB6TE30SVN9ZYSC96AZBN',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VEEBWMWTMB89SHWRXS9VF8',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VEG5Q32DZC341ZGDH0NHME',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VEKE0S1GBC91M601BHVWDN',
        },
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VEP0A5R4N8WW0WJZ3XJKYB',
        },
      ],
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
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [
        {
          name: 'BX-37 雙重極限衝擊戰鬥盤豪華組',
          url: 'https://lin.ee/xDt3c0Y',
        },
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://lin.ee/vIwS5m1',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://lin.ee/ZhWZGNum',
        },
        {
          name: 'UX-13 魔象奇岩',
          url: 'https://lin.ee/7jWNONNq',
        },
        {
          name: 'UX-14 天蠍長矛0-70Z',
          url: 'https://lin.ee/9Ncf9mD',
        },
        {
          name: 'UX-16 時鐘幻象 隨機強化組',
          url: 'https://lin.ee/zzSh9q1',
        },
        {
          name: 'UX-17 隕星龍騎士3-70J',
          url: 'https://lin.ee/XdxTv7A',
        },
        {
          name: 'UX-20 榮耀武神LF',
          url: 'https://lin.ee/Tejg2T6',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://lin.ee/xHwUJO6',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://lin.ee/wBzrbRJ',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://lin.ee/P3F8n1t',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://lin.ee/ZGdE2JRN',
        },
        {
          name: 'CX-05 隨機強化組Vol.6',
          url: 'https://lin.ee/q857zio',
        },
        {
          name: 'CX-08 隨機強化組Vol.7',
          url: 'https://lin.ee/8In2zDz',
        },
        {
          name: 'CX-11 帝王威能',
          url: 'https://lin.ee/s2ydFCx',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://lin.ee/oHy1jug',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://lin.ee/r52yc55',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://lin.ee/YFvatvE',
        },
        {
          name: 'CX-16 極限衝擊對戰組C',
          url: 'https://lin.ee/sNd5lDm',
        },
        {
          name: 'CX-17 隨機強化組Vol.10',
          url: 'https://lin.ee/ZxXrjxQ',
        },
      ],
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
      startTime: '抽選/購買時間：2026/10/02 10:00~2026/10/03 21:00',
      items: [
        {
          name: 'BX-00 蒼龍神劍 V2',
          url: 'https://lin.ee/9EWQA2S',
        },
        {
          name: 'BX-09 戰鬥陀螺X通行證',
          url: 'https://lin.ee/nbWkqsi',
        },
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://lin.ee/wH6fv7PW',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://lin.ee/tvqftND',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://lin.ee/5z1FUIX',
        },
        {
          name: 'UX-14 天蠍長矛',
          url: 'https://lin.ee/8WxCJhp',
        },
        {
          name: 'UX-15 鮫鯊狂鱗改造組',
          url: 'https://lin.ee/PcQ2EpK',
        },
        {
          name: 'UX-16 時鐘幻象 隨機強化組',
          url: 'https://lin.ee/5LfOA5u',
        },
        {
          name: 'UX-17 隕星龍騎士',
          url: 'https://lin.ee/zN15R62',
        },
        {
          name: 'UX-19 子彈獅鷲',
          url: 'https://lin.ee/zj3Vfml',
        },
        {
          name: 'UX-20 榮耀武神',
          url: 'https://lin.ee/V76hBNC',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://lin.ee/XhbboSu',
        },
        {
          name: 'CX-00 迪卡狂怒 FT3-60T',
          url: 'https://lin.ee/WOXYLqq',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://lin.ee/QfMiwbp',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://lin.ee/PUJV3xi',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://lin.ee/owHauyl',
        },
        {
          name: 'CX-05 隨機強化組 Vol.6',
          url: 'https://lin.ee/6VDMxD8',
        },
        {
          name: 'CX-08 隨機強化組 Vol.7',
          url: 'https://lin.ee/RTb6KVE',
        },
        {
          name: 'CX-11 帝王威能',
          url: 'https://lin.ee/sNj4GGa',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://lin.ee/oomyAUk',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://lin.ee/zFYrsix',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://lin.ee/5d9ezOU',
        },
        {
          name: 'CX-16 極限衝擊對戰組C',
          url: 'https://lin.ee/Yh24G2R',
        },
        {
          name: 'CX-17 隨機強化組 Vol.10',
          url: 'https://lin.ee/9GZPPEZ',
        },
        {
          name: 'BXG-04 銀牙烈虎S',
          url: 'https://lin.ee/7OxYfN9',
        },
      ],
    },
    {
      store: '來玩聚 員林店',
      storeUrl: 'https://linevoom.line.me/user/_dar-0z1aYQPkB0W-BiwgwDp6XsDKAdehbmupEaI',
      startTime: '抽選/購買時間：2026/10/02 10:00~2026/10/03 21:00',
      items: [
        {
          name: 'BX-00 蒼龍神劍3-60F V2',
          url: 'https://lin.ee/9WAmpoQj',
        },
        {
          name: 'BX-09 戰鬥陀螺X通行證',
          url: 'https://lin.ee/8WM2vuD',
        },
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://lin.ee/8vNJUEA',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://lin.ee/Tz91Mg3',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://lin.ee/NnotYB8',
        },
        {
          name: 'UX-14 天蠍長矛0-70Z',
          url: 'https://lin.ee/vVMSVYR',
        },
        {
          name: 'UX-15 鯊潛狂鯊改造組',
          url: 'https://lin.ee/p36DEhq',
        },
        {
          name: 'UX-16 時鐘幻象 隨機強化組',
          url: 'https://lin.ee/YfpOngo',
        },
        {
          name: 'UX-17 隕星龍騎士3-70J',
          url: 'https://lin.ee/uuvmzfk',
        },
        {
          name: 'UX-19 子彈獅鷲H',
          url: 'https://lin.ee/9L8aCrO',
        },
        {
          name: 'UX-20 榮耀武神LF',
          url: 'https://lin.ee/siZZh08',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://lin.ee/PV9x1J7',
        },
        {
          name: 'CX-00 迪卡狂怒 FT3-60T',
          url: 'https://lin.ee/8CBRw3n',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://lin.ee/q1WpsLr',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://lin.ee/zlZXe9V',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://lin.ee/sT69Eey',
        },
        {
          name: 'CX-05 隨機強化組 Vol.6',
          url: 'https://lin.ee/q2rvai9',
        },
        {
          name: 'CX-08 隨機強化組 Vol.7',
          url: 'https://lin.ee/tmBxyba',
        },
        {
          name: 'CX-11 帝王威能',
          url: 'https://lin.ee/yGxNa7G',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://lin.ee/9nwAeDX',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://lin.ee/Wpua0Hs',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://lin.ee/YXTAYHo',
        },
        {
          name: 'CX-16 極限衝擊對戰組C',
          url: 'https://lin.ee/RWC62Nb',
        },
        {
          name: 'CX-17 隨機強化組 Vol.10',
          url: 'https://lin.ee/pV4eSgK',
        },
      ],
    },
  ],
  雲林縣: [
    {
      store: '來玩聚 斗六店',
      storeUrl: 'https://linevoom.line.me/user/_ddu256ZXwJCBqOeIfKwY6QYdeIvbrVOmBRIOKfo',
      startTime: '抽選/購買時間：2026/10/02 10:00~2026/10/03 21:00',
      items: [
        {
          name: 'BX-09 戰鬥陀螺X通行證',
          url: 'https://lin.ee/YUINcSP',
        },
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://lin.ee/oMlbC5W',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://lin.ee/rXPfF2k',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://lin.ee/RmEzLf3',
        },
        {
          name: 'UX-14 天蠍長矛0-70Z',
          url: 'https://lin.ee/vkV9djS',
        },
        {
          name: 'UX-15 鮫鯊狂鱗改造組',
          url: 'https://lin.ee/qOjXvRk',
        },
        {
          name: 'UX-16 時鐘幻象 隨機強化組',
          url: 'https://lin.ee/ZIXn97K',
        },
        {
          name: 'UX-17 隕星龍騎士3-70J',
          url: 'https://lin.ee/XZLF9H7',
        },
        {
          name: 'UX-19 子彈獅鷲H',
          url: 'https://lin.ee/QI9JCCH',
        },
        {
          name: 'UX-20 榮耀武神LF',
          url: 'https://lin.ee/RuQQKZB',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://lin.ee/VujxgEi',
        },
        {
          name: 'CX-00 迪卡狂怒 FT3-60T',
          url: 'https://lin.ee/yfep0g4',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://lin.ee/wssxT13',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://lin.ee/8r3L2tZ',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://lin.ee/5QoJcIf',
        },
        {
          name: 'CX-05 隨機強化組 Vol.6',
          url: 'https://lin.ee/5V2JHpP',
        },
        {
          name: 'CX-08 隨機強化組 Vol.7',
          url: 'https://lin.ee/qCNbWQk',
        },
        {
          name: 'CX-11 帝王威能',
          url: 'https://lin.ee/R4JKEdw',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://lin.ee/VFjakMo',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://lin.ee/uGiKJV6',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://lin.ee/WhTT0pB',
        },
        {
          name: 'CX-16 極限衝擊對戰組C',
          url: 'https://lin.ee/5S9r8rh',
        },
      ],
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
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3GXP7EJW82KVJPKYKQR6TJN',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3GXBFNASD6DP02BPWRMBK9F',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3GZFD36FPZK0CP6606K29DF',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3H1GSPQM1H6F7MS8CKZHP21',
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
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3NSZ1PFFHW93PBSBXV5F8B1',
        },
      ],
    },
  ],
  台南市: [
    {
      store: 'Funbox 台南遠百店',
      storeUrl: 'https://linevoom.line.me/user/_dWKgSOpFJ9bwQuysxkGH0jnCsb22vMfW7kuZDzU',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [
        {
          name: 'UX-16 時鐘幻象 隨機強化組',
          url: 'https://lin.ee/SrKwaD2',
        },
        {
          name: 'UX-19 子彈獅鷲H',
          url: 'https://lin.ee/rffUFM4',
        },
        {
          name: 'UX-20 榮耀武神LF',
          url: 'https://lin.ee/TzucQoK',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://lin.ee/VHv7T6A',
        },
        {
          name: 'CX-16 極限衝擊對戰組C',
          url: 'https://lin.ee/nn7LsJi',
        },
      ],
    },
    {
      store: 'Funbox 台南新天地',
      startTime: '抽選/購買時間：2026/09/24 11:00~2026/09/25 21:00',
      items: [],
    },
    {
      store: 'Funbox 台南南紡店',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [
        {
          name: 'BX-26 獨角刺心',
          url: 'https://lin.ee/Xe9Lsl4',
        },
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://lin.ee/QK9i3lKl',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://lin.ee/Qt4Htnc',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://lin.ee/6OlSzHL',
        },
        {
          name: 'UX-15 鮫鯊狂鱗改造組',
          url: 'https://lin.ee/YAWlN5T',
        },
        {
          name: 'UX-16 時鐘幻象 隨機強化組',
          url: 'https://lin.ee/wdDhmM8',
        },
        {
          name: 'UX-17 隕星龍騎士3-70J',
          url: 'https://lin.ee/OGjj6aP',
        },
        {
          name: 'UX-19 子彈獅鷲H',
          url: 'https://lin.ee/x6cg0hl',
        },
        {
          name: 'UX-20 榮耀武神LF',
          url: 'https://lin.ee/8Te21n33',
        },
        {
          name: 'CX-00 福音戰士改造組',
          url: 'https://lin.ee/zmnEgrZ',
        },
        {
          name: 'CX-05 隨機強化組 Vol.6',
          url: 'https://lin.ee/pd4V3KX',
        },
        {
          name: 'CX-08 隨機強化組 Vol.7',
          url: 'https://lin.ee/nfPvNbY',
        },
        {
          name: 'CX-11 帝王威能',
          url: 'https://lin.ee/zidtobO',
        },
        {
          name: 'CX-16 極限衝擊對戰組C',
          url: 'https://lin.ee/NDb13ot',
        },
        {
          name: 'CX-17 隨機強化組 Vol.10',
          url: 'https://lin.ee/5ZqpngZ',
        },
      ],
    },
    {
      store: 'Funbox 台南三井',
      storeUrl: 'https://linevoom.line.me/user/_dTp06Slhdio7LDmd8xKxz3J2mw25-ZMRXZtXQ9I',
      startTime: '抽選/購買資格時間：2026/10/02 11:00~2026/10/03 20:30',
      items: [
        {
          name: 'UX-14 天蠍長矛',
          url: 'https://lin.ee/X2Wx0Wo',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://lin.ee/74ZUulf',
        },
        {
          name: 'CX-05 隨機強化組',
          url: 'https://lin.ee/5o5s6YF',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://lin.ee/xlly916',
        },
        {
          name: 'CX-16 極限衝擊對戰組',
          url: 'https://lin.ee/znGXrvJo',
        },
        {
          name: 'CX-17 隨機強化組',
          url: 'https://lin.ee/v6bs9GR',
        },
      ],
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
    {
      store: 'Funbox 台南西門店',
      storeUrl: 'https://line.me/R/ti/p/@344rybaf',
      startTime: '抽選時間：2026/10/02 11:00 - 2026/10/03 21:00',
      items: [
        {
          name: 'BX-00 蒼龍神劍V2',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VB7Y6NX8RM5Q91J2WYPJ91',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VBAJSTHRM9ZK7FNHGHGFJ0',
        },
        {
          name: 'UX-14 天蠍長矛',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VBR85CJM9NXRE7F9J4YTP1',
        },
        {
          name: 'UX-15 鮫鯊狂鱗改造組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VBSM6N27FKKEQBZ368PH2K',
        },
        {
          name: 'UX-16 時鐘幻象 隨機強化組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VBY5CW1MRT8VZ797NX8CXC',
        },
        {
          name: 'UX-17 隕星龍騎士',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VC6T1G559C5C599H20E0MY',
        },
        {
          name: 'UX-19 子彈獅鷲H',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VC0EZ0999CKEQCS34NG4A9',
        },
        {
          name: 'UX-20 榮耀武神',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VC4KTDFM35BZCN76CH7NBB',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VCCWR1VVCDBNKD2C817QCA',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VCH4KM7KG6NF4HKJP5SW6G',
        },
        {
          name: 'CX-05 惡魔獵魂 隨機強化組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VDA36HN90RMGQH3FP6V2W2',
        },
      ],
    },
  ],
  高雄市: [
    {
      store: 'Funbox 高雄漢神店',
      storeUrl: 'https://linevoom.line.me/user/_dZFySf-_Iy1JFk7B9OJx3p-R8KIqsjXVk6wMx_s',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [
        {
          name: 'BX-09 通行證',
          url: 'https://lin.ee/oBPIiz5',
        },
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://lin.ee/Z0umGnt',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://lin.ee/7mvhjNt',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://lin.ee/wVSPZLiy',
        },
        {
          name: 'UX-15 鮫鯊狂鱗改造組',
          url: 'https://lin.ee/tPlO8cy',
        },
        {
          name: 'UX-16 抽包',
          url: 'https://lin.ee/YmXTEkX',
        },
        {
          name: 'UX-17 隕星龍騎士',
          url: 'https://lin.ee/qShVK9cm',
        },
        {
          name: 'UX-19 子彈獅鷲',
          url: 'https://lin.ee/ok2YIEn',
        },
        {
          name: 'UX-20 榮耀武神',
          url: 'https://lin.ee/ROf4SNU',
        },
        {
          name: 'CX-00 福音戰士改造組',
          url: 'https://lin.ee/SkGF7q5',
        },
        {
          name: 'CX-00 迪卡狂怒',
          url: 'https://lin.ee/6sjRsFo',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://lin.ee/ybtnfyU',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://lin.ee/yd44wrJ',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://lin.ee/y5813kab',
        },
        {
          name: 'CX-05 抽包',
          url: 'https://lin.ee/9J4ZobS',
        },
        {
          name: 'CX-08 抽包',
          url: 'https://lin.ee/W9t89r8r',
        },
        {
          name: 'CX-11 帝王威能',
          url: 'https://lin.ee/7ja2RAC',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://lin.ee/sC9HyuFt',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://lin.ee/pHINLVm',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://lin.ee/Vy38G1b',
        },
        {
          name: 'CX-17 抽包',
          url: 'https://lin.ee/rguasSx',
        },
        {
          name: 'CX-19 抽包',
          url: 'https://lin.ee/PfHrwBW',
        },
      ],
    },
    {
      store: 'Funbox 高雄SOGO店',
      storeUrl: 'https://linevoom.line.me/user/_dV2_iZGnvicFJijn62vXHA57ANIeliHDGI7gnRo',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://lin.ee/wm9lPYp',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://lin.ee/UAgXnQL',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://lin.ee/QwLnkFc',
        },
        {
          name: 'UX-16 時鐘幻象隨機強化組',
          url: 'https://lin.ee/zF4P8Ob',
        },
        {
          name: 'UX-17 隕星龍騎士3-70J',
          url: 'https://lin.ee/WLijQym',
        },
        {
          name: 'UX-19 子彈獅鷲H',
          url: 'https://lin.ee/VzY8rVa',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://lin.ee/6ip8aSY',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://lin.ee/nQdM9j7',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://lin.ee/w2O9GGk',
        },
        {
          name: 'CX-05 隨機強化組Vol6',
          url: 'https://lin.ee/zbbQJO9',
        },
        {
          name: 'CX-08 隨機強化組Vol7',
          url: 'https://lin.ee/XCv2eN7',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://lin.ee/5XR0ClN',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://lin.ee/rvzfygP',
        },
      ],
    },
    {
      store: 'Funbox 高雄大遠百',
      storeUrl: 'https://linevoom.line.me/user/_dYOR2VczscGNCah5bglUoA62Gj_YR_lq2R-UoMs',
      startTime: '抽選/購買時間：2026/09/24 11:00~2026/09/25 21:00',
      items: [
        {
          name: 'CX-05 隨機強化組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VJP4D4W9PPCPFM8GJ959T9',
        },
        {
          name: 'CX-08 隨機強化組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VK08NPTA4KX741MVZTGV0N',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VKB491PAF604ANXFCS09YX',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VKZXSC1HT2EE30E26EVAAN',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VM7J6PNHNF8GB8J8QEPT0P',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VMHT7ZDNC5R0QNVXK8637J',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VMQZK0PF4R642EBX6JD328',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VPB29RDQM46ZNT423QYB4Z',
        },
        {
          name: 'UX-16 時鐘幻象隨機強化組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VN5H68VA01T3NQCM67RBDM',
        },
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VNDEY3Q7JSC152RCKYTTEA',
        },
        {
          name: 'UX-17 隕星龍騎士',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VNN7XEEAR5WCEA1TPV05NH',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VNV0JR1YPGQ1D2KVBV46W2',
        },
        {
          name: 'UX-19 子彈獅鷲',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VP0R254WMEXW2Q9N0BM59G',
        },
        {
          name: 'UX-20 榮耀武神',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VP6K06FAGJFWHRMEAREZHV',
        },
      ],
    },
    {
      store: 'Funbox 漢神巨蛋店',
      storeUrl: 'https://linevoom.line.me/user/_dZuBlwRH9v-DXFkhIH9m1xAU7En6xl4R3qc363s',
      startTime: '抽選/購買時間：2026/09/24 11:00~2026/09/25 21:00',
      items: [
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3TVFQDWD3QXEHNKHKMKQ757',
        },
        {
          name: 'UX-19 子彈獅鷲H',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3TTMMTXXBDAG7KKQS3VS9KQ',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3TTQVBGTV4SF93KFVJV13XF',
        },
        {
          name: 'CX-16 極限衝擊對戰組C',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3TTT24K5DMY357DEKACMW00',
        },
        {
          name: 'CX-17 隨機強化組 Vol.10',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M34FBM5AKJ3R44VGT5KWNTPQ',
        },
        {
          name: 'CX-05 隨機強化組 Vol.6',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3TX1ZPC7TKTMXWG5XKFVTHG',
        },
        {
          name: 'CX-08 隨機強化組 Vol.7',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3TXBHMGBGCXY7CWMDK41TDN',
        },
        {
          name: 'UX-16 時鐘幻象 隨機強化組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V78GQ48ZS7HQXHEHRNM8X0',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V926CYTM1MN9KAE6T9YFY4',
        },
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V7MYPARXH82SZBNZYJZM46',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V9KBBCZH6WGFB03ABS28TM',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V95QP598PE0YDF3VVSWK05',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V99KNMEJEFS8ZRCTMA8DWG',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V9DATSC1BVCSARFA5KDEYH',
        },
        {
          name: 'UX-17 隕星龍騎士3-70J',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V8CDWWK0M7ZZ95MJNVPZXA',
        },
      ],
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
      startTime: '抽選/購買時間：2026/09/24 11:00~2026/09/25 21:00',
      items: [
        {
          name: 'UX-03 魔導神杖 $295元',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3SC248NTXWB7ZRBV1A5QFV8',
        },
        {
          name: 'UX-15 鮫鯊狂鱗改造組 $795元',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3SBHQJBMKQ5SXGC42QR7DX5',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組 $1395元',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3TVBYCB4584FAM5RWZX6VNB',
        },
        {
          name: 'CX-17 隨機強化組 Vol.10 350元',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3SD0ZV0H9N8PDR8YYK18GTQ',
        },
        {
          name: 'CX-05 隨機強化組 Vol.6 350元',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3SD4YFH3W5Z2B4HPPDEQWT2',
        },
        {
          name: 'CX-08 隨機強化組 Vol.7 350元',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3SD7EH8B4CE9KTS8NYV2QC9',
        },
        {
          name: 'UX-16 時鐘幻象 隨機強化組295元',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3SDDWXT2GPJS4V2WK6Q5GBG',
        },
        {
          name: 'CX-02 魔導至尊 495元',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3SDK57Z8RP0VA2R3N60FM3N',
        },
        {
          name: 'CX-03 英仙幽冥 350元',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3SDPMEDR0X6DD5Z5440M3HD',
        },
        {
          name: 'CX-01 蒼龍勇氣 495元',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VD4C6DHTVDXQCTHH9K4Y1X',
        },
        {
          name: 'UX-14 天蠍長矛0-70Z 495元',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VCNRG8Y74H1P205226DKMT',
        },
        {
          name: 'CX-14 騎士堡壘 495元',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3VCM8Y40MAGW56YXWKFJVAW',
        },
        {
          name: 'UX-17 隕星龍騎士3-70J 550元',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3SFFCMMNYF7RPKE9PJS7HPE',
        },
      ],
    },
    {
      store: 'Funbox 高雄大立店',
      storeUrl: 'https://linevoom.line.me/user/_dQjEieF9ohNmyCT1yYbOpfT_jw3DHpatmfmuM5o',
      startTime: '抽選&購買資格時間：2026/10/02 11:00~2026/10/03 20:30',
      items: [
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://lin.ee/z30jzdv',
        },
        {
          name: 'UX-03 魔導神仗',
          url: 'https://lin.ee/wGwrUq8',
        },
        {
          name: 'UX-16 時鐘幻象隨機強化組',
          url: 'https://lin.ee/YpDA5lgj',
        },
        {
          name: 'UX-17 隕星龍騎士3-70J',
          url: 'https://lin.ee/Oh39UuU',
        },
        {
          name: 'UX-19 子彈獅鷲',
          url: 'https://lin.ee/Sc24eSf',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://lin.ee/qklTBFi',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://lin.ee/NtyHt75',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://lin.ee/T6majnJf',
        },
        {
          name: 'CX-16 極限衝擊對戰組C',
          url: 'https://lin.ee/pFbz4cJY',
        },
        {
          name: 'CX-17 隨機強化組',
          url: 'https://lin.ee/z2I5WDa',
        },
      ],
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
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://lin.ee/WxJfON0',
        },
        {
          name: 'UX-13 魔像奇岩',
          url: 'https://lin.ee/nGU54hy',
        },
        {
          name: 'UX-14 天蠍長矛0-70Z',
          url: 'https://lin.ee/ZUwZy0L',
        },
        {
          name: 'UX-16 時鐘幻象 隨機強化組',
          url: 'https://lin.ee/VPTFr3b',
        },
        {
          name: 'UX-17 隕星龍騎士3-70J',
          url: 'https://lin.ee/p2Wjxfu',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://lin.ee/nzFz7rgH',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://lin.ee/S1Q63na',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://lin.ee/St9Xw2H',
        },
        {
          name: 'CX-05 隨機強化組 Vol.6',
          url: 'https://lin.ee/YKvl7JG',
        },
        {
          name: 'CX-08 隨機強化組 Vol.7',
          url: 'https://lin.ee/vPsYazc',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://lin.ee/vJSkjGB',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://lin.ee/YSSFkcu',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://lin.ee/RKqs8Jd',
        },
        {
          name: 'CX-16 極限衝擊對戰組C',
          url: 'https://lin.ee/yKHnC2w0',
        },
        {
          name: 'CX-17 隨機強化組 Vol.10',
          url: 'https://lin.ee/8hm8Yxn',
        },
      ],
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
      startTime: '抽選/購買時間：2026/10/02 10:00~2026/10/03 21:00',
      items: [
        {
          name: 'BX-00 蒼龍神劍3-60F V2',
          url: 'https://lin.ee/v6jiaqM',
        },
        {
          name: 'UX-16 時鐘幻象 隨機強化組',
          url: 'https://lin.ee/zR889cJ',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://lin.ee/57XCDj3',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://lin.ee/yj3cwHz',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://lin.ee/srteVO1',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://lin.ee/n9tKaKs',
        },
        {
          name: 'CX-16 極限衝擊對戰組C',
          url: 'https://lin.ee/q93GBpv',
        },
        {
          name: 'BXG-04 銀牙烈虎S',
          url: 'https://lin.ee/vvKOvYv',
        },
      ],
    },
  ],
  屏東縣: [
    {
      store: 'Funbox 屏東太平洋店',
      storeUrl: 'https://linevoom.line.me/user/_dTnMNq0eoiZ5jnuQaFUz2oVpxylrT13ojfI_Ko8',
      startTime: '抽選&購買資格時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [
        {
          name: 'CX-00 新世紀福音戰士改造組',
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
        {
          name: 'UX-00 新世紀福音戰士改造組 售價1395元',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M3V9B607MFSKMMQKPFT1ZNR5',
        },
      ],
    },
    {
      store: 'Funbox 屏東環球',
      storeUrl: 'https://linevoom.line.me/user/_dfq4IRS_qaEaR4Svk0SKsB78xW9x2-lkU1wSpKU',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://lin.ee/pbfJGy5',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://lin.ee/YGsk2ic',
        },
        {
          name: 'UX-14 天蠍長矛0-70Z',
          url: 'https://lin.ee/8FYXApf',
        },
        {
          name: 'UX-15 鮫鯊狂鱗改造組',
          url: 'https://lin.ee/thV3g0f',
        },
        {
          name: 'UX-16 時鐘幻象 隨機強化組',
          url: 'https://lin.ee/yCxT81S',
        },
        {
          name: 'UX-17 隕星龍騎士3-70J',
          url: 'https://lin.ee/94ynBej',
        },
        {
          name: 'UX-19 子彈獅鷲H',
          url: 'https://lin.ee/NqRo4Gb',
        },
        {
          name: 'CX-00 福音戰士改造組',
          url: 'https://lin.ee/sFzUTJF',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://lin.ee/5hlcoPH',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://lin.ee/PWncdlj',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://lin.ee/5osSxsY',
        },
        {
          name: 'CX-05 隨機強化組 Vol.6',
          url: 'https://lin.ee/5Hvw9nU',
        },
        {
          name: 'CX-11 帝王威能',
          url: 'https://lin.ee/7kA2m3E',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://lin.ee/tCbw6sM',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://lin.ee/SopDpNe',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://lin.ee/ze2DDbh',
        },
        {
          name: 'CX-16 極限衝擊對戰組C',
          url: 'https://lin.ee/SIkm12B',
        },
        {
          name: 'CX-17 隨機強化組 Vol.10',
          url: 'https://lin.ee/YHpq2El',
        },
      ],
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
      startTime: '抽選/購買時間：2026/10/02～2026/10/03（貼文未註明開始與截止時間）',
      items: [
        {
          name: 'UX-01 蒼龍爆刃',
          url: 'https://lin.ee/QuimnvZ',
        },
        {
          name: 'UX-13 魔象奇岩',
          url: 'https://lin.ee/W7crdaT',
        },
        {
          name: 'UX-14 天蠍長矛',
          url: 'https://lin.ee/Y7Ng3fr',
        },
        {
          name: 'UX-16 時鐘幻象',
          url: 'https://lin.ee/pwqK90O',
        },
        {
          name: 'UX-17 隕星龍騎士',
          url: 'https://lin.ee/6Ye0FWs',
        },
        {
          name: 'UX-17 隕星龍騎士',
          url: 'https://lin.ee/PJqvjsy',
        },
        {
          name: 'CX-01 蒼龍勇氣',
          url: 'https://lin.ee/XffQ8wt',
        },
        {
          name: 'CX-02 魔導至尊',
          url: 'https://lin.ee/syW1CRA',
        },
        {
          name: 'CX-03 英仙幽冥',
          url: 'https://lin.ee/WeuiAc8',
        },
        {
          name: 'CX-05 隨機強化組',
          url: 'https://lin.ee/rUgPd3R',
        },
        {
          name: 'CX-08 隨機強化組',
          url: 'https://lin.ee/RebujoK',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://lin.ee/tzCM5fu',
        },
        {
          name: 'CX-14 騎士堡壘',
          url: 'https://lin.ee/WvkC4FA',
        },
        {
          name: 'CX-15 邪神狂怒',
          url: 'https://lin.ee/WFdAvvB',
        },
        {
          name: 'CX-16 極限衝擊對戰組',
          url: 'https://lin.ee/n8KBKVG',
        },
      ],
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
