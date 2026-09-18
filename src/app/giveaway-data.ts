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
      items: [
        { name: 'BX-00 蒼龍神劍', url: 'https://lin.ee/Uug2Iq3' },
        { name: 'BX-37 雙重極限衝擊戰鬥盤 豪華組', url: 'https://lin.ee/T7t1SBN' },
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/5BdORQN' },
        { name: 'CX-00 迪卡狂怒 FT3-60T', url: 'https://lin.ee/njAFauO' },
      ],
    },
    {
      store: 'Funbox 信義A8店',
      storeUrl: 'https://linevoom.line.me/user/_dfItqTWWpJgcZPNYg_b3_xlBeXDhlwTDTicnfSU',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        { name: 'BX-00 蒼龍神劍3-60F V2', url: 'https://lin.ee/sbnjL6d' },
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/rbHSRp2q' },
        { name: 'CX-00 迪卡狂怒 FT3-60T', url: 'https://lin.ee/ZrPAPe8' },
        { name: 'CX-18 腕龍鞭打 隨機強化組', url: 'https://lin.ee/9IMX8Cir' },
      ],
    },
    {
      store: 'Funbox 三越站前店',
      storeUrl: 'https://linevoom.line.me/user/_dTQ_Ar8kG3TZeWoB_i2PtLW_TclZiMtldppUzAQ',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/p46IHRb' },
        { name: 'CX-00 迪卡狂怒 FT3-60T', url: 'https://lin.ee/zgLeRGS' },
      ],
    },
    {
      store: 'Funbox 南港潤泰店',
      storeUrl: 'https://linevoom.line.me/user/_dSeRV-7dSwPAS21zhFTEZS9TU0cjb1gBLwEML9A',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/s6AwZVP' },
        { name: 'BX-26 獨角刺心', url: 'https://lin.ee/Ypy2yeB' },
        { name: 'BXG-01 烈焰飛鳳S', url: 'https://lin.ee/7UvN9CJ' },
        { name: 'CX-00 迪卡狂怒', url: 'https://lin.ee/Ox2JQvP' },
        { name: 'BX-00 暴風天馬3-70RA', url: 'https://lin.ee/VDvQUCg' },
      ],
    },
    {
      store: 'Funbox 台北大巨蛋店',
      storeUrl: 'https://www.facebook.com/profile.php?id=61593737335376',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        { name: 'BX-00 蒼龍神劍3-60F V2', url: 'https://lin.ee/Z5sRIgc' },
        { name: 'BX-08 三合一對戰組', url: 'https://lin.ee/Ozk3igF' },
        { name: 'BX-36 巨鯨怒濤 隨機強化組', url: 'https://lin.ee/zqHgl3c' },
        { name: 'BX-37 雙重極限衝擊戰鬥盤 豪華組', url: 'https://lin.ee/qRsjfi5' },
        { name: 'BX-38 赫燃天鳳', url: 'https://lin.ee/zgwDr7n' },
        { name: 'BX-44 三角強襲', url: 'https://lin.ee/XQq93P7' },
        { name: 'BX-45 武士魂斬', url: 'https://lin.ee/S9WJeW5' },
        { name: 'BX-48 隨機強化組Vol.09', url: 'https://lin.ee/OMcziho' },
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/XWXU0ui' },
        { name: 'UX-16 時鐘幻象 隨機強化組', url: 'https://lin.ee/OxGyvr2' },
        { name: 'UX-19 子彈獅鷲H', url: 'https://lin.ee/om0oJMi' },
        { name: 'CX-00 迪卡狂怒 FT3-60T', url: 'https://lin.ee/NiOIjoU' },
        { name: 'CX-01 蒼龍勇氣', url: 'https://lin.ee/tjOxjcB' },
        { name: 'CX-02 魔導至尊', url: 'https://lin.ee/7xMkYQZw' },
        { name: 'CX-06 極狐九尾 隨機強化組', url: 'https://lin.ee/xcpcLYL' },
        { name: 'CX-07 天馬爆擊', url: 'https://lin.ee/SIBplQs' },
        { name: 'CX-12 鳳凰閃焰', url: 'https://lin.ee/QZnMWJa' },
        { name: 'CX-14 騎士堡壘', url: 'https://lin.ee/uc49eSM' },
        { name: 'BXG-22 龍騎士S', url: 'https://lin.ee/NjpbFop' },
      ],
    },
    {
      store: '來玩聚 台北地下街店',
      storeUrl: 'https://linevoom.line.me/user/_dXjo38IGuVk3obdbWWB8DVc86lCei15_6UkRuW8',
      startTime: '抽選時間：2026/09/18 12:00~2026/09/19 19:30',
      items: [
        { name: 'BX-00 暴風天馬', url: 'https://lin.ee/uVzaVvY' },
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/WBnSzVn' },
        { name: 'CX-00 新世紀福音戰士陀螺套組', url: 'https://lin.ee/xpKAzF4' },
        { name: 'CX-00 迪卡狂怒', url: 'https://lin.ee/wW1DFYN' },
        { name: 'BXG-01 烈焰飛鳳S', url: 'https://lin.ee/Wo0677W' },
      ],
    },
    {
      store: 'Funbox 天母SOGO店',
      storeUrl: 'https://linevoom.line.me/user/_db3MM1gifrvefmBbBLPWOhPAw0aPUL9K3IvLDTk',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        { name: 'BX-00 蒼龍神劍3-60F V2', url: 'https://lin.ee/Y4bYfvZ' },
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/70SyxXas' },
        { name: 'CX-00 迪卡狂怒 FT3-60T', url: 'https://lin.ee/rYMEV3d' },
      ],
    },
    {
      store: 'Funbox 遠百信義A13店',
      storeUrl: 'https://linevoom.line.me/user/_dZWTe6za3_22gXVkl46uAq37zC6nwkQQCwZnBoA',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        { name: 'BX-37 雙重極限衝擊戰鬥盤 豪華組', url: 'https://lin.ee/NBflFpT' },
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/st7PKoI' },
        { name: 'CX-00 迪卡狂怒 FT3-60T', url: 'https://lin.ee/5hnrhfF' },
      ],
    },
    {
      store: 'Funbox LaLaport南港店',
      storeUrl: 'https://linevoom.line.me/user/_dVgaAWKsM1ofi6bVa7iJV1_zOspCOrdSv0vgXKw',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        { name: 'BX-00 蒼龍神劍3-60F V2', url: 'https://lin.ee/oXsof2F' },
        { name: 'BX-37 雙重極限衝擊戰鬥盤 豪華組', url: 'https://lin.ee/ZfvYsWT' },
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/WvMF6x3' },
        { name: 'CX-00 新世紀福音戰士陀螺套組', url: 'https://lin.ee/yrNv6E8' },
        { name: 'CX-00 迪卡狂怒 FT3-60T', url: 'https://lin.ee/u3E1dlU' },
        { name: 'BXG-04 銀牙烈虎S', url: 'https://lin.ee/W6j7aH5' },
      ],
    },
    {
      store: 'Funbox 美麗華',
      storeUrl: 'https://linevoom.line.me/user/_dS6PecGuAayr8FMQ6NoCcETN1oXZ0zgwun4Uivc',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        {
          name: 'UX-03 魔導神杖',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2Q9QTXAARVS1FS4E61SG8MV?q=auto_response',
        },
        {
          name: 'CX-00 迪卡狂怒 FT3-60T',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2MJ2JVPBZWBYJDETV19KYW5?q=auto_response',
        },
      ],
    },
    {
      store: 'Funbox 天母三越店',
      storeUrl: 'https://linevoom.line.me/user/_dXYFKzVX-ldfgeUOor_McfFTE_yJP7d54nPjxpQ',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        { name: 'BX-00 蒼龍神劍V2', url: 'https://lin.ee/PzT3ecL' },
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/vuWaB0z' },
        { name: 'CX-00 迪卡狂怒', url: 'https://lin.ee/zPLblyG' },
        { name: 'CX-13 龍王閃擊', url: 'https://lin.ee/PynNzeo' },
        { name: 'BXG-04 銀牙烈虎S', url: 'https://lin.ee/vsXielf' },
      ],
    },
    {
      store: 'Funbox 三越南西店',
      storeUrl: 'https://line.me/R/ti/p/@626iceit',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        {
          name: 'BX-00 蒼龍神劍3-60F V2',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2QN3CBJMYH40173QVRDSERS',
        },
        {
          name: 'BX-00 暴風天馬3-70RA',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2QN1SYCMN6TXAJ43C6C90ZY',
        },
        {
          name: 'BX-26 獨角刺心',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2QN0K39Q1KZY1970KSJXJPS',
        },
        {
          name: 'BX-33 皓戰猛虎',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2QMYRJWNFJFF01PYN0A386M',
        },
        {
          name: 'BXG-04 銀牙烈虎S',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2QMXA5HK8D3W3XKZ4G8FBAV',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2QMVWZ57J6BCY2174JNC5C5',
        },
        {
          name: 'CX-00 迪卡狂怒 FT3-60T',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2QMRG51CWV6SJ9HW82WHYGR',
        },
      ],
    },
  ],
  新北市: [
    {
      store: 'Funbox 汐止遠雄店',
      storeUrl: 'https://linevoom.line.me/user/_dXWlFT8AyCrEdtsk_fRRUYuqERc8rWDzx3c6DUA',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        { name: 'BX-00 蒼龍神劍', url: 'https://lin.ee/tWfkajB' },
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/uO81bZi' },
        { name: 'CX-00 迪卡狂怒', url: 'https://lin.ee/PNsmVxi' },
        { name: 'BXG-01 烈焰飛鳳S', url: 'https://lin.ee/YJHaDVu' },
        { name: 'BXG-04 銀牙烈虎S', url: 'https://lin.ee/r0EJfGJ' },
      ],
    },
    {
      store: 'Funbox 板橋遠百中山店',
      storeUrl: 'https://linevoom.line.me/user/_dUcATZnmDAam7Low6HB0-JXZC1DzUJEbh8hA8Gg',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/X4qa2XL' },
        { name: 'CX-00 迪卡狂怒 FT3-60T', url: 'https://lin.ee/SoiTIk0' },
      ],
    },
    {
      store: 'Funbox 中和環球店',
      storeUrl: 'https://linevoom.line.me/user/_dSg6slLn5Zg47l9CPlGC-LezlX4EP3fmltKvQRs',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/7J8teIN' },
        { name: 'CX-00 迪卡狂怒', url: 'https://lin.ee/7JxTO3R' },
      ],
    },
    {
      store: 'Funbox 樹林秀泰店',
      storeUrl: 'https://linevoom.line.me/user/_dSj7fhnsKdDEm1q2ehrYEJTOyrm4OuI2NFsN3I0',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        { name: 'BX-10 極限衝擊戰鬥盤', url: 'https://lin.ee/Va5ps9Z' },
        { name: 'BX-18 X旋風發射器', url: 'https://lin.ee/54JARrOL' },
        { name: 'BX-26 獨角刺心', url: 'https://lin.ee/SxeYMIg' },
        { name: 'BX-30 發射器握把（黑紅）', url: 'https://lin.ee/zchrTmH' },
        { name: 'BX-41 發射器握把（黑/透紅）', url: 'https://lin.ee/s4PeZAo' },
        { name: 'BX-45 武士魂斬', url: 'https://lin.ee/rScpBY2' },
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/O4jdONt' },
        { name: 'UX-21 惡魔冥界改造組', url: 'https://lin.ee/7mvOZdjy' },
        { name: 'CX-00 新世紀福音戰士陀螺套組', url: 'https://lin.ee/qvFWkll' },
        { name: 'CX-00 迪卡狂怒', url: 'https://lin.ee/vxHwgEJ' },
        { name: 'CX-13 龍王閃擊', url: 'https://lin.ee/RKDrrPj' },
        { name: 'BXG-01 烈焰飛鳳S', url: 'https://lin.ee/VI9mzh8' },
        { name: 'BXG-04 銀牙烈虎S', url: 'https://lin.ee/QMFqYQP' },
      ],
    },
    {
      store: 'Funbox 板橋大遠百店',
      storeUrl: 'https://linevoom.line.me/user/_dblyPGfsKpebVOKvBaP8gs72hysvg-G0EVYLyv4',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        { name: 'BX-00 蒼龍神劍3-60F V2', url: 'https://lin.ee/yp47UCf' },
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/U2hE9eB' },
        { name: 'CX-00 迪卡狂怒 FT3-60T', url: 'https://lin.ee/Q2usF7Y' },
        { name: 'CX-12 鳳凰閃焰', url: 'https://lin.ee/Vgc1u0M' },
      ],
    },
    {
      store: 'Funbox 比漾廣場店',
      storeUrl: 'https://line.me/R/ti/p/@ufq5307a',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        {
          name: 'CX-00 迪卡狂怒 FT3-60T',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2Q7WP1EYFN32G76D04VV3XV',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2Q7RPG9A4TT6Q0657YPSSVW',
        },
      ],
    },
  ],
  桃園市: [
    {
      store: 'Funbox Toys 桃園新光站前店',
      storeUrl: 'https://www.facebook.com/share/p/1BwVdTcFYL/?mibextid=wwXIfr',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/PGDpUEa' },
        { name: 'BX-00 暴風天馬 3-70RA', url: 'https://lin.ee/oXO4TcJ' },
        { name: 'UX-20 榮耀武神 LF', url: 'https://lin.ee/WIzFmuL' },
        { name: 'BX-50 天堂日輪隨機強化組', url: 'https://lin.ee/QrjgXGs' },
        { name: 'BXG-01 烈焰飛鳳 S', url: 'https://lin.ee/xTdIfyQ' },
        { name: 'CX-00 迪卡狂怒 FT3-60T', url: 'https://lin.ee/tpEbhvw' },
        { name: 'BX-00 蒼龍神劍 3-60F V2', url: 'https://lin.ee/rvdJRHY' },
        { name: 'CX-00 新世紀福音戰士改造組', url: 'https://lin.ee/qigt4V2' },
        { name: 'BXG-04 銀牙烈虎 S', url: 'https://lin.ee/yM7y5pM' },
      ],
    },
    {
      store: 'Funbox 桃園環球A8',
      storeUrl: 'https://line.me/R/ti/p/@lae4656h',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        {
          name: 'CX-00 迪卡狂怒 FT3-60T',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2N0BVSYJMT7QFE6CRZ7KQZ4',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2N0QHB3NMTCCTQ0R5DNVK00',
        },
        {
          name: 'BXG-04 銀牙烈虎',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2N0W8AV7JD9D830CV2ZY1V0',
        },
      ],
    },
    {
      store: 'Funbox 桃園台茂店',
      storeUrl: 'https://line.me/R/ti/p/@504tdsbb',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:30',
      items: [
        {
          name: 'CX-00 迪卡狂怒 FT3-60T',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2MNRD0H32GP4N269YJ6CHQD',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2MP0133K01X2DMJ0V4Q2B3A',
        },
        {
          name: 'BX-37 雙重極限衝擊戰鬥盤 豪華組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2MP5KF346YZNWZ8SX6NWW8G',
        },
      ],
    },
    {
      store: 'Funbox 中壢大江店',
      storeUrl: 'https://line.me/R/ti/p/@099ldnvw',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        {
          name: 'BXG-04 銀牙烈虎S',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2S6A3WK1J95SS97J04C26KW',
        },
        {
          name: 'BXG-01 烈焰飛鳳S',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2S68PN18NB0B0RV4K7TPYPG',
        },
        {
          name: 'BX-37 雙重極限衝擊戰鬥盤 豪華組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2S6CXCXCYZNHXRX3EY6B396',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2QXGY3J2S6RBSS3PN419RQY',
        },
        {
          name: 'CX-00 迪卡狂怒 FT3-60T',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2QXF6G5FY48AMGCMV3CCS5N',
        },
      ],
    },
    {
      store: 'Funbox 桃園環球A19店',
      storeUrl: 'https://line.me/R/ti/p/@403qwxdn',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        {
          name: 'CX-00 迪卡狂怒 FT3-60T',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2MNRW4QA134D44FMRN3E3W9',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2MNRBCGZTF38HV9YGF51KDD',
        },
      ],
    },
  ],
  新竹市: [
    {
      store: 'Funbox 新竹遠東店',
      storeUrl: 'https://linevoom.line.me/user/_dYjgWm0vwMyoPEcmLUOBhOQ55A0WaB7EuLfW5Mw',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/PyQg7Mf' },
        { name: 'CX-00 迪卡狂怒 FT3-60T', url: 'https://lin.ee/RFFjwHr' },
      ],
    },
    {
      store: 'Funbox 新竹巨城店',
      storeUrl: 'https://linevoom.line.me/user/_dSYAGjN3DhBtiB8tU2pa3kl5yoRdBG7ucZNUZvo',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        { name: 'BX-00 蒼龍神劍', url: 'https://lin.ee/WKzetli' },
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/rAteOxt' },
        { name: 'CX-00 迪卡狂怒', url: 'https://lin.ee/rYcoJis' },
        { name: 'BXG-01 烈焰飛鳳S', url: 'https://lin.ee/zmlQC1A' },
        { name: 'BXG-04 銀牙烈虎S', url: 'https://lin.ee/oHs7FAH' },
      ],
    },
    {
      store: 'Funbox 新竹遠雄湳雅',
      storeUrl: 'https://line.me/R/ti/p/@agl4214l',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        {
          name: 'CX-00 迪卡狂怒 FT3-60T',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2S3HAY2WB8WRMDG12XWJFTK',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2Q6YK9ABTF2VSAH0AC3KC8Z',
        },
        {
          name: 'BX-00 蒼龍神劍 3-60F',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2Q6VVNQ35VA1XDAHFXNTEG6',
        },
      ],
    },
  ],
  新竹縣: [
    {
      store: 'Funbox 竹北遠東店',
      storeUrl: 'https://linevoom.line.me/user/_deu1wnG4xXho1I98-nH_PZKQ0gl-iAoehGDIHxA',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        { name: 'BX-00 蒼龍神劍3-60F V2', url: 'https://lin.ee/8NO2w7i' },
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/w9GJZYU' },
        { name: 'CX-00 新世紀福音戰士陀螺套組', url: 'https://lin.ee/67NmxKq' },
        { name: 'CX-00 迪卡狂怒 FT3-60T', url: 'https://lin.ee/NYSuIfB6' },
        { name: 'BXG-01 烈焰飛鳳S', url: 'https://lin.ee/XUikEqt' },
        { name: 'BXG-04 銀牙烈虎S', url: 'https://lin.ee/TOoH1GY' },
      ],
    },
    {
      store: 'Funbox 享平方店',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19（依原公告）',
      items: [
        { name: 'BX-00 暴風天馬3-70RA', url: 'https://lin.ee/7b2igo6' },
        { name: 'BX-00 蒼龍神劍3-60F', url: 'https://lin.ee/71FGNku' },
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/5oDWBbG' },
        { name: 'UX-21 惡魔冥界改造組', url: 'https://lin.ee/PIGl57D' },
        { name: 'CX-00 新世紀福音戰士陀螺套組', url: 'https://lin.ee/WmJoUS8' },
        { name: 'CX-00 迪卡狂怒', url: 'https://lin.ee/n7vHmJn' },
        { name: 'CX-13 龍王閃擊', url: 'https://lin.ee/QYXC2jO' },
        { name: 'BXG-01 烈焰飛鳳S', url: 'https://lin.ee/8L5bEuT' },
      ],
    },
  ],
  台中市: [
    {
      store: 'Funbox 台中港三井店',
      storeUrl: 'https://linevoom.line.me/user/_dXDniXt3Xu0U5lkXYliBBHGQRD2FtCUnVVbXPhY',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 20:30',
      items: [
        { name: 'BX-00 蒼龍神劍', url: 'https://lin.ee/72ErrCn' },
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/rByGY8J' },
        { name: 'CX-00 新世紀福音戰士陀螺套組', url: 'https://lin.ee/qrtPiVM' },
        { name: 'CX-00 迪卡狂怒 FT3-60T', url: 'https://lin.ee/xP6lKDL' },
      ],
    },
    {
      store: 'Funbox 廣三SOGO店',
      storeUrl: 'https://linevoom.line.me/user/_dUpKOzSR_s9Wca-q8vJLgOSM-UGMJNMonlEK_Nw',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        { name: 'BX-00 蒼龍神劍3-60F V2', url: 'https://lin.ee/uYl4v8z' },
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/wE93RBt' },
        { name: 'CX-00 迪卡狂怒 FT3-60T', url: 'https://lin.ee/x2llY5y' },
        { name: 'BXG-04 銀牙烈虎S', url: 'https://lin.ee/vR9MXjS' },
      ],
    },
    {
      store: 'Funbox 豐原太平洋店',
      storeUrl: 'https://linevoom.line.me/user/_dWUEiTQIz0C550q-X-t3o65-r0CLa8-fBL6b6u8',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        { name: 'BX-00 蒼龍神劍3-60F V2', url: 'https://lin.ee/toNuy7m' },
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/XQ17WvX1' },
        { name: 'CX-00 新世紀福音戰士陀螺套組', url: 'https://lin.ee/qM5UmMZ' },
        { name: 'CX-00 迪卡狂怒 FT3-60T', url: 'https://lin.ee/s6Q9jKH' },
      ],
    },
    {
      store: 'Funbox 麗寶一期店',
      storeUrl: 'https://linevoom.line.me/user/_dZD8OLWoBDH7CMfvg3nqfJoIb3wQMGpZ_V7DOOI',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        { name: 'BX-00 蒼龍神劍', url: 'https://lin.ee/sUdG902' },
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/sEcuOEp' },
        { name: 'CX-00 迪卡狂怒', url: 'https://lin.ee/SZjcJy2' },
        { name: 'CX-13 龍王閃擊', url: 'https://lin.ee/5Ko8YJH' },
      ],
    },
    {
      store: 'Funbox 新光三越台中中港店',
      storeUrl: 'https://linevoom.line.me/user/_dcavY93jrqjYaLVO8JR44m7jxZNARF__lfYuyIo',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        { name: 'BX-37 雙重極限衝擊戰鬥盤 豪華組', url: 'https://lin.ee/wualWdv' },
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/xZsr8Bd' },
        { name: 'CX-00 迪卡狂怒', url: 'https://lin.ee/Qa6ftIbz' },
        { name: 'CX-12 鳳凰閃焰', url: 'https://lin.ee/xiyDX4H' },
      ],
    },
    {
      store: 'Funbox 台中中友店',
      storeUrl: 'https://linevoom.line.me/user/_dVExgXo7x7ugfZBDIYzfRF8XR9geWiZncXXAkNM',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        { name: 'BX-00 蒼龍神劍3-60F V2', url: 'https://lin.ee/wVYOqdV' },
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/5YBarKT' },
        { name: 'CX-00 迪卡狂怒 FT3-60T', url: 'https://lin.ee/7DhO0yq' },
      ],
    },
    {
      store: 'Funbox 台中新時代店',
      storeUrl: 'https://line.me/R/ti/p/@hdg3289a',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        {
          name: 'CX-00 迪卡狂怒 FT3-60T',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2MMCHTW2WY4M87AKCQ1N2BW',
        },
        {
          name: 'BX-00 蒼龍神劍3-60F V2',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2MM50255D0YD7KP32X7BA8P',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2MM72N6CK9G01K9KX1PJ0SK',
        },
      ],
    },
    {
      store: 'Funbox 文心秀泰店',
      storeUrl: 'https://line.me/R/ti/p/@605dilqq',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        {
          name: 'BXG-01 烈焰飛鳳S',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2PPAAB8W86ZH2YHNTEDMG5N',
        },
        {
          name: 'BXG-04 銀牙烈虎S',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2PP7X57EAVNE9XW00430YE2',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2PPD5329FF7RW1J0B0ZATZB',
        },
        {
          name: 'UX-21 惡魔冥界改造組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2PP99EEREK2WHVGEH63SQY8',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2PPJD00A7KKRNN1DJGQHY4J',
        },
        {
          name: 'CX-00 迪卡狂怒 FT3-60T',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2PPGM3X5P3G1WNKPFBMFJY4',
        },
      ],
    },
  ],
  彰化縣: [
    {
      store: '來玩聚 彰化店',
      storeUrl: 'https://linevoom.line.me/user/_deL1i2Bb8uUCbeQ10yCnEvVLz_iZbXwvFtNNTRM',
      startTime: '抽選時間：2026/09/18 10:00~2026/09/19 21:00',
      items: [
        { name: 'BX-00 蒼龍神劍3-60F V2', url: 'https://lin.ee/QfACVzB' },
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/rW8s3cc' },
        { name: 'UX-20 榮耀武神LF', url: 'https://lin.ee/SbiEA63' },
        { name: 'UX-21 惡魔冥界改造組', url: 'https://lin.ee/yi1ghCw' },
        { name: 'CX-00 迪卡狂怒', url: 'https://lin.ee/po8Gb9E' },
        { name: 'CX-13 龍王閃擊', url: 'https://lin.ee/xIbYdKr' },
        { name: 'BXG-01 烈焰飛鳳S', url: 'https://lin.ee/xqQgHaK' },
        { name: 'BXG-04 銀牙烈虎S', url: 'https://lin.ee/5PxvHEv' },
      ],
    },
    {
      store: '來玩聚 員林店',
      storeUrl: 'https://linevoom.line.me/user/_dar-0z1aYQPkB0W-BiwgwDp6XsDKAdehbmupEaI',
      startTime: '抽選時間：2026/09/18 10:00~2026/09/18 21:00',
      items: [
        { name: 'CX-00 迪卡狂怒 FT3-60T', url: 'https://lin.ee/o4Dr5FI' },
        { name: 'UX-03 魔導神杖 5-70DB', url: 'https://lin.ee/On3mnIp' },
        { name: 'BX-00 蒼龍神劍 3-60F V2', url: 'https://lin.ee/N8qv3qS' },
        { name: 'CX-00 新世紀福音戰士陀螺套組', url: 'https://lin.ee/PxuYWH9' },
      ],
    },
  ],
  雲林縣: [
    {
      store: '來玩聚 斗六店',
      storeUrl: 'https://linevoom.line.me/user/_ddu256ZXwJCBqOeIfKwY6QYdeIvbrVOmBRIOKfo',
      startTime: '抽選時間：2026/09/18 10:00~2026/09/19 21:00',
      items: [
        { name: 'BX-00 蒼龍神劍3-60F V2', url: 'https://lin.ee/woZB6HR' },
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/81U8a1c' },
        { name: 'CX-00 新世紀福音戰士陀螺套組', url: 'https://lin.ee/nrA4IEk' },
        { name: 'CX-00 迪卡狂怒 FT3-60T', url: 'https://lin.ee/v6CyhBE' },
      ],
    },
  ],
  嘉義市: [
    {
      store: 'Funbox 嘉義遠東',
      storeUrl: 'https://line.me/R/ti/p/@gno1826d',
      startTime: '抽選時間：未解析',
      items: [
        {
          name: 'BX-00 蒼龍神劍3-60F V2',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2CWXSZV0GYZS2BYKG1B1605',
        },
      ],
    },
    {
      store: 'Funbox 嘉義耐斯',
      storeUrl: 'https://line.me/R/ti/p/@121vsdww',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        {
          name: 'UX-03 魔導神杖',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2PTQF1FPF3V9TJMZHH75625',
        },
        {
          name: 'BX-00 蒼龍神劍3-60F V2',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2MWADXB36NQ8B06D3NYX2EW',
        },
        {
          name: 'CX-00 迪卡狂怒 FT3-60T',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2MWG3Y56NHS7JW4P7HEN4JE',
        },
      ],
    },
    {
      store: 'Funbox 嘉義三越店',
      storeUrl: 'https://line.me/R/ti/p/@zhj4962p',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2MBGZNG8V5R3TYBEDTAK2D7',
        },
        {
          name: 'CX-00 迪卡狂怒 FT3-60T',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2PNDC1QJ17N0V5EVJXXAHDD',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2MB4DTEJQS2JMJC7T4WTNYQ',
        },
      ],
    },
  ],
  台南市: [
    {
      store: 'Funbox 台南遠百店',
      storeUrl: 'https://linevoom.line.me/user/_dWKgSOpFJ9bwQuysxkGH0jnCsb22vMfW7kuZDzU',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/PfYzQEW' },
        { name: 'CX-00 迪卡狂怒 FT3-60T', url: 'https://lin.ee/6F1aaio' },
      ],
    },
    {
      store: 'Funbox 台南三井店',
      storeUrl: 'https://linevoom.line.me/user/_dTp06Slhdio7LDmd8xKxz3J2mw25-ZMRXZtXQ9I',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 20:30',
      items: [{ name: 'CX-00 迪卡狂怒', url: 'https://lin.ee/QOenjHO' }],
    },
    {
      store: 'Funbox 南紡購物中心店',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        { name: 'BX-00 蒼龍神劍3-60F V2', url: 'https://lin.ee/N9xT18Y' },
        { name: 'BX-26 獨角刺心', url: 'https://lin.ee/qPpBg8T' },
        { name: 'BX-37 雙重極限衝擊戰鬥盤 豪華組', url: 'https://lin.ee/9yMBcwM' },
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/R5Wvqu8' },
        { name: 'UX-19 子彈獅鷲H', url: 'https://lin.ee/9uLvzN9' },
        { name: 'UX-21 惡魔冥界改造組', url: 'https://lin.ee/PosArcs' },
        { name: 'CX-00 新世紀福音戰士陀螺套組', url: 'https://lin.ee/U9tqjfR' },
        { name: 'CX-00 迪卡狂怒 FT3-60T', url: 'https://lin.ee/oMoH3gA' },
        { name: 'CX-13 龍王閃擊', url: 'https://lin.ee/ttu0Mv9' },
      ],
    },
    {
      store: '來玩聚 新仁店',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 20:00',
      items: [
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/sksPn3f' },
        { name: 'CX-00 新世紀福音戰士陀螺套組', url: 'https://lin.ee/PluK8ZL' },
        { name: 'CX-00 迪卡狂怒 FT3-60T', url: 'https://lin.ee/oJvAA2l' },
      ],
    },
    {
      store: 'Funbox 台南新天地店',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        { name: 'BX-00 蒼龍神劍V2', url: 'https://lin.ee/Wzb933k' },
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/89IKLoW' },
        { name: 'CX-00 迪卡狂怒 FT3-60T', url: 'https://lin.ee/qp5uKNV' },
        { name: 'BXG-01 烈焰飛鳳S', url: 'https://lin.ee/OY1mOAD' },
        { name: 'BXG-04 銀牙烈虎S', url: 'https://lin.ee/uz1SO3X' },
      ],
    },
  ],
  高雄市: [
    {
      store: '來玩聚 鳳山店',
      storeUrl: 'https://linevoom.line.me/user/_dYHKZsEifm4hbpeUB6f8DAHE-NaYM-f4lmS_yxc',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/N6i116w' },
        { name: 'CX-00 迪卡狂怒 FT3-60T', url: 'https://lin.ee/o6r2uZf' },
      ],
    },
    {
      store: 'Funbox 高雄SOGO店',
      storeUrl: 'https://linevoom.line.me/user/_dV2_iZGnvicFJijn62vXHA57ANIeliHDGI7gnRo',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/PSA2cF7' },
        { name: 'CX-00 新世紀福音戰士陀螺套組', url: 'https://lin.ee/xdglLlF' },
        { name: 'CX-00 迪卡狂怒 FT3-60T', url: 'https://lin.ee/Y0DLElsu' },
      ],
    },
    {
      store: 'Funbox 高雄大立店',
      storeUrl: 'https://linevoom.line.me/user/_dQjEieF9ohNmyCT1yYbOpfT_jw3DHpatmfmuM5o',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 20:30',
      items: [
        { name: 'BX-00 蒼龍神劍', url: 'https://lin.ee/wYzEltE' },
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/xKrPh2u' },
        { name: 'CX-00 迪卡狂怒 FT3-60T', url: 'https://lin.ee/xr3XuvE' },
      ],
    },
    {
      store: 'Funbox 夢時代店',
      storeUrl: 'https://linevoom.line.me/user/_dVHpcOhwVrBQ3ZY1xQBHuGMcluZ-yMcOSsSnRfU',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/ors0Vjp' },
        { name: 'CX-00 迪卡狂怒 FT3-60T', url: 'https://lin.ee/7oKZFGm' },
      ],
    },
    {
      store: 'Funbox 高雄漢神店',
      storeUrl: 'https://linevoom.line.me/user/_dZFySf-_Iy1JFk7B9OJx3p-R8KIqsjXVk6wMx_s',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/Uu76j6n' },
        { name: 'CX-00 迪卡狂怒 FT3-60T', url: 'https://lin.ee/pL4TsB3' },
      ],
    },
    {
      store: 'Funbox 漢神巨蛋店',
      storeUrl: 'https://linevoom.line.me/user/_dZuBlwRH9v-DXFkhIH9m1xAU7En6xl4R3qc363s',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/NZ9baVT' },
        { name: 'CX-00 迪卡狂怒 FT3-60T', url: 'https://lin.ee/NnZBlko' },
      ],
    },
    {
      store: 'Funbox 大魯閣新光店',
      storeUrl: 'https://linevoom.line.me/user/_dQ0ecVMFJ6V-NPSlxQbE5hqjsBH-WOBO5HdSv4Q',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/UQfCXLE' },
        { name: 'CX-00 迪卡狂怒 FT3-60T', url: 'https://lin.ee/V1qn9n7' },
      ],
    },
    {
      store: '來玩聚 新楠店',
      storeUrl: 'https://linevoom.line.me/user/_deAwpKm1kymi62-wvUqTCvK1LpCSk5bvwxAubMQ',
      startTime: '抽選時間：2026/09/18 10:00~2026/09/19 21:00',
      items: [
        { name: 'BX-00 蒼龍神劍V2', url: 'https://lin.ee/WjdwsTC' },
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/9vygrwl1' },
        { name: 'CX-00 迪卡狂怒 FT3-60T', url: 'https://lin.ee/9aq01sv' },
      ],
    },
    {
      store: 'Funbox 高雄大遠百店',
      storeUrl: 'https://linevoom.line.me/user/_dYOR2VczscGNCah5bglUoA62Gj_YR_lq2R-UoMs',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/zBShCKPR' },
        { name: 'CX-00 迪卡狂怒 FT3-60T', url: 'https://lin.ee/rA8731l' },
      ],
    },
    {
      store: '來玩聚 楠梓店',
      startTime: '抽選時間：2026/09/18 10:00~2026/09/19 21:00',
      items: [
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/riOHMC5' },
        { name: 'CX-00 迪卡狂怒 FT3-60T', url: 'https://lin.ee/p2bwfmK' },
      ],
    },
    {
      store: 'Funbox 高雄左營店',
      storeUrl: 'https://line.me/R/ti/p/@obz8096L',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        {
          name: 'CX-00 迪卡狂怒 FT3-60T',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2Q47GBC0TRJGTHTX5VWCDN1',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2Q4CXTJFXV1P2ATYJ3NKN8C',
        },
      ],
    },
    {
      store: 'Funbox 義大2館',
      storeUrl: 'https://line.me/R/ti/p/@bxd6822t',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        {
          name: 'BX-00 蒼龍神劍3-60F V2',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2Q91590JNMVNPQDRG544Z1R',
        },
        {
          name: 'UX-20 榮耀武神LF',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2Q96K998341PPBCEVHMTYP2',
        },
        {
          name: 'CX-13 龍王閃擊',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2Q9BV7G71MAQ9PGZWR67TT0',
        },
        {
          name: 'UX-02 惡魔戰錘',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2Q9G809WCW3RY9KEEY3VTA6',
        },
        {
          name: 'BX-45 武士斬魂',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2Q98Q0D0EVKB60NA5B6TDTB',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2Q9MFQXCTADDNHR57K2XM8J',
        },
        {
          name: 'CX-00 迪卡狂怒',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2Q9Q9X64QGPXKGWH06RH9TF',
        },
        {
          name: 'CX-00 新世紀福音戰士改造組',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2Q9TEGTK1JX221F1ZGFE48T',
        },
      ],
    },
    {
      store: 'Funbox 義享天地店',
      storeUrl: 'https://line.me/R/ti/p/@777nkbeo',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        {
          name: 'CX-00 迪卡狂怒 FT3-60T',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2QJX8F0SQHKA3RCFKAP32C5',
        },
        {
          name: 'BX-00 蒼龍神劍3-60F V2',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2QK3V7AW9Z16QX1A1DT1TF7',
        },
        {
          name: 'UX-03 魔導神杖',
          url: 'https://liff.line.me/1654883387-DxN9w07M/c/01M2QK8YHQQXJG233FTKVX2ME5',
        },
      ],
    },
  ],
  屏東縣: [
    {
      store: 'Funbox 屏東太平洋店',
      storeUrl: 'https://linevoom.line.me/user/_dTnMNq0eoiZ5jnuQaFUz2oVpxylrT13ojfI_Ko8',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        { name: 'BX-00 蒼龍神劍3-60F V2', url: 'https://lin.ee/RqzPQwZ' },
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/trbzNRXa' },
        { name: 'CX-00 新世紀福音戰士陀螺套組', url: 'https://lin.ee/728oraL' },
        { name: 'CX-00 迪卡狂怒 FT3-60T', url: 'https://lin.ee/v1L6Xj5' },
      ],
    },
    {
      store: 'Funbox 屏東環球店',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        { name: 'BX-00 蒼龍神劍3-60F V2', url: 'https://lin.ee/UYeL73Y' },
        { name: 'CX-00 迪卡狂怒 FT3-60T', url: 'https://lin.ee/xrUrNkP' },
        { name: 'CX-13 龍王閃擊', url: 'https://lin.ee/pnlGQaz' },
      ],
    },
  ],
  宜蘭縣: [
    {
      store: 'Funbox 宜蘭新月店',
      storeUrl: 'https://linevoom.line.me/user/_dTS4fzrnBtUOuG-T_J22hfcZSdxunoOsypVfgRg',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        { name: 'BX-00 蒼龍神劍3-60F V2', url: 'https://lin.ee/ZrBRZSy' },
        { name: 'BX-26 獨角刺心', url: 'https://lin.ee/WGt5XOw' },
        { name: 'BX-33 皓戰猛虎', url: 'https://lin.ee/5zhPuQv' },
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/tA0txUd' },
        { name: 'CX-00 迪卡狂怒 FT3-60T', url: 'https://lin.ee/wU15nby' },
        { name: 'BXG-01 烈焰飛鳳S', url: 'https://lin.ee/5uQLiVnm' },
        { name: 'BXG-04 銀牙烈虎S', url: 'https://lin.ee/txQX8uD' },
      ],
    },
  ],
  花蓮縣: [
    {
      store: 'Funbox 花蓮店',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 20:30',
      items: [
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/z8jrzE7' },
        { name: 'CX-00 迪卡狂怒 FT3-60T', url: 'https://lin.ee/vmFngt6' },
      ],
    },
  ],
  台東縣: [
    {
      store: 'Funbox 台東秀泰店',
      storeUrl: 'https://linevoom.line.me/user/_dWiMasxT4CrK1ogY11eoxXAVvwO-U9Fchsvba6o',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 21:00',
      items: [
        { name: 'BX-00 蒼龍神劍3-60F V2', url: 'https://lin.ee/SNEbvKXe' },
        { name: 'BX-26 獨角刺心', url: 'https://lin.ee/zavjXWJ' },
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/tmc0leb' },
        { name: 'UX-21 惡魔冥界改造組', url: 'https://lin.ee/5nf5PTl5' },
        { name: 'CX-00 新世紀福音戰士陀螺套組', url: 'https://lin.ee/VkWLR74' },
        { name: 'CX-00 迪卡狂怒 FT3-60T', url: 'https://lin.ee/Q3yV2j1' },
        { name: 'BXG-01 烈焰飛鳳S', url: 'https://lin.ee/sQxMS1Z' },
        { name: 'BXG-04 銀牙烈虎S', url: 'https://lin.ee/vuiF90t' },
      ],
    },
    {
      store: '來玩聚 台東家樂福店',
      startTime: '抽選時間：2026/09/18 11:00~2026/09/19 20:00',
      items: [
        { name: 'UX-03 魔導神杖', url: 'https://lin.ee/ZzDKhAy' },
        { name: 'CX-00 迪卡狂怒 FT3-60T', url: 'https://lin.ee/ZmlaPIV' },
      ],
    },
  ],
  澎湖縣: [
    {
      store: 'Funbox 澎湖3號港店',
      startTime: '抽選時間：2026/09/18 10:00~2026/09/19 20:30',
      items: [
        { name: 'BX-35 隨機強化組Vol.04', url: 'https://lin.ee/XwkUa21' },
        { name: 'BX-50 天堂日輪 隨機強化組', url: 'https://lin.ee/YueJe9K' },
        { name: 'UX-02 惡魔戰錘', url: 'https://lin.ee/R8CyQP9' },
        { name: 'CX-18 腕龍鞭打 隨機強化組', url: 'https://lin.ee/qbmejEo' },
      ],
    },
  ],
};
