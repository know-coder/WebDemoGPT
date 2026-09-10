const search = document.getElementById('search');
const filters = document.querySelectorAll('.filter');
const grid = document.getElementById('animationGrid');
const empty = document.getElementById('empty');
const toast = document.getElementById('toast');
let activeFilter = 'all';

// 40 tambahan animasi
const extraAnimations = [
  ['Zoom In','entrance','zoom-in','Zoom',' .zoom-in { animation: zoomIn 1s ease infinite alternate; } @keyframes zoomIn { from { transform: scale(.65); opacity:.3 } to { transform:scale(1); opacity:1 } }'],
  ['Slide Left','entrance','slide-left','Left',' .slide-left { animation: slideLeft 1.3s ease-in-out infinite alternate; } @keyframes slideLeft { from { transform:translateX(35px); opacity:.2 } to { transform:translateX(0); opacity:1 } }'],
  ['Slide Right','entrance','slide-right','Right',' .slide-right { animation: slideRight 1.3s ease-in-out infinite alternate; } @keyframes slideRight { from { transform:translateX(-35px); opacity:.2 } to { transform:translateX(0); opacity:1 } }'],
  ['Rotate In','entrance','rotate-in','Rotate',' .rotate-in { animation: rotateIn 1.2s ease-in-out infinite alternate; } @keyframes rotateIn { from { transform:rotate(-45deg) scale(.7); opacity:.2 } to { transform:rotate(0) scale(1); opacity:1 } }'],
  ['Flip','3d','flip','Flip',' .flip:hover { animation: flip .8s ease; } @keyframes flip { 50% { transform:rotateY(180deg); } }'],
  ['Swing','hover','swing','Swing',' .swing:hover { animation:swing .8s ease; } @keyframes swing { 20% { transform:rotate(12deg) } 50% { transform:rotate(-8deg) } 80% { transform:rotate(5deg) } }'],
  ['Jello','hover','jello','Jello',' .jello:hover { animation:jello .8s ease; } @keyframes jello { 30% { transform:skewX(-12deg) skewY(-12deg) } 60% { transform:skewX(8deg) skewY(8deg) } }'],
  ['Heartbeat','hover','heartbeat','Beat',' .heartbeat { animation:heartbeat 1.2s ease infinite; } @keyframes heartbeat { 15% { transform:scale(1.18) } 30% { transform:scale(1) } 45% { transform:scale(1.12) } }'],
  ['Ping','loading','ping','PING',' .ping { animation:ping 1.4s ease-out infinite; } @keyframes ping { 75%,100% { transform:scale(1.5); opacity:0 } }'],
  ['Skeleton','loading','skeleton','Loading',' .skeleton { background:linear-gradient(90deg,#20232d 25%,#383c48 50%,#20232d 75%); background-size:200%; animation:skeleton 1.4s linear infinite; } @keyframes skeleton { to { background-position:-200% } }'],
  ['Elastic','entrance','elastic','Elastic',' .elastic { animation:elastic 1.3s ease infinite; } @keyframes elastic { 0%,100% { transform:scaleX(1) } 40% { transform:scaleX(1.15) scaleY(.9) } 70% { transform:scaleX(.95) } }'],
  ['Float','hover','float','Float',' .float { animation:float 2s ease-in-out infinite; } @keyframes float { 50% { transform:translateY(-16px) } }'],
  ['Neon Border','hover','neon','Neon',' .neon:hover { box-shadow:0 0 8px #8b5cf6,0 0 25px #8b5cf6; }'],
  ['Blur In','entrance','blur-in','Blur',' .blur-in { animation:blurIn 1.2s ease infinite alternate; } @keyframes blurIn { from { filter:blur(8px); opacity:.2 } to { filter:blur(0); opacity:1 } }'],
  ['Glitch','text','glitch','GLITCH',' .glitch { animation:glitch .7s steps(2) infinite; } @keyframes glitch { 25% { transform:translate(3px,-2px) } 50% { transform:translate(-3px,2px) } }'],
  ['Text Reveal','text','reveal','REVEAL',' .reveal { animation:reveal 2s ease infinite; } @keyframes reveal { from { clip-path:inset(0 100% 0 0) } to { clip-path:inset(0 0 0 0) } }'],
  ['Rainbow','background','rainbow','Color',' .rainbow { background:linear-gradient(90deg,#7c3aed,#ec4899,#f59e0b,#22c55e,#7c3aed); background-size:300%; animation:rainbow 4s linear infinite; } @keyframes rainbow { to { background-position:300% } }'],
  ['Shimmer','background','shimmer','Shimmer',' .shimmer { background:linear-gradient(110deg,#171923 35%,#353847 50%,#171923 65%); background-size:200%; animation:shimmer 1.5s linear infinite; } @keyframes shimmer { to { background-position:-200% } }'],
  ['Orbit','3d','orbit','Orbit',' .orbit { animation:orbit 2.5s linear infinite; } @keyframes orbit { to { transform:rotate(360deg) translateX(28px) rotate(-360deg) } }'],
  ['Wobble','hover','wobble','Wobble',' .wobble:hover { animation:wobble .8s ease-in-out; } @keyframes wobble { 25% { transform:rotate(-5deg) translateX(-8px) } 75% { transform:rotate(5deg) translateX(8px) } }'],
  ['Bounce In','entrance','bounce-in','Bounce',' .bounce-in { animation:bounceIn 1.4s ease infinite; } @keyframes bounceIn { 0%,20%,40%,60%,80%,100% { animation-timing-function:cubic-bezier(.215,.61,.355,1) } 0% { opacity:0; transform:scale3d(.3,.3,.3) } 20% { transform:scale3d(1.1,1.1,1.1) } 40% { transform:scale3d(.9,.9,.9) } 60% { opacity:1; transform:scale3d(1.03,1.03,1.03) } 100% { transform:scale3d(1,1,1) } }'],
  ['Fade In Down','entrance','fade-in-down','Down',' .fade-in-down { animation:fadeInDown 1.2s ease infinite alternate; } @keyframes fadeInDown { from { opacity:0; transform:translate3d(0,-100%,0) } to { opacity:1; transform:none } }'],
  ['Fade In Up','entrance','fade-in-up','Up',' .fade-in-up { animation:fadeInUp 1.2s ease infinite alternate; } @keyframes fadeInUp { from { opacity:0; transform:translate3d(0,100%,0) } to { opacity:1; transform:none } }'],
  ['Fade In Left','entrance','fade-in-left','Left',' .fade-in-left { animation:fadeInLeft 1.2s ease infinite alternate; } @keyframes fadeInLeft { from { opacity:0; transform:translate3d(-100%,0,0) } to { opacity:1; transform:none } }'],
  ['Fade In Right','entrance','fade-in-right','Right',' .fade-in-right { animation:fadeInRight 1.2s ease infinite alternate; } @keyframes fadeInRight { from { opacity:0; transform:translate3d(100%,0,0) } to { opacity:1; transform:none } }'],
  ['Flip In X','3d','flip-in-x','FLIP X',' .flip-in-x { animation:flipInX 1.5s ease infinite; backface-visibility:visible!important; } @keyframes flipInX { from { transform:perspective(400px) rotateX(90deg); opacity:0 } 40% { transform:perspective(400px) rotateX(-20deg) } 60% { transform:perspective(400px) rotateX(10deg); opacity:1 } 80% { transform:perspective(400px) rotateX(-5deg) } to { transform:perspective(400px) rotateX(0) } }'],
  ['Flip In Y','3d','flip-in-y','FLIP Y',' .flip-in-y { animation:flipInY 1.5s ease infinite; backface-visibility:visible!important; } @keyframes flipInY { from { transform:perspective(400px) rotateY(90deg); opacity:0 } 40% { transform:perspective(400px) rotateY(-20deg) } 60% { transform:perspective(400px) rotateY(10deg); opacity:1 } 80% { transform:perspective(400px) rotateY(-5deg) } to { transform:perspective(400px) rotateY(0) } }'],
  ['Jack In The Box','entrance','jack-in-the-box','JACK',' .jack-in-the-box { animation:jackInTheBox 1.5s ease infinite; transform-origin:center bottom; } @keyframes jackInTheBox { from { opacity:0; transform:scale(.1) rotate(30deg); transform-origin:center bottom } 50% { transform:rotate(-10deg) } 70% { transform:rotate(3deg) } to { opacity:1; transform:scale(1) } }'],
  ['Light Speed In','entrance','light-speed-in','SPEED',' .light-speed-in { animation:lightSpeedIn 1.3s ease infinite; } @keyframes lightSpeedIn { from { transform:translate3d(100%,0,0) skewX(-30deg); opacity:0 } 60% { transform:skewX(20deg); opacity:1 } 80% { transform:skewX(-5deg) } to { transform:none } }'],
  ['Roll In','entrance','roll-in','ROLL',' .roll-in { animation:rollIn 1.5s ease infinite; } @keyframes rollIn { from { opacity:0; transform:translate3d(-100%,0,0) rotate(-120deg) } to { opacity:1; transform:none } }'],
  ['Rotate In Down Left','entrance','rotate-down-left','↙',' .rotate-down-left { animation:rotateInDownLeft 1.5s ease infinite; transform-origin:left bottom; } @keyframes rotateInDownLeft { from { transform:rotate(-45deg); opacity:0 } to { transform:none; opacity:1 } }'],
  ['Rotate In Down Right','entrance','rotate-down-right','↘',' .rotate-down-right { animation:rotateInDownRight 1.5s ease infinite; transform-origin:right bottom; } @keyframes rotateInDownRight { from { transform:rotate(45deg); opacity:0 } to { transform:none; opacity:1 } }'],
  ['Back In Down','entrance','back-in-down','BACK',' .back-in-down { animation:backInDown 1.5s ease infinite; } @keyframes backInDown { 0% { transform:translateY(-1200px) scale(.7); opacity:.7 } 80% { transform:translateY(0) scale(.7); opacity:.7 } 100% { transform:scale(1); opacity:1 } }'],
  ['Back In Left','entrance','back-in-left','LEFT',' .back-in-left { animation:backInLeft 1.5s ease infinite; } @keyframes backInLeft { 0% { transform:translateX(-1200px) scale(.7); opacity:.7 } 80% { transform:translateX(0) scale(.7); opacity:.7 } 100% { transform:scale(1); opacity:1 } }'],
  ['Zoom In Down','entrance','zoom-in-down','ZOOM',' .zoom-in-down { animation:zoomInDown 1.5s ease infinite; } @keyframes zoomInDown { 0% { opacity:0; transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0); animation-timing-function:cubic-bezier(.55,.055,.675,.19) } 60% { opacity:1; transform:scale3d(.475,.475,.475) translate3d(0,60px,0); animation-timing-function:cubic-bezier(.175,.885,.32,1) } 100% { transform:none } }'],
  ['Hinge','hover','hinge','HINGE',' .hinge:hover { animation:hinge 1.5s ease; transform-origin:top left; } @keyframes hinge { 0% { transform:rotate(0); transform-origin:top left; animation-timing-function:ease-in-out } 20%,60% { transform:rotate(80deg); transform-origin:top left; animation-timing-function:ease-in-out } 40%,80% { transform:rotate(60deg); transform-origin:top left; animation-timing-function:ease-in-out; opacity:1 } 100% { transform:translate3d(0,700px,0); opacity:0 } }'],
  ['Rubber Band','hover','rubber-band','RUBBER',' .rubber-band:hover { animation:rubberBand 1s ease; } @keyframes rubberBand { 0% { transform:scale3d(1,1,1) } 30% { transform:scale3d(1.25,.75,1) } 40% { transform:scale3d(.75,1.25,1) } 50% { transform:scale3d(1.15,.85,1) } 65% { transform:scale3d(.95,1.05,1) } 75% { transform:scale3d(1.05,.95,1) } 100% { transform:scale3d(1,1,1) } }'],
  ['Tada','hover','tada','TADA',' .tada:hover { animation:tada 1s ease; } @keyframes tada { 0% { transform:scale3d(1,1,1) } 10%,20% { transform:scale3d(.9,.9,.9) rotate(-3deg) } 30%,50%,70%,90% { transform:scale3d(1.1,1.1,1.1) rotate(3deg) } 40%,60%,80% { transform:scale3d(1.1,1.1,1.1) rotate(-3deg) } 100% { transform:scale3d(1,1,1) } }'],
  ['Jack In The Box','entrance','jack-in-the-box-2','JACK',' .jack-in-the-box-2 { animation:jackInTheBox2 1.5s ease infinite; transform-origin:center bottom; } @keyframes jackInTheBox2 { 0% { opacity:0; transform:scale(.1) rotate(30deg) } 50% { transform:rotate(-10deg) } 70% { transform:rotate(3deg) } 100% { opacity:1; transform:scale(1) } }']
];

const style = document.createElement('style');
style.textContent = `
.zoom-in,.slide-left,.slide-right,.rotate-in,.flip,.swing,.jello,.heartbeat,.ping,.skeleton,.elastic,.float,.neon,.blur-in,.glitch,.reveal,.rainbow,.shimmer,.orbit,.wobble,.bounce-in,.fade-in-down,.fade-in-up,.fade-in-left,.fade-in-right,.flip-in-x,.flip-in-y,.jack-in-the-box,.light-speed-in,.roll-in,.rotate-down-left,.rotate-down-right,.back-in-down,.back-in-left,.zoom-in-down,.hinge,.rubber-band,.tada,.jack-in-the-box-2{will-change:transform,opacity,filter}
.zoom-in,.slide-left,.slide-right,.rotate-in,.elastic,.blur-in,.bounce-in,.fade-in-down,.fade-in-up,.fade-in-left,.fade-in-right,.jack-in-the-box,.light-speed-in,.roll-in,.rotate-down-left,.rotate-down-right,.back-in-down,.back-in-left,.zoom-in-down,.jack-in-the-box-2{background:linear-gradient(135deg,#06b6d4,#6366f1)}
.flip,.swing,.jello,.float,.neon,.wobble,.hinge,.rubber-band,.tada{background:linear-gradient(135deg,#ec4899,#8b5cf6)}
.heartbeat,.ping{background:linear-gradient(135deg,#f43f5e,#f97316)}
.skeleton,.shimmer{width:160px;height:55px;border-radius:12px}
.ping{width:65px;height:65px;border-radius:50%;display:grid;place-items:center}
.glitch,.reveal,.flip-in-x,.flip-in-y{font-size:28px;font-weight:900;letter-spacing:3px}
.rainbow{width:150px;height:65px;border-radius:14px;display:grid;place-items:center;font-weight:800}
.orbit{width:45px;height:45px;border-radius:50%;background:#22d3ee;box-shadow:0 0 25px #22d3ee}
`;
document.head.appendChild(style);

extraAnimations.forEach(([name, category, cls, label, code]) => {
  const card = document.createElement('article');
  card.className = 'card';
  card.dataset.category = category;
  card.dataset.name = name;
  card.innerHTML = `<div class="preview"><div class="demo ${cls}">${label}</div></div><div class="card-info"><div><h2>${name}</h2><small>${category}</small></div><button class="copy" data-code="${code.trim()}">Copy CSS</button></div>`;
  grid.appendChild(card);
});

function render() {
  const term = search.value.trim().toLowerCase();
  const cards = [...document.querySelectorAll('.card')];
  let visible = 0;
  cards.forEach(card => {
    const matchesFilter = activeFilter === 'all' || card.dataset.category === activeFilter;
    const matchesSearch = card.dataset.name.toLowerCase().includes(term) || card.dataset.category.includes(term);
    const show = matchesFilter && matchesSearch;
    card.style.display = show ? '' : 'none';
    if (show) visible++;
  });
  empty.style.display = visible ? 'none' : 'block';
}

search.addEventListener('input', render);
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(b => b.classList.remove('active'));
  button.classList.add('active');
  activeFilter = button.dataset.filter;
  render();
}));

grid.addEventListener('click', async (event) => {
  const button = event.target.closest('.copy');
  if (!button) return;
  try {
    await navigator.clipboard.writeText(button.dataset.code);
    toast.textContent = 'CSS berhasil disalin ✓';
  } catch {
    toast.textContent = 'Tidak dapat menyalin CSS';
  }
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1800);
});

render();