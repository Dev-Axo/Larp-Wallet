const PHOTO = {
  city:'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=82',
  mountain:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=82',
  ocean:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=82',
  plane:'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=82',
  neon:'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1400&q=82',
  hotel:'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=82',
  race:'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=82',
  forest:'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=82',
  architecture:'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=82',
  desert:'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1400&q=82',
  lights:'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=82',
  snow:'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=1400&q=82'
};

const starterCards = [
  {id:'obsidian',title:'Obsidian Reserve',subtitle:'Founders Edition',footer:'Member since 2026',last4:'8088',category:'premium',accent:'#aab0bb',text:'#ffffff',image:'',gradient:'linear-gradient(135deg,#09090a 0%,#27272d 55%,#030304 100%)'},
  {id:'aurora',title:'Aurora Black',subtitle:'Private Club',footer:'Worldwide access',last4:'1919',category:'premium',accent:'#d3bb7c',text:'#fffaf0',image:PHOTO.neon,gradient:'linear-gradient(135deg,rgba(8,6,18,.28),rgba(0,0,0,.72))'},
  {id:'skyline',title:'Skyline',subtitle:'City Collection',footer:'Night member',last4:'4404',category:'lifestyle',accent:'#7ec8ff',text:'#ffffff',image:PHOTO.city,gradient:'linear-gradient(135deg,rgba(12,24,48,.24),rgba(0,0,0,.62))'},
  {id:'altitude',title:'Altitude',subtitle:'Global Traveller',footer:'Priority everywhere',last4:'1227',category:'travel',accent:'#f3f5ff',text:'#ffffff',image:PHOTO.plane,gradient:'linear-gradient(135deg,rgba(22,37,74,.28),rgba(0,0,0,.58))'},
  {id:'alpine',title:'Alpine',subtitle:'Summit Pass',footer:'Season 26/27',last4:'6024',category:'travel',accent:'#e9eef2',text:'#ffffff',image:PHOTO.mountain,gradient:'linear-gradient(135deg,rgba(11,24,37,.10),rgba(0,0,0,.60))'},
  {id:'tide',title:'Tide',subtitle:'Ocean Club',footer:'Marina access',last4:'0711',category:'lifestyle',accent:'#79d7ff',text:'#ffffff',image:PHOTO.ocean,gradient:'linear-gradient(135deg,rgba(0,35,57,.16),rgba(0,0,0,.57))'},
  {id:'grandtour',title:'Grand Tour',subtitle:'Motorsport Weekend',footer:'Paddock • Saturday',last4:'0001',category:'event',accent:'#ff4d4d',text:'#ffffff',image:PHOTO.race,gradient:'linear-gradient(135deg,rgba(62,0,0,.10),rgba(0,0,0,.61))'},
  {id:'canopy',title:'Canopy',subtitle:'Retreat Collective',footer:'Cabin 07',last4:'0714',category:'lifestyle',accent:'#9bd59a',text:'#ffffff',image:PHOTO.forest,gradient:'linear-gradient(135deg,rgba(8,37,24,.12),rgba(0,0,0,.64))'},
  {id:'atelier',title:'Atelier',subtitle:'Design Society',footer:'Member access',last4:'2606',category:'premium',accent:'#f0e5d2',text:'#ffffff',image:PHOTO.architecture,gradient:'linear-gradient(135deg,rgba(30,21,16,.12),rgba(0,0,0,.66))'},
  {id:'mirage',title:'Mirage',subtitle:'Desert House',footer:'Guest pass',last4:'5505',category:'lifestyle',accent:'#ffd58b',text:'#ffffff',image:PHOTO.desert,gradient:'linear-gradient(135deg,rgba(85,49,0,.08),rgba(0,0,0,.62))'},
  {id:'afterdark',title:'After Dark',subtitle:'Festival Access',footer:'All stages',last4:'1010',category:'event',accent:'#c8a6ff',text:'#ffffff',image:PHOTO.lights,gradient:'linear-gradient(135deg,rgba(57,0,73,.13),rgba(0,0,0,.65))'},
  {id:'north',title:'North',subtitle:'Winter Edition',footer:'Expedition member',last4:'1725',category:'travel',accent:'#c6ecff',text:'#ffffff',image:PHOTO.snow,gradient:'linear-gradient(135deg,rgba(22,45,57,.16),rgba(0,0,0,.58))'},
  {id:'graphite',title:'Graphite',subtitle:'Studio Card',footer:'Creative access',last4:'3131',category:'premium',accent:'#8d8d96',text:'#ffffff',image:'',gradient:'linear-gradient(145deg,#4b4b52 0%,#111114 45%,#25252a 100%)'},
  {id:'cobalt',title:'Cobalt',subtitle:'Members Card',footer:'Edition 01',last4:'7770',category:'premium',accent:'#73a7ff',text:'#ffffff',image:'',gradient:'radial-gradient(circle at 18% 22%,#2145a9,transparent 34%),linear-gradient(135deg,#071225,#04101b)'},
  {id:'sakura',title:'Sakura',subtitle:'Spring Pass',footer:'Seasonal guest',last4:'0321',category:'event',accent:'#ffd4e5',text:'#2b1019',image:'',gradient:'linear-gradient(135deg,#ffd8e6,#f1a8c2 56%,#fff0f6)'},
  {id:'emerald',title:'Emerald',subtitle:'Reserve',footer:'Private lounge',last4:'8888',category:'premium',accent:'#a7ffd5',text:'#eafff5',image:'',gradient:'radial-gradient(circle at 80% 10%,#0e6a50,transparent 35%),linear-gradient(135deg,#072d24,#041713)'},
  {id:'metro',title:'Metro',subtitle:'City Pass',footer:'Unlimited rides • DEMO',last4:'4040',category:'travel',accent:'#ffe36c',text:'#ffffff',image:'',gradient:'linear-gradient(120deg,#222 0 30%,#ff3b30 30% 34%,#222 34% 62%,#ffd60a 62% 66%,#111 66%)'},
  {id:'hotel',title:'Suite 52',subtitle:'Hotel Guest',footer:'Late checkout',last4:'0052',category:'travel',accent:'#ead4b2',text:'#ffffff',image:PHOTO.hotel,gradient:'linear-gradient(135deg,rgba(43,20,7,.12),rgba(0,0,0,.68))'},
  {id:'signal',title:'Signal',subtitle:'Creator Pass',footer:'Backstage',last4:'2026',category:'event',accent:'#ff7af4',text:'#ffffff',image:'',gradient:'radial-gradient(circle at 15% 20%,#c318aa,transparent 36%),radial-gradient(circle at 85% 75%,#1447c9,transparent 40%),#111'},
  {id:'monolith',title:'Monolith',subtitle:'Black Label',footer:'One of one',last4:'0000',category:'premium',accent:'#ffffff',text:'#ffffff',image:'',gradient:'linear-gradient(155deg,#050505,#252525 45%,#090909 72%,#000)'},
  {id:'studio',title:'Studio',subtitle:'Creative House',footer:'Member',last4:'1212',category:'lifestyle',accent:'#fca5a5',text:'#111111',image:'',gradient:'linear-gradient(135deg,#ffefdf,#ffb4a2 45%,#ffcad4)'},
  {id:'orbit',title:'Orbit',subtitle:'Explorer Pass',footer:'Launch member',last4:'1969',category:'travel',accent:'#afc8ff',text:'#ffffff',image:'',gradient:'radial-gradient(circle at 72% 28%,#4169e1 0 2%,transparent 3%),radial-gradient(circle at 30% 70%,#8f5bff 0 1%,transparent 2%),linear-gradient(135deg,#050915,#111633)'},
  {id:'linen',title:'Linen',subtitle:'House Card',footer:'Guest services',last4:'2424',category:'lifestyle',accent:'#dacfbf',text:'#39312a',image:'',gradient:'linear-gradient(135deg,#f1eadf,#d5c5b2)'},
  {id:'ember',title:'Ember',subtitle:'Night Pass',footer:'Valid tonight',last4:'2300',category:'event',accent:'#ffbd80',text:'#ffffff',image:'',gradient:'radial-gradient(circle at 85% 15%,#c94816,transparent 35%),linear-gradient(135deg,#321006,#110705)'}
];

const defaults = {title:"Fabian's Wallet",subtitle:'A fictional wallet for content, demos and LARP.',theme:'dark',spacing:42,radius:24,scale:97,overlay:true,cards:starterCards};
let state = loadState();
let selectedId = null;
let activeFilter = 'all';

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

function loadState(){
  try { const raw=localStorage.getItem('larpWalletV2'); if(raw){ const x=JSON.parse(raw); return {...structuredClone(defaults),...x,cards:Array.isArray(x.cards)?x.cards:structuredClone(starterCards)}; } } catch(e){}
  return structuredClone(defaults);
}
function save(){ localStorage.setItem('larpWalletV2',JSON.stringify(state)); }
function uid(){ return 'c_'+Math.random().toString(36).slice(2,9)+Date.now().toString(36).slice(-4); }
function esc(s=''){ return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function bgStyle(card){ const image=card.image?.trim(); const gradient=card.gradient?.trim()||'linear-gradient(135deg,#222,#000)'; return image ? `background-image:${gradient},url("${image.replace(/"/g,'&quot;')}")` : `background-image:${gradient}`; }
function cardHTML(card, detail=false){
  return `<article class="wallet-card ${state.overlay?'':'no-overlay'}" draggable="${detail?'false':'true'}" data-id="${card.id}" style="--card-accent:${card.accent||'#fff'};color:${card.text||'#fff'}">
    <div class="card-bg" style='${bgStyle(card)}'></div><div class="card-overlay"></div><div class="card-sheen"></div>
    <div class="card-content"><div class="card-top"><span class="card-kind">${esc(card.category||'card')}</span><span class="sim-tag">SIMULATION</span></div>
      <div><div class="accent-pill"></div><div class="card-title">${esc(card.title)}</div><div class="card-subtitle">${esc(card.subtitle)}</div></div>
      <div class="card-bottom"><span class="card-footer">${esc(card.footer||'Novelty card')}</span><span class="last4">•••• ${esc(card.last4||'0000')}</span></div>
    </div></article>`;
}
function applyTheme(){
  let light = state.theme==='light' || (state.theme==='auto' && matchMedia('(prefers-color-scheme:light)').matches);
  document.body.classList.toggle('light',light);
  document.documentElement.style.setProperty('--spacing',state.spacing+'px');
  document.documentElement.style.setProperty('--radius',state.radius+'px');
  document.documentElement.style.setProperty('--stack-scale',state.scale/100);
  $('meta[name="theme-color"]').setAttribute('content',light?'#f2f2f5':'#0a0a0b');
}
function render(){
  applyTheme();
  $('#walletTitle').textContent=state.title; $('#walletSubtitle').textContent=state.subtitle;
  const cards=state.cards.filter(c=>activeFilter==='all'||c.category===activeFilter);
  $('#walletStack').innerHTML=cards.map(c=>cardHTML(c)).join('');
  $('#emptyState').classList.toggle('hidden',cards.length>0);
  bindCards(); save();
}
function bindCards(){
  $$('.wallet-card[data-id]').forEach(el=>{
    el.addEventListener('click',()=>openDetail(el.dataset.id));
    el.addEventListener('dragstart',e=>{el.classList.add('dragging');e.dataTransfer.setData('text/plain',el.dataset.id)});
    el.addEventListener('dragend',()=>el.classList.remove('dragging'));
    el.addEventListener('dragover',e=>e.preventDefault());
    el.addEventListener('drop',e=>{e.preventDefault(); const from=e.dataTransfer.getData('text/plain'),to=el.dataset.id;if(from!==to) reorder(from,to)});
  });
}
function reorder(from,to){const a=state.cards.findIndex(c=>c.id===from),b=state.cards.findIndex(c=>c.id===to);if(a<0||b<0)return;const [x]=state.cards.splice(a,1);state.cards.splice(b,0,x);render();}
function openDetail(id){ selectedId=id; const c=state.cards.find(x=>x.id===id); if(!c)return; $('#detailCardWrap').innerHTML=cardHTML(c,true); $('#detailInfo').innerHTML=`<div class="info-row"><span>Card</span><strong>${esc(c.title)}</strong></div><div class="info-row"><span>Category</span><strong>${esc(c.category)}</strong></div><div class="info-row"><span>Last four</span><strong>•••• ${esc(c.last4)}</strong></div><div class="info-row"><span>Status</span><strong>Simulation only</strong></div>`; $('#detailView').classList.remove('hidden'); populateCardEditor(c); }
function closeDetail(){ $('#detailView').classList.add('hidden'); }
function openSheet(tab='wallet'){$('#settingsSheet').classList.remove('hidden');$('#modalBackdrop').classList.remove('hidden');switchTab(tab);syncWalletSettings(); if(selectedId){const c=state.cards.find(x=>x.id===selectedId);if(c)populateCardEditor(c)}}
function closeSheet(){$('#settingsSheet').classList.add('hidden');$('#modalBackdrop').classList.add('hidden')}
function switchTab(tab){ $$('.seg').forEach(x=>x.classList.toggle('active',x.dataset.tab===tab)); $$('.tab-panel').forEach(x=>x.classList.toggle('hidden',x.dataset.panel!==tab)); }
function syncWalletSettings(){ $('#settingWalletTitle').value=state.title;$('#settingWalletSubtitle').value=state.subtitle;$('#settingTheme').value=state.theme;$('#settingSpacing').value=state.spacing;$('#settingRadius').value=state.radius;$('#settingScale').value=state.scale;$('#settingOverlay').checked=state.overlay; }
function populateCardEditor(c){ $('#cardEditorEmpty').classList.add('hidden');$('#cardEditor').classList.remove('hidden'); $('#editTitle').value=c.title||'';$('#editSubtitle').value=c.subtitle||'';$('#editFooter').value=c.footer||'';$('#editLast4').value=c.last4||'';$('#editCategory').value=c.category||'premium';$('#editTextColor').value=c.text||'#ffffff';$('#editAccent').value=c.accent||'#ffffff';$('#editImage').value=c.image||'';$('#editGradient').value=c.gradient||''; }
function updateSelected(){ const c=state.cards.find(x=>x.id===selectedId);if(!c)return; c.title=$('#editTitle').value;c.subtitle=$('#editSubtitle').value;c.footer=$('#editFooter').value;c.last4=$('#editLast4').value.replace(/\D/g,'').slice(0,4);c.category=$('#editCategory').value;c.text=$('#editTextColor').value;c.accent=$('#editAccent').value;c.image=$('#editImage').value.trim();c.gradient=$('#editGradient').value.trim();save();render();if(!$('#detailView').classList.contains('hidden'))openDetail(c.id); }
function addCard(){ const c={id:uid(),title:'New LARP Card',subtitle:'Custom Edition',footer:'Tap ••• to edit',last4:'0000',category:'lifestyle',accent:'#ffffff',text:'#ffffff',image:'',gradient:'linear-gradient(135deg,#4b36cc,#121225)'};state.cards.unshift(c);selectedId=c.id;render();openDetail(c.id);openSheet('card');}
function duplicateSelected(){const c=state.cards.find(x=>x.id===selectedId);if(!c)return;const d={...structuredClone(c),id:uid(),title:c.title+' Copy'};state.cards.splice(state.cards.indexOf(c)+1,0,d);selectedId=d.id;render();openDetail(d.id);populateCardEditor(d);}
function deleteSelected(){const i=state.cards.findIndex(x=>x.id===selectedId);if(i<0)return;if(!confirm('Delete this simulated card?'))return;state.cards.splice(i,1);selectedId=null;save();closeSheet();closeDetail();render();}
function moveSelected(delta){const i=state.cards.findIndex(x=>x.id===selectedId);if(i<0)return;const j=Math.max(0,Math.min(state.cards.length-1,i+delta));if(i===j)return;const [c]=state.cards.splice(i,1);state.cards.splice(j,0,c);render();openDetail(c.id);}
function openSearch(){ $('#searchOverlay').classList.remove('hidden');$('#searchInput').value=''; renderSearch('');setTimeout(()=>$('#searchInput').focus(),100);}
function renderSearch(q){q=q.toLowerCase().trim();const rs=state.cards.filter(c=>[c.title,c.subtitle,c.footer,c.category].join(' ').toLowerCase().includes(q));$('#searchResults').innerHTML=rs.map(c=>`<div class="search-result" data-id="${c.id}"><div class="search-thumb" style='${bgStyle(c)}'></div><div><strong>${esc(c.title)}</strong><small>${esc(c.subtitle)} · ${esc(c.category)}</small></div></div>`).join(''); $$('.search-result').forEach(r=>r.onclick=()=>{$('#searchOverlay').classList.add('hidden');openDetail(r.dataset.id)});}

$('#settingsBtn').onclick=()=>openSheet('wallet');$('#editTab').onclick=()=>openSheet(selectedId?'card':'wallet');$('#addCardBtn').onclick=addCard;$('#modalBackdrop').onclick=closeSheet;$$('[data-close-sheet]').forEach(x=>x.onclick=closeSheet);$('#detailBack').onclick=closeDetail;$('#detailEdit').onclick=()=>openSheet('card');$('#detailDuplicate').onclick=duplicateSelected;$('#duplicateCard').onclick=duplicateSelected;$('#deleteCard').onclick=deleteSelected;$('#moveUp').onclick=()=>moveSelected(-1);$('#moveDown').onclick=()=>moveSelected(1);
$('#searchBtn').onclick=openSearch;$('#searchClose').onclick=()=>$('#searchOverlay').classList.add('hidden');$('#searchInput').addEventListener('input',e=>renderSearch(e.target.value));
$$('.chip').forEach(ch=>ch.onclick=()=>{$$('.chip').forEach(x=>x.classList.remove('active'));ch.classList.add('active');activeFilter=ch.dataset.filter;render()});
$$('.seg').forEach(s=>s.onclick=()=>switchTab(s.dataset.tab));
['settingWalletTitle','settingWalletSubtitle','settingTheme','settingSpacing','settingRadius','settingScale','settingOverlay'].forEach(id=>$('#'+id).addEventListener('input',()=>{state.title=$('#settingWalletTitle').value;state.subtitle=$('#settingWalletSubtitle').value;state.theme=$('#settingTheme').value;state.spacing=+$('#settingSpacing').value;state.radius=+$('#settingRadius').value;state.scale=+$('#settingScale').value;state.overlay=$('#settingOverlay').checked;render()}));
['editTitle','editSubtitle','editFooter','editLast4','editCategory','editTextColor','editAccent','editImage','editGradient'].forEach(id=>$('#'+id).addEventListener('input',updateSelected));
$('#exportBtn').onclick=()=>{const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='larp-wallet-backup.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),500)};
$('#importBtn').onclick=()=>{try{const x=JSON.parse($('#importBox').value);if(!Array.isArray(x.cards))throw new Error('No cards');state={...structuredClone(defaults),...x};save();render();alert('Imported.');}catch(e){alert('That JSON could not be imported.')}};
$('#resetBtn').onclick=()=>{if(confirm('Reset the entire simulator to the starter deck?')){state=structuredClone(defaults);selectedId=null;save();render();syncWalletSettings();}};

let holdTimer,holdStart;const hz=$('#holdZone'),hp=$('#holdProgress');function startHold(e){if(e.target.closest('button'))return;holdStart=performance.now();clearInterval(holdTimer);holdTimer=setInterval(()=>{const p=Math.min(1,(performance.now()-holdStart)/950);hp.style.transform=`scaleX(${p})`;if(p>=1){clearInterval(holdTimer);hp.style.transform='scaleX(0)';openSheet('wallet')}},30)}function endHold(){clearInterval(holdTimer);hp.style.transform='scaleX(0)'}hz.addEventListener('pointerdown',startHold);['pointerup','pointercancel','pointerleave'].forEach(ev=>hz.addEventListener(ev,endHold));

window.addEventListener('keydown',e=>{if(e.key==='Escape'){closeSheet();closeDetail();$('#searchOverlay').classList.add('hidden')}});
matchMedia('(prefers-color-scheme:light)').addEventListener?.('change',()=>{if(state.theme==='auto')applyTheme()});
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
render();
