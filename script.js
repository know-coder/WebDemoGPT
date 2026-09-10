const search = document.getElementById('search');
const filters = document.querySelectorAll('.filter');
const grid = document.getElementById('animationGrid');
const empty = document.getElementById('empty');
const toast = document.getElementById('toast');
let activeFilter = 'all';

// 20 tambahan animasi
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
  ['Wobble','hover','wobble','Wobble',' .wobble:hover { animation:wobble .8s ease-in-out; } @keyframes wobble { 25% { transform:rotate(-5deg) translateX(-8px) } 75% { transform:rotate(5deg) translateX(8px) } }']
];

const style = document.createElement('style');
style.textContent = `
.zoom-in,.slide-left,.slide-right,.rotate-in,.flip,.swing,.jello,.heartbeat,.ping,.skeleton,.elastic,.float,.neon,.blur-in,.glitch,.reveal,.rainbow,.shimmer,.orbit,.wobble{will-change:transform,opacity,filter}
.zoom-in,.slide-left,.slide-right,.rotate-in,.elastic,.blur-in{background:linear-gradient(135deg,#06b6d4,#6366f1)}
.flip,.swing,.jello,.float,.neon,.wobble{background:linear-gradient(135deg,#ec4899,#8b5cf6)}
.heartbeat,.ping{background:linear-gradient(135deg,#f43f5e,#f97316)}
.skeleton,.shimmer{width:160px;height:55px;border-radius:12px}
.ping{width:65px;height:65px;border-radius:50%;display:grid;place-items:center}
.glitch,.reveal{font-size:28px;font-weight:900;letter-spacing:3px}
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