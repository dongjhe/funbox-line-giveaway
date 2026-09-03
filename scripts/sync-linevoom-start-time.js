const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const STORES = require('./linevoom-stores');

const DATA_FILE = path.resolve(__dirname, '../src/app/giveaway-data.ts');
const OUTPUT_FILE = path.resolve(__dirname, '../linevoom-start-time-result.txt');
const CUTOFF = new Date('2026-09-01T00:00:00+08:00');
const SYNC = process.argv.includes('--sync');
const KEYWORDS = ['陀螺','抽選','抽籤','購買券','購買資格','抽獎連結','抽選連結','抽選時間','購買時間'];
const output=[];
function log(...a){const s=a.join(' ');console.log(s);output.push(s)}
function save(){fs.writeFileSync(OUTPUT_FILE,output.join('\n')+'\n','utf8')}
function norm(s=''){return s.toLowerCase().replace(/funbox|toys|sanrio/g,'').replace(/[\s&\-－_()（）]/g,'').replace(/店$/g,'')}
function escRe(s=''){return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}
function esc(s=''){return s.replace(/\\/g,'\\\\').replace(/'/g,"\\'")}
function parsePostTime(label,now=new Date()){const d=new Date(now);let m;if((m=label.match(/^(\d+)分鐘前$/))){d.setMinutes(d.getMinutes()-+m[1]);return d}if((m=label.match(/^(\d+)小時前$/))){d.setHours(d.getHours()-+m[1]);return d}if((m=label.match(/^昨天\s*(\d{1,2}):(\d{2})$/))){d.setDate(d.getDate()-1);d.setHours(+m[1],+m[2],0,0);return d}if((m=label.match(/^前天\s*(\d{1,2}):(\d{2})$/))){d.setDate(d.getDate()-2);d.setHours(+m[1],+m[2],0,0);return d}if((m=label.match(/^(\d{1,2})月\s*(\d{1,2})日\s*(\d{1,2}):(\d{2})$/)))return new Date(now.getFullYear(),+m[1]-1,+m[2],+m[3],+m[4]);if((m=label.match(/^(\d{4})年\s*(\d{1,2})月\s*(\d{1,2})日\s*(\d{1,2}):(\d{2})$/)))return new Date(+m[1],+m[2]-1,+m[3],+m[4],+m[5]);return null}

function normalizeRange(s=''){
  return s.replace(/[～~〜]/g,' - ').replace(/[–—]/g,'-').replace(/\s+/g,' ').trim();
}
function extractStartTime(text=''){
  const flat=normalizeRange(text.replace(/\r/g,' ').replace(/\n+/g,' '));
  // Only accept a complete start/end range. This prevents single deadlines or partial dates from overwriting DATA.
  const labels='(?:抽選\\s*[/&＆]?\\s*購買時間|抽選時間|抽籤時間(?:&使用期限)?|抽獎時間|購買時間|抽選期間|抽籤期間|購買期間|購買資格券?有效期間|優惠券有效期間)';
  const date='(?:20\\d{2}\\s*[\\/.-]\\s*)?\\d{1,2}\\s*[\\/.-]\\s*\\d{1,2}';
  const clock='(?:\\d{1,2}\\s*:\\s*\\d{2}|開店)';
  const re=new RegExp(`(${labels})\\s*[:：]?\\s*(${date}\\s+${clock})\\s*(?:-|至|到)\\s*(${date}\\s+${clock})`,'i');
  const m=flat.match(re);
  if(!m)return null;
  return `${m[1].replace(/\s+/g,'')} ${m[2].replace(/\s+/g,' ')} - ${m[3].replace(/\s+/g,' ')}`;
}
function parseData(src){const out=[];const re=/\{\s*store:\s*'([^']+)'([\s\S]*?)items:\s*\[([\s\S]*?)\]\s*,?\s*\}/g;for(const m of src.matchAll(re)){const h=m[2],url=h.match(/storeUrl:\s*'([^']*)'/)?.[1]||'',startTime=h.match(/startTime:\s*'([^']*)'/)?.[1]||'',itemCount=[...m[3].matchAll(/\{\s*name:\s*'[^']+'\s*,\s*url:\s*'https:\/\/lin\.ee\/[^']+'\s*\}/g)].length;out.push({name:m[1],url,startTime,itemCount})}return out}
function findStore(master,data){return data.find(x=>x.url&&x.url.replace(/[?#].*$/,'')===master.url.replace(/[?#].*$/,''))||data.find(x=>norm(x.name)===norm(master.name))}
function setStartTime(src,name,value){const n=escRe(name),re=new RegExp(`(store:\\s*'${n}'\\s*,)([\\s\\S]*?)(\\n\\s*items:\\s*\\[)`);return src.replace(re,(all,a,h,c)=>{if(/\n\s*startTime:\s*'[^']*'\s*,?/.test(h))h=h.replace(/(\n\s*startTime:\s*)'[^']*'(\s*,?)/,`$1'${esc(value)}'$2`);else{const indent=all.match(/^(\s*)store:/)?.[1]||'      ';h+=`\n${indent}startTime: '${esc(value)}',`}return`${a}${h}${c}`})}
async function recentPosts(page){const rows=await page.evaluate(()=>{const r=/^(?:\d+分鐘前|\d+小時前|昨天\s*\d{1,2}:\d{2}|前天\s*\d{1,2}:\d{2}|\d{1,2}月\s*\d{1,2}日\s*\d{1,2}:\d{2}|\d{4}年\s*\d{1,2}月\s*\d{1,2}日\s*\d{1,2}:\d{2})$/,o=[];for(const el of document.querySelectorAll('body *')){if(el.children.length>3)continue;const label=(el.innerText||el.textContent||'').trim();if(!r.test(label))continue;let p=el;for(let i=0;i<8&&p.parentElement;i++){p=p.parentElement;const s=p.innerText||'';if(s.includes('Public')&&(s.includes('Like')||s.includes('Comment')||s.includes('Share')))break}if(!p||p===document.body)continue;o.push({label,text:((p.querySelector('.text_viewer.page_feed')||p).innerText||'').trim()})}return o});const now=new Date();return rows.map(x=>({...x,date:parsePostTime(x.label,now)})).filter(x=>x.date&&x.date>=CUTOFF).sort((a,b)=>b.date-a.date)}
(async()=>{let src=fs.readFileSync(DATA_FILE,'utf8'),data=parseData(src);let updated=0,detected=0,missing=0;log(`⏰ LINE VOOM startTime ${SYNC?'SYNC':'AUDIT'} — ${STORES.length} 間`);log('📅 規則：只看 2026/09/01 後最新相關文章，且必須抓到完整「開始日期時間 - 結束日期時間」才同步');log(`📄 完整結果：${OUTPUT_FILE}`);const browser=await chromium.launch({headless:false});const ctx=await browser.newContext({locale:'zh-TW',timezoneId:'Asia/Taipei'}),page=await ctx.newPage();try{for(let i=0;i<STORES.length;i++){const s=STORES[i];log(`\n[${i+1}/${STORES.length}] ${s.region} / ${s.name}`);const ds=findStore(s,data);if(!ds){missing++;log('⏭️ DATA 無對應店家；NEW STORE sync 後再跑即可補上');continue}try{await page.goto(s.url,{waitUntil:'domcontentloaded',timeout:60000});await page.waitForTimeout(2200);const more=page.getByText('顯示更多',{exact:false});for(let n=0;n<Math.min(await more.count(),10);n++)try{if(await more.nth(n).isVisible())await more.nth(n).click({timeout:1000})}catch{}const ps=await recentPosts(page);const relevant=ps.filter(p=>KEYWORDS.some(k=>p.text.includes(k)));if(!relevant.length){log('— 9/1 後無相關文章');continue}const latest=relevant[0];const found=extractStartTime(latest.text);if(!found){log(`— 最新相關文章 ${latest.label} 未偵測到完整抽選/購買時間範圍`);continue}detected++;log(`⏰ ${found}`);if(!SYNC)continue;if(ds.startTime===found){log('✅ startTime 已相同');continue}src=setStartTime(src,ds.name,found);updated++;log(`💾 startTime 已更新${ds.startTime?'（取代舊值）':''}`)}catch(e){log(`❌ ${e.message}`)}}}finally{await browser.close();if(SYNC&&updated)fs.writeFileSync(DATA_FILE,src,'utf8');log(`\nSUMMARY: detected=${detected} updated=${updated} missing=${missing}`);save()}})().catch(e=>{log(`FATAL: ${e.stack||e}`);save();process.exitCode=1});