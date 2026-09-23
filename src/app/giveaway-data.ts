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
  { name: '桃園市' },
  { name: '新竹市' },
  { name: '新竹縣' },
  { name: '苗栗縣' },
  { name: '彰化縣' },
  { name: '雲林縣' },
  { name: '宜蘭縣' },
  { name: '台中市' },
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
      storeUrl: 'https://www.facebook.com/funboxsogo',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
    {
      store: 'Funbox-信義A8店(陀螺販售)',
      storeUrl: 'https://linevoom.line.me/user/_dfItqTWWpJgcZPNYg_b3_xlBeXDhlwTDTicnfSU',
      startTime: '抽選/購買時間 2026/09/18 11:00 - 2026/09/19 21:00',
      items: [],
    },
    {
      store: 'Funbox 三越站前店',
      storeUrl: 'https://linevoom.line.me/user/_dTQ_Ar8kG3TZeWoB_i2PtLW_TclZiMtldppUzAQ',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
    {
      store: 'Funbox-南港潤泰',
      storeUrl: 'https://linevoom.line.me/user/_dSeRV-7dSwPAS21zhFTEZS9TU0cjb1gBLwEML9A',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
    {
      store: 'Funbox 台北大巨蛋店',
      storeUrl: 'https://www.facebook.com/profile.php?id=61593737335376',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
    {
      store: '來玩聚-北車地下街',
      storeUrl: 'https://linevoom.line.me/user/_dXjo38IGuVk3obdbWWB8DVc86lCei15_6UkRuW8',
      startTime: '抽選時間：2026/09/18 12:00~2026/09/19 19:30',
      items: [],
    },
    {
      store: 'Funbox 天母SOGO店',
      storeUrl: 'https://linevoom.line.me/user/_db3MM1gifrvefmBbBLPWOhPAw0aPUL9K3IvLDTk',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
    {
      store: 'Funbox 遠百信義A13',
      storeUrl: 'https://linevoom.line.me/user/_dZWTe6za3_22gXVkl46uAq37zC6nwkQQCwZnBoA',
      startTime: '抽選/購買時間 2026/09/18 11:00 - 2026/09/19 21:00',
      items: [],
    },
    {
      store: 'Funbox LaLaport南港',
      storeUrl: 'https://linevoom.line.me/user/_dVgaAWKsM1ofi6bVa7iJV1_zOspCOrdSv0vgXKw',
      startTime: '抽選/購買時間 2026/09/11 11:00 - 2026/09/12 21:00',
      items: [],
    },
    {
      store: 'Funbox 美麗華',
      storeUrl: 'https://linevoom.line.me/user/_dS6PecGuAayr8FMQ6NoCcETN1oXZ0zgwun4Uivc',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
    {
      store: 'Funbox天母三越店',
      storeUrl: 'https://linevoom.line.me/user/_dXYFKzVX-ldfgeUOor_McfFTE_yJP7d54nPjxpQ',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
    {
      store: 'Funbox 三越南西店',
      storeUrl: 'https://linevoom.line.me/user/_dXRCeNI62-wxECClrgjwMfi8HnY2ow5Onw6aC1A',
      startTime: '抽選/購買時間 2026/09/18 11:00 - 2026/09/19 21:00',
      items: [],
    },
  ],
  新北市: [
    {
      store: 'FunBox Toys-汐止遠雄店',
      storeUrl: 'https://linevoom.line.me/user/_dXWlFT8AyCrEdtsk_fRRUYuqERc8rWDzx3c6DUA',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
    {
      store: 'Funbox板橋遠東店',
      storeUrl: 'https://linevoom.line.me/user/_dUcATZnmDAam7Low6HB0-JXZC1DzUJEbh8hA8Gg',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
    {
      store: 'Funbox-中和環球店',
      storeUrl: 'https://linevoom.line.me/user/_dSg6slLn5Zg47l9CPlGC-LezlX4EP3fmltKvQRs',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
    {
      store: 'Funbox樹林秀泰店',
      storeUrl: 'https://linevoom.line.me/user/_dSj7fhnsKdDEm1q2ehrYEJTOyrm4OuI2NFsN3I0',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
    {
      store: 'Funbox板橋大遠百',
      storeUrl: 'https://linevoom.line.me/user/_dblyPGfsKpebVOKvBaP8gs72hysvg-G0EVYLyv4',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
    {
      store: 'FUNBOX 比漾廣場店',
      storeUrl: 'https://linevoom.line.me/user/_dQbxr4jKpXDT3BtXULflBCgU9GujoUvNaAUOOZo',
      startTime: '抽選/購買時間 2026/09/18 開店 - 2026/09/19 21:00',
      items: [],
    },
  ],
  桃園市: [
    {
      store: 'Funbox Toys 桃園新光站前店',
      storeUrl: 'https://www.facebook.com/share/p/1BwVdTcFYL/?mibextid=wwXIfr',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
    {
      store: 'Funbox Toy-桃園環球A8店',
      storeUrl: 'https://linevoom.line.me/user/_dWWqORTPgThK__JAqyRDK9PX4ReZqnOFc28vpaE',
      startTime: '抽選時間 2026/09/18 11:00 - 2026/09/19 21:00',
      items: [],
    },
    {
      store: 'Funbox toys - 桃園台茂店',
      storeUrl: 'https://linevoom.line.me/user/_dZrp8IBATlHOFZaobLCYRrXE5m7abD4dD2ItWm8',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:30',
      items: [],
    },
    {
      store: 'Funbox 中壢大江店',
      storeUrl: 'https://linevoom.line.me/user/_daOwg6Nz08TwGFzWoVR264J1CWj5Lp8g0Lgf-QM',
      startTime: '抽選&購買時間 2026/09/11 11:00 - 2026/09/12 21:00',
      items: [],
    },
    {
      store: 'FunBox-桃園環球A19店',
      storeUrl: 'https://linevoom.line.me/user/_dQguBN50HV7T3jjTaZbJKVwoET6cJJH2Kj43Y2E',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
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
      store: 'Funbox 新竹遠雄湳雅',
      storeUrl: 'https://line.me/R/ti/p/@agl4214l',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
  ],
  新竹縣: [
    {
      store: 'Funbox 竹北遠東店',
      storeUrl: 'https://linevoom.line.me/user/_deu1wnG4xXho1I98-nH_PZKQ0gl-iAoehGDIHxA',
      startTime: '抽選/購買時間 2026/09/18 11:00 - 2026/09/19 21:00',
      items: [],
    },
    {
      store: 'funbox 享平方店',
      storeUrl: 'https://linevoom.line.me/user/_dfuDiJPQBJn4ih1iarevDIEIB9XvR-_q44VI6bE',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19（依原公告）',
      items: [],
    },
  ],
  台中市: [
    {
      store: 'Funbox 台中港三井',
      storeUrl: 'https://linevoom.line.me/user/_dXDniXt3Xu0U5lkXYliBBHGQRD2FtCUnVVbXPhY',
      startTime: '抽籤時間&使用期限 2026/09/24 11:00 - 2026/09/25 20:30',
      items: [],
    },
    {
      store: 'Funbox 廣三SOGO店',
      storeUrl: 'https://linevoom.line.me/user/_dUpKOzSR_s9Wca-q8vJLgOSM-UGMJNMonlEK_Nw',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
    {
      store: 'Funbox 豐原太平洋店',
      storeUrl: 'https://linevoom.line.me/user/_dWUEiTQIz0C550q-X-t3o65-r0CLa8-fBL6b6u8',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
    {
      store: 'Funbox麗寶一期店',
      storeUrl: 'https://linevoom.line.me/user/_dZD8OLWoBDH7CMfvg3nqfJoIb3wQMGpZ_V7DOOI',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
    {
      store: 'Funbox 新光三越台中店',
      storeUrl: 'https://linevoom.line.me/user/_dcavY93jrqjYaLVO8JR44m7jxZNARF__lfYuyIo',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
    {
      store: 'Funbox 台中中友店',
      storeUrl: 'https://linevoom.line.me/user/_dVExgXo7x7ugfZBDIYzfRF8XR9geWiZncXXAkNM',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
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
  ],
  彰化縣: [
    {
      store: '來玩聚-彰化店',
      storeUrl: 'https://linevoom.line.me/user/_deL1i2Bb8uUCbeQ10yCnEvVLz_iZbXwvFtNNTRM',
      startTime: '抽選時間：2026/09/18 10:00~2026/09/19 21:00',
      items: [],
    },
    {
      store: '來玩聚-員林店',
      storeUrl: 'https://linevoom.line.me/user/_dar-0z1aYQPkB0W-BiwgwDp6XsDKAdehbmupEaI',
      startTime: '抽選/購買時間 2026/09/18 10:00 - 2026/09/18 21:00',
      items: [],
    },
  ],
  雲林縣: [
    {
      store: '來玩聚斗六店',
      storeUrl: 'https://linevoom.line.me/user/_ddu256ZXwJCBqOeIfKwY6QYdeIvbrVOmBRIOKfo',
      startTime: '抽選時間：2026/09/18 10:00~2026/09/19 21:00',
      items: [],
    },
  ],
  嘉義市: [
    {
      store: 'Funbox Toys-嘉義遠東店',
      storeUrl: 'https://linevoom.line.me/user/_dVzi6SpAv9EDTDhGlf38KyYzGRC3R0O0O6zxlno',
      startTime: '抽選時間 2026/09/11 11:00 - 2026/09/12 20:30',
      items: [],
    },
    {
      store: 'Funbox 嘉義耐斯',
      storeUrl: 'https://line.me/R/ti/p/@121vsdww',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
    {
      store: 'Funbox 嘉義三越店',
      storeUrl: 'https://linevoom.line.me/user/_dVZ_jIBO92xnDLzsC9JfjVWMgA2TNLQ2hncb3Ok',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
  ],
  台南市: [
    {
      store: 'FUNBOX 台南遠百',
      storeUrl: 'https://linevoom.line.me/user/_dWKgSOpFJ9bwQuysxkGH0jnCsb22vMfW7kuZDzU',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
    {
      store: 'Funbox 台南三井店',
      storeUrl: 'https://linevoom.line.me/user/_dTp06Slhdio7LDmd8xKxz3J2mw25-ZMRXZtXQ9I',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 20:30',
      items: [],
    },
    {
      store: 'Funbox 南紡購物中心店',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
    {
      store: '來玩聚 新仁店',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 20:00',
      items: [],
    },
    {
      store: 'Funbox 台南新天地店',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
  ],
  高雄市: [
    {
      store: '來玩聚鳳山店',
      storeUrl: 'https://linevoom.line.me/user/_dYHKZsEifm4hbpeUB6f8DAHE-NaYM-f4lmS_yxc',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
    {
      store: 'Funbox高雄sogo店',
      storeUrl: 'https://linevoom.line.me/user/_dV2_iZGnvicFJijn62vXHA57ANIeliHDGI7gnRo',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
    {
      store: 'Funbox 高雄大立店',
      storeUrl: 'https://linevoom.line.me/user/_dQjEieF9ohNmyCT1yYbOpfT_jw3DHpatmfmuM5o',
      startTime: '抽選時間 2026/09/11 11:00 - 2026/09/12 20:30',
      items: [],
    },
    {
      store: 'Funbox-夢時代店',
      storeUrl: 'https://linevoom.line.me/user/_dVHpcOhwVrBQ3ZY1xQBHuGMcluZ-yMcOSsSnRfU',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
    {
      store: 'Funbox-高雄漢神店',
      storeUrl: 'https://linevoom.line.me/user/_dZFySf-_Iy1JFk7B9OJx3p-R8KIqsjXVk6wMx_s',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
    {
      store: 'Funbox-漢神巨蛋店',
      storeUrl: 'https://linevoom.line.me/user/_dZuBlwRH9v-DXFkhIH9m1xAU7En6xl4R3qc363s',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
    {
      store: 'funbox大魯閣新光',
      storeUrl: 'https://linevoom.line.me/user/_dQ0ecVMFJ6V-NPSlxQbE5hqjsBH-WOBO5HdSv4Q',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
    {
      store: '來玩聚-新楠店',
      storeUrl: 'https://linevoom.line.me/user/_deAwpKm1kymi62-wvUqTCvK1LpCSk5bvwxAubMQ',
      startTime: '抽選時間：2026/09/18 10:00~2026/09/19 21:00',
      items: [],
    },
    {
      store: 'Funbox 高雄大遠百店',
      storeUrl: 'https://linevoom.line.me/user/_dYOR2VczscGNCah5bglUoA62Gj_YR_lq2R-UoMs',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
    {
      store: '來玩聚 楠梓店',
      storeUrl: 'https://linevoom.line.me/user/_dVPoSlHQT0aqmC-EZpckQXYHAMiL802BM23S7qk',
      startTime: '抽選時間：2026/09/18 10:00~2026/09/19 21:00',
      items: [],
    },
    {
      store: 'Funbox 高雄左營店',
      storeUrl: 'https://line.me/R/ti/p/@obz8096L',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
    {
      store: 'Funbox 義大2館',
      storeUrl: 'https://line.me/R/ti/p/@bxd6822t',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
    {
      store: 'Funbox 義享天地店',
      storeUrl: 'https://line.me/R/ti/p/@777nkbeo',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
  ],
  屏東縣: [
    {
      store: 'funbox屏東太平洋',
      storeUrl: 'https://linevoom.line.me/user/_dTnMNq0eoiZ5jnuQaFUz2oVpxylrT13ojfI_Ko8',
      startTime: '抽選時間 2026/09/11 11:00 - 2026/09/12 21:00',
      items: [],
    },
    {
      store: 'Funbox 屏東環球店',
      storeUrl: 'https://linevoom.line.me/user/_dfq4IRS_qaEaR4Svk0SKsB78xW9x2-lkU1wSpKU',
      startTime: '抽選時間 2026/09/11 11:00 - 2026/09/12 21:00',
      items: [],
    },
  ],
  宜蘭縣: [
    {
      store: 'Funbox 新月廣場店',
      storeUrl: 'https://line.me/R/ti/p/@027iendl',
      startTime: '抽選時間：2026/09/23 11:00~2026/09/23 21:00',
      items: [
        {
          name: 'CX-19 鱷魚裂甲',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M33ZF6C9MGJFDCWP1GTE2RBV',
        },
        {
          name: 'CX-00 迪卡狂怒 FT3-60T',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M33Y2P4P0QGHVRFVBV7YEK3R',
        },
        {
          name: 'BX-00 蒼龍神劍3-60F V2',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M33Y4J47X2HPM88X368TBJZS',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M33Y6VYD069ES6RA4VS9C1CC',
        },
        {
          name: 'UX-20 榮耀武神LF',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M33Y8M7E5M8SX00ASGJH34RC',
        },
        {
          name: 'UX-19 子彈獅鷲H',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M33YAGAAQ5BFAER86GN8WMJW',
        },
        {
          name: 'CX-11 帝王威能',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M33YGGGJ7FYVP6RNPJ4S0C99',
        },
        {
          name: 'BX-09 戰鬥陀螺X通行證',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M33YPYZ1V2KHYJAZSJD5NQJP',
        },
        {
          name: 'BXG-01 烈焰飛鳳S',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M33YRMNC44C1XVQ65SWBJJF6',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M33YTAQ5SKZFVG83NPN4T38F',
        },
      ],
    },
  ],
  花蓮縣: [
    {
      store: 'Funbox 花蓮店',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 20:30',
      items: [],
    },
  ],
  台東縣: [
    {
      store: 'Funbox 台東秀泰店',
      storeUrl: 'https://linevoom.line.me/user/_dWiMasxT4CrK1ogY11eoxXAVvwO-U9Fchsvba6o',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [],
    },
    {
      store: '來玩聚 台東家樂福店',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 20:00',
      items: [],
    },
  ],
  澎湖縣: [
    {
      store: 'Funbox 澎湖3號港店',
      startTime: '抽選時間：2026/09/18 10:00~2026/09/19 20:30',
      items: [],
    },
  ],
};
