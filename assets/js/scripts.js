(function () {
  const isMobile = window.matchMedia('(max-width: 768px)').matches ||
                   'ontouchstart' in window;

  // timing (ms) — tuned to ~1-2s as requested
  const initialHoldMs = 2000; // how long to keep page fully visible on load
  const revealOnClickMs = 2000;  // how long to keep page visible after click
  const flickerDelayAfterBlur = 3000; // preserve existing flicker timing

  let initialTimeout = null;
  let flickerTimeout = null;
  let reblurTimeout = null;

  // --- Intro: show everything, then fade to blurred ---
  if (!isMobile) {
    document.body.classList.add('intro');
    // ensure the `intro` class is rendered, then start the visible hold timer
    requestAnimationFrame(() => {
      initialTimeout = setTimeout(() => {
        document.body.classList.remove('intro');
        // Start flicker only after the fade-out transition ends
        flickerTimeout = setTimeout(() => {
          document.body.classList.add('flickering');
        }, flickerDelayAfterBlur);
      }, initialHoldMs);
    });
  }

  if (isMobile) return;

  const layer = document.getElementById('layerClear');
  const glow = document.getElementById('cursorGlow');
  const dot = document.getElementById('cursorDot');
  let mouseIn = false;

  // Clicking anywhere reveals the full page for `revealOnClickMs`, then re-blurs
  document.addEventListener('click', () => {
    // show fully
    clearTimeout(initialTimeout);
    clearTimeout(flickerTimeout);
    clearTimeout(reblurTimeout);
    document.body.classList.add('intro');
    document.body.classList.remove('flickering');

    // ensure `intro` is rendered, then start the reveal hold timer
    requestAnimationFrame(() => {
      reblurTimeout = setTimeout(() => {
        document.body.classList.remove('intro');
        flickerTimeout = setTimeout(() => {
          document.body.classList.add('flickering');
        }, flickerDelayAfterBlur);
      }, revealOnClickMs);
    });
  });

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
