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
function normalizeRange(s=''){return s.replace(/[～~〜]/g,' - ').replace(/[–—]/g,'-').replace(/\s+/g,' ').trim()}
function pad(n){return String(n).padStart(2,'0')}
function normalizeDatePart(raw, fallbackYear=new Date().getFullYear()){
  const s=raw.replace(/\s+/g,'').replace(/[年月.]/g,'/').replace(/日/g,'').replace(/-/g,'/');
  let m=s.match(/^(20\d{2})\/(\d{1,2})\/(\d{1,2})$/);
  if(m)return `${m[1]}/${pad(m[2])}/${pad(m[3])}`;
  m=s.match(/^(\d{1,2})\/(\d{1,2})$/);
  if(m)return `${fallbackYear}/${pad(m[1])}/${pad(m[2])}`;
  return null;
}
function normalizeClock(raw=''){const s=raw.replace(/\s+/g,'');if(s==='開店')return '開店';const m=s.match(/^(\d{1,2}):(\d{2})$/);return m?`${pad(m[1])}:${m[2]}`:null}
function extractStartTime(text=''){
  const flat=normalizeRange(text.replace(/\r/g,' ').replace(/\n+/g,' '));
  const labels='(?:抽選\\s*[/&＆]?\\s*購買時間|抽選時間|抽籤時間(?:&使用期限)?|抽獎時間|購買時間|抽選期間|抽籤期間|購買期間|購買資格券?有效期間|優惠券有效期間|登記時間|登記期間|報名時間|報名期間)';
  const date='(?:20\\d{2}\\s*(?:年|[\\/.-])\\s*)?\\d{1,2}\\s*(?:月|[\\/.-])\\s*\\d{1,2}\\s*日?';
  const clock='(?:\\d{1,2}\\s*:\\s*\\d{2}|開店)';
  const sep='(?:-|至|到|～|~|〜)';
  const labeled=new RegExp(`(${labels})\\s*[:：]?\\s*(${date})\\s*(?:\\([^)]*\\))?\\s*(${clock})\\s*${sep}\\s*(${date})\\s*(?:\\([^)]*\\))?\\s*(${clock})`,'i');
  let m=flat.match(labeled);
  let label,startDate,startClock,endDate,endClock;
  if(m){[,label,startDate,startClock,endDate,endClock]=m}else{
    const generic=new RegExp(`(${date})\\s*(?:\\([^)]*\\))?\\s*(${clock})\\s*${sep}\\s*(${date})\\s*(?:\\([^)]*\\))?\\s*(${clock})`,'i');
    m=flat.match(generic);if(!m)return null;
    [,startDate,startClock,endDate,endClock]=m;label='抽選時間';
    const context=flat.slice(Math.max(0,m.index-60),m.index+m[0].length+30);
    if(!/(抽選|抽籤|抽獎|購買|登記|報名|資格|優惠券)/.test(context))return null;
  }
  const year=(startDate.match(/20\d{2}/)||endDate.match(/20\d{2}/)||[String(new Date().getFullYear())])[0];
  const sd=normalizeDatePart(startDate,+year),ed=normalizeDatePart(endDate,+year),sc=normalizeClock(startClock),ec=normalizeClock(endClock);
  if(!sd||!ed||!sc||!ec)return null;
  return `${label.replace(/\s+/g,'')} ${sd} ${sc} - ${ed} ${ec}`;
}
function diagnosticText(text=''){
  const cleaned=text.replace(/\r/g,'').trim();
  if(!cleaned)return '(文章內文為空)';
  const lines=cleaned.split('\n').map(x=>x.trim()).filter(Boolean);
  const hits=[];
  for(let i=0;i<lines.length;i++){
    if(/(抽選|抽籤|抽獎|購買|登記|報名|資格|優惠券|\d{1,2}\s*[月\/.-]\s*\d{1,2}|\d{1,2}:\d{2}|開店|閉店)/.test(lines[i])){
      for(let j=Math.max(0,i-1);j<=Math.min(lines.length-1,i+1);j++)if(!hits.includes(lines[j]))hits.push(lines[j]);
    }
  }
  return (hits.length?hits:lines).slice(0,30).join('\n').slice(0,5000);
}
function parseData(src){const out=[];const re=/\{\s*store:\s*'([^']+)'([\s\S]*?)items:\s*\[([\s\S]*?)\]\s*,?\s*\}/g;for(const m of src.matchAll(re)){const h=m[2],url=h.match(/storeUrl:\s*'([^']*)'/)?.[1]||'',startTime=h.match(/startTime:\s*'([^']*)'/)?.[1]||'';out.push({name:m[1],url,startTime})}return out}
function findStore(master,data){return data.find(x=>x.url&&x.url.replace(/[?#].*$/,'')===master.url.replace(/[?#].*$/,''))||data.find(x=>norm(x.name)===norm(master.name))}
function setStartTime(src,name,value){
  const n=escRe(name);
  const re=new RegExp(`(\\{\\s*store:\\s*'${n}'[\\s\\S]*?\\n\\s*items:\\s*\\[[\\s\\S]*?\\]\\s*,?[\\s\\S]*?\\n\\s*\\})`);
  return src.replace(re,block=>{
    const lines=block.split('\n').filter(line=>!/^\s*startTime:\s*'[^']*'\s*,?\s*$/.test(line));
    const itemsIndex=lines.findIndex(line=>/^\s*items:\s*\[/.test(line));
    if(itemsIndex<0)return block;
    const indent=(lines[itemsIndex].match(/^(\s*)/)||['','      '])[1];
    lines.splice(itemsIndex,0,`${indent}startTime: '${esc(value)}',`);
    return lines.join('\n');
  });
}
async function recentPosts(page){const rows=await page.evaluate(()=>{const r=/^(?:\d+分鐘前|\d+小時前|昨天\s*\d{1,2}:\d{2}|前天\s*\d{1,2}:\d{2}|\d{1,2}月\s*\d{1,2}日\s*\d{1,2}:\d{2}|\d{4}年\s*\d{1,2}月\s*\d{1,2}日\s*\d{1,2}:\d{2})$/,o=[];for(const el of document.querySelectorAll('body *')){if(el.children.length>3)continue;const label=(el.innerText||el.textContent||'').trim();if(!r.test(label))continue;let p=el;for(let i=0;i<8&&p.parentElement;i++){p=p.parentElement;const s=p.innerText||'';if(s.includes('Public')&&(s.includes('Like')||s.includes('Comment')||s.includes('Share')))break}if(!p||p===document.body)continue;o.push({label,text:((p.querySelector('.text_viewer.page_feed')||p).innerText||'').trim()})}return o});const now=new Date();return rows.map(x=>({...x,date:parsePostTime(x.label,now)})).filter(x=>x.date&&x.date>=CUTOFF).sort((a,b)=>b.date-a.date)}
(async()=>{let src=fs.readFileSync(DATA_FILE,'utf8'),data=parseData(src);let updated=0,detected=0,missing=0,diagnostic=0;log(`⏰ LINE VOOM startTime ${SYNC?'SYNC':'AUDIT'} — ${STORES.length} 間`);log('📅 規則：文章發布時間只用來挑選近期文章；startTime 直接解析文章內文的完整抽選/購買日期時間範圍');log('🛡️ 無法確認完整日期＋時間時保留原 startTime，不覆蓋');log('🔬 解析失敗時會將文章相關內文寫入結果檔，方便補強格式');log(`📄 完整結果：${OUTPUT_FILE}`);const browser=await chromium.launch({headless:false});const ctx=await browser.newContext({locale:'zh-TW',timezoneId:'Asia/Taipei'}),page=await ctx.newPage();try{for(let i=0;i<STORES.length;i++){const s=STORES[i];log(`\n[${i+1}/${STORES.length}] ${s.region} / ${s.name}`);const ds=findStore(s,data);if(!ds){missing++;log('⏭️ DATA 無對應店家；NEW STORE sync 後再跑即可補上');continue}try{await page.goto(s.url,{waitUntil:'domcontentloaded',timeout:60000});await page.waitForTimeout(2200);const more=page.getByText('顯示更多',{exact:false});for(let n=0;n<Math.min(await more.count(),10);n++)try{if(await more.nth(n).isVisible())await more.nth(n).click({timeout:1000})}catch{}const ps=await recentPosts(page);const relevant=ps.filter(p=>KEYWORDS.some(k=>p.text.includes(k)));if(!relevant.length){log('— 9/1 後無相關文章');continue}const latest=relevant[0];const found=extractStartTime(latest.text);if(!found){diagnostic++;log(`⚠️ 找到文章 ${latest.label}，但無法確認完整抽選時間，startTime 不更新`);log('🔬 ARTICLE DIAGNOSTIC:');log(diagnosticText(latest.text));log('🔬 END ARTICLE');continue}detected++;log(`⏰ 文章內文解析：${found}`);if(!SYNC)continue;if(ds.startTime===found){log('✅ startTime 已一致，不需更新');continue}const next=setStartTime(src,ds.name,found);if(next===src){log('⚠️ 找到時間但 DATA block 未更新');continue}src=next;updated++;log(`💾 startTime 已覆蓋：${found}`);data=parseData(src)}catch(e){log(`❌ ${e.message}`)}}}finally{await browser.close();if(SYNC&&updated)fs.writeFileSync(DATA_FILE,src,'utf8');log(`\nSUMMARY: detected=${detected} updated=${updated} missing=${missing} diagnostic=${diagnostic}`);save()}})().catch(e=>{log(`FATAL: ${e.stack||e}`);save();process.exitCode=1});