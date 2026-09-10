const search = document.getElementById('search');
const filters = document.querySelectorAll('.filter');
const grid = document.getElementById('animationGrid');
const empty = document.getElementById('empty');
const toast = document.getElementById('toast');
let activeFilter = 'all';

// 40 real animation names with visible live previews.
const extraAnimations = [
  ['Zoom In','entrance','zoom-in','ZOOM IN','@keyframes zoomIn{from{transform:scale(.35);opacity:0}to{transform:scale(1);opacity:1}}.zoom-in{animation:zoomIn 1.4s ease-in-out infinite alternate}'],
  ['Slide Left','entrance','slide-left','SLIDE LEFT','@keyframes slideLeft{from{transform:translateX(55px);opacity:0}to{transform:none;opacity:1}}.slide-left{animation:slideLeft 1.2s ease-in-out infinite alternate}'],
  ['Slide Right','entrance','slide-right','SLIDE RIGHT','@keyframes slideRight{from{transform:translateX(-55px);opacity:0}to{transform:none;opacity:1}}.slide-right{animation:slideRight 1.2s ease-in-out infinite alternate}'],
  ['Rotate In','entrance','rotate-in','ROTATE IN','@keyframes rotateIn{from{transform:rotate(-80deg) scale(.4);opacity:0}to{transform:none;opacity:1}}.rotate-in{animation:rotateIn 1.4s ease-in-out infinite alternate}'],
  ['Flip','3d','flip','FLIP','@keyframes flip{0%,100%{transform:perspective(500px) rotateY(0)}50%{transform:perspective(500px) rotateY(180deg)}}.flip{animation:flip 1.6s ease-in-out infinite}'],
  ['Swing','hover','swing','SWING','@keyframes swing{20%{transform:rotate(15deg)}40%{transform:rotate(-10deg)}60%{transform:rotate(7deg)}80%{transform:rotate(-4deg)}100%{transform:rotate(0)}}.swing{transform-origin:top center;animation:swing 1.4s ease-in-out infinite}'],
  ['Jello','hover','jello','JELLO','@keyframes jello{0%,100%{transform:none}30%{transform:skewX(-12deg) skewY(-12deg)}50%{transform:skewX(8deg) skewY(8deg)}70%{transform:skewX(-4deg)}}.jello{animation:jello 1.2s ease-in-out infinite}'],
  ['Heartbeat','hover','heartbeat','♥','@keyframes heartbeat{0%,100%{transform:scale(1)}15%{transform:scale(1.25)}30%{transform:scale(1)}45%{transform:scale(1.18)}}.heartbeat{animation:heartbeat 1.2s ease-in-out infinite}'],
  ['Ping','loading','ping','PING','@keyframes ping{0%{transform:scale(.4);opacity:1}75%,100%{transform:scale(1.7);opacity:0}}.ping{animation:ping 1.4s ease-out infinite}'],
  ['Skeleton','loading','skeleton','LOADING','@keyframes skeleton{to{background-position:-200% 0}}.skeleton{animation:skeleton 1.3s linear infinite;background:linear-gradient(90deg,#20232d 25%,#555b6b 50%,#20232d 75%);background-size:200% 100%}'],
  ['Elastic','entrance','elastic','ELASTIC','@keyframes elastic{0%,100%{transform:scale(1)}35%{transform:scaleX(1.3) scaleY(.75)}55%{transform:scaleX(.8) scaleY(1.15)}75%{transform:scaleX(1.08) scaleY(.94)}}.elastic{animation:elastic 1.3s ease-in-out infinite}'],
  ['Float','hover','float','FLOAT','@keyframes float{0%,100%{transform:translateY(8px)}50%{transform:translateY(-18px)}}.float{animation:float 2s ease-in-out infinite}'],
  ['Neon Border','hover','neon','NEON','@keyframes neon{from{box-shadow:0 0 0 transparent}to{box-shadow:0 0 10px #8b5cf6,0 0 35px #8b5cf6}}.neon{animation:neon 1s ease-in-out infinite alternate}'],
  ['Blur In','entrance','blur-in','BLUR IN','@keyframes blurIn{from{filter:blur(12px);opacity:0;transform:scale(1.08)}to{filter:blur(0);opacity:1;transform:scale(1)}}.blur-in{animation:blurIn 1.4s ease-in-out infinite alternate}'],
  ['Glitch','text','glitch','GLITCH','@keyframes glitch{0%,100%{transform:none;text-shadow:none}20%{transform:translate(4px,-2px);text-shadow:-3px 0 #f43f5e}40%{transform:translate(-3px,2px);text-shadow:3px 0 #22d3ee}60%{transform:translate(2px,0)}}.glitch{animation:glitch .8s steps(2) infinite}'],
  ['Text Reveal','text','reveal','REVEAL','@keyframes reveal{from{clip-path:inset(0 100% 0 0);transform:translateX(-15px)}to{clip-path:inset(0);transform:none}}.reveal{animation:reveal 1.8s ease-in-out infinite alternate}'],
  ['Rainbow','background','rainbow','RAINBOW','@keyframes rainbow{to{background-position:300% 0}}.rainbow{background:linear-gradient(90deg,#7c3aed,#ec4899,#f59e0b,#22c55e,#06b6d4,#7c3aed);background-size:300% 100%;animation:rainbow 3s linear infinite}'],
  ['Shimmer','background','shimmer','SHIMMER','@keyframes shimmer{to{background-position:-200% 0}}.shimmer{background:linear-gradient(110deg,#171923 35%,#62697a 50%,#171923 65%);background-size:200% 100%;animation:shimmer 1.4s linear infinite}'],
  ['Orbit','3d','orbit','ORBIT','@keyframes orbit{to{transform:rotate(360deg) translateX(42px) rotate(-360deg)}}.orbit{animation:orbit 2.2s linear infinite}'],
  ['Wobble','hover','wobble','WOBBLE','@keyframes wobble{0%,100%{transform:none}25%{transform:translateX(-12px) rotate(-5deg)}50%{transform:translateX(10px) rotate(4deg)}75%{transform:translateX(-5px) rotate(-2deg)}}.wobble{animation:wobble 1.2s ease-in-out infinite}'],
  ['Bounce In','entrance','bounce-in','BOUNCE IN','@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}20%{transform:scale(1.12)}40%{transform:scale(.88)}60%{opacity:1;transform:scale(1.04)}100%{transform:scale(1)}}.bounce-in{animation:bounceIn 1.5s ease-in-out infinite}'],
  ['Fade In Down','entrance','fade-in-down','FADE DOWN','@keyframes fadeInDown{from{opacity:0;transform:translateY(-70px)}to{opacity:1;transform:none}}.fade-in-down{animation:fadeInDown 1.3s ease-in-out infinite alternate}'],
  ['Fade In Up','entrance','fade-in-up','FADE UP','@keyframes fadeInUp{from{opacity:0;transform:translateY(70px)}to{opacity:1;transform:none}}.fade-in-up{animation:fadeInUp 1.3s ease-in-out infinite alternate}'],
  ['Fade In Left','entrance','fade-in-left','FADE LEFT','@keyframes fadeInLeft{from{opacity:0;transform:translateX(-70px)}to{opacity:1;transform:none}}.fade-in-left{animation:fadeInLeft 1.3s ease-in-out infinite alternate}'],
  ['Fade In Right','entrance','fade-in-right','FADE RIGHT','@keyframes fadeInRight{from{opacity:0;transform:translateX(70px)}to{opacity:1;transform:none}}.fade-in-right{animation:fadeInRight 1.3s ease-in-out infinite alternate}'],
  ['Flip In X','3d','flip-in-x','FLIP X','@keyframes flipInX{0%{transform:perspective(500px) rotateX(90deg);opacity:0}55%{transform:perspective(500px) rotateX(-12deg);opacity:1}100%{transform:perspective(500px) rotateX(0)}}.flip-in-x{animation:flipInX 1.5s ease-in-out infinite}'],
  ['Flip In Y','3d','flip-in-y','FLIP Y','@keyframes flipInY{0%{transform:perspective(500px) rotateY(90deg);opacity:0}55%{transform:perspective(500px) rotateY(-12deg);opacity:1}100%{transform:perspective(500px) rotateY(0)}}.flip-in-y{animation:flipInY 1.5s ease-in-out infinite}'],
  ['Jack In The Box','entrance','jack-in-the-box','JACK','@keyframes jackInTheBox{0%{opacity:0;transform:scale(.1) rotate(30deg);transform-origin:center bottom}50%{transform:rotate(-10deg)}70%{transform:rotate(3deg)}100%{opacity:1;transform:scale(1)}}.jack-in-the-box{animation:jackInTheBox 1.5s ease-in-out infinite}'],
  ['Light Speed In','entrance','light-speed-in','SPEED','@keyframes lightSpeedIn{0%{transform:translateX(100%) skewX(-30deg);opacity:0}60%{transform:skewX(20deg);opacity:1}80%{transform:skewX(-5deg)}100%{transform:none}}.light-speed-in{animation:lightSpeedIn 1.4s ease-in-out infinite}'],
  ['Roll In','entrance','roll-in','ROLL','@keyframes rollIn{0%{opacity:0;transform:translateX(-100%) rotate(-120deg)}100%{opacity:1;transform:none}}.roll-in{animation:rollIn 1.5s ease-in-out infinite}'],
  ['Rotate In Down Left','entrance','rotate-down-left','↙','@keyframes rotateInDownLeft{from{transform:rotate(-55deg);transform-origin:left bottom;opacity:0}to{transform:none;opacity:1}}.rotate-down-left{animation:rotateInDownLeft 1.5s ease-in-out infinite}'],
  ['Rotate In Down Right','entrance','rotate-down-right','↘','@keyframes rotateInDownRight{from{transform:rotate(55deg);transform-origin:right bottom;opacity:0}to{transform:none;opacity:1}}.rotate-down-right{animation:rotateInDownRight 1.5s ease-in-out infinite}'],
  ['Back In Down','entrance','back-in-down','BACK DOWN','@keyframes backInDown{0%{transform:translateY(-260px) scale(.7);opacity:.2}80%{transform:translateY(0) scale(.7);opacity:.8}100%{transform:scale(1);opacity:1}}.back-in-down{animation:backInDown 1.5s ease-in-out infinite}'],
  ['Back In Left','entrance','back-in-left','BACK LEFT','@keyframes backInLeft{0%{transform:translateX(-260px) scale(.7);opacity:.2}80%{transform:translateX(0) scale(.7);opacity:.8}100%{transform:scale(1);opacity:1}}.back-in-left{animation:backInLeft 1.5s ease-in-out infinite}'],
  ['Zoom In Down','entrance','zoom-in-down','ZOOM DOWN','@keyframes zoomInDown{0%{opacity:0;transform:scale(.1) translateY(-180px)}60%{opacity:1;transform:scale(.5) translateY(15px)}100%{transform:none}}.zoom-in-down{animation:zoomInDown 1.5s ease-in-out infinite}'],
  ['Hinge','hover','hinge','HINGE','@keyframes hinge{0%{transform:rotate(0);transform-origin:top left}25%{transform:rotate(70deg)}50%{transform:rotate(45deg)}75%{transform:rotate(70deg)}100%{transform:translateY(70px) rotate(0);opacity:0}}.hinge{animation:hinge 1.8s ease-in-out infinite}'],
  ['Rubber Band','hover','rubber-band','RUBBER','@keyframes rubberBand{0%,100%{transform:scale(1)}30%{transform:scaleX(1.3) scaleY(.7)}40%{transform:scaleX(.7) scaleY(1.3)}50%{transform:scaleX(1.15) scaleY(.85)}65%{transform:scaleX(.95) scaleY(1.05)}}.rubber-band{animation:rubberBand 1.2s ease-in-out infinite}'],
  ['Tada','hover','tada','TADA','@keyframes tada{0%,100%{transform:scale(1)}10%,20%{transform:scale(.9) rotate(-3deg)}30%,50%,70%,90%{transform:scale(1.1) rotate(3deg)}40%,60%,80%{transform:scale(1.1) rotate(-3deg)}}.tada{animation:tada 1.2s ease-in-out infinite}'],
  ['Back In Right','entrance','back-in-right','BACK RIGHT','@keyframes backInRight{0%{transform:translateX(260px) scale(.7);opacity:.2}80%{transform:translateX(0) scale(.7);opacity:.8}100%{transform:scale(1);opacity:1}}.back-in-right{animation:backInRight 1.5s ease-in-out infinite}'],
  ['Back In Up','entrance','back-in-up','BACK UP','@keyframes backInUp{0%{transform:translateY(260px) scale(.7);opacity:.2}80%{transform:translateY(0) scale(.7);opacity:.8}100%{transform:scale(1);opacity:1}}.back-in-up{animation:backInUp 1.5s ease-in-out infinite}']
];

const extraStyle = document.createElement('style');
extraStyle.textContent = `.extra-demo{width:145px;height:78px;border-radius:15px;display:grid;place-items:center;font-size:13px;font-weight:900;letter-spacing:1px;background:linear-gradient(135deg,#7c3aed,#2563eb);box-shadow:0 18px 45px #0009;will-change:transform,opacity,filter}.extra-demo.skeleton,.extra-demo.shimmer{width:180px}.extra-demo.rainbow{width:180px}.extra-demo.ping{width:62px;height:62px;border-radius:50%}.extra-demo.heartbeat{width:72px;height:72px;border-radius:50%;font-size:30px;background:linear-gradient(135deg,#f43f5e,#fb7185)}.extra-demo.orbit{width:18px;height:18px;border-radius:50%;background:#22d3ee;box-shadow:0 0 22px #22d3ee}.extra-demo.glitch,.extra-demo.reveal{background:transparent;box-shadow:none;font-size:25px}.extra-demo.rotate-down-left,.extra-demo.rotate-down-right{font-size:34px}.extra-demo.neon{border:1px solid #8b5cf6}.preview .replay{position:absolute;right:10px;bottom:10px;border:1px solid #303544;background:#12151d;color:#cdd1db;border-radius:8px;padding:5px 8px;font-size:10px;cursor:pointer;opacity:0;transition:.2s}.preview{position:relative}.card:hover .replay{opacity:1}@media(prefers-reduced-motion:reduce){.extra-demo{animation:none!important}}`;
document.head.appendChild(extraStyle);

extraAnimations.forEach(([name, category, cls, label, code], index) => {
  const card = document.createElement('article');
  card.className = 'card new-animation';
  card.dataset.category = category;
  card.dataset.name = name;
  card.innerHTML = `<div class="preview"><div class="demo extra-demo ${cls}">${label}</div><button class="replay" type="button" aria-label="Play ${name}">↻ Play</button></div><div class="card-info"><div><span class="new-badge">NEW</span><h2>${name}</h2><small>${category} · #${index + 1}</small></div><button class="copy" data-code="${code.replace(/"/g,'&quot;')}">Copy CSS</button></div>`;
  grid.appendChild(card);
});

function replay(el){
  const animation = getComputedStyle(el).animation;
  el.style.animation='none';
  void el.offsetWidth;
  el.style.animation=animation;
}

function render(){
  const term=search.value.trim().toLowerCase();
  const cards=[...document.querySelectorAll('.card')];
  let visible=0;
  cards.forEach(card=>{
    const show=(activeFilter==='all'||card.dataset.category===activeFilter)&&(card.dataset.name.toLowerCase().includes(term)||card.dataset.category.includes(term));
    card.style.display=show?'':'none';
    if(show)visible++;
  });
  empty.style.display=visible?'none':'block';
}

search.addEventListener('input',render);
filters.forEach(button=>button.addEventListener('click',()=>{
  filters.forEach(b=>b.classList.remove('active'));
  button.classList.add('active');
  activeFilter=button.dataset.filter;
  render();
}));

grid.addEventListener('click',async event=>{
  const replayButton=event.target.closest('.replay');
  if(replayButton){replay(replayButton.parentElement.querySelector('.extra-demo'));return;}
  const demo=event.target.closest('.extra-demo');
  if(demo){replay(demo);return;}
  const button=event.target.closest('.copy');
  if(!button)return;
  try{await navigator.clipboard.writeText(button.dataset.code);toast.textContent='CSS berhasil disalin ✓'}catch{toast.textContent='Tidak dapat menyalin CSS'}
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'),1800);
});

render();