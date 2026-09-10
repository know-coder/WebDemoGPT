const search = document.getElementById('search');
const filters = document.querySelectorAll('.filter');
const grid = document.getElementById('animationGrid');
const empty = document.getElementById('empty');
const toast = document.getElementById('toast');

const extraNames = ["Blob Morph", "Liquid Blob", "Circle Bounce", "Triangle Spin", "Star Twinkle", "Heart Beat", "Diamond Pulse", "Pentagon Rotate", "Hexagon Float", "Octagon Spin", "Ring Pulse", "Double Ring", "Orbiting Dot", "Planet Orbit", "Satellite Orbit", "Comet Trail", "Particle Burst", "Particle Fountain", "Snowfall", "Rainfall", "Fire Flicker", "Smoke Drift", "Wave Ring", "Expanding Circle", "Contracting Circle", "Radar Sweep", "Clock Tick", "Pendulum", "Metronome", "Spring", "Magnetic Pull", "Magnetic Repel", "Swirl", "Vortex", "Tornado", "Spiral", "DNA Helix", "Infinity Loop", "Figure Eight", "Sine Wave", "Cosine Wave", "Path Follow", "Marquee", "Elastic Line", "Stretch Line", "Rubber Circle", "Squish", "Squeeze", "Melt", "Jelly Blob", "Liquid Drop", "Water Drop", "Droplet Bounce", "Splash", "Ripple Rings", "Wave Ball", "Floating Bubble", "Bubble Pop", "Balloon", "Cloud Drift", "Sunrise", "Sunset", "Moon Orbit", "Star Orbit", "Galaxy", "Planet Spin", "Eclipse", "Solar Flare", "Lightning", "Spark", "Fireworks", "Confetti", "Snowflake Spin", "Leaf Fall", "Wind Leaf", "Butterfly", "Bird Flap", "Fish Swim", "Jellyfish", "Petal Fall", "Octopus Wave", "Eye Blink", "Eye Look", "Smiley Bounce", "Emoji Spin", "Arrow Bounce", "Arrow Orbit", "Chevron Slide", "Plus Morph", "Cross Spin", "Menu Morph", "Hamburger Transform", "Play Pulse", "Pause Pulse", "Volume Wave", "Bell Ring", "Lock Unlock", "Check Draw", "X Draw", "Search Pulse"];
const extraCategories = ["entrance", "entrance", "entrance", "3d", "entrance", "entrance", "loading", "entrance", "entrance", "3d", "loading", "entrance", "3d", "3d", "3d", "entrance", "entrance", "entrance", "background", "background", "background", "background", "hover", "entrance", "entrance", "loading", "loading", "entrance", "entrance", "entrance", "entrance", "entrance", "entrance", "3d", "3d", "3d", "3d", "3d", "3d", "hover", "hover", "entrance", "hover", "entrance", "entrance", "entrance", "entrance", "entrance", "entrance", "entrance", "entrance", "entrance", "entrance", "entrance", "entrance", "loading", "hover", "entrance", "entrance", "entrance", "background", "background", "background", "3d", "3d", "3d", "3d", "3d", "entrance", "background", "background", "background", "background", "background", "background", "background", "background", "background", "background", "hover", "hover", "hover", "hover", "3d", "hover", "3d", "hover", "hover", "3d", "hover", "hover", "loading", "loading", "hover", "hover", "hover", "hover", "entrance", "loading"];
const extraSymbols = ["●", "◆", "▲", "★", "♥", "◈", "⬟", "⬢", "✦", "◎", "◉", "•", "☄", "☁", "✺", "✧", "❄", "💧", "☀", "☾", "⚡", "✹", "∞", "⌁", "◌", "◍", "●", "◒", "◓", "↗", "→", "＋", "×", "☰", "▶", "Ⅱ", "♬", "♢", "✓", "✕", "⌕"];
const extraShapes = ["circle", "diamond", "triangle", "star", "heart", "hex", "pentagon", "hexagon", "starburst", "ring", "double-ring", "dot", "comet", "cloud", "burst", "spark", "snowflake", "drop", "sun", "moon", "blob", "line", "infinity", "wave", "orbit", "bubble", "ball", "leaf", "butterfly", "icon"];
const shapeBase = {"circle":"border-radius:50%;width:76px;height:76px;","diamond":"width:70px;height:70px;transform:rotate(45deg);","triangle":"width:0;height:0;border-left:38px solid transparent;border-right:38px solid transparent;border-bottom:70px solid #8b5cf6;background:transparent!important;box-shadow:none!important;","star":"width:78px;height:78px;clip-path:polygon(50% 0,61% 35%,98% 35%,68% 57%,79% 95%,50% 72%,21% 95%,32% 57%,2% 35%,39% 35%);","heart":"width:72px;height:72px;border-radius:50%;font-size:42px;background:transparent!important;box-shadow:none!important;","hex":"width:80px;height:70px;clip-path:polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%);","pentagon":"width:78px;height:78px;clip-path:polygon(50% 0,100% 38%,82% 100%,18% 100%,0 38%);","hexagon":"width:80px;height:70px;clip-path:polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%);","starburst":"width:78px;height:78px;clip-path:polygon(50% 0,60% 25%,85% 10%,75% 35%,100% 50%,75% 60%,90% 85%,65% 75%,50% 100%,40% 75%,15% 90%,25% 65%,0 50%,25% 40%,10% 15%,35% 25%);","ring":"width:78px;height:78px;border:7px solid #8b5cf6;border-radius:50%;background:transparent!important;box-shadow:none;","double-ring":"width:72px;height:72px;border:5px solid #8b5cf6;border-radius:50%;background:transparent!important;box-shadow:0 0 0 10px #8b5cf644,0 0 0 16px #8b5cf622;","dot":"width:22px;height:22px;border-radius:50%;","comet":"width:24px;height:24px;border-radius:50%;box-shadow:0 0 0 12px #8b5cf622,0 0 35px #8b5cf6;","cloud":"width:95px;height:48px;border-radius:40px;","burst":"width:78px;height:78px;border-radius:50%;","spark":"width:18px;height:60px;border-radius:10px;","snowflake":"background:transparent!important;box-shadow:none!important;font-size:52px;","drop":"width:58px;height:72px;border-radius:50% 50% 55% 55%;","sun":"width:76px;height:76px;border-radius:50%;","moon":"width:72px;height:72px;border-radius:50%;box-shadow:14px -8px 0 0 #08090d;","blob":"width:92px;height:78px;border-radius:58% 42% 70% 30%/45% 55% 45% 55%;","line":"width:110px;height:10px;border-radius:999px;","infinity":"background:transparent!important;box-shadow:none!important;font-size:62px;","wave":"background:transparent!important;box-shadow:none!important;font-size:54px;","orbit":"width:26px;height:26px;border-radius:50%;box-shadow:0 0 25px #8b5cf6;","bubble":"width:58px;height:58px;border-radius:50%;background:transparent!important;border:2px solid #8b5cf6;box-shadow:inset 10px 10px 20px #8b5cf633;","ball":"width:62px;height:62px;border-radius:50%;","leaf":"width:72px;height:42px;border-radius:100% 0 100% 0;transform:rotate(-35deg);","butterfly":"background:transparent!important;box-shadow:none!important;font-size:48px;","icon":"background:transparent!important;box-shadow:none!important;font-size:48px;"};

function makeExtraCard(name, index) {
  const number = String(index + 1).padStart(2, '0');
  const cls = `extra-${number}`;
  const keyframe = `webDemoExtra${number}`;
  const category = extraCategories[index];
  const shape = extraShapes[index % extraShapes.length];
  const symbol = extraSymbols[index % extraSymbols.length];
  const duration = (1.15 + (index % 6) * .16).toFixed(2);
  const motion = extraMotion(index);
  const shapeCss = shapeBase[shape] || '';
  const css = `.${cls}{animation:${keyframe} ${duration}s ease-in-out infinite;transform-origin:center;display:grid;place-items:center;background:linear-gradient(135deg,#7c3aed,#4f46e5);box-shadow:0 14px 35px #0008;${shapeCss}}@keyframes ${keyframe}{${motion}}`;
  const article = document.createElement('article');
  article.className = 'card';
  article.dataset.category = category;
  article.dataset.name = name;
  article.innerHTML = `<div class="preview extra-preview"><div class="extra-visual ${cls}">${symbol}</div></div><div class="card-info"><div><h2>${name}</h2><small>${category}</small></div><button class="copy">Copy CSS</button></div>`;
  article.querySelector('.copy').dataset.code = css;
  return article;
}

function extraMotion(index) {
  switch (index % 20) {
    case 0:return '0%,100%{transform:scale(1) rotate(0);border-radius:35% 65% 60% 40%}50%{transform:scale(1.15) rotate(12deg);border-radius:65% 35% 40% 60%}';
    case 1:return '0%,100%{transform:translateY(12px)}50%{transform:translateY(-28px)}';
    case 2:return '0%{transform:translate(-45px,10px) rotate(-20deg)}50%{transform:translate(0,-25px) rotate(8deg)}100%{transform:translate(45px,10px) rotate(20deg)}';
    case 3:return '0%,100%{transform:rotate(0) scale(1)}50%{transform:rotate(180deg) scale(1.12)}';
    case 4:return '0%,100%{opacity:.35;transform:scale(.75)}50%{opacity:1;transform:scale(1.25)}';
    case 5:return '0%,100%{transform:rotate(-12deg) scale(1)}25%{transform:rotate(12deg) scale(1.18)}50%{transform:rotate(-8deg) scale(.9)}75%{transform:rotate(8deg) scale(1.12)}';
    case 6:return '0%,100%{transform:translateX(0)}50%{transform:translateX(65px)}';
    case 7:return '0%{transform:rotate(0) translateX(0)}100%{transform:rotate(360deg) translateX(42px) rotate(-360deg)}';
    case 8:return '0%,100%{transform:rotate(0) skew(0)}50%{transform:rotate(10deg) skew(-12deg,5deg)}';
    case 9:return '0%{transform:scale(.2);opacity:0}45%{transform:scale(1.2);opacity:1}70%{transform:scale(.9)}100%{transform:scale(1);opacity:.1}';
    case 10:return '0%,100%{transform:rotateX(0) rotateY(0)}50%{transform:rotateX(35deg) rotateY(160deg) scale(1.12)}';
    case 11:return '0%{transform:translateY(-90px);opacity:0}35%{opacity:1}100%{transform:translateY(90px);opacity:.1}';
    case 12:return '0%{transform:rotate(0) translateX(-50px)}50%{transform:rotate(180deg) translateX(10px)}100%{transform:rotate(360deg) translateX(50px)}';
    case 13:return '0%,100%{transform:scaleX(1)}50%{transform:scaleX(1.45)}';
    case 14:return '0%,100%{transform:translateY(0) rotate(0)}25%{transform:translateY(-20px) rotate(-8deg)}75%{transform:translateY(8px) rotate(8deg)}';
    case 15:return '0%{clip-path:circle(10% at 50% 50%);opacity:.2}100%{clip-path:circle(70% at 50% 50%);opacity:1}';
    case 16:return '0%,100%{filter:hue-rotate(0deg) brightness(1)}50%{filter:hue-rotate(90deg) brightness(1.5)}';
    case 17:return '0%,100%{transform:rotate(0) scale(1)}30%{transform:rotate(-20deg) scale(1.15)}60%{transform:rotate(20deg) scale(1.15)}';
    case 18:return '0%{transform:translateX(-70px) rotate(-45deg);opacity:0}50%{opacity:1}100%{transform:translateX(70px) rotate(45deg);opacity:.25}';
    default:return '0%,100%{transform:translateY(0) scaleY(1)}50%{transform:translateY(-22px) scaleY(.72)}';
  }
}

for (let i = 0; i < extraNames.length; i++) grid.appendChild(makeExtraCard(extraNames[i], i));

const count = document.querySelector('.gallery-title strong');
if (count) count.textContent = `${112 + extraNames.length} Animations`;

const cards = document.querySelectorAll('.card');

// Negative delays make all 212 previews immediately active, but at different phases.
cards.forEach((card, index) => {
  const delay = -((index * 0.137) % 3.0).toFixed(2);
  card.style.setProperty('--animation-delay', `${delay}s`);
});

const staggerStyle = document.createElement('style');
staggerStyle.textContent = `.preview>*{animation-delay:var(--animation-delay,0s)}.preview .dots i{animation-delay:var(--animation-delay,0s)}.preview .dots i:nth-child(2){animation-delay:calc(var(--animation-delay,0s) + .15s)}.preview .dots i:nth-child(3){animation-delay:calc(var(--animation-delay,0s) + .3s)}.extra-preview{background:radial-gradient(circle at center,#191c26,#0c0d12 70%)}.extra-visual{color:#fff;font-weight:900;line-height:1}`;
document.head.appendChild(staggerStyle);

let activeFilter = 'all';

function filterCards(){
  const query = search.value.trim().toLowerCase();
  let visible = 0;
  cards.forEach(card => {
    const name = (card.dataset.name || '').toLowerCase();
    const category = (card.dataset.category || '').toLowerCase();
    const show = (activeFilter === 'all' || category === activeFilter) && (!query || name.includes(query) || category.includes(query));
    card.style.display = show ? '' : 'none';
    if(show) visible++;
  });
  empty.style.display = visible ? 'none' : 'block';
}

filters.forEach(button => {
  button.addEventListener('click', () => {
    filters.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    activeFilter = button.dataset.filter;
    filterCards();
  });
});

search.addEventListener('input', filterCards);

document.querySelectorAll('.copy').forEach(button => {
  button.addEventListener('click', async () => {
    const code = button.dataset.code || '';
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      const area = document.createElement('textarea');
      area.value = code;
      document.body.appendChild(area);
      area.select();
      document.execCommand('copy');
      area.remove();
    }
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 1600);
  });
});

filterCards();
