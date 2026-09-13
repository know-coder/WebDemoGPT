const search = document.getElementById('search');
const filters = document.querySelectorAll('.filter');
const grid = document.getElementById('animationGrid');
const empty = document.getElementById('empty');
const toast = document.getElementById('toast');

/*
 * WebDemoGPT — CSS-only visual rebuild
 * All generated previews are made from HTML elements + CSS.
 * No emoji, icon glyph, Unicode shape or static placeholder is used.
 */
const names = [
  'Blob Morph','Liquid Blob','Circle Bounce','Triangle Spin','Star Twinkle','Heart Beat','Diamond Pulse','Pentagon Rotate','Hexagon Float','Octagon Spin',
  'Ring Pulse','Double Ring','Orbiting Dot','Planet Orbit','Satellite Orbit','Comet Trail','Particle Burst','Particle Fountain','Snowfall','Rainfall',
  'Fire Flicker','Smoke Drift','Wave Ring','Expanding Circle','Contracting Circle','Radar Sweep','Clock Tick','Pendulum','Metronome','Spring',
  'Magnetic Pull','Magnetic Repel','Swirl','Vortex','Tornado','Spiral','DNA Helix','Infinity Loop','Figure Eight','Sine Wave',
  'Cosine Wave','Path Follow','Marquee','Elastic Line','Stretch Line','Rubber Circle','Squish','Squeeze','Melt','Jelly Blob',
  'Liquid Drop','Water Drop','Droplet Bounce','Splash','Ripple Rings','Wave Ball','Floating Bubble','Bubble Pop','Balloon','Cloud Drift',
  'Sunrise','Sunset','Moon Orbit','Star Orbit','Galaxy','Planet Spin','Eclipse','Solar Flare','Lightning','Spark',
  'Fireworks','Confetti Burst','Snowflake Spin','Leaf Fall','Wind Leaf','Butterfly Flight','Bird Flap','Fish Swim','Jellyfish Drift','Petal Fall',
  'Octopus Wave','Eye Blink','Eye Look','Arrow Bounce','Arrow Orbit','Chevron Slide','Plus Morph','Cross Spin','Menu Morph','Hamburger Transform',
  'Play Pulse','Pause Pulse','Volume Wave','Bell Ring','Lock Unlock','Check Draw','X Draw','Search Pulse','Cascade','Wave Collapse',
  'Wave Expand','Cube Roll','Cube Flip','Cube Float','Prism Turn','Prism Tilt','Orbit Spin','Orbit Reverse','Core Pulse','Core Burst',
  'Ripple Pulse','Ripple Expand','Ripple Contract','Rotating Ring','Double Pulse','Triple Pulse','Soft Bounce','Heavy Bounce','Gravity Drop','Gravity Return',
  'Pendulum Swing','Side Swing','Wobble','Vibrate','Tremor','Rubber Band','Rubber Stretch','Elastic Pop','Vector Shift','Diagonal Drift',
  'Zigzag','Figure Loop','Infinity Spin','Helix Twist','Helix Rise','Spiral In','Spiral Out','Vortex Pull','Vortex Push','Tornado Twist',
  'Cyclone','Whirlwind','Orbit Wave','Orbit Bounce','Satellite Swing','Comet Loop','Meteor Fall','Meteor Rise','Particle Drift','Particle Scatter',
  'Particle Gather','Particle Orbit','Particle Spiral','Sparkle Burst','Glow Pulse','Glow Flicker','Glow Wave','Light Sweep','Light Flash','Color Pulse',
  'Color Shift','Color Wave','Shadow Pulse','Shadow Sweep','Shadow Lift','Shadow Drop','Depth Bounce','Card Tilt','Card Rock','Card Twist',
  'Card Hover','Flip Vertical','Flip Diagonal','Spin Zoom','Zoom Pulse','Zoom Bounce','Zoom Blur','Clip Reveal','Clip Hide','Mask Expand',
  'Mask Contract','Morph Circle','Morph Square','Morph Diamond','Morph Star','Morph Heart','Morph Hexagon','Arrow Float','Arrow Shake','Arrow Spin',
  'Chevron Bounce','Plus Spin','Minus Pulse','Menu Rotate','Close Rotate','Play Bounce','Search Glow','Ring Spinner','Double Spinner','Triple Spinner',
  'Arc Spinner','Half Ring Spinner','Dual Arc Spinner','Rotating Dot','Dots Loader','Three Dots','Four Dots','Five Dots','Dot Wave','Dot Bounce',
  'Dot Pulse','Dot Fade','Dot Scale','Dot Orbit','Dot Chase','Dot Trail','Circle Loader','Circle Pulse','Circle Expand','Circle Contract',
  'Circle Ripple','Double Ripple','Triple Ripple','Ripple Loader','Ripple Dots','Ripple Wave','Ripple Orbit','Bar Loader','Bars Loader','Equalizer',
  'Bar Wave','Bar Pulse','Bar Grow','Bar Shrink','Bar Stagger','Bar Chase','Progress Bar','Indeterminate Bar','Shimmer Bar','Gradient Bar',
  'Striped Bar','Moving Stripe','Wave Bar','Loading Line','Sliding Line','Bouncing Line','Skeleton','Skeleton Wave','Skeleton Shimmer','Skeleton Pulse',
  'Skeleton Sweep','Card Skeleton','Text Skeleton','Image Skeleton','Skeleton Blocks','Shimmer Text','Shimmer Circle','Shimmer Card','Shimmer Button','Shimmer Grid',
  'Pacman Loader','Hourglass','Clock Loader','Sand Loader','Infinity Loader','DNA Loader','Helix Loader','Orbit Loader','Planet Loader','Satellite Loader',
  'Comet Loader','Radar Loader','Compass Loader','Cross Loader','Plus Loader','X Loader','Diamond Loader','Square Loader','Triangle Loader','Hexagon Loader',
  'Star Loader','Heart Loader','Blob Loader','Liquid Loader','Wave Loader','Sine Loader','Pulse Loader','Heartbeat Loader','Breathing Loader','Elastic Loader',
  'Jelly Loader','Bounce Loader','Spring Loader','Pendulum Loader','Flip Loader','3D Cube Loader','Morphing Loader','Conic Spinner','Conic Sweep',
  'Ribbon Twist','Ribbon Wave','Ribbon Fold','Ribbon Spiral','Ring Tunnel','Ring Tunnel Reverse','Orbit Tunnel','Orbit Tunnel Reverse','Sphere Orbit','Sphere Pulse',
  'Sphere Deform','Sphere Squash','Sphere Stretch','Capsule Roll','Capsule Bounce','Capsule Wave','Torus Spin','Torus Pulse','Torus Orbit','Torus Tilt',
  'Cone Spin','Cone Bounce','Pyramid Flip','Pyramid Orbit','Prism Wave','Prism Orbit','Glass Ripple','Glass Shimmer','Liquid Glass','Neon Orbit',
  'Neon Wave','Neon Pulse','Neon Sweep','Laser Sweep','Laser Orbit','Laser Pulse','Magnetic Ring','Magnetic Orbit','Energy Core','Energy Wave',
  'Energy Burst','Energy Orbit','Particle Wave','Particle Tunnel','Particle Vortex','Particle Explosion','Particle Implosion','Particle Spiral','Dot Matrix','Dot Matrix Wave',
  'Grid Wave','Grid Collapse','Grid Expand','Grid Ripple','Grid Rotate','Grid Perspective','Checker Wave','Checker Flip','Checker Zoom','Checker Ripple',
  'Stripe Wave','Stripe Twist','Stripe Slide','Stripe Fold','Mesh Wave','Mesh Ripple','Mesh Warp','Mesh Rotate','Gradient Orbit','Gradient Ripple',
  'Gradient Spin','Gradient Sweep','Gradient Breathing','Aurora Wave','Aurora Drift','Aurora Pulse','Aurora Sweep','Plasma Flow','Plasma Pulse','Plasma Ripple',
  'Water Surface','Water Drop Ripple','Water Wave','Water Orbit','Smoke Ring','Smoke Wave','Smoke Vortex','Mist Drift','Fog Pulse','Cloud Morph',
  'Cloud Wave','Fire Wave','Fire Pulse','Fire Orbit','Flame Twist','Flame Flicker','Lightning Arc','Lightning Pulse','Thunder Ripple','Spark Orbit',
  'Spark Trail','Spark Burst','Starfield Drift','Starfield Warp','Galaxy Spiral','Galaxy Pulse','Comet Shower','Meteor Shower','Solar Orbit','Lunar Eclipse'
];

const categories = ['entrance','hover','loading','text','3d','background'];
const visualTypes = [
  'orb','ring','rings','dots','bars','wave','blob','diamond','triangle','star','heart','hex','pentagon','octagon','drop','leaf',
  'orbit','planet','comet','satellite','spiral','infinity','helix','pendulum','spring','cube','pyramid','prism','torus','capsule',
  'ribbon','tunnel','particles','grid','stripes','mesh','gradient','aurora','plasma','fire','lightning','cloud','smoke','skeleton','shimmer','radar','hourglass'
];

const keyframes = [
  ['0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-28px) scale(1.12)}','ease-in-out'],
  ['0%,100%{transform:rotate(0deg)}50%{transform:rotate(180deg)}','linear'],
  ['0%{transform:rotate(0) scale(.7)}50%{transform:rotate(180deg) scale(1.15)}100%{transform:rotate(360deg) scale(.7)}','ease-in-out'],
  ['0%,100%{transform:scale(.7);opacity:.35}50%{transform:scale(1.25);opacity:1}','ease-in-out'],
  ['0%{transform:translateX(-70px)}50%{transform:translateX(0)}100%{transform:translateX(70px)}','ease-in-out'],
  ['0%,100%{transform:scaleX(1) rotate(0)}50%{transform:scaleX(1.35) scaleY(.72) rotate(8deg)}','ease-in-out'],
  ['0%,100%{border-radius:24% 76% 64% 36%/40% 42% 58% 60%;transform:rotate(0)}50%{border-radius:72% 28% 35% 65%/55% 35% 65% 45%;transform:rotate(180deg)}','ease-in-out'],
  ['0%{transform:rotate(0) translateX(0)}50%{transform:rotate(180deg) translateX(38px)}100%{transform:rotate(360deg) translateX(0)}','ease-in-out'],
  ['0%,100%{transform:translateY(0) rotate(-12deg)}50%{transform:translateY(-22px) rotate(12deg)}','ease-in-out'],
  ['0%{transform:scale(.3);opacity:0}45%{transform:scale(1.15);opacity:1}100%{transform:scale(.85);opacity:.2}','ease-out'],
  ['0%,100%{transform:perspective(500px) rotateX(0) rotateY(0)}50%{transform:perspective(500px) rotateX(180deg) rotateY(180deg) scale(1.08)}','ease-in-out'],
  ['0%{transform:translateY(-62px);opacity:.1}50%{opacity:1}100%{transform:translateY(62px);opacity:.1}','ease-in-out'],
  ['0%,100%{transform:skew(0)}25%{transform:skew(-14deg,5deg)}75%{transform:skew(14deg,-5deg)}','ease-in-out'],
  ['0%,100%{filter:brightness(1);box-shadow:0 0 0 transparent}50%{filter:brightness(1.6);box-shadow:0 0 30px #8b5cf6}','ease-in-out'],
  ['0%{clip-path:circle(4%);opacity:.1}100%{clip-path:circle(75%);opacity:1}','ease-in-out'],
  ['0%,100%{transform:scaleX(1)}50%{transform:scaleX(1.5)}','ease-in-out'],
  ['0%,100%{transform:translateX(-34px) rotate(-25deg)}50%{transform:translateX(34px) rotate(25deg)}','ease-in-out'],
  ['0%{transform:rotate(0) scale(.8)}50%{transform:rotate(360deg) scale(1.15)}100%{transform:rotate(720deg) scale(.8)}','linear'],
  ['0%,100%{transform:translateY(8px)}50%{transform:translateY(-18px)}','ease-in-out'],
  ['0%,100%{transform:scale(1) rotate(0)}25%{transform:scale(1.12) rotate(6deg)}50%{transform:scale(.92) rotate(-6deg)}75%{transform:scale(1.08) rotate(3deg)}','ease-in-out']
];

const visualCSS = {
  orb: '<span class="v-orb"></span>',
  ring: '<span class="v-ring"></span>',
  rings: '<span class="v-rings"><i></i><i></i><i></i></span>',
  dots: '<span class="v-dots"><i></i><i></i><i></i><i></i><i></i></span>',
  bars: '<span class="v-bars"><i></i><i></i><i></i><i></i><i></i></span>',
  wave: '<span class="v-wave"><i></i><i></i><i></i><i></i><i></i></span>',
  blob: '<span class="v-blob"></span>',
  diamond: '<span class="v-diamond"></span>',
  triangle: '<span class="v-triangle"></span>',
  star: '<span class="v-star"></span>',
  heart: '<span class="v-heart"></span>',
  hex: '<span class="v-hex"></span>',
  pentagon: '<span class="v-pentagon"></span>',
  octagon: '<span class="v-octagon"></span>',
  drop: '<span class="v-drop"></span>',
  leaf: '<span class="v-leaf"></span>',
  orbit: '<span class="v-orbit"><i></i></span>',
  planet: '<span class="v-planet"><i></i></span>',
  comet: '<span class="v-comet"><i></i></span>',
  satellite: '<span class="v-satellite"><i></i></span>',
  spiral: '<span class="v-spiral"></span>',
  infinity: '<span class="v-infinity"></span>',
  helix: '<span class="v-helix"><i></i><i></i></span>',
  pendulum: '<span class="v-pendulum"><i></i></span>',
  spring: '<span class="v-spring"></span>',
  cube: '<span class="v-cube"><i></i><i></i><i></i><i></i></span>',
  pyramid: '<span class="v-pyramid"></span>',
  prism: '<span class="v-prism"></span>',
  torus: '<span class="v-torus"></span>',
  capsule: '<span class="v-capsule"></span>',
  ribbon: '<span class="v-ribbon"><i></i></span>',
  tunnel: '<span class="v-tunnel"><i></i><i></i><i></i></span>',
  particles: '<span class="v-particles"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span>',
  grid: '<span class="v-grid"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span>',
  stripes: '<span class="v-stripes"></span>',
  mesh: '<span class="v-mesh"></span>',
  gradient: '<span class="v-gradient"></span>',
  aurora: '<span class="v-aurora"><i></i><i></i><i></i></span>',
  plasma: '<span class="v-plasma"></span>',
  fire: '<span class="v-fire"><i></i><i></i><i></i></span>',
  lightning: '<span class="v-lightning"></span>',
  cloud: '<span class="v-cloud"><i></i><i></i></span>',
  smoke: '<span class="v-smoke"><i></i><i></i><i></i></span>',
  skeleton: '<span class="v-skeleton"><i></i><i></i><i></i></span>',
  shimmer: '<span class="v-shimmer"></span>',
  radar: '<span class="v-radar"><i></i></span>',
  hourglass: '<span class="v-hourglass"><i></i></span>'
};

const style = document.createElement('style');
style.id = 'css-shape-rebuild';
style.textContent = `
.generated-card .preview{overflow:hidden;display:grid;place-items:center}
.css-visual{position:relative;width:150px;height:110px;display:grid;place-items:center;filter:drop-shadow(0 10px 22px #0005)}
.css-visual span,.css-visual i{box-sizing:border-box}
.v-orb{width:56px;height:56px;border-radius:50%;background:radial-gradient(circle at 30% 25%,#fff,#a78bfa 18%,#7c3aed 52%,#312e81 100%);animation:shapeFloat var(--d) var(--e) infinite}
.v-ring{width:66px;height:66px;border:7px solid #8b5cf655;border-top-color:#a78bfa;border-right-color:#6366f1;border-radius:50%;animation:shapeSpin var(--d) linear infinite}
.v-rings{width:80px;height:80px}.v-rings i{position:absolute;inset:10px;border:3px solid #8b5cf6;border-radius:50%;animation:ringExpand var(--d) ease-out infinite}.v-rings i:nth-child(2){animation-delay:-.35s}.v-rings i:nth-child(3){animation-delay:-.7s}
.v-dots{display:flex;gap:8px}.v-dots i{width:13px;height:13px;border-radius:50%;background:#a78bfa;animation:dotHop var(--d) ease-in-out infinite}.v-dots i:nth-child(2){animation-delay:.1s}.v-dots i:nth-child(3){animation-delay:.2s}.v-dots i:nth-child(4){animation-delay:.3s}.v-dots i:nth-child(5){animation-delay:.4s}
.v-bars{display:flex;gap:6px;align-items:center;height:70px}.v-bars i{width:8px;height:22px;border-radius:8px;background:linear-gradient(#a78bfa,#6366f1);animation:barDance var(--d) ease-in-out infinite}.v-bars i:nth-child(2){animation-delay:.08s}.v-bars i:nth-child(3){animation-delay:.16s}.v-bars i:nth-child(4){animation-delay:.24s}.v-bars i:nth-child(5){animation-delay:.32s}
.v-wave{display:flex;gap:5px;align-items:center}.v-wave i{width:8px;height:44px;border-radius:8px;background:#8b5cf6;animation:waveBars var(--d) ease-in-out infinite}.v-wave i:nth-child(2){animation-delay:.08s}.v-wave i:nth-child(3){animation-delay:.16s}.v-wave i:nth-child(4){animation-delay:.24s}.v-wave i:nth-child(5){animation-delay:.32s}
.v-blob{width:78px;height:64px;background:linear-gradient(135deg,#a78bfa,#6d28d9);border-radius:70% 30% 45% 55%/40% 55% 45% 60%;animation:blobMorph var(--d) ease-in-out infinite}
.v-diamond{width:58px;height:58px;background:linear-gradient(135deg,#c4b5fd,#6d28d9);clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);animation:shapeFloat var(--d) ease-in-out infinite}
.v-triangle{width:0;height:0;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:66px solid #8b5cf6;animation:shapeFloat var(--d) ease-in-out infinite}
.v-star{width:72px;height:72px;background:#8b5cf6;clip-path:polygon(50% 0,61% 35%,98% 35%,68% 57%,79% 96%,50% 73%,21% 96%,32% 57%,2% 35%,39% 35%);animation:starTurn var(--d) ease-in-out infinite}
.v-heart{width:58px;height:52px;background:#8b5cf6;transform:rotate(-45deg);border-radius:8px 0 8px 0;animation:heartBeat var(--d) ease-in-out infinite}.v-heart:before,.v-heart:after{content:"";position:absolute;width:58px;height:52px;background:#8b5cf6;border-radius:50%}.v-heart:before{top:-28px;left:0}.v-heart:after{top:0;left:28px}
.v-hex{width:70px;height:62px;background:#7c3aed;clip-path:polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%);animation:shapeSpin var(--d) ease-in-out infinite}.v-pentagon{width:68px;height:68px;background:#8b5cf6;clip-path:polygon(50% 0,100% 38%,82% 100%,18% 100%,0 38%);animation:shapeFloat var(--d) ease-in-out infinite}.v-octagon{width:68px;height:68px;background:#7c3aed;clip-path:polygon(30% 0,70% 0,100% 30%,100% 70%,70% 100%,30% 100%,0 70%,0 30%);animation:shapeSpin var(--d) linear infinite}
.v-drop{width:48px;height:64px;background:linear-gradient(#a78bfa,#6d28d9);border-radius:50% 50% 55% 55%;transform:rotate(45deg);animation:dropBounce var(--d) ease-in-out infinite}.v-leaf{width:74px;height:44px;background:#8b5cf6;border-radius:100% 0 100% 0;animation:leafSway var(--d) ease-in-out infinite}
.v-orbit,.v-planet,.v-comet,.v-satellite{width:90px;height:90px;border:2px solid #8b5cf655;border-radius:50%;animation:orbitSpin var(--d) linear infinite}.v-orbit i,.v-planet i,.v-comet i,.v-satellite i{position:absolute;width:14px;height:14px;border-radius:50%;background:#a78bfa;top:-7px;left:50%;transform:translateX(-50%)}
.v-planet{border-color:#8b5cf666}.v-planet:after{content:"";position:absolute;inset:22px;border-radius:50%;background:radial-gradient(circle at 30% 25%,#ddd6fe,#7c3aed)}.v-comet{border-style:dashed}.v-comet i{box-shadow:-18px 5px 0 -2px #a78bfa,-32px 10px 0 -4px #8b5cf6}.v-satellite i{width:10px;height:10px;box-shadow:16px 0 0 2px #6366f1,-16px 0 0 2px #6366f1}
.v-spiral{width:70px;height:70px;border:5px solid #8b5cf6;border-left-color:transparent;border-radius:50%;animation:shapeSpin var(--d) linear infinite}.v-infinity{width:78px;height:42px;border:6px solid #8b5cf6;border-radius:50%;transform:rotate(-8deg);animation:infinityMove var(--d) ease-in-out infinite}.v-helix{width:74px;height:74px}.v-helix i{position:absolute;width:12px;height:12px;border-radius:50%;background:#a78bfa;animation:helixMove var(--d) linear infinite}.v-helix i:nth-child(2){background:#6366f1;animation-delay:-.5s}
.v-pendulum{width:110px;height:60px;border-top:3px solid #8b5cf655}.v-pendulum i{position:absolute;top:2px;left:50%;width:3px;height:50px;background:#8b5cf6;transform-origin:top;animation:pendulum var(--d) ease-in-out infinite}.v-pendulum i:after{content:"";position:absolute;bottom:-8px;left:-7px;width:17px;height:17px;border-radius:50%;background:#a78bfa}.v-spring{width:70px;height:70px;border:5px solid #8b5cf6;border-top-color:transparent;border-bottom-color:transparent;border-radius:50%;animation:springTurn var(--d) ease-in-out infinite}
.v-cube{width:56px;height:56px;transform-style:preserve-3d;animation:cubeTurn var(--d) ease-in-out infinite}.v-cube:before{content:"";position:absolute;inset:0;background:linear-gradient(135deg,#a78bfa,#5b21b6);border:2px solid #ddd6fe55}.v-pyramid{width:0;height:0;border-left:38px solid transparent;border-right:38px solid transparent;border-bottom:70px solid #7c3aed;animation:pyramidFlip var(--d) ease-in-out infinite}.v-prism{width:70px;height:62px;background:linear-gradient(135deg,#c4b5fd,#6d28d9);clip-path:polygon(15% 15%,85% 0,100% 75%,30% 100%,0 45%);animation:prismTilt var(--d) ease-in-out infinite}.v-torus{width:72px;height:72px;border:16px solid #8b5cf6;border-radius:50%;box-shadow:inset 0 0 0 3px #c4b5fd55;animation:shapeSpin var(--d) linear infinite}.v-capsule{width:92px;height:42px;border-radius:999px;background:linear-gradient(90deg,#6d28d9,#a78bfa,#6d28d9);animation:capsuleMove var(--d) ease-in-out infinite}
.v-ribbon{width:94px;height:48px;transform:rotate(-8deg)}.v-ribbon:before,.v-ribbon:after,.v-ribbon i{content:"";position:absolute;width:100%;height:12px;border-radius:999px;background:#8b5cf6}.v-ribbon:before{top:0}.v-ribbon i{top:18px;background:#a78bfa}.v-ribbon:after{top:36px;background:#6366f1}.v-tunnel{width:80px;height:80px}.v-tunnel i{position:absolute;inset:8px;border:3px solid #8b5cf6;border-radius:50%;animation:tunnelPulse var(--d) ease-in-out infinite}.v-tunnel i:nth-child(2){inset:20px;animation-delay:-.25s}.v-tunnel i:nth-child(3){inset:32px;animation-delay:-.5s}
.v-particles{width:100px;height:80px}.v-particles i{position:absolute;width:7px;height:7px;border-radius:50%;background:#a78bfa;animation:particleFloat var(--d) ease-in-out infinite}.v-particles i:nth-child(1){left:8%;top:45%}.v-particles i:nth-child(2){left:22%;top:15%;animation-delay:-.2s}.v-particles i:nth-child(3){left:38%;top:70%;animation-delay:-.4s}.v-particles i:nth-child(4){left:52%;top:30%;animation-delay:-.6s}.v-particles i:nth-child(5){left:67%;top:78%;animation-delay:-.8s}.v-particles i:nth-child(6){left:80%;top:18%;animation-delay:-1s}.v-particles i:nth-child(7){left:90%;top:50%;animation-delay:-1.2s}.v-particles i:nth-child(8){left:48%;top:52%;animation-delay:-1.4s}
.v-grid{width:76px;height:76px;display:grid!important;grid-template-columns:repeat(3,1fr);gap:5px}.v-grid i{background:#8b5cf6;border-radius:4px;animation:gridWave var(--d) ease-in-out infinite}.v-grid i:nth-child(2){animation-delay:.1s}.v-grid i:nth-child(3){animation-delay:.2s}.v-grid i:nth-child(4){animation-delay:.3s}.v-grid i:nth-child(5){animation-delay:.4s}.v-grid i:nth-child(6){animation-delay:.5s}.v-grid i:nth-child(7){animation-delay:.6s}.v-grid i:nth-child(8){animation-delay:.7s}.v-grid i:nth-child(9){animation-delay:.8s}
.v-stripes{width:112px;height:58px;border-radius:12px;background:repeating-linear-gradient(135deg,#8b5cf6 0 10px,#6366f1 10px 20px);background-size:160% 160%;animation:stripesMove var(--d) linear infinite}.v-mesh{width:92px;height:72px;background:linear-gradient(90deg,transparent 45%,#8b5cf6 46% 54%,transparent 55%),linear-gradient(0deg,transparent 45%,#a78bfa 46% 54%,transparent 55%);background-size:24px 24px;animation:meshMove var(--d) linear infinite}.v-gradient{width:100px;height:64px;border-radius:18px;background:linear-gradient(120deg,#4c1d95,#8b5cf6,#2563eb,#4c1d95);background-size:300% 300%;animation:gradientMove var(--d) ease infinite}.v-aurora{width:120px;height:70px;overflow:hidden;border-radius:50%}.v-aurora i{position:absolute;width:80px;height:100px;border-radius:50%;filter:blur(8px);background:#8b5cf6;animation:auroraMove var(--d) ease-in-out infinite}.v-aurora i:nth-child(2){left:30px;background:#2563eb;animation-delay:-.4s}.v-aurora i:nth-child(3){left:60px;background:#c026d3;animation-delay:-.8s}.v-plasma{width:76px;height:76px;border-radius:50%;background:conic-gradient(#8b5cf6,#2563eb,#c026d3,#8b5cf6);filter:blur(1px);animation:plasmaSpin var(--d) linear infinite}
.v-fire{width:58px;height:70px}.v-fire i{position:absolute;bottom:0;width:25px;height:52px;background:linear-gradient(#fef3c7,#f59e0b,#7c3aed);border-radius:70% 30% 60% 40%;transform-origin:bottom;animation:fireMove var(--d) ease-in-out infinite}.v-fire i:nth-child(1){left:5px}.v-fire i:nth-child(2){left:20px;height:68px;animation-delay:-.2s}.v-fire i:nth-child(3){left:35px;animation-delay:-.4s}.v-lightning{width:34px;height:72px;background:#c4b5fd;clip-path:polygon(55% 0,10% 52%,45% 52%,30% 100%,90% 40%,55% 40%);animation:lightningFlash var(--d) ease-in-out infinite}.v-cloud{width:100px;height:48px;background:#a78bfa;border-radius:999px}.v-cloud i{position:absolute;width:42px;height:42px;border-radius:50%;background:#c4b5fd;top:-20px}.v-cloud i:nth-child(1){left:18px}.v-cloud i:nth-child(2){left:50px;top:-12px}.v-cloud{animation:cloudDrift var(--d) ease-in-out infinite}
.v-smoke{width:100px;height:80px}.v-smoke i{position:absolute;width:34px;height:34px;border-radius:50%;background:#94a3b855;filter:blur(5px);bottom:5px;animation:smokeRise var(--d) ease-in-out infinite}.v-smoke i:nth-child(1){left:15px}.v-smoke i:nth-child(2){left:38px;animation-delay:-.4s}.v-smoke i:nth-child(3){left:62px;animation-delay:-.8s}.v-skeleton{width:110px}.v-skeleton i{display:block;height:9px;margin:8px 0;border-radius:9px;background:linear-gradient(90deg,#ffffff08,#ffffff40,#ffffff08);background-size:200% 100%;animation:shimmerMove var(--d) linear infinite}.v-skeleton i:nth-child(1){width:72%}.v-skeleton i:nth-child(2){width:100%}.v-skeleton i:nth-child(3){width:55%}.v-shimmer{width:110px;height:58px;border-radius:14px;background:linear-gradient(100deg,#ffffff08 20%,#ffffff45 50%,#ffffff08 80%);background-size:220% 100%;animation:shimmerMove var(--d) linear infinite}.v-radar{width:74px;height:74px;border:2px solid #8b5cf666;border-radius:50%;overflow:hidden}.v-radar:before{content:"";position:absolute;left:50%;top:50%;width:2px;height:50%;background:#a78bfa;transform-origin:bottom;animation:radarSpin var(--d) linear infinite}.v-radar i{position:absolute;width:8px;height:8px;border-radius:50%;background:#a78bfa;left:55%;top:30%;box-shadow:0 0 15px #a78bfa}.v-hourglass{width:52px;height:72px;border:5px solid #8b5cf6;clip-path:polygon(0 0,100% 0,100% 12%,62% 50%,100% 88%,100% 100%,0 100%,0 88%,38% 50%,0 12%);animation:hourFlip var(--d) ease-in-out infinite}.v-hourglass i{position:absolute;left:16px;top:12px;width:20px;height:20px;background:#a78bfa;clip-path:polygon(0 0,100% 0,50% 100%);animation:sandFall var(--d) linear infinite}
@keyframes shapeFloat{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-18px) scale(1.08)}}@keyframes shapeSpin{to{transform:rotate(360deg)}}@keyframes ringExpand{0%{transform:scale(.35);opacity:0}40%{opacity:1}100%{transform:scale(1.2);opacity:0}}@keyframes dotHop{0%,100%{transform:translateY(0);opacity:.35}50%{transform:translateY(-18px);opacity:1}}@keyframes barDance{0%,100%{height:20px}50%{height:62px}}@keyframes waveBars{0%,100%{transform:scaleY(.4)}50%{transform:scaleY(1)}}@keyframes blobMorph{0%,100%{border-radius:70% 30% 45% 55%/40% 55% 45% 60%;transform:rotate(0)}50%{border-radius:30% 70% 60% 40%/60% 40% 60% 40%;transform:rotate(180deg)}}@keyframes starTurn{0%,100%{transform:rotate(0) scale(.85)}50%{transform:rotate(180deg) scale(1.1)}}@keyframes heartBeat{0%,100%{transform:rotate(-45deg) scale(1)}15%{transform:rotate(-45deg) scale(1.22)}30%{transform:rotate(-45deg) scale(1)}}@keyframes dropBounce{0%,100%{transform:rotate(45deg) translateY(8px)}50%{transform:rotate(45deg) translateY(-14px)}}@keyframes leafSway{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}@keyframes orbitSpin{to{transform:rotate(360deg)}}@keyframes infinityMove{0%,100%{transform:rotate(-8deg) scale(.9)}50%{transform:rotate(8deg) scale(1.12)}}@keyframes helixMove{0%{left:10%;top:50%}25%{left:35%;top:10%}50%{left:65%;top:50%}75%{left:35%;top:90%}100%{left:10%;top:50%}}@keyframes pendulum{0%,100%{transform:rotate(-32deg)}50%{transform:rotate(32deg)}}@keyframes springTurn{0%,100%{transform:scaleY(.7) rotate(-15deg)}50%{transform:scaleY(1.2) rotate(15deg)}}@keyframes cubeTurn{0%,100%{transform:perspective(500px) rotateX(0) rotateY(0)}50%{transform:perspective(500px) rotateX(180deg) rotateY(180deg)}}@keyframes pyramidFlip{0%,100%{transform:rotateX(0) rotateY(0)}50%{transform:rotateX(180deg) rotateY(180deg)}}@keyframes prismTilt{0%,100%{transform:rotate(0) translateY(0)}50%{transform:rotate(18deg) translateY(-10px)}}@keyframes capsuleMove{0%,100%{transform:translateX(-30px) scaleX(.9)}50%{transform:translateX(30px) scaleX(1.1)}}@keyframes tunnelPulse{0%,100%{transform:scale(.7);opacity:.2}50%{transform:scale(1.1);opacity:1}}@keyframes particleFloat{0%,100%{transform:translate(0,10px) scale(.7);opacity:.3}50%{transform:translate(0,-12px) scale(1.2);opacity:1}}@keyframes gridWave{0%,100%{transform:scale(.7);opacity:.3}50%{transform:scale(1);opacity:1}}@keyframes stripesMove{to{background-position:160% 0}}@keyframes meshMove{to{background-position:48px 48px}}@keyframes gradientMove{0%,100%{background-position:0 50%}50%{background-position:100% 50%}}@keyframes auroraMove{0%,100%{transform:translateX(-15px) rotate(-8deg)}50%{transform:translateX(35px) rotate(8deg)}}@keyframes plasmaSpin{to{transform:rotate(360deg) scale(1.08)}}@keyframes fireMove{0%,100%{transform:scaleY(.75) rotate(-5deg)}50%{transform:scaleY(1.12) rotate(5deg)}}@keyframes lightningFlash{0%,70%,100%{opacity:.25;filter:blur(1px)}75%,80%{opacity:1;filter:drop-shadow(0 0 16px #c4b5fd)}}@keyframes cloudDrift{0%,100%{transform:translateX(-15px)}50%{transform:translateX(15px)}}@keyframes smokeRise{0%{transform:translateY(12px) scale(.7);opacity:.15}50%{opacity:.7}100%{transform:translateY(-25px) scale(1.3);opacity:0}}@keyframes shimmerMove{to{background-position:-220% 0}}@keyframes radarSpin{to{transform:rotate(360deg)}}@keyframes hourFlip{0%,40%{transform:rotate(0)}50%,90%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}@keyframes sandFall{0%,45%{transform:translateY(0);opacity:1}55%,100%{transform:translateY(30px);opacity:.15}}
`;
document.head.appendChild(style);

function categoryFor(i){
  const pattern = ['entrance','hover','loading','text','3d','background'];
  return pattern[i % pattern.length];
}

function createCard(name, index){
  const type = visualTypes[index % visualTypes.length];
  const category = categoryFor(index);
  const duration = (0.75 + ((index * 17) % 125) / 100).toFixed(2);
  const delay = -(((index * 137) % 2300) / 1000).toFixed(2);
  const easing = keyframes[index % keyframes.length][1];
  const frames = keyframes[index % keyframes.length][0];
  const animationName = `cssShapeMotion${index}`;
  const cls = `generated-visual-${index}`;
  const card = document.createElement('article');
  card.className = 'card generated-card';
  card.dataset.generated = 'true';
  card.dataset.category = category;
  card.dataset.name = name;
  const cardStyle = document.createElement('style');
  cardStyle.textContent = `.${cls}{animation:${animationName} ${duration}s ${easing} infinite;animation-delay:${delay}s;transform-origin:center}@keyframes ${animationName}{${frames}}`;
  document.head.appendChild(cardStyle);
  const code = `.${cls}{animation:${animationName} ${duration}s ${easing} infinite;animation-delay:${delay}s;transform-origin:center}@keyframes ${animationName}{${frames}}`;
  card.innerHTML = `<div class="preview"><div class="css-visual ${cls}" style="--d:${duration}s;--e:${easing}">${visualCSS[type]}</div></div><div class="card-info"><div><h2>${name}</h2><small>${category}</small></div><button class="copy" data-code="">Copy CSS</button></div>`;
  card.querySelector('.copy').dataset.code = code;
  return card;
}

// Remove only cards previously generated by this script if the script is injected twice.
grid.querySelectorAll('[data-generated="true"]').forEach(el => el.remove());

// 380 CSS/HTML animations + the original gallery cards = approximately 412 total.
names.slice(0, 380).forEach((name, index) => grid.appendChild(createCard(name, index)));

function updateCount(){
  const count = grid.querySelectorAll('.card').length;
  const counter = document.querySelector('.gallery-title strong');
  if(counter) counter.textContent = `${count} Animations`;
}

function applyFilter(){
  const query = (search?.value || '').trim().toLowerCase();
  const active = document.querySelector('.filter.active')?.dataset.filter || 'all';
  let visible = 0;
  grid.querySelectorAll('.card').forEach(card => {
    const category = card.dataset.category || '';
    const name = (card.dataset.name || card.querySelector('h2')?.textContent || '').toLowerCase();
    const categoryMatch = active === 'all' || category === active;
    const queryMatch = !query || name.includes(query);
    const show = categoryMatch && queryMatch;
    card.style.display = show ? '' : 'none';
    if(show) visible++;
  });
  if(empty) empty.hidden = visible !== 0;
}

filters.forEach(filter => filter.addEventListener('click', () => {
  filters.forEach(item => item.classList.remove('active'));
  filter.classList.add('active');
  applyFilter();
}));
search?.addEventListener('input', applyFilter);

grid.addEventListener('click', async event => {
  const button = event.target.closest('.copy');
  if(!button) return;
  const code = button.dataset.code || '';
  try{
    await navigator.clipboard.writeText(code);
    if(toast){
      toast.textContent = 'CSS copied';
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 1200);
    }
  }catch{
    window.prompt('Copy CSS:', code);
  }
});

updateCount();
applyFilter();
