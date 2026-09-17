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
function pad(n){return String(n).padStart(2,'0')}
function normalizeText(s=''){return s.replace(/\r/g,' ').replace(/\n+/g,' ').replace(/[：﹕]/g,':').replace(/[～〜~]/g,'~').replace(/[–—]/g,'-').replace(/[（]/g,'(').replace(/[）]/g,')').replace(/[：]/g,':').replace(/\s+/g,' ').trim()}
function normalizeDatePart(raw,fallbackYear=new Date().getFullYear()){
  let s=raw.replace(/\s+/g,'').replace(/[年月.]/g,'/').replace(/日/g,'').replace(/-/g,'/');
  let m=s.match(/^(20\d{2})\/(\d{1,2})\/(\d{1,2})$/);if(m)return `${m[1]}/${pad(m[2])}/${pad(m[3])}`;
  m=s.match(/^(1\d{2})\/(\d{1,2})\/(\d{1,2})$/);if(m)return `${+m[1]+1911}/${pad(m[2])}/${pad(m[3])}`;
  m=s.match(/^(\d{1,2})\/(\d{1,2})$/);if(m)return `${fallbackYear}/${pad(m[1])}/${pad(m[2])}`;
  return null;
}
function normalizeClock(raw=''){
  let s=raw.replace(/\s+/g,'').replace(/[：]/g,':').replace(/[()❮❯]/g,'').replace(/^(上午|早上)/,'').replace(/^(下午|晚上)/,'');
  if(s==='開店')return '開店';
  const pm=/(?:p\.?m\.?)$/i.test(s)||/^(?:下午|晚上)/.test(raw.replace(/\s+/g,''));
  s=s.replace(/(?:a\.?m\.?|p\.?m\.?)$/i,'').replace(/(?:起|止|截止|開始|為止)$/,'');
  const m=s.match(/^(\d{1,2}):(\d{2})$/);if(!m)return null;
  let h=+m[1];if(pm&&h<12)h+=12;if(!pm&&h===24)h=0;
  return `${pad(h)}:${m[2]}`;
}
function extractStartTime(text=''){
  const flat=normalizeText(text);
  const date='(?:20\\d{2}|1\\d{2})?\\s*(?:年|[\\/.-])?\\s*\\d{1,2}\\s*(?:月|[\\/.-])\\s*\\d{1,2}\\s*日?';
  const clock='(?:(?:上午|下午|早上|晚上)\\s*)?(?:\\d{1,2}\\s*[:：]\\s*\\d{2})(?:\\s*[ap]\\.?m\\.?)?|開店';
  const weekday='(?:\\s*\\([^)]*\\))?';
  const tail='(?:\\s*(?:起|開始|止|截止|為止))?';
  const labels='(?:抽選\\s*[/&＆]?\\s*購買(?:資格)?時間|抽選時間|抽籤時間(?:&使用期限)?|抽獎時間|購買時間|抽選期間|抽籤期間|購買期間|購買券抽選及有效期間|購買資格券?有效期間|優惠券有效期間|抽籤/販售時段|抽選與販售日期)';
  const sep='(?:-{1,}|~|至|到)';
  const range=new RegExp(`(${date})${weekday}\\s*[（(]?\\s*(${clock})\\s*[）)]?${tail}\\s*${sep}\\s*(${date})${weekday}\\s*[（(]?\\s*(${clock})\\s*[）)]?${tail}`,'i');
  const lines=flat.match(range);
  if(lines){
    const [whole,sdRaw,scRaw,edRaw,ecRaw]=lines;const idx=flat.indexOf(whole);const context=flat.slice(Math.max(0,idx-100),idx+whole.length+50);
    if(new RegExp(labels,'i').test(context)||/(抽選|抽籤|抽獎|購買|販售|資格|優惠券)/.test(context)){
      const year=(sdRaw.match(/20\d{2}/)||edRaw.match(/20\d{2}/)||[String(new Date().getFullYear())])[0];
      const sd=normalizeDatePart(sdRaw,+year),ed=normalizeDatePart(edRaw,+year),sc=normalizeClock(scRaw),ec=normalizeClock(ecRaw);
      if(sd&&ed&&sc&&ec)return `抽選/購買時間 ${sd} ${sc} - ${ed} ${ec}`;
    }
  }
  const twoDay=new RegExp(`(${date})${weekday}\\s*[（(]?\\s*(${clock})\\s*[）)]?${tail}\\s+(${date})${weekday}\\s*[（(]?\\s*(${clock})\\s*[）)]?${tail}`,'i');
  const m2=flat.match(twoDay);
  if(m2){const idx=flat.indexOf(m2[0]),context=flat.slice(Math.max(0,idx-120),idx+m2[0].length+80);if(/(抽選|抽籤|抽獎|購買|販售|資格|優惠券)/.test(context)){const year=(m2[1].match(/20\d{2}/)||m2[3].match(/20\d{2}/)||[String(new Date().getFullYear())])[0],sd=normalizeDatePart(m2[1],+year),ed=normalizeDatePart(m2[3],+year),sc=normalizeClock(m2[2]),ec=normalizeClock(m2[4]);if(sd&&ed&&sc&&ec)return `抽選/購買時間 ${sd} ${sc} - ${ed} ${ec}`}}
  }
  const daily=new RegExp(`(${date})${weekday}\\s*(${clock})\\s*${sep}\\s*(${clock})\\s+(${date})${weekday}\\s*(${clock})\\s*${sep}\\s*(${clock})`,'i');
  const md=flat.match(daily);
  if(md){const idx=flat.indexOf(md[0]),context=flat.slice(Math.max(0,idx-120),idx+md[0].length+50);if(/(抽選|抽籤|購買|資格|優惠券)/.test(context)){const year=(md[1].match(/20\d{2}/)||md[4].match(/20\d{2}/)||[String(new Date().getFullYear())])[0],sd=normalizeDatePart(md[1],+year),ed=normalizeDatePart(md[4],+year),sc=normalizeClock(md[2]),ec=normalizeClock(md[6]);if(sd&&ed&&sc&&ec)return `抽選/購買時間 ${sd} ${sc} - ${ed} ${ec}`}}
  }
  const sameDay=new RegExp(`(${date})${weekday}\\s*(${clock})\\s*${sep}\\s*(${clock})`,'i');const ms=flat.match(sameDay);
  if(ms){const idx=flat.indexOf(ms[0]),context=flat.slice(Math.max(0,idx-100),idx+ms[0].length+50);if(/(抽選|抽籤|購買|販售|資格)/.test(context)){const sd=normalizeDatePart(ms[1]),sc=normalizeClock(ms[2]),ec=normalizeClock(ms[3]);if(sd&&sc&&ec)return `抽選/購買時間 ${sd} ${sc} - ${sd} ${ec}`}}
  return null;
}
function diagnosticText(text=''){const cleaned=text.replace(/\r/g,'').trim();if(!cleaned)return '(文章內文為空)';const lines=cleaned.split('\n').map(x=>x.trim()).filter(Boolean),hits=[];for(let i=0;i<lines.length;i++){if(/(抽選|抽籤|抽獎|購買|登記|報名|資格|優惠券|\d{1,2}\s*[月\/.-]\s*\d{1,2}|\d{1,2}[:：]\d{2}|開店|閉店)/.test(lines[i]))for(let j=Math.max(0,i-1);j<=Math.min(lines.length-1,i+1);j++)if(!hits.includes(lines[j]))hits.push(lines[j])}return(hits.length?hits:lines).slice(0,30).join('\n').slice(0,5000)}
function parseData(src){const out=[];const re=/\{\s*store:\s*'([^']+)'([\s\S]*?)items:\s*\[([\s\S]*?)\]\s*,?\s*\}/g;for(const m of src.matchAll(re)){const h=m[2],url=h.match(/storeUrl:\s*'([^']*)'/)?.[1]||'',startTime=h.match(/startTime:\s*'([^']*)'/)?.[1]||'';out.push({name:m[1],url,startTime})}return out}
function findStore(master,data){return data.find(x=>x.url&&x.url.replace(/[?#].*$/,'')===master.url.replace(/[?#].*$/,''))||data.find(x=>norm(x.name)===norm(master.name))}
function setStartTime(src,name,value){const n=escRe(name);const re=new RegExp(`(\\{\\s*store:\\s*'${n}'[\\s\\S]*?\\n\\s*items:\\s*\\[[\\s\\S]*?\\]\\s*,?[\\s\\S]*?\\n\\s*\\})`);return src.replace(re,block=>{const lines=block.split('\n').filter(line=>!/^\s*startTime:\s*'[^']*'\s*,?\s*$/.test(line));const itemsIndex=lines.findIndex(line=>/^\s*items:\s*\[/.test(line));if(itemsIndex<0)return block;const indent=(lines[itemsIndex].match(/^(\s*)/)||['','      '])[1];lines.splice(itemsIndex,0,`${indent}startTime: '${esc(value)}',`);return lines.join('\n')})}
async function recentPosts(page){const rows=await page.evaluate(()=>{const r=/^(?:\d+分鐘前|\d+小時前|昨天\s*\d{1,2}:\d{2}|前天\s*\d{1,2}:\d{2}|\d{1,2}月\s*\d{1,2}日\s*\d{1,2}:\d{2}|\d{4}年\s*\d{1,2}月\s*\d{1,2}日\s*\d{1,2}:\d{2})$/,o=[];for(const el of document.querySelectorAll('body *')){if(el.children.length>3)continue;const label=(el.innerText||el.textContent||'').trim();if(!r.test(label))continue;let p=el;for(let i=0;i<8&&p.parentElement;i++){p=p.parentElement;const s=p.innerText||'';if(s.includes('Public')&&(s.includes('Like')||s.includes('Comment')||s.includes('Share')))break}if(!p||p===document.body)continue;o.push({label,text:((p.querySelector('.text_viewer.page_feed')||p).innerText||'').trim()})}return o});const now=new Date();return rows.map(x=>({...x,date:parsePostTime(x.label,now)})).filter(x=>x.date&&x.date>=CUTOFF).sort((a,b)=>b.date-a.date)}
(async()=>{let src=fs.readFileSync(DATA_FILE,'utf8'),data=parseData(src);let updated=0,detected=0,missing=0,diagnostic=0;log(`⏰ LINE VOOM startTime ${SYNC?'SYNC':'AUDIT'} — ${STORES.length} 間`);log('📅 規則：文章發布時間只用來挑選近期文章；startTime 直接解析文章內文的完整抽選/購買日期時間範圍');log('🛡️ 無法確認完整日期＋時間時保留原 startTime，不覆蓋');log('🔬 支援括號時間、上午/下午、AM/PM、民國年、跨行日期、每日有效時段等格式');log(`📄 完整結果：${OUTPUT_FILE}`);const browser=await chromium.launch({headless:false});const ctx=await browser.newContext({locale:'zh-TW',timezoneId:'Asia/Taipei'}),page=await ctx.newPage();try{for(let i=0;i<STORES.length;i++){const s=STORES[i];log(`\n[${i+1}/${STORES.length}] ${s.region} / ${s.name}`);const ds=findStore(s,data);if(!ds){missing++;log('⏭️ DATA 無對應店家；NEW STORE sync 後再跑即可補上');continue}try{await page.goto(s.url,{waitUntil:'domcontentloaded',timeout:60000});await page.waitForTimeout(2200);const more=page.getByText('顯示更多',{exact:false});for(let n=0;n<Math.min(await more.count(),10);n++)try{if(await more.nth(n).isVisible())await more.nth(n).click({timeout:1000})}catch{}const ps=await recentPosts(page);const relevant=ps.filter(p=>KEYWORDS.some(k=>p.text.includes(k)));if(!relevant.length){log('— 9/1 後無相關文章');continue}const latest=relevant[0];const found=extractStartTime(latest.text);if(!found){diagnostic++;log(`⚠️ 找到文章 ${latest.label}，但無法確認完整抽選時間，startTime 不更新`);log('🔬 ARTICLE DIAGNOSTIC:');log(diagnosticText(latest.text));log('🔬 END ARTICLE');continue}detected++;log(`⏰ 文章內文解析：${found}`);if(!SYNC)continue;if(ds.startTime===found){log('✅ startTime 已一致，不需更新');continue}const next=setStartTime(src,ds.name,found);if(next===src){log('⚠️ 找到時間但 DATA block 未更新');continue}src=next;updated++;log(`💾 startTime 已覆蓋：${found}`);data=parseData(src)}catch(e){log(`❌ ${e.message}`)}}}finally{await browser.close();if(SYNC&&updated)fs.writeFileSync(DATA_FILE,src,'utf8');log(`\nSUMMARY: detected=${detected} updated=${updated} missing=${missing} diagnostic=${diagnostic}`);save()}})().catch(e=>{log(`FATAL: ${e.stack||e}`);save();process.exitCode=1});