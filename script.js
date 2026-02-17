
document.getElementById('yesBtn').addEventListener('click', () => {
  window.location.href = '4lola.html';
});

  const yesBtn  = document.getElementById('yesBtn');
  const noBtn   = document.getElementById('noBtn');
  const overlay = document.getElementById('overlay');
  const closeX  = document.getElementById('closeX');

  // --- YES → go to gift page (change if you want)
  if (yesBtn) {
    yesBtn.addEventListener('click', () => {
      window.location.href = '4lola.html';
    });
  }

  // --- Grow + wiggle YES; hide NO as growth increases
  let growScale = 1.0;     // start size
  const STEP = 0.25;       // how much bigger per "NO" click
  const MAX  = 3.2;        // max size

  function wiggleYesOnce() {
    if (!yesBtn) return;
    yesBtn.classList.remove('shake', 'pulse'); // reset if still running
    void yesBtn.offsetWidth;                   // reflow to restart animation
    yesBtn.classList.add('shake', 'pulse');
  }

  function updateNoVisibility(scale){
    // Start fading after 1.3x, fully gone by 2.4x
    const fadeStart = 1.3;
    const fadeEnd   = 2.4;

    let t = (scale - fadeStart) / (fadeEnd - fadeStart);
    t = Math.max(0, Math.min(1, t));  // clamp 0..1

    const opacity = 1 - t;                           // 1 → 0
    const shrink  = Math.max(0.75, 1 - 0.35 * t);    // 1 → 0.75

    if (noBtn) {
      noBtn.style.opacity   = String(opacity);
      noBtn.style.transform = `scale(${shrink})`;
      if (opacity <= 0.02){
        noBtn.style.visibility   = 'hidden';
        noBtn.style.pointerEvents = 'none';
      } else {
        noBtn.style.visibility   = 'visible';
        noBtn.style.pointerEvents = 'auto';
      }
    }
  }

  if (noBtn && yesBtn) {
    noBtn.addEventListener('click', () => {
      // 1) Increase YES size (cumulative)
      growScale = Math.min(MAX, +(growScale + STEP).toFixed(2));
      yesBtn.style.setProperty('--grow-scale', String(growScale));

      // 2) Wiggle YES each time
      wiggleYesOnce();

      // 3) Make NO fade/shrink and then disappear
      updateNoVisibility(growScale);
    });
  }

  // Optional: close (hides modal; background remains)
  if (closeX) {
    closeX.addEventListener('click', () => {
      if (overlay) {
        overlay.classList.remove('show');
        overlay.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // --- Initialize state
  updateNoVisibility(growScale);

  // --- Auto‑wiggle loop so YES breathes even without clicks
  setTimeout(wiggleYesOnce, 600);
  const autoTimer = setInterval(wiggleYesOnce, 2400);

  // Stop auto wiggle if modal is hidden
  if (overlay) {
    overlay.addEventListener('transitionend', () => {
      if (!overlay.classList.contains('show')) {
        clearInterval(autoTimer);
      }
    });
  }