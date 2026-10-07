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
      items: [],
    },
    {
      store: 'Funbox 新光三越南西店',
      storeUrl: 'https://linevoom.line.me/user/_dXRCeNI62-wxECClrgjwMfi8HnY2ow5Onw6aC1A',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:30',
      items: [],
    },
    {
      store: 'Funbox-天母SOGO店',
      storeUrl: 'https://linevoom.line.me/user/_db3MM1gifrvefmBbBLPWOhPAw0aPUL9K3IvLDTk',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: 'Funbox 信義A8店',
      storeUrl: 'https://line.me/R/ti/p/@983dfazy',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: 'Funbox 美麗華店',
      storeUrl: 'https://linevoom.line.me/user/_dS6PecGuAayr8FMQ6NoCcETN1oXZ0zgwun4Uivc',
      startTime: '抽選/購買時間：2026/10/02 11:11~2026/10/03 21:00',
      items: [],
    },
    {
      store: 'Funbox 南港潤泰店',
      storeUrl: 'https://line.me/R/ti/p/@924tguor',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: 'Funbox 天母三越店',
      storeUrl: 'https://line.me/R/ti/p/@237annfd',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: 'Funbox 遠百信義A13店',
      storeUrl: 'https://linevoom.line.me/user/_dZWTe6za3_22gXVkl46uAq37zC6nwkQQCwZnBoA',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: 'Funbox LaLaport南港店',
      storeUrl: 'https://line.me/R/ti/p/@924ngwfb',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: 'Funbox 台北大巨蛋店',
      storeUrl: 'https://line.me/R/ti/p/@248eexma',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: '來玩聚-台北地下街店',
      startTime: '抽選/購買時間：2026/10/02 12:00~2026/10/03 19:30',
      items: [],
    },
    {
      store: 'Funbox 新光三越站前店',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: 'Funbox 大葉高島屋店',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
  ],
  新北市: [
    {
      store: 'Funbox 比漾廣場店',
      storeUrl: 'https://linevoom.line.me/user/_dQbxr4jKpXDT3BtXULflBCgU9GujoUvNaAUOOZo',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00前',
      items: [],
    },
    {
      store: 'Funbox 板橋遠百中山店',
      storeUrl: 'https://linevoom.line.me/user/_dUcATZnmDAam7Low6HB0-JXZC1DzUJEbh8hA8Gg',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: 'Funbox 中和環球店',
      storeUrl: 'https://linevoom.line.me/user/_dSg6slLn5Zg47l9CPlGC-LezlX4EP3fmltKvQRs',
      startTime: '抽選/販售時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: 'Funbox 板橋大遠百店',
      storeUrl: 'https://linevoom.line.me/user/_dblyPGfsKpebVOKvBaP8gs72hysvg-G0EVYLyv4',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: 'Funbox 汐科遠雄店',
      storeUrl: 'https://linevoom.line.me/user/_dXWlFT8AyCrEdtsk_fRRUYuqERc8rWDzx3c6DUA',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: 'Funbox 樹林秀泰店',
      storeUrl: 'https://linevoom.line.me/user/_dSj7fhnsKdDEm1q2ehrYEJTOyrm4OuI2NFsN3I0',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: 'Funbox 淡水禮萊廣場店',
      storeUrl: 'https://line.me/R/ti/p/@944creff',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: 'Funbox 新店誠品裕隆城店',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
  ],
  宜蘭縣: [
    {
      store: 'Funbox 宜蘭新月廣場店',
      storeUrl: 'https://line.me/R/ti/p/@027iendl',
      startTime: '抽選/購買時間：2026/10/02 11:00~22:00、2026/10/03 11:00~21:00',
      items: [],
    },
  ],
  桃園市: [
    {
      store: 'Funbox 桃園新光站前店',
      storeUrl: 'https://line.me/R/ti/p/@fcm1241y',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: 'Funbox 桃園遠東店',
      storeUrl: 'https://line.me/R/ti/p/@bix0595a',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: 'Funbox 中壢SOGO店',
      storeUrl: 'https://line.me/R/ti/p/@xcs3672w',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: 'Funbox 中壢大江店',
      storeUrl: 'https://linevoom.line.me/user/_daOwg6Nz08TwGFzWoVR264J1CWj5Lp8g0Lgf-QM',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: 'Funbox 桃園環球A8店',
      storeUrl: 'https://line.me/R/ti/p/@lae4656h',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: 'Funbox 桃園台茂店',
      storeUrl: 'https://line.me/R/ti/p/@504tdsbb',
      startTime:
        '抽籤期間：2026/10/02 11:00～2026/10/03 21:30｜購買地點：桃園台茂購物中心 4F FunboxToys',
      items: [],
    },
    {
      store: 'Funbox 環球桃園A19店',
      storeUrl: 'https://line.me/R/ti/p/@403qwxdn',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
  ],
  新竹市: [
    {
      store: 'Funbox 新竹巨城店',
      storeUrl: 'https://linevoom.line.me/user/_dSYAGjN3DhBtiB8tU2pa3kl5yoRdBG7ucZNUZvo',
      startTime: '抽選/購買時間：2026/10/02～2026/10/03（貼文未註明起始時間）',
      items: [],
    },
    {
      store: 'Funbox 新竹遠雄店',
      storeUrl: 'https://line.me/R/ti/p/@agl4214l',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: 'Funbox 新竹遠東店',
      storeUrl: 'https://line.me/R/ti/p/@822rfnmr',
      startTime: '抽選時間：2026/10/08~2026/10/09 請於10/08~10/09 營業時間11：00',
      items: [
        {
          name: 'CX-19 鱷魚裂甲 隨機強化組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M4AJASPQJWHVX2F1M92JS16D',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M4AHGWZTT8R03774XPJWZD43',
        },
        {
          name: 'CX-16 極限衝擊對戰組C',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M4AJ0S06J6SS9VZRJ2M2SJJS',
        },
        {
          name: 'CX-11 帝王威能',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M4AJ69ACN2J0SG0SZ4HB4YRN',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M4AHF16DXPGA15X07Y08PK0A',
        },
        {
          name: 'UX-19 子彈獅鷲H',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M4AHJQVAY2FMF47HEQCJFW68',
        },
        {
          name: 'UX-15 鮫鯊狂鱗改造組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M4AJ3Q73B4AMWGE81368EEJC',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M4AHC5GMBAWZZSRM4WXZJT0C',
        },
        {
          name: 'BX-37 雙重極限衝擊戰鬥盤 豪華組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M4AJ8NQB5JQ7DYACPM6R0TPA',
        },
        {
          name: 'BX-09 戰鬥陀螺X通行證',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M4AHVXG67KCR67Q1MGHY1QEW',
        },
      ],
    },
  ],
  新竹縣: [
    {
      store: 'Funbox 竹北遠東店',
      storeUrl: 'https://line.me/R/ti/p/@642vdyvq',
      startTime: '抽籤/兌獎/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: 'Funbox 享平方店',
      storeUrl: 'https://line.me/R/ti/p/@062qoqex',
      startTime: '抽選/購買時間：2026/10/02～2026/10/03（貼文未註明開始時間）',
      items: [],
    },
  ],
  苗栗縣: [
    {
      store: 'Funbox 苗栗尚順店',
      storeUrl: 'https://line.me/R/ti/p/@185vowmo',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 20:30',
      items: [],
    },
  ],
  台中市: [
    {
      store: 'Funbox 台中中友店',
      storeUrl: 'https://linevoom.line.me/user/_dVExgXo7x7ugfZBDIYzfRF8XR9geWiZncXXAkNM',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: 'Funbox 豐原太平洋店',
      storeUrl: 'https://linevoom.line.me/user/_dWUEiTQIz0C550q-X-t3o65-r0CLa8-fBL6b6u8',
      startTime: '抽選與販售日期：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: 'Funbox 台中遠東店',
      storeUrl: 'https://line.me/R/ti/p/@147vfxjr',
      startTime: '抽選/購買資格時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: 'Funbox 廣三SOGO店',
      storeUrl: 'https://line.me/R/ti/p/@526bsjmb',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: 'Funbox 新光三越台中中港店',
      storeUrl: 'https://linevoom.line.me/user/_dcavY93jrqjYaLVO8JR44m7jxZNARF__lfYuyIo',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: 'Funbox 台中新時代店',
      storeUrl: 'https://line.me/R/ti/p/@hdg3289a',
      startTime: '抽選與販售日期：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: 'Funbox 文心秀泰店',
      storeUrl: 'https://linevoom.line.me/user/_dVbUMDyduUeLgyWJWRb0k8o55Sa-xzXFMnCJxpE',
      startTime: '抽選與販售日期：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: 'Funbox 麗寶一期店',
      storeUrl: 'https://line.me/R/ti/p/@829adhop',
      startTime: '抽選/購買資格時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: 'Funbox 台中港三井店',
      storeUrl: 'https://line.me/R/ti/p/@816xpruh',
      startTime: '抽籤時間&使用期限：2026/10/02 11:00~2026/10/03 20:30',
      items: [],
    },
    {
      store: 'Funbox 台中LaLaport店',
      storeUrl: 'https://line.me/R/ti/p/@620dfrfm',
      startTime: '抽選與販售日期：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: 'Funbox 漢神洲際店',
      storeUrl: 'https://line.me/R/ti/p/@218xxrbx',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
  ],
  彰化縣: [
    {
      store: '來玩聚-彰化店',
      storeUrl: 'https://linevoom.line.me/user/_deL1i2Bb8uUCbeQ10yCnEvVLz_iZbXwvFtNNTRM',
      startTime: '抽選/購買時間：2026/10/02 10:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: '來玩聚-員林店',
      storeUrl: 'https://linevoom.line.me/user/_dar-0z1aYQPkB0W-BiwgwDp6XsDKAdehbmupEaI',
      startTime: '抽選/購買時間：2026/10/02 10:00~2026/10/03 21:00',
      items: [],
    },
  ],
  雲林縣: [
    {
      store: '來玩聚-斗六店',
      storeUrl: 'https://linevoom.line.me/user/_ddu256ZXwJCBqOeIfKwY6QYdeIvbrVOmBRIOKfo',
      startTime: '抽選/購買時間：2026/10/02 10:00~2026/10/03 21:00',
      items: [],
    },
  ],
  嘉義市: [
    {
      store: 'Funbox 嘉義遠東店',
      storeUrl: 'https://line.me/R/ti/p/@gno1826d',
      startTime:
        '抽選資格時間：2026/10/02 11:00~2026/10/03 20:30｜中籤購買時間：10/02 11:00~21:30、10/03 11:00~20:30',
      items: [],
    },
    {
      store: 'Funbox 嘉義耐斯店',
      storeUrl: 'https://line.me/R/ti/p/@121vsdww',
      startTime:
        '抽籤時間：2026/10/02 11:00~2026/10/03 21:00｜中籤者結帳：2026/10/02 11:00~22:00、2026/10/03 11:00~21:00',
      items: [],
    },
    {
      store: 'Funbox 嘉義三越店',
      storeUrl: 'https://linevoom.line.me/user/_dVZ_jIBO92xnDLzsC9JfjVWMgA2TNLQ2hncb3Ok',
      startTime:
        '抽選開始：2026/10/02 11:00｜購買資格券有效期間：2026/10/02 11:00~22:00、2026/10/03 11:00~21:00',
      items: [],
    },
  ],
  台南市: [
    {
      store: 'Funbox 台南遠百店',
      storeUrl: 'https://linevoom.line.me/user/_dWKgSOpFJ9bwQuysxkGH0jnCsb22vMfW7kuZDzU',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: 'Funbox 台南新天地店',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: 'Funbox 南紡購物中心店',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: 'Funbox 台南三井店',
      storeUrl: 'https://linevoom.line.me/user/_dTp06Slhdio7LDmd8xKxz3J2mw25-ZMRXZtXQ9I',
      startTime: '抽選/購買資格時間：2026/10/02 11:00~2026/10/03 20:30',
      items: [],
    },
    {
      store: '來玩聚-新仁店',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 20:00',
      items: [],
    },
  ],
  高雄市: [
    {
      store: 'Funbox 高雄漢神店',
      storeUrl: 'https://linevoom.line.me/user/_dZFySf-_Iy1JFk7B9OJx3p-R8KIqsjXVk6wMx_s',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: 'Funbox 高雄SOGO店',
      storeUrl: 'https://linevoom.line.me/user/_dV2_iZGnvicFJijn62vXHA57ANIeliHDGI7gnRo',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: 'Funbox 高雄大遠百店',
      storeUrl: 'https://linevoom.line.me/user/_dYOR2VczscGNCah5bglUoA62Gj_YR_lq2R-UoMs',
      startTime: '抽選/購買資格時間：2026/10/02 11:00～2026/10/03 21:00',
      items: [],
    },
    {
      store: 'Funbox 漢神巨蛋店',
      storeUrl: 'https://linevoom.line.me/user/_dZuBlwRH9v-DXFkhIH9m1xAU7En6xl4R3qc363s',
      startTime: '抽選/購買時間：2026/10/02 11:00～2026/10/03 21:00',
      items: [],
    },
    {
      store: 'Funbox 高雄左營店',
      storeUrl: 'https://line.me/R/ti/p/@obz8096L',
      startTime: '抽選/購買資格時間：2026/10/02 11:00~2026/10/02 21:00',
      items: [],
    },
    {
      store: 'Funbox 夢時代店',
      storeUrl: 'https://linevoom.line.me/user/_dVHpcOhwVrBQ3ZY1xQBHuGMcluZ-yMcOSsSnRfU',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: 'Funbox 高雄大立店',
      storeUrl: 'https://linevoom.line.me/user/_dQjEieF9ohNmyCT1yYbOpfT_jw3DHpatmfmuM5o',
      startTime: '抽選&購買資格時間：2026/10/02 11:00~2026/10/03 20:30',
      items: [],
    },
    {
      store: 'Funbox 義大2館',
      storeUrl: 'https://line.me/R/ti/p/@bxd6822t',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: 'Funbox 高雄義享店',
      storeUrl: 'https://line.me/R/ti/p/@777nkbeo',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: 'Funbox 大魯閣新光店',
      storeUrl: 'https://linevoom.line.me/user/_dQ0ecVMFJ6V-NPSlxQbE5hqjsBH-WOBO5HdSv4Q',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: '來玩聚-楠梓店',
      storeUrl: 'https://linevoom.line.me/user/_dVPoSlHQT0aqmC-EZpckQXYHAMiL802BM23S7qk',
      startTime: '抽選/購買時間：2026/10/02 10:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: '來玩聚-新楠店',
      storeUrl: 'https://linevoom.line.me/user/_deAwpKm1kymi62-wvUqTCvK1LpCSk5bvwxAubMQ',
      startTime: '抽選/購買時間：2026/10/02 10:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: '來玩聚 鳳山店',
      startTime: '戰鬥陀螺X抽籤及販售時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
  ],
  屏東縣: [
    {
      store: 'Funbox 屏東太平洋店',
      storeUrl: 'https://linevoom.line.me/user/_dTnMNq0eoiZ5jnuQaFUz2oVpxylrT13ojfI_Ko8',
      startTime: '抽選&購買資格時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: 'Funbox 屏東環球店',
      storeUrl: 'https://linevoom.line.me/user/_dfq4IRS_qaEaR4Svk0SKsB78xW9x2-lkU1wSpKU',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: '來玩聚 新屏店',
      storeUrl: 'https://line.me/ti/p/~@308oaews',
      startTime: '抽選資格&購買時間：2026/10/02 11:00~2026/10/03 20:00',
      items: [],
    },
  ],
  花蓮縣: [
    {
      store: 'Funbox 花蓮店',
      startTime: '抽選/購買時間：2026/10/02～2026/10/03（貼文未註明開始與截止時間）',
      items: [],
    },
  ],
  台東縣: [
    {
      store: 'Funbox 台東秀泰店',
      storeUrl: 'https://linevoom.line.me/user/_dWiMasxT4CrK1ogY11eoxXAVvwO-U9Fchsvba6o',
      startTime: '抽選/購買時間：2026/10/02 11:00~2026/10/03 21:00',
      items: [],
    },
    {
      store: '來玩聚 台東家樂福',
      startTime: '抽選/購買時間：2026/10/02 11:00～2026/10/03 20:00',
      items: [],
    },
  ],
  澎湖縣: [
    {
      store: 'Funbox 澎湖3號港店',
      startTime: '抽選/購買時間：2026/10/02 10:00~2026/10/03 20:30',
      items: [],
    },
  ],
};
