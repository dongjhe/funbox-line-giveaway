const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const STORES = require('./linevoom-stores');

const CUTOFF = new Date('2026-08-25T00:00:00+08:00');
const DATA_FILE = path.resolve(__dirname, '../src/app/giveaway-data.ts');
const SYNC = process.argv.includes('--sync');
const LALAPORT_ID = '_dWbmVBOBVpcGPA3UWP953LsGWVx32VkrDcGrqRQ';
const XIZHI_ID = '_dXWlFT8AyCrEdtsk_fRRUYuqERc8rWDzx3c6DUA';
const KEYWORDS = ['陀螺','抽選','抽籤','購買券','購買資格','抽獎連結','抽選連結'];
const PRODUCT = /(?:BXG|BX|UX|CX)-?\d+/i;
const LINE = /https:\/\/lin\.ee\/[A-Za-z0-9_-]+/i;

function code(s=''){ return (s.match(/\b(BXG|BX|UX|CX)-?\d+\b/i)?.[0]||'').toUpperCase().replace(/^(BXG|BX|UX|CX)(\d+)/,'$1-$2'); }
function clean(s=''){ return s.replace(/^\s*[⭐️★☆◆♦️▪︎●•\-–—]+\s*/u,'').replace(/\s*[⭐️★☆◆♦️▪︎●•]+\s*$/u,'').replace(/^\d+[.、]\s*/,'').replace(/\s*-\s*$/,'').replace(/\s+(?:購買資格|優惠券|抽選|抽籤)[\s\S]*$/i,'').replace(/\s*\|.*$/,'').trim(); }
function valid(item){ return code(item.name) && /^https:\/\/lin\.ee\/[A-Za-z0-9_-]+$/i.test(item.url) && !/https?:\/\//i.test(item.name) && item.name.length < 120; }
function dedupe(items){ const m=new Map(); for(const x of items){ const item={name:clean(x.name),url:x.url}; if(valid(item)) m.set(`${code(item.name)}|${item.url}`,item); } return [...m.values()]; }

// 診斷結果顯示的一般格式：
// 1) 商品名稱 + URL 同行
// 2) 商品名稱下一行 URL
// 不把「加入 LINE 官方帳號」等非商品網址納入。
function parseNormal(text=''){
  const lines=text.split('\n').map(x=>x.trim()).filter(Boolean), out=[];
  for(let i=0;i<lines.length;i++){
    const line=lines[i];
    const same=line.match(new RegExp(`^\\s*([^\\n]*${PRODUCT.source}[^\\n]*?)\\s+(${LINE.source})\\s*$`,'i'));
    if(same){ out.push({name:same[1],url:same[2]}); continue; }
    if(PRODUCT.test(line) && !LINE.test(line)){
      // 只接受緊接著的下一個非空白行為 lin.ee，避免誤配官方帳號網址。
      if(i+1<lines.length && new RegExp(`^${LINE.source}$`,'i').test(lines[i+1])) out.push({name:line,url:lines[i+1]});
    }
  }
  return dedupe(out);
}

// 汐止遠雄：診斷確認有 URL -> 商品名稱格式，獨立處理，不影響一般店。
function parseXizhi(text=''){
  const lines=text.split('\n').map(x=>x.trim()).filter(Boolean), out=[];
  for(let i=0;i<lines.length;i++){
    const same=lines[i].match(new RegExp(`^(${LINE.source})\\s+([^\\n]*${PRODUCT.source}[^\\n]*)$`,'i'));
    if(same){ out.push({url:same[1],name:same[2]}); continue; }
    if(new RegExp(`^${LINE.source}$`,'i').test(lines[i]) && i+1<lines.length && PRODUCT.test(lines[i+1])) out.push({url:lines[i],name:lines[i+1]});
  }
  return dedupe(out);
}

function parseTime(label,now=new Date()){
  const d=new Date(now); let m;
  if((m=label.match(/^(\d+)分鐘前$/))){d.setMinutes(d.getMinutes()-+m[1]);return d;}
  if((m=label.match(/^(\d+)小時前$/))){d.setHours(d.getHours()-+m[1]);return d;}
  if((m=label.match(/^昨天\s*(\d{1,2}):(\d{2})$/))){d.setDate(d.getDate()-1);d.setHours(+m[1],+m[2],0,0);return d;}
  if((m=label.match(/^前天\s*(\d{1,2}):(\d{2})$/))){d.setDate(d.getDate()-2);d.setHours(+m[1],+m[2],0,0);return d;}
  if((m=label.match(/^(\d{1,2})月\s*(\d{1,2})日\s*(\d{1,2}):(\d{2})$/))) return new Date(now.getFullYear(),+m[1]-1,+m[2],+m[3],+m[4]);
  if((m=label.match(/^(\d{4})年\s*(\d{1,2})月\s*(\d{1,2})日\s*(\d{1,2}):(\d{2})$/))) return new Date(+m[1],+m[2]-1,+m[3],+m[4],+m[5]);
  return null;
}
async function mark(page){
  const raw=await page.evaluate(()=>{const re=/^(?:\d+分鐘前|\d+小時前|昨天\s*\d{1,2}:\d{2}|前天\s*\d{1,2}:\d{2}|\d{1,2}月\s*\d{1,2}日\s*\d{1,2}:\d{2}|\d{4}年\s*\d{1,2}月\s*\d{1,2}日\s*\d{1,2}:\d{2})$/;const a=[];for(const el of document.querySelectorAll('body *')){if(el.children.length>3)continue;const t=(el.innerText||el.textContent||'').trim();if(!re.test(t))continue;let p=el;for(let i=0;i<8&&p.parentElement;i++){p=p.parentElement;const s=(p.innerText||'');if(s.includes('Public')&&(s.includes('Like')||s.includes('Comment')||s.includes('Share')))break;}if(!p||p===document.body)continue;if(!p.dataset.voomV2)p.dataset.voomV2=`v2-${a.length}-${Math.random().toString(36).slice(2)}`;a.push({id:p.dataset.voomV2,label:t});}return a;});
  const now=new Date(),seen=new Set();return raw.map(x=>({...x,date:parseTime(x.label,now)})).filter(x=>x.date&&x.date>=CUTOFF&&!seen.has(x.id)&&seen.add(x.id)).sort((a,b)=>b.date-a.date);
}
async function expand(page){const posts=await mark(page);let n=0;for(const p of posts){const root=page.locator(`[data-voom-v2="${p.id}"]`);for(let r=0;r<5;r++){const xs=root.getByText('顯示更多',{exact:false});let ok=false;for(let i=0;i<await xs.count();i++){try{if(!(await xs.nth(i).isVisible()))continue;await xs.nth(i).click({timeout:1200});await page.waitForTimeout(200);n++;ok=true;break;}catch{}}if(!ok)break;}}if(n)console.log(`🔓 展開 ${n} 個「顯示更多」`);}
async function posts(page){const recent=await mark(page);const rows=await page.evaluate(()=>[...document.querySelectorAll('[data-voom-v2]')].map(p=>({id:p.dataset.voomV2,text:((p.querySelector('.text_viewer.page_feed')||p).innerText||'').trim()})));const m=new Map(rows.map(x=>[x.id,x.text]));return recent.map(x=>({...x,text:m.get(x.id)||''}));}

// LaLaport：一個商品一則文章。8/25 後每一則都掃描，不能只看最新一篇。
// 診斷中有些文章本文只顯示「陀螺商品購買券」與 lin.ee，商品型號可能藏在 anchor/鄰近 DOM；
// 因此先抓文章文字，若文字沒有型號，再只在該文章 DOM 內找帶 BX/UX/CX 的鄰近文字，不導頁。
async function parseLalaportPost(page,p){
  let items=parseNormal(p.text); if(items.length)return items;
  const row=await page.locator(`[data-voom-v2="${p.id}"]`).evaluate(post=>{const viewer=post.querySelector('.text_viewer.page_feed')||post;return [...viewer.querySelectorAll('a[href*="lin.ee/"]')].map(a=>{const url=a.href||a.getAttribute('href')||'';const texts=[a.innerText,a.parentElement?.innerText,a.parentElement?.previousElementSibling?.innerText,a.parentElement?.nextElementSibling?.innerText,a.previousElementSibling?.innerText,a.nextElementSibling?.innerText].filter(Boolean);return{url,texts};});});
  const out=[];for(const a of row){for(const t of a.texts){const lines=t.split('\n').map(x=>x.trim()).filter(Boolean);const hit=lines.find(x=>PRODUCT.test(x)&&!LINE.test(x));if(hit){out.push({name:hit,url:a.url});break;}}}return dedupe(out);
}
async function latest(page,mode){const ps=await posts(page);if(mode==='lalaport'){const all=[];for(const p of ps){const x=await parseLalaportPost(page,p);for(const item of x)all.push(item);}const items=dedupe(all);console.log(`🧺 LaLaport 多文章模式：8/25 後 ${ps.length} 則文章，解析 ${items.length} 商品`);return ps.length?{...ps[0],items,pending:!items.length,aggregated:true}:null;}for(const p of ps){if(!KEYWORDS.some(k=>p.text.includes(k)))continue;const items=mode==='xizhi'?parseXizhi(p.text):parseNormal(p.text);return{...p,items,pending:!items.length};}return null;}

function parseData(src){const stores=[];const re=/\{\s*store:\s*'([^']+)'[\s\S]*?storeUrl:\s*'([^']*)'[\s\S]*?items:\s*\[([\s\S]*?)\]\s*,?\s*\}/g;for(const m of src.matchAll(re)){const items=[...m[3].matchAll(/\{\s*name:\s*'([^']+)',\s*url:\s*'(https:\/\/lin\.ee\/[^']+)'\s*\}/g)].map(x=>({name:x[1],url:x[2]}));stores.push({name:m[1],url:m[2],items});}return stores;}
function norm(s=''){return s.toLowerCase().replace(/funbox|toys|sanrio/g,'').replace(/[\s&\-－_()（）]/g,'');}
function findStore(master,data){return data.find(x=>(x.url||'').replace(/[?#].*$/,'')===master.url.replace(/[?#].*$/,''))||data.find(x=>norm(x.name)===norm(master.name));}
function compare(a,b){const A=new Map(a.map(x=>[code(x.name),x])),B=new Map(b.map(x=>[code(x.name),x]));const d=[];for(const [c,x] of B){if(!A.has(c))d.push(`➕ ${c} ${x.name} ${x.url}`);else if(A.get(c).url!==x.url)d.push(`🔄 ${c} DATA=${A.get(c).url} VOOM=${x.url}`);}for(const [c,x] of A)if(!B.has(c))d.push(`➖ ${c} DATA only ${x.url}`);return d;}
function esc(s){return s.replace(/\\/g,'\\\\').replace(/'/g,"\\'");}
function replaceItems(src,store,items){const name=store.name.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');const re=new RegExp(`(\\{\\s*store:\\s*'${name}'[\\s\\S]*?items:\\s*\\[)([\\s\\S]*?)(\\]\\s*,?\\s*\\})`);return src.replace(re,(_,a,b,c)=>`${a}\n${items.map(x=>`        { name: '${esc(x.name)}', url: '${esc(x.url)}' },`).join('\n')}\n      ${c}`);}

(async()=>{let src=fs.readFileSync(DATA_FILE,'utf8'),data=parseData(src),changed=0;const browser=await chromium.launch({headless:false});const ctx=await browser.newContext({locale:'zh-TW',timezoneId:'Asia/Taipei'});const page=await ctx.newPage();console.log(`\n🧪 LINE VOOM Parser V2 ${SYNC?'SYNC':'AUDIT'} — ${STORES.length} 間`);for(let i=0;i<STORES.length;i++){const s=STORES[i];const mode=s.url.includes(LALAPORT_ID)?'lalaport':s.url.includes(XIZHI_ID)?'xizhi':'normal';console.log(`\n[${i+1}/${STORES.length}] ${s.region} / ${s.name}`);console.log(`MODE: ${mode}`);try{await page.goto(s.url,{waitUntil:'domcontentloaded',timeout:60000});await page.waitForTimeout(2200);await expand(page);const v=await latest(page,mode);if(!v){console.log('⏭️ SKIP');continue;}if(v.pending){console.log(`🕒 PENDING - ${v.label}，文章存在但尚未解析到商品`);continue;}const ds=findStore(s,data);console.log(`📦 VOOM ${v.items.length} / DATA ${ds?.items.length??0}`);for(const x of v.items)console.log(`  ${x.name} -> ${x.url}`);if(!ds){console.log('🆕 NEW STORE（V2 暫不自動新增，避免錯寫）');continue;}const diff=compare(ds.items,v.items);if(!diff.length&&ds.items.length===v.items.length){console.log('✅ MATCH');continue;}console.log('⚠️ DIFFERENT');for(const x of diff)console.log(' ',x);if(SYNC){if(ds.items.length>0){console.log('🛡️ DATA 已有商品：依安全規則只稽核，不覆寫');continue;}src=replaceItems(src,ds,v.items);data=parseData(src);changed++;console.log('💾 SYNCED（原 DATA=0）');}}catch(e){console.log(`❌ ERROR ${e.message}`);}}if(SYNC&&changed){fs.writeFileSync(DATA_FILE,src,'utf8');console.log(`\n💾 已更新 ${changed} 間 DATA=0 店家`);}await browser.close();console.log('\n✅ V2 完成');})().catch(e=>{console.error(e);process.exitCode=1;});
