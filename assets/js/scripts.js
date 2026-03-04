(function () {
  const isMobile = window.matchMedia('(max-width: 768px)').matches ||
                   'ontouchstart' in window;

  // --- Intro: show everything, then fade to blurred ---
  if (!isMobile) {
    document.body.classList.add('intro');
    setTimeout(() => {
      document.body.classList.remove('intro');
      // Start flicker only after the 3s fade-out transition ends
      setTimeout(() => {
        document.body.classList.add('flickering');
      }, 3000);
    }, 1500);
  }

  if (isMobile) return;

  const layer = document.getElementById('layerClear');
  const glow = document.getElementById('cursorGlow');
  const dot = document.getElementById('cursorDot');
  let mouseIn = false;

  document.addEventListener('mouseenter', () => {
    mouseIn = true;
    document.body.classList.add('has-mouse');
  });

  document.addEventListener('mouseleave', () => {
    mouseIn = false;
    document.body.classList.remove('has-mouse');
    if (layer) {
      layer.style.setProperty('--mx', '-300px');
      layer.style.setProperty('--my', '-300px');
    }
    if (glow) {
      glow.style.left = '-300px';
      glow.style.top = '-300px';
    }
    if (dot) {
      dot.style.left = '-300px';
      dot.style.top = '-300px';
    }
  });

  document.addEventListener('mousemove', (e) => {
    if (!mouseIn) return;
    const x = e.clientX + 'px';
    const y = e.clientY + 'px';
    if (layer) {
      layer.style.setProperty('--mx', x);
      layer.style.setProperty('--my', y);
    }
    if (glow) {
      glow.style.left = x;
      glow.style.top = y;
    }
    if (dot) {
      dot.style.left = x;
      dot.style.top = y;
    }
  });
})();
