(() => {
  const grid = document.getElementById('animationGrid');
  if (!grid) return;

  const names = [
    'Tap','Touch Ripple','Ink Ripple','Ripple Center','Ripple Top','Ripple Bottom','Ripple Left','Ripple Right','Press Down','Press Up',
    'Press Depth','Press Lift','Press Sink','Scale Down','Scale Up','Tap Bounce','Tap Pulse','Tap Pop','Tap Squish','Tap Stretch',
    'Tap Squeeze','Tap Jello','Tap Wobble','Tap Swing','Tap Tada','Rubber Band','Heartbeat','Flash','Glow','Shine',
    'Sweep','Highlight','Fill','Fill Up','Fill Down','Fill Left','Fill Right','Slide Up','Slide Down','Slide Left',
    'Slide Right','Push','Pull','Tilt','Rotate','Spin','Flip','Flip Vertical','Flip Diagonal','Zoom',
    'Zoom In','Zoom Out','Shrink','Expand','Morph','Skew','Twist','Jiggle','Vibrate','Tremor',
    'Shake X','Shake Y','Bounce Up','Bounce Down','Bounce Left','Bounce Right','Elastic','Overshoot','Undershoot','Back',
    'Forward','Rewind','Press Glow','Press Shadow','Press Border','Press Scale','Press Offset','Press Color','Press Contrast','Press Blur',
    'Press Brightness','Press Saturate','Press Invert','Press Grayscale','Press Sepia','Press Hue Rotate','Press Wave','Press Ring','Press Burst','Press Spark',
    'Press Reveal','Press Collapse','Press Expand','Press Bounce','Press Elastic','Spring Press','Anticipate','Follow Through','Quick Press','Release Bounce'
  ];

  const motions = [
    'transform:translateY(4px) scale(.96)','transform:translateY(-2px) scale(1.02)','box-shadow:0 0 0 0 #8b5cf655,0 0 0 18px transparent','transform:scale(.94);box-shadow:0 0 0 8px #8b5cf655','transform:translateY(-3px)','transform:translateY(3px)','transform:translateX(-4px)','transform:translateX(4px)',
    'transform:translateY(5px) scale(.97)','transform:translateY(-4px) scale(1.02)','transform:translateY(3px);box-shadow:inset 0 4px 8px #0006','transform:translateY(-3px);box-shadow:0 8px 22px #0004','transform:translateY(5px);box-shadow:inset 0 5px 12px #0007','transform:scale(.9)','transform:scale(1.06)','transform:translateY(-5px) scale(1.04)','transform:scale(1.1)','transform:scale(.9) rotate(-2deg)','transform:scaleX(1.08) scaleY(.92)','transform:scaleX(.92) scaleY(1.08)',
    'transform:skewX(-7deg)','transform:rotate(-5deg)','transform:rotate(6deg)','transform:scale(.92) rotate(-6deg)','transform:rotate(-7deg) scale(.94)','transform:scaleX(1.12) scaleY(.9)','transform:scale(1.08) rotate(4deg)','opacity:.35','filter:brightness(1.45)','filter:brightness(1.3) saturate(1.3)',
    'transform:translateX(100%)','filter:brightness(1.5)','background-size:160% 160%','transform:translateY(-100%) scale(1.02)','transform:translateY(100%)','transform:translateX(-100%)','transform:translateX(100%)','transform:translateY(4px) scale(.95)','transform:translateY(-4px) scale(1.03)','transform:translateX(-4px) rotate(-2deg)','transform:translateX(4px) rotate(2deg)',
    'transform:translateY(3px) scale(.95)','transform:translateY(-3px) scale(1.04)','transform:rotate(-5deg)','transform:rotate(360deg) scale(.98)','transform:rotateY(180deg)','transform:rotateX(180deg)','transform:rotate(45deg)','transform:scale(.92)','transform:scale(1.08)','transform:scale(.9)','transform:scale(1.12)',
    'transform:skew(-8deg)','transform:rotate(12deg) scale(.96)','transform:rotate(-4deg) translateX(-3px)','transform:translateX(-5px) rotate(-2deg)','transform:translateY(-5px)','transform:translateY(5px)','transform:translateX(-5px)','transform:translateX(5px)','transform:scale(1.14)','transform:scale(1.06) translateY(-2px)','transform:scale(.94) translateY(2px)','transform:translateX(-3px) scale(.98)',
    'transform:translateX(3px) scale(1.02)','transform:translateX(-2px) scale(.98)','transform:translateY(-2px) rotate(-1deg)','transform:translateY(2px) rotate(1deg)','transform:scale(.95) rotate(-1deg)','transform:scale(1.05) rotate(1deg)','transform:scale(1.08) skewX(-3deg)','transform:scale(1.04);box-shadow:0 0 20px #8b5cf6','box-shadow:inset 0 4px 12px #0007','outline:3px solid #8b5cf655',
    'transform:scale(.96)','transform:translateY(-2px)','filter:hue-rotate(35deg)','filter:contrast(1.35)','filter:blur(1px)','filter:brightness(1.4)','filter:saturate(1.7)','filter:invert(.15)','filter:grayscale(.8)','filter:sepia(.7)','filter:hue-rotate(90deg)',
    'transform:translateX(8px) scale(.98)','transform:scale(1.05);box-shadow:0 0 0 12px #8b5cf633','transform:scale(1.08);box-shadow:0 0 0 16px #8b5cf622','transform:scale(1.16);opacity:.8','transform:scale(.88);opacity:.7','transform:translateY(-3px) scale(1.06)','transform:scale(.9) rotate(-3deg)','transform:scale(1.08) rotate(3deg)','transform:translateY(2px) scale(.96)','transform:translateY(-2px) scale(1.03)'
  ];

  const keyframes = motions.map((m,i) => `@keyframes pressFix${i}{0%,100%{transform:translate(0) scale(1);opacity:1;filter:none;box-shadow:0 14px 35px #0008}50%{${m}}}` ).join('');
  const style = document.createElement('style');
  style.id = 'press-animation-fix-style';
  style.textContent = keyframes + `.press-fix-demo{width:150px;min-height:52px;border:0;border-radius:14px;padding:0 18px;background:linear-gradient(135deg,#7c3aed,#4f46e5);color:#fff;font:700 14px/1 system-ui,sans-serif;cursor:pointer;box-shadow:0 14px 35px #0008;transform-origin:center;will-change:transform,filter,box-shadow;user-select:none}.press-fix-demo:focus-visible{outline:2px solid #fff;outline-offset:3px}`;
  document.head.appendChild(style);

  const existing = grid.querySelectorAll('.press-fix-card');
  if (existing.length) return;

  const fragment = document.createDocumentFragment();
  names.forEach((name, i) => {
    const article = document.createElement('article');
    article.className = 'card press-fix-card';
    article.dataset.category = ['entrance','hover','loading','3d','background'][i % 5];
    article.dataset.name = name;
    article.innerHTML = `<div class="preview"><button class="press-fix-demo" type="button">${name}</button></div><div class="card-info"><div><h2>${name}</h2><small>Button Press</small></div><button class="copy" type="button">Copy CSS</button></div>`;
    const button = article.querySelector('.press-fix-demo');
    const copy = article.querySelector('.copy');
    const css = `animation:pressFix${i} .48s cubic-bezier(.2,.8,.2,1) both;`;
    copy.dataset.code = `.press-fix-demo{${css}} @keyframes pressFix${i}{50%{${motions[i]}}}`;
    button.addEventListener('click', () => {
      button.style.animation = 'none';
      void button.offsetWidth;
      button.style.animation = `pressFix${i} .48s cubic-bezier(.2,.8,.2,1) both`;
    });
    copy.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(copy.dataset.code); if (typeof window.showToast === 'function') window.showToast('CSS copied'); } catch (_) {}
    });
    fragment.appendChild(article);
  });
  grid.appendChild(fragment);
})();
