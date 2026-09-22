const enc=new TextEncoder(),dec=new TextDecoder();

const HTML=String.raw`<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><meta name="theme-color" content="#07090d"><title>MX TV</title><style>
:root{--bg:#06080c;--panel:#0f151e;--panel2:#151e2a;--text:#f6f8fb;--muted:#8d99aa;--line:rgba(255,255,255,.08);--gold:#d8b46f;--gold2:#f0d69a;--green:#43dd92;--red:#ff6378;--side:270px;--shadow:0 22px 70px rgba(0,0,0,.46)}*{box-sizing:border-box}html,body{margin:0;min-height:100%;background:#05070a;color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}body{background:radial-gradient(circle at 82% -6%,rgba(216,180,111,.12),transparent 31%),linear-gradient(180deg,#090c11,#05070a 64%);overflow-x:hidden}button,input,select{font:inherit}button{color:inherit}.hidden{display:none!important}.login{min-height:100vh;display:grid;grid-template-columns:1.05fr .95fr}.visual{padding:clamp(34px,5vw,80px);display:flex;flex-direction:column;justify-content:space-between;border-right:1px solid var(--line);position:relative;overflow:hidden}.visual:after{content:"MX";position:absolute;right:-4%;top:50%;transform:translateY(-50%);font-size:min(28vw,390px);font-weight:950;letter-spacing:-.08em;color:rgba(255,255,255,.022)}.brandline{display:flex;align-items:center;gap:14px;position:relative;z-index:2}.logo{width:64px;height:64px;border-radius:20px;display:grid;place-items:center;background:linear-gradient(145deg,var(--gold2),#9d7744);color:#080a0d;font-weight:950;font-size:25px;letter-spacing:-2px;box-shadow:0 14px 40px rgba(216,180,111,.18)}.brandline strong{display:block;font-size:25px}.brandline span{display:block;color:var(--muted);font-size:11px;margin-top:3px}.pitch{position:relative;z-index:2;max-width:700px}.pill{display:inline-flex;padding:7px 11px;border-radius:999px;background:rgba(216,180,111,.09);border:1px solid rgba(216,180,111,.2);color:var(--gold2);font-size:11px;font-weight:850;letter-spacing:.7px}.pitch h1{font-size:clamp(46px,6vw,92px);line-height:.92;letter-spacing:-4px;margin:16px 0}.pitch p{max-width:610px;color:#9aa6b6;font-size:clamp(15px,1.25vw,18px);line-height:1.7}.devices{display:flex;gap:9px;flex-wrap:wrap;margin-top:25px}.devices span{padding:9px 12px;border:1px solid var(--line);border-radius:12px;background:rgba(255,255,255,.025);color:#b8c1cd;font-size:12px}.login-side{display:grid;place-items:center;padding:30px}.card{width:min(560px,100%);padding:clamp(24px,3.2vw,38px);border:1px solid rgba(255,255,255,.11);border-radius:30px;background:rgba(12,17,24,.84);backdrop-filter:blur(28px);box-shadow:var(--shadow)}.card h2{margin:0 0 6px;font-size:30px;letter-spacing:-.8px}.sub{color:var(--muted);font-size:13px;line-height:1.55;margin-bottom:22px}.histlabel{display:flex;justify-content:space-between;color:#8f9aaa;font-size:11px;margin-bottom:7px}.histrow{display:flex;gap:8px;margin-bottom:15px}.histrow select{flex:1}.field{margin-bottom:13px}.field label{display:flex;justify-content:space-between;color:#9ba6b5;font-size:11px;margin-bottom:7px}.field input,.histrow select{width:100%;border:1px solid var(--line);background:#0a0f15;color:#fff;border-radius:14px;padding:13px 14px;outline:none}.field input:focus,.histrow select:focus{border-color:rgba(216,180,111,.6);box-shadow:0 0 0 3px rgba(216,180,111,.07)}.pass{position:relative}.pass input{padding-right:50px}.eye{position:absolute;right:7px;top:6px;width:38px;height:38px;border:0;background:transparent;color:#7f8a99;border-radius:10px;cursor:pointer}.remember{display:flex;align-items:center;justify-content:space-between;gap:12px;margin:2px 0 10px;color:#aab4c2;font-size:12px}.remember label{display:flex;align-items:center;gap:9px}.remember input{accent-color:var(--gold)}.connect{width:100%;border:0;border-radius:14px;padding:14px 16px;background:linear-gradient(145deg,var(--gold2),#b78c4d);color:#080a0d;font-weight:950;cursor:pointer}.connect:disabled{opacity:.55}.small{border:1px solid var(--line);background:#0d131b;color:#aeb7c4;border-radius:12px;padding:10px 12px;cursor:pointer}.err{min-height:18px;margin-top:11px;color:#ff8797;font-size:11px;line-height:1.5}.app{min-height:100vh;display:grid;grid-template-columns:var(--side) minmax(0,1fr)}.side{height:100vh;position:sticky;top:0;padding:24px 18px;border-right:1px solid var(--line);background:rgba(8,11,16,.86);backdrop-filter:blur(26px);display:flex;flex-direction:column;z-index:40}.sidebrand{display:flex;align-items:center;gap:12px;padding:5px 8px 25px}.slogo{width:58px;height:58px;border-radius:18px;display:grid;place-items:center;background:linear-gradient(145deg,var(--gold2),#9d7744);color:#090b0e;font-weight:950;font-size:23px;letter-spacing:-2px}.sidebrand strong{display:block;font-size:22px}.sidebrand span{display:block;color:var(--muted);font-size:11px;margin-top:2px}.nav{display:grid;gap:6px}.navbtn{border:0;background:transparent;color:#a9b3c2;cursor:pointer;display:flex;align-items:center;gap:13px;text-align:left;border-radius:14px;padding:13px 14px;transition:.18s}.navbtn span{font-size:20px;width:24px;text-align:center}.navbtn b{font-size:14px}.navbtn:hover,.navbtn.active{color:#fff;background:linear-gradient(90deg,rgba(216,180,111,.15),rgba(216,180,111,.035));transform:translateX(2px)}.navbtn.active{box-shadow:inset 3px 0 0 var(--gold)}.sidebottom{margin-top:auto}.status{display:flex;align-items:center;gap:8px;padding:8px 12px;color:var(--muted);font-size:12px}.status i{width:8px;height:8px;border-radius:50%;background:var(--green)}.main{min-width:0}.top{height:104px;position:sticky;top:0;z-index:30;display:flex;align-items:center;justify-content:space-between;padding:22px clamp(18px,3vw,44px);background:linear-gradient(180deg,rgba(7,9,13,.97),rgba(7,9,13,.77),transparent);backdrop-filter:blur(10px)}.topleft,.topright{display:flex;align-items:center;gap:14px}.kicker{color:var(--gold);font-size:10px;letter-spacing:2px;font-weight:850}.top h1{margin:5px 0 0;font-size:clamp(27px,2.3vw,40px);line-height:1}.clock{font-size:13px;color:#a8b2c0}.round,.menu{border:1px solid var(--line);background:rgba(255,255,255,.04);border-radius:14px;width:46px;height:46px;cursor:pointer}.menu{display:none}.content{padding:10px clamp(18px,3vw,44px) 56px}.hero{min-height:330px;border:1px solid var(--line);border-radius:30px;overflow:hidden;position:relative;padding:clamp(25px,4.5vw,56px);display:flex;align-items:flex-end;background:linear-gradient(90deg,rgba(5,8,12,.99) 5%,rgba(5,8,12,.78) 47%,rgba(5,8,12,.1)),radial-gradient(circle at 79% 42%,rgba(216,180,111,.26),transparent 23%),linear-gradient(135deg,#152131,#090d13 72%)}.hero:after{content:"MX";position:absolute;right:5%;top:50%;transform:translateY(-52%);font-size:min(24vw,310px);font-weight:950;letter-spacing:-22px;color:rgba(255,255,255,.025)}.herocopy{position:relative;z-index:2;max-width:720px}.badge{display:inline-flex;padding:6px 10px;border-radius:999px;background:rgba(216,180,111,.11);color:var(--gold2);font-weight:850;font-size:11px}.hero h2{margin:13px 0 11px;font-size:clamp(38px,5vw,74px);line-height:.93;letter-spacing:-2.7px}.hero p{margin:0;max-width:620px;color:#aab4c3;font-size:clamp(14px,1.45vw,18px);line-height:1.65}.actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:24px}.btn{border:1px solid var(--line);background:#151d28;color:#fff;padding:12px 18px;border-radius:14px;font-weight:850;cursor:pointer}.btn.primary{background:linear-gradient(145deg,var(--gold2),#b58a4d);border-color:transparent;color:#090b0e}.btn.danger{border-color:rgba(255,99,120,.25);color:#ff91a0;background:rgba(255,99,120,.06)}.kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:16px}.kpi{border:1px solid var(--line);background:rgba(255,255,255,.025);border-radius:18px;padding:18px}.kpi b{font-size:26px}.kpi span{display:block;color:var(--muted);font-size:12px;margin-top:5px}.sectionhead{margin:31px 0 14px}.sectionhead h3{margin:0;font-size:22px}.grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:14px}.tile{position:relative;aspect-ratio:1.38;padding:16px;border-radius:20px;text-align:left;background:linear-gradient(160deg,rgba(255,255,255,.052),rgba(255,255,255,.014));border:1px solid var(--line);cursor:pointer;overflow:hidden}.tile:hover{transform:translateY(-3px);border-color:rgba(216,180,111,.48)}.tile small{color:var(--gold);font-weight:850}.tile h4{margin:21px 0 5px;font-size:16px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tile p{margin:0;color:var(--muted);font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tile img{position:absolute;right:13px;top:13px;width:52px;height:52px;border-radius:15px;object-fit:contain;background:rgba(255,255,255,.045);padding:6px}.split{display:grid;grid-template-columns:minmax(240px,320px) minmax(0,1fr);gap:18px}.panel,.settings{border:1px solid var(--line);border-radius:22px;background:rgba(255,255,255,.024);overflow:hidden}.ptitle{padding:18px;border-bottom:1px solid var(--line);font-weight:850}.cats{padding:9px}.cat{width:100%;border:0;background:transparent;color:#a9b3c2;text-align:left;border-radius:12px;padding:12px;cursor:pointer}.cat.active,.cat:hover{background:rgba(216,180,111,.11);color:#fff}.toolbar{padding:14px;border-bottom:1px solid var(--line)}.search{width:100%;border:1px solid var(--line);border-radius:13px;background:#0b1017;color:#fff;padding:12px 13px;outline:none}.rows{display:grid;gap:6px;padding:8px;max-height:69vh;overflow:auto}.row{display:grid;grid-template-columns:54px minmax(0,1fr) auto;align-items:center;gap:12px;padding:10px;border:1px solid transparent;border-radius:14px;cursor:pointer}.row:hover{background:rgba(255,255,255,.025);border-color:rgba(216,180,111,.3)}.row img{width:46px;height:46px;border-radius:12px;background:rgba(255,255,255,.04);object-fit:contain;padding:4px}.row b,.row small{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.row small{color:var(--muted);margin-top:4px}.star{border:0;background:transparent;color:#677282;font-size:22px;cursor:pointer}.star.on{color:var(--gold)}.empty{padding:42px;text-align:center;color:var(--muted)}.settings{padding:23px;max-width:920px}.account{display:flex;justify-content:space-between;gap:16px;padding:16px;border:1px solid var(--line);border-radius:16px;background:#0b1017}.player{position:fixed;inset:0;z-index:100;background:rgba(0,0,0,.84);backdrop-filter:blur(22px);display:grid;place-items:center;padding:18px}.playerbox{width:min(1260px,96vw);border:1px solid rgba(255,255,255,.12);border-radius:24px;overflow:hidden;background:#040609;box-shadow:var(--shadow)}.playtop{display:flex;align-items:center;justify-content:space-between;padding:16px 18px;border-bottom:1px solid var(--line)}.player video{display:block;width:100%;max-height:74vh;background:#000}.pinfo{padding:10px 16px;color:var(--muted);font-size:12px}.toast{position:fixed;right:22px;bottom:22px;z-index:200;border:1px solid var(--line);border-radius:14px;background:#121923;padding:13px 16px;box-shadow:var(--shadow);opacity:0;transform:translateY(12px);transition:.2s;pointer-events:none}.toast.show{opacity:1;transform:none}
@media(max-width:1100px){.login{grid-template-columns:1fr}.visual{display:none}.login-side{min-height:100vh;padding:24px}.grid{grid-template-columns:repeat(4,1fr)}}@media(max-width:1000px){:root{--side:92px}.sidebrand>div:last-child,.navbtn b,.status span{display:none}.sidebrand{justify-content:center}.side{padding-inline:12px}.navbtn{justify-content:center}.grid{grid-template-columns:repeat(3,1fr)}}@media(max-width:740px){.login-side{padding:14px}.card{border-radius:24px;padding:22px}.app{display:block}.side{position:fixed;left:0;top:0;width:min(82vw,320px);transform:translateX(-110%);transition:.24s;box-shadow:var(--shadow)}.side.open{transform:none}.sidebrand>div:last-child,.navbtn b,.status span{display:block}.sidebrand{justify-content:flex-start}.navbtn{justify-content:flex-start}.menu{display:block}.top{height:88px;padding-inline:15px}.clock{display:none}.content{padding-inline:14px}.hero{min-height:395px;border-radius:24px}.hero h2{font-size:42px}.grid{grid-template-columns:repeat(2,1fr);gap:10px}.tile{aspect-ratio:1.15}.kpis{grid-template-columns:repeat(2,1fr)}.split{grid-template-columns:1fr}.split>.panel:first-child{display:none}.account{flex-direction:column}}
</style></head><body>
<section class="login" id="login"><div class="visual"><div class="brandline"><div class="logo">MX</div><div><strong>MX TV</strong><span>by MazenmiX</span></div></div><div class="pitch"><span class="pill">PREMIUM IPTV EXPERIENCE</span><h1>TV, refined.</h1><p>Fast, minimal and designed for every screen — from your phone to a 4K television.</p><div class="devices"><span>📱 Mobile</span><span>📲 Tablet</span><span>💻 Desktop</span><span>📺 Smart TV</span></div></div><div style="color:#667282;font-size:11px">MX TV • Secure Worker edition</div></div><div class="login-side"><div class="card"><h2>Welcome back</h2><div class="sub">Connect your Xtream service and continue watching.</div><div id="histwrap"><div class="histlabel"><span>Recent logins</span><span>saved in this browser</span></div><div class="histrow"><select id="history"><option value="">Choose a previous login…</option></select><button class="small" id="load">Load</button><button class="small" id="del">✕</button></div></div><div class="field"><label><span>Server URL</span><span>Xtream portal</span></label><input id="server" inputmode="url" placeholder="http://example.com:8080"></div><div class="field"><label><span>Username</span><span>required</span></label><input id="user" autocomplete="username" placeholder="Username"></div><div class="field"><label><span>Password</span><span>required</span></label><div class="pass"><input id="pass" type="password" autocomplete="current-password" placeholder="Password"><button class="eye" id="eye">◉</button></div></div><div class="remember"><label><input type="checkbox" id="remember" checked> Remember this login</label><span>secure session</span></div><button class="connect" id="connect">Connect to MX TV</button><div class="err" id="err"></div></div></div></section>
<div class="app hidden" id="app"><aside class="side" id="side"><div class="sidebrand"><div class="slogo">MX</div><div><strong>MX TV</strong><span>by MazenmiX</span></div></div><nav class="nav"><button class="navbtn active" data-view="home"><span>⌂</span><b>Home</b></button><button class="navbtn" data-view="live"><span>◉</span><b>Live TV</b></button><button class="navbtn" data-view="favorites"><span>★</span><b>Favorites</b></button><button class="navbtn" data-view="movies"><span>▶</span><b>Movies</b></button><button class="navbtn" data-view="series"><span>▣</span><b>Series</b></button><button class="navbtn" data-view="search"><span>⌕</span><b>Search</b></button></nav><div class="sidebottom"><button class="navbtn" data-view="settings"><span>⚙</span><b>Settings</b></button><div class="status"><i></i><span>Connected</span></div></div></aside><main class="main"><header class="top"><div class="topleft"><button class="menu" id="menu">☰</button><div><div class="kicker">MX TV • CONNECTED</div><h1 id="title">Home</h1></div></div><div class="topright"><div class="clock" id="clock"></div><button class="round" id="quick">⌕</button></div></header><section class="content" id="content"></section></main></div>
<div class="player hidden" id="player"><div class="playerbox"><div class="playtop"><div><div class="kicker">NOW PLAYING</div><strong id="ptitle">Channel</strong></div><button class="round" id="close">✕</button></div><video id="video" controls autoplay playsinline></video><div class="pinfo" id="pinfo"></div></div></div><div class="toast" id="toast"></div>
<script src="https://cdn.jsdelivr.net/npm/hls.js@1.5.18/dist/hls.min.js"></script><script src="https://cdn.jsdelivr.net/npm/mpegts.js@1.7.3/dist/mpegts.min.js"></script><script>
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const KEY='mxtv_profiles_worker',FAV='mxtv_favs_worker_v2';
let hls=null,mpegPlayer=null,filterTimer=null;
const state={
  view:'home',query:'',limit:80,src:null,loading:false,error:'',
  cats:{live:[],movies:[],series:[]},
  selected:{live:null,movies:null,series:null},
  loaded:{live:null,movies:null,series:null},
  data:{live:[],movies:[],series:[]},
  favorites:JSON.parse(localStorage.getItem(FAV)||'[]')
};

function esc(v=''){return String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function toast(t){const x=$('#toast');x.textContent=t;x.classList.add('show');clearTimeout(window.__mxToast);window.__mxToast=setTimeout(()=>x.classList.remove('show'),2400)}
function profiles(){try{return JSON.parse(localStorage.getItem(KEY)||'[]')}catch{return[]}}
function saveProfiles(a){localStorage.setItem(KEY,JSON.stringify(a.slice(0,12)))}
function refreshHistory(){
  const a=profiles();
  $('#history').innerHTML='<option value="">Choose a previous login…</option>'+a.map((p,i)=>'<option value="'+i+'">'+esc(p.username+' @ '+p.server.replace(/^https?:\/\//,''))+'</option>').join('');
  $('#histwrap').classList.toggle('hidden',!a.length)
}
$('#load').onclick=()=>{const a=profiles(),i=Number($('#history').value);if(!a[i])return;$('#server').value=a[i].server;$('#user').value=a[i].username};
$('#del').onclick=()=>{const a=profiles(),i=Number($('#history').value);if(!a[i])return;a.splice(i,1);saveProfiles(a);refreshHistory()};
$('#eye').onclick=e=>{e.preventDefault();$('#pass').type=$('#pass').type==='password'?'text':'password'};

async function req(url,opt){
  const r=await fetch(url,opt);
  const text=await r.text();
  let d=null;
  try{d=JSON.parse(text)}catch{
    throw Error('Backend returned '+r.status+' instead of JSON'+(text?': '+text.replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim().slice(0,140):''))
  }
  if(!r.ok)throw Error(d?.error||('HTTP '+r.status));
  return d
}
async function action(a,params={}){
  const q=new URLSearchParams({action:a});
  for(const [k,v] of Object.entries(params))if(v!==undefined&&v!==null&&v!=='')q.set(k,v);
  return req('/api/action?'+q.toString())
}
function catName(kind,id){
  return state.cats[kind].find(c=>String(c.id)===String(id))?.name || (kind==='live'?'Live':kind==='movies'?'Movies':'Series')
}

async function loadMeta(){
  const [lc,vc,sc]=await Promise.all([
    action('get_live_categories'),action('get_vod_categories'),action('get_series_categories')
  ]);
  const norm=a=>(Array.isArray(a)?a:[]).map(x=>({id:String(x.category_id),name:x.category_name||'Category'}));
  state.cats.live=norm(lc);state.cats.movies=norm(vc);state.cats.series=norm(sc);
  for(const k of ['live','movies','series']){
    if(!state.selected[k]&&state.cats[k][0])state.selected[k]=state.cats[k][0].id
  }
}

async function loadCategory(kind,catId){
  if(!catId){state.data[kind]=[];state.loaded[kind]=null;return}
  state.loading=true;state.error='';render();
  try{
    const map={live:'get_live_streams',movies:'get_vod_streams',series:'get_series'};
    const raw=await action(map[kind],{category_id:catId});
    const a=Array.isArray(raw)?raw:[];
    const cname=catName(kind,catId);
    if(kind==='live'){
      state.data.live=a.map(x=>({id:'l'+x.stream_id,streamId:x.stream_id,name:x.name||'Channel',cat:cname,logo:x.stream_icon||'',url:'/live/'+x.stream_id+'.m3u8'}))
    }else if(kind==='movies'){
      state.data.movies=a.map(x=>({id:'m'+x.stream_id,streamId:x.stream_id,name:x.name||'Movie',cat:cname,logo:x.stream_icon||'',url:'/movie/'+x.stream_id+'.'+(x.container_extension||'mp4')}))
    }else{
      state.data.series=a.map(x=>({id:'s'+x.series_id,seriesId:x.series_id,name:x.name||'Series',cat:cname,logo:x.cover||'',url:''}))
    }
    state.loaded[kind]=String(catId);state.limit=80
  }catch(e){
    state.error=e.message||'Could not load this category.'
  }finally{
    state.loading=false;render()
  }
}

async function connect(){
  const server=$('#server').value.trim().replace(/\/+$/,''),username=$('#user').value.trim(),password=$('#pass').value,remember=$('#remember').checked;
  if(!server||!username||!password){$('#err').textContent='Enter server URL, username and password.';return}
  const b=$('#connect');b.disabled=true;b.textContent='Connecting…';$('#err').textContent='';
  try{
    const d=await req('/api/login',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({server,username,password,remember})});
    state.src={server,username,user_info:d.user_info};
    if(remember){
      let a=profiles().filter(x=>!(x.server===server&&x.username===username));
      a.unshift({server,username});saveProfiles(a);refreshHistory()
    }
    b.textContent='Loading categories…';
    await loadMeta();
    $('#login').classList.add('hidden');$('#app').classList.remove('hidden');
    state.view='home';render();toast('Connected to MX TV')
  }catch(e){$('#err').textContent=e.message}
  finally{b.disabled=false;b.textContent='Connect to MX TV'}
}
$('#connect').onclick=connect;
['server','user','pass'].forEach(id=>$('#'+id).addEventListener('keydown',e=>{if(e.key==='Enter')connect()}));

function clock(){try{$('#clock').textContent=new Intl.DateTimeFormat(undefined,{weekday:'short',hour:'2-digit',minute:'2-digit'}).format(new Date())}catch{}}
setInterval(clock,1000);clock();
const side=$('#side'),content=$('#content');

async function view(v){
  state.view=v;state.query='';state.limit=80;state.error='';
  $$('.navbtn[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===v));
  side.classList.remove('open');
  render();
  if(['live','movies','series'].includes(v)){
    const id=state.selected[v];
    if(id&&String(state.loaded[v])!==String(id))await loadCategory(v,id)
  }
}
$$('.navbtn[data-view]').forEach(b=>b.onclick=()=>view(b.dataset.view));
$('#menu').onclick=()=>side.classList.toggle('open');
$('#quick').onclick=()=>view('search');

function item(id){
  id=String(id||'');
  const arr=id.startsWith('l')?state.data.live:id.startsWith('m')?state.data.movies:id.startsWith('s')?state.data.series:[];
  return arr.find(x=>String(x.id)===id)||state.favorites.find(x=>String(x.id)===id)||null
}
function fav(id){return state.favorites.some(x=>String(x.id)===String(id))}
function toggle(id){
  const x=item(id);if(!x)return;
  state.favorites=fav(id)?state.favorites.filter(f=>String(f.id)!==String(id)):[...state.favorites,{...x}];
  localStorage.setItem(FAV,JSON.stringify(state.favorites));render()
}
function icon(n){
  const t=esc(n).replace(/[^a-z0-9]/gi,'').slice(0,3).toUpperCase()||'MX';
  return 'data:image/svg+xml;charset=UTF-8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="22" fill="#151d28"/><text x="50" y="58" text-anchor="middle" font-family="Arial" font-size="21" font-weight="900" fill="#d8b46f">'+t+'</text></svg>')
}
function tile(x,t='live'){
  return '<button class="tile" data-play="'+esc(x.id)+'"><small>'+t.toUpperCase()+'</small><img loading="lazy" src="'+(x.logo||icon(x.name))+'"><h4>'+esc(x.name)+'</h4><p>'+esc(x.cat||'')+'</p></button>'
}
function row(x){
  return '<div class="row" data-play="'+esc(x.id)+'"><img loading="lazy" src="'+(x.logo||icon(x.name))+'"><div><b>'+esc(x.name)+'</b><small>'+esc(x.cat||'')+'</small></div><button class="star '+(fav(x.id)?'on':'')+'" data-fav="'+esc(x.id)+'">★</button></div>'
}

function home(){
  const u=state.src?.username||'';
  const catTotal=state.cats.live.length+state.cats.movies.length+state.cats.series.length;
  return '<div class="hero"><div class="herocopy"><span class="badge">'+(u?'CONNECTED • '+esc(u):'MX TV WEB')+'</span><h2>Your TV.<br>Beautifully simple.</h2><p>Your library is loaded on demand, category by category, for maximum speed and stability on large IPTV accounts.</p><div class="actions"><button class="btn primary" data-jump="live">▶ Live TV</button><button class="btn" data-jump="movies">▶ Movies</button><button class="btn" data-jump="series">▣ Series</button></div></div></div>'+
  '<div class="kpis"><div class="kpi"><b>'+state.cats.live.length.toLocaleString()+'</b><span>Live Categories</span></div><div class="kpi"><b>'+state.cats.movies.length.toLocaleString()+'</b><span>Movie Categories</span></div><div class="kpi"><b>'+state.cats.series.length.toLocaleString()+'</b><span>Series Categories</span></div><div class="kpi"><b>'+state.favorites.length.toLocaleString()+'</b><span>Favorites</span></div></div>'+
  '<div class="sectionhead"><h3>Ready</h3></div><div class="settings"><div style="color:#aab4c3;line-height:1.7">Choose <b>Live TV</b>, <b>Movies</b> or <b>Series</b>. MX TV will only download the category you open instead of loading the entire '+catTotal.toLocaleString()+'-category library at login.</div></div>'
}

function list(kind,label){
  const cats=state.cats[kind]||[];
  let a=state.data[kind]||[];
  if(state.query){
    const q=state.query.toLowerCase();
    a=a.filter(x=>(x.name||'').toLowerCase().includes(q))
  }
  const visible=a.slice(0,state.limit);
  return '<div class="split"><div class="panel"><div class="ptitle">'+label+' Categories</div><div class="cats">'+cats.map(c=>'<button class="cat '+(String(state.selected[kind])===String(c.id)?'active':'')+'" data-kind="'+kind+'" data-catid="'+esc(c.id)+'">'+esc(c.name)+'</button>').join('')+'</div></div>'+
  '<div class="panel"><div class="toolbar"><input class="search" id="filter" value="'+esc(state.query)+'" placeholder="Search this category..."></div>'+
  (state.loading?'<div class="empty">Loading '+esc(catName(kind,state.selected[kind]))+'…</div>':
   state.error?'<div class="empty" style="color:#ff8797">'+esc(state.error)+'</div>':
   '<div style="padding:9px 16px;color:#8d99aa;font-size:12px">'+esc(catName(kind,state.selected[kind]))+' · '+a.length.toLocaleString()+' items</div><div class="rows">'+(visible.map(row).join('')||'<div class="empty">No items in this category.</div>')+'</div>'+
   (a.length>visible.length?'<div style="padding:14px;text-align:center"><button class="btn" id="more">Load more · '+visible.length.toLocaleString()+' / '+a.length.toLocaleString()+'</button></div>':''))+
  '</div></div>'
}
function favoritesPage(){
  let a=state.favorites||[];
  if(state.query){const q=state.query.toLowerCase();a=a.filter(x=>(x.name||'').toLowerCase().includes(q))}
  return '<div class="settings"><h3>Favorites</h3><input class="search" id="filter" value="'+esc(state.query)+'" placeholder="Search favorites..."><div class="rows">'+(a.map(row).join('')||'<div class="empty">No favorites yet.</div>')+'</div></div>'
}
function searchPage(){
  const loaded=[...state.data.live,...state.data.movies,...state.data.series,...state.favorites];
  return '<div class="settings"><h3>Search loaded content</h3><input class="search" id="gsearch" placeholder="Search recently loaded channels, movies or series..."><div style="padding:10px 0;color:#8d99aa;font-size:12px">For stability, global search covers categories you have opened plus Favorites.</div><div class="rows" id="results"><div class="empty">Start typing to search.</div></div></div>'
}
function settings(){
  return '<div class="settings"><h3>Account & Device</h3><div class="account"><div><b>'+esc(state.src?.username||'')+'</b><span>'+esc(state.src?.server||'')+'</span></div><div class="actions" style="margin:0"><button class="btn" id="switch">Switch Server</button><button class="btn danger" id="logout">Logout</button></div></div></div>'
}
function render(){
  const n={home:'Home',live:'Live TV',favorites:'Favorites',movies:'Movies',series:'Series',search:'Search',settings:'Settings'};
  $('#title').textContent=n[state.view]||'MX TV';
  content.innerHTML=state.view==='home'?home():
    state.view==='live'?list('live','Live TV'):
    state.view==='movies'?list('movies','Movies'):
    state.view==='series'?list('series','Series'):
    state.view==='favorites'?favoritesPage():
    state.view==='search'?searchPage():settings();
  bind()
}
function bind(){
  $$('[data-jump]').forEach(b=>b.onclick=()=>view(b.dataset.jump));
  $$('[data-fav]').forEach(b=>b.onclick=e=>{e.stopPropagation();toggle(b.dataset.fav)});
  $$('[data-play]').forEach(x=>x.onclick=e=>{if(!e.target.closest('[data-fav]'))play(item(x.dataset.play))});
  $$('[data-catid]').forEach(b=>b.onclick=async()=>{
    const kind=b.dataset.kind,id=b.dataset.catid;
    state.selected[kind]=id;state.query='';state.limit=80;
    await loadCategory(kind,id)
  });
  const more=$('#more');if(more)more.onclick=()=>{state.limit+=80;render()};
  const f=$('#filter');
  if(f)f.oninput=()=>{
    const val=f.value,pos=f.selectionStart;
    clearTimeout(filterTimer);
    filterTimer=setTimeout(()=>{state.query=val;state.limit=80;render();const nf=$('#filter');if(nf){nf.focus();try{nf.setSelectionRange(pos,pos)}catch{}}},160)
  };
  const g=$('#gsearch');
  if(g)g.oninput=()=>{
    const q=g.value.trim().toLowerCase();
    const loaded=[...state.data.live,...state.data.movies,...state.data.series,...state.favorites];
    const seen=new Set(),out=[];
    if(q)for(const x of loaded){if(seen.has(x.id))continue;seen.add(x.id);if((x.name||'').toLowerCase().includes(q)){out.push(x);if(out.length>=80)break}}
    $('#results').innerHTML=q?(out.map(row).join('')||'<div class="empty">No results in loaded categories.</div>'):'<div class="empty">Start typing to search.</div>';
    $$('[data-play]',$('#results')).forEach(x=>x.onclick=e=>{if(!e.target.closest('[data-fav]'))play(item(x.dataset.play))});
    $$('[data-fav]',$('#results')).forEach(b=>b.onclick=e=>{e.stopPropagation();toggle(b.dataset.fav)})
  };
  const sw=$('#switch');if(sw)sw.onclick=()=>{$('#app').classList.add('hidden');$('#login').classList.remove('hidden')};
  const lo=$('#logout');if(lo)lo.onclick=async()=>{await fetch('/api/logout',{method:'POST'});state.src=null;state.data={live:[],movies:[],series:[]};state.cats={live:[],movies:[],series:[]};$('#app').classList.add('hidden');$('#login').classList.remove('hidden')}
}

async function play(x){
  if(!x)return;
  if(!x.url){toast('Series episode browser is next.');return}

  $('#ptitle').textContent=x.name;
  $('#pinfo').textContent=x.cat||'';
  $('#player').classList.remove('hidden');

  const v=$('#video');
  let fallbackStarted=false;

  const cleanup=()=>{
    if(hls){try{hls.destroy()}catch{}hls=null}
    if(mpegPlayer){try{mpegPlayer.destroy()}catch{}mpegPlayer=null}
    v.onerror=null;
    try{v.pause()}catch{}
    v.removeAttribute('src');
    try{v.load()}catch{}
  };

  cleanup();

  const formats=(state.src?.user_info?.allowed_output_formats||[]).map(v=>String(v).toLowerCase());
  const hasHls=formats.length===0||formats.includes('m3u8')||formats.includes('hls');
  const hasTs=formats.length===0||formats.includes('ts')||formats.includes('mpegts');
  const hlsUrl=x.streamId?('/live/'+x.streamId+'.m3u8?force=hls'):x.url;
  const tsUrl=x.streamId?('/live/'+x.streamId+'.ts?force=ts'):x.url;
  const nativeHls=!!v.canPlayType('application/vnd.apple.mpegurl');

  const startTs=()=>{
    if(fallbackStarted)return;
    fallbackStarted=true;
    if(hls){try{hls.destroy()}catch{}hls=null}
    v.onerror=null;
    try{v.pause()}catch{}
    v.removeAttribute('src');
    try{v.load()}catch{}

    setTimeout(()=>{
      $('#pinfo').textContent=(x.cat||'')+' · TS fallback';
      if(window.mpegts&&mpegts.isSupported()){
        try{
          mpegPlayer=mpegts.createPlayer(
            {type:'mpegts',isLive:true,url:tsUrl},
            {enableWorker:true,enableStashBuffer:false,stashInitialSize:128,lazyLoad:false}
          );
          mpegPlayer.attachMediaElement(v);
          mpegPlayer.load();
          mpegPlayer.on(mpegts.Events.ERROR,(type,detail)=>{
            toast('TS playback failed · '+String(detail||type||'unknown'));
          });
          mpegPlayer.play().catch(()=>{});
          return
        }catch(e){}
      }
      v.src=tsUrl;
      v.play().catch(()=>toast('TS stream is not supported by this browser/device.'))
    },900)
  };

  const startHls=()=>{
    $('#pinfo').textContent=(x.cat||'')+' · HLS';
    if(nativeHls){
      v.src=hlsUrl;
      v.onerror=()=>{ if(hasTs)startTs(); else toast('HLS stream failed.') };
      v.play().catch(()=>{});
      return
    }
    if(window.Hls&&Hls.isSupported()){
      hls=new Hls({enableWorker:true,lowLatencyMode:false,maxBufferLength:20,backBufferLength:10});
      hls.on(Hls.Events.ERROR,(ev,data)=>{
        if(data.fatal){
          if(hasTs)startTs();
          else toast('HLS stream failed · '+String(data.details||data.type||'unknown'));
        }
      });
      hls.loadSource(hlsUrl);
      hls.attachMedia(v);
      hls.on(Hls.Events.MANIFEST_PARSED,()=>v.play().catch(()=>{}));
      return
    }
    if(hasTs)startTs();
    else toast('HLS is not supported by this browser.')
  };

  if(hasHls)startHls();
  else if(hasTs)startTs();
  else startHls();
}
$('#close').onclick=()=>{$('#player').classList.add('hidden');const v=$('#video');try{v.pause()}catch{};v.onerror=null;v.removeAttribute('src');try{v.load()}catch{};if(hls){try{hls.destroy()}catch{}hls=null}if(mpegPlayer){try{mpegPlayer.destroy()}catch{}mpegPlayer=null}};
$('#player').onclick=e=>{if(e.target.id==='player')$('#close').click()};

async function boot(){
  refreshHistory();
  try{
    const s=await req('/api/session');if(!s.ok)return;
    state.src={server:s.server,username:s.username,user_info:s.user_info};
    await loadMeta();
    $('#login').classList.add('hidden');$('#app').classList.remove('hidden');state.view='home';render()
  }catch{}
}
boot();
</script></body></html>`;

function b64u(bytes){let s='';for(const b of bytes)s+=String.fromCharCode(b);return btoa(s).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'')}
function unb64u(s){s=s.replace(/-/g,'+').replace(/_/g,'/');while(s.length%4)s+='=';const b=atob(s);return Uint8Array.from(b,c=>c.charCodeAt(0))}
async function hkey(env){const secret=env&&env.COOKIE_SIGNING_KEY;if(!secret)throw Error('MX TV setup incomplete: add the Cloudflare secret COOKIE_SIGNING_KEY, then redeploy.');return crypto.subtle.importKey('raw',enc.encode(secret),{name:'HMAC',hash:'SHA-256'},false,['sign','verify'])}
async function sign(env,s){return b64u(new Uint8Array(await crypto.subtle.sign('HMAC',await hkey(env),enc.encode(s))))}
async function verify(env,s,sig){try{return crypto.subtle.verify('HMAC',await hkey(env),unb64u(sig),enc.encode(s))}catch{return false}}
async function makeSession(env,p){const b=b64u(enc.encode(JSON.stringify(p)));return b+'.'+await sign(env,b)}
function cookies(req){const out={};for(const p of (req.headers.get('cookie')||'').split(';')){const i=p.indexOf('=');if(i>0)out[p.slice(0,i).trim()]=p.slice(i+1).trim()}return out}
async function session(req,env){const t=cookies(req).mx_session;if(!t)return null;const [b,s]=t.split('.');if(!b||!s||!(await verify(env,b,s)))return null;try{const p=JSON.parse(dec.decode(unb64u(b)));if(Date.now()>p.exp)return null;return p}catch{return null}}
function json(x,status=200,headers={}){return new Response(JSON.stringify(x),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store',...headers}})}
function clean(s){return String(s||'').trim().replace(/\/+$/,'')}
function safe(raw){let u;try{u=new URL(raw)}catch{throw Error('Invalid server URL')}if(!['http:','https:'].includes(u.protocol))throw Error('Only HTTP/HTTPS servers are supported');const h=u.hostname.toLowerCase();if(h==='localhost'||h==='::1'||/^127\./.test(h)||/^10\./.test(h)||/^192\.168\./.test(h)||/^169\.254\./.test(h))throw Error('Private/local addresses are not supported');const m=h.match(/^172\.(\d+)\./);if(m&&+m[1]>=16&&+m[1]<=31)throw Error('Private/local addresses are not supported');return u}
async function getj(url){const c=new AbortController(),t=setTimeout(()=>c.abort(),15000);try{const r=await fetch(url,{redirect:'follow',signal:c.signal,headers:{'user-agent':'MX-TV-Web/1.0'}});const tx=await r.text();let d;try{d=JSON.parse(tx)}catch{throw Error('Xtream server returned invalid data')}if(!r.ok)throw Error('Xtream server HTTP '+r.status);return d}finally{clearTimeout(t)}}
function apiurl(s,a='',params={}){const u=new URL(clean(s.server)+'/player_api.php');u.searchParams.set('username',s.username);u.searchParams.set('password',s.password);if(a)u.searchParams.set('action',a);for(const [k,v] of Object.entries(params)){if(v!==undefined&&v!==null&&v!=='')u.searchParams.set(k,String(v))}return u.toString()}
async function proxysign(env,url){return sign(env,url)}
async function rewrite(env,text,base){const out=[];for(let line of text.split(/\r?\n/)){if(!line){out.push(line);continue}if(line.startsWith('#')){const m=line.match(/URI="([^"]+)"/);if(m){const abs=new URL(m[1],base).toString(),sg=await proxysign(env,abs);line=line.replace(m[1],'/proxy?u='+encodeURIComponent(abs)+'&s='+encodeURIComponent(sg))}out.push(line)}else{const abs=new URL(line,base).toString(),sg=await proxysign(env,abs);out.push('/proxy?u='+encodeURIComponent(abs)+'&s='+encodeURIComponent(sg))}}return out.join('\n')}
async function media(req,env,target,force='auto'){
  safe(target);
  const h=new Headers();
  const range=req.headers.get('range');if(range)h.set('range',range);
  h.set('accept','*/*');
  h.set('user-agent','Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148');
  const up=await fetch(target,{headers:h,redirect:'follow'});
  const ct=(up.headers.get('content-type')||'').toLowerCase(),final=up.url||target;

  if(!up.ok){
    return new Response(up.body,{status:up.status,headers:{'content-type':up.headers.get('content-type')||'text/plain','cache-control':'no-store'}})
  }

  const treatAsPlaylist = force==='hls' || (force==='auto' && (ct.includes('mpegurl')||ct.includes('vnd.apple')||ct.includes('x-mpegurl')||ct.startsWith('text/')));
  if(treatAsPlaylist){
    const tx=await up.text();
    if(!tx.trimStart().startsWith('#EXTM3U')){
      return new Response('Upstream did not return an HLS playlist',{status:502,headers:{'content-type':'text/plain','cache-control':'no-store'}})
    }
    return new Response(await rewrite(env,tx,final),{
      status:up.status,
      headers:{'content-type':'application/vnd.apple.mpegurl; charset=utf-8','cache-control':'no-store'}
    })
  }

  const oh=new Headers();
  for(const k of ['content-type','content-length','content-range','accept-ranges','cache-control']){
    const v=up.headers.get(k);if(v)oh.set(k,v)
  }
  if(force==='ts'||!oh.has('content-type'))oh.set('content-type','video/mp2t');
  return new Response(up.body,{status:up.status,headers:oh})
}

async function probeOne(target){
  safe(target);
  const ctl=new AbortController();
  const timer=setTimeout(()=>ctl.abort(),8000);
  try{
    const r=await fetch(target,{
      redirect:'follow',
      signal:ctl.signal,
      headers:{
        'accept':'*/*',
        'user-agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148'
      }
    });
    const ct=(r.headers.get('content-type')||'').toLowerCase();
    if(!r.ok){
      try{await r.body?.cancel()}catch{}
      return {ok:false,status:r.status,contentType:ct,kind:'error'}
    }

    let bytes=new Uint8Array();
    try{
      const reader=r.body?.getReader();
      if(reader){
        const chunks=[];let total=0;
        while(total<4096){
          const {done,value}=await reader.read();
          if(done)break;
          if(value){chunks.push(value);total+=value.length}
          if(total>=4096)break
        }
        try{await reader.cancel()}catch{}
        bytes=new Uint8Array(total);
        let off=0;for(const ch of chunks){bytes.set(ch,off);off+=ch.length}
      }
    }catch{}

    let prefix='';
    try{prefix=new TextDecoder().decode(bytes.slice(0,512)).trimStart()}catch{}
    const looksHls=prefix.startsWith('#EXTM3U');
    const looksTs=bytes.length>376 && bytes[0]===0x47 && bytes[188]===0x47 && bytes[376]===0x47;

    let kind='unknown';
    if(looksHls)kind='hls';
    else if(looksTs)kind='ts';
    else if(ct.includes('mpegurl')||ct.includes('vnd.apple')||ct.includes('x-mpegurl'))kind='hls';
    else if(ct.includes('mp2t')||ct.includes('mpegts'))kind='ts';

    return {ok:true,status:r.status,contentType:ct,kind,prefix:prefix.slice(0,32)}
  }finally{clearTimeout(timer)}
}

export default{async fetch(req,env){const u=new URL(req.url),p=u.pathname;if(p==='/'||p==='/index.html')return new Response(HTML,{headers:{'content-type':'text/html; charset=utf-8','cache-control':'no-store'}});if(p==='/api/login'&&req.method==='POST'){let b;try{b=await req.json()}catch{return json({error:'Invalid request'},400)}const server=clean(b.server),username=String(b.username||'').trim(),password=String(b.password||''),remember=!!b.remember;if(!server||!username||!password)return json({error:'Server, username and password are required.'},400);try{safe(server);const d=await getj(apiurl({server,username,password}));if(!d?.user_info||String(d.user_info.auth??'0')!=='1')return json({error:'Xtream username or password is not accepted.'},401);const payload={server,username,password,user_info:{username:d.user_info.username||username,status:d.user_info.status||'',exp_date:d.user_info.exp_date||'',allowed_output_formats:Array.isArray(d.user_info.allowed_output_formats)?d.user_info.allowed_output_formats:[],max_connections:d.user_info.max_connections||'',active_cons:d.user_info.active_cons||''},exp:Date.now()+(remember?30:0.5)*86400000};const tok=await makeSession(env,payload);let c='mx_session='+tok+'; Path=/; HttpOnly; Secure; SameSite=Lax';if(remember)c+='; Max-Age=2592000';return json({ok:true,user_info:payload.user_info},200,{'set-cookie':c})}catch(e){return json({error:e.name==='AbortError'?'Xtream server timed out.':e.message},502)}}if(p==='/api/logout'&&req.method==='POST')return json({ok:true},200,{'set-cookie':'mx_session=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0'});const s=await session(req,env);if(p==='/api/session'){if(!s)return json({ok:false},401);return json({ok:true,server:s.server,username:s.username,user_info:s.user_info})}if(!s)return json({error:'Session expired. Please login again.'},401);if(p==='/api/action'){const a=u.searchParams.get('action')||'',allow=new Set(['get_live_categories','get_live_streams','get_vod_categories','get_vod_streams','get_series_categories','get_series','get_series_info','get_short_epg','get_simple_data_table']);if(!allow.has(a))return json({error:'Unsupported action'},400);const params={};for(const k of ['category_id','series_id','stream_id','epg_limit']){const v=u.searchParams.get(k);if(v!==null&&v!=='')params[k]=v}try{return json(await getj(apiurl(s,a,params)))}catch(e){return json({error:e.message},502)}}if(p==='/api/probe-live'){
    const id=u.searchParams.get('id')||'';
    if(!/^\d+$/.test(id))return json({error:'Invalid stream id'},400);
    const base=clean(s.server)+'/live/'+encodeURIComponent(s.username)+'/'+encodeURIComponent(s.password)+'/'+id;
    let hlsInfo=null,tsInfo=null;
    try{hlsInfo=await probeOne(base+'.m3u8')}catch(e){hlsInfo={ok:false,status:0,contentType:'',kind:'error',error:e.name==='AbortError'?'timeout':e.message}}
    if(hlsInfo?.ok&&hlsInfo.kind==='hls')return json({mode:'hls',url:'/live/'+id+'.m3u8?force=hls',detail:'HLS sniffed · '+hlsInfo.status+' · '+(hlsInfo.contentType||'unknown')});
    if(hlsInfo?.ok&&hlsInfo.kind==='ts')return json({mode:'ts',url:'/live/'+id+'.m3u8?force=ts',detail:'TS sniffed from m3u8 · '+hlsInfo.status+' · '+(hlsInfo.contentType||'unknown')});
    try{tsInfo=await probeOne(base+'.ts')}catch(e){tsInfo={ok:false,status:0,contentType:'',kind:'error',error:e.name==='AbortError'?'timeout':e.message}}
    if(tsInfo?.ok&&tsInfo.kind==='hls')return json({mode:'hls',url:'/live/'+id+'.ts?force=hls',detail:'HLS sniffed from ts · '+tsInfo.status});
    if(tsInfo?.ok)return json({mode:'ts',url:'/live/'+id+'.ts?force=ts',detail:'TS fallback · '+tsInfo.status+' · '+(tsInfo.contentType||'unknown')});
    if(hlsInfo?.ok)return json({mode:'hls',url:'/live/'+id+'.m3u8?force=hls',detail:'Unknown m3u8 response · '+hlsInfo.status});
    return json({error:'Upstream stream unavailable. HLS '+(hlsInfo?.status||0)+' / TS '+(tsInfo?.status||0)},502)
  }let m=p.match(/^\/live\/(\d+)\.m3u8$/);if(m)return media(req,env,clean(s.server)+'/live/'+encodeURIComponent(s.username)+'/'+encodeURIComponent(s.password)+'/'+m[1]+'.m3u8',u.searchParams.get('force')||'auto');m=p.match(/^\/live\/(\d+)\.ts$/);if(m)return media(req,env,clean(s.server)+'/live/'+encodeURIComponent(s.username)+'/'+encodeURIComponent(s.password)+'/'+m[1]+'.ts',u.searchParams.get('force')||'auto');m=p.match(/^\/movie\/(\d+)\.([a-zA-Z0-9]{2,6})$/);if(m)return media(req,env,clean(s.server)+'/movie/'+encodeURIComponent(s.username)+'/'+encodeURIComponent(s.password)+'/'+m[1]+'.'+m[2]);if(p==='/proxy'){const target=u.searchParams.get('u')||'',sg=u.searchParams.get('s')||'';if(!target||!sg||!(await verify(env,target,sg)))return new Response('Invalid stream token',{status:403});return media(req,env,target)}return new Response('Not found',{status:404})}};