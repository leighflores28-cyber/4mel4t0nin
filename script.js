<<<<<<< HEAD
const yesBtn  = document.getElementById('yesBtn');
const noBtn   = document.getElementById('noBtn');
const overlay = document.getElementById('overlay');
const closeX  = document.getElementById('closeX');

// YES → go to gift page (change if you want)
yesBtn.addEventListener('click', () => {
  window.location.href = '4lola.html';
});

// Grow + wiggle YES; hide NO as growth increases
let growScale = 1.0;        // start size
const STEP = 0.25;          // how much bigger per "NO" click
const MAX  = 3.2;           // max size (raise if you want it larger)

noBtn.addEventListener('click', () => {
  // 1) Increase YES size (cumulative)
  growScale = Math.min(MAX, +(growScale + STEP).toFixed(2));
  yesBtn.style.setProperty('--grow-scale', growScale);

  // 2) Wiggle YES each time
  yesBtn.classList.remove('shake', 'pulse'); // reset if still running
  void yesBtn.offsetWidth;                   // reflow to restart animation
  yesBtn.classList.add('shake', 'pulse');

  // 3) Make NO fade/shrink and then disappear
  updateNoVisibility(growScale);
});

// Hide NO THANKS progressively as YES grows
function updateNoVisibility(scale){
  // Start fading after 1.3x, fully gone by 2.4x (tweak as you like)
  const fadeStart = 1.3;
  const fadeEnd   = 2.4;

  let t = (scale - fadeStart) / (fadeEnd - fadeStart);
  t = Math.max(0, Math.min(1, t));  // clamp 0..1

  const opacity = 1 - t;                            // 1 → 0
  const shrink  = Math.max(0.75, 1 - 0.35 * t);     // 1 → 0.75

  noBtn.style.opacity   = String(opacity);
  noBtn.style.transform = `scale(${shrink})`;

  if (opacity <= 0.02){
    // Effectively gone: invisible and not clickable
    noBtn.style.visibility   = 'hidden';
    noBtn.style.pointerEvents = 'none';
  } else {
    noBtn.style.visibility   = 'visible';
    noBtn.style.pointerEvents = 'auto';
  }
}

// Optional: close (hides modal; background remains)
closeX.addEventListener('click', () => {
  overlay.classList.remove('show');
  overlay.setAttribute('aria-hidden', 'true');
});

// Initialize state (ensure NO is visible on first load)
=======
const yesBtn  = document.getElementById('yesBtn');
const noBtn   = document.getElementById('noBtn');
const overlay = document.getElementById('overlay');
const closeX  = document.getElementById('closeX');

// YES → go to gift page (change if you want)
yesBtn.addEventListener('click', () => {
  window.location.href = '4lola.html';
});

// Grow + wiggle YES; hide NO as growth increases
let growScale = 1.0;        // start size
const STEP = 0.25;          // how much bigger per "NO" click
const MAX  = 3.2;           // max size (raise if you want it larger)

noBtn.addEventListener('click', () => {
  // 1) Increase YES size (cumulative)
  growScale = Math.min(MAX, +(growScale + STEP).toFixed(2));
  yesBtn.style.setProperty('--grow-scale', growScale);

  // 2) Wiggle YES each time
  yesBtn.classList.remove('shake', 'pulse'); // reset if still running
  void yesBtn.offsetWidth;                   // reflow to restart animation
  yesBtn.classList.add('shake', 'pulse');

  // 3) Make NO fade/shrink and then disappear
  updateNoVisibility(growScale);
});

// Hide NO THANKS progressively as YES grows
function updateNoVisibility(scale){
  // Start fading after 1.3x, fully gone by 2.4x (tweak as you like)
  const fadeStart = 1.3;
  const fadeEnd   = 2.4;

  let t = (scale - fadeStart) / (fadeEnd - fadeStart);
  t = Math.max(0, Math.min(1, t));  // clamp 0..1

  const opacity = 1 - t;                            // 1 → 0
  const shrink  = Math.max(0.75, 1 - 0.35 * t);     // 1 → 0.75

  noBtn.style.opacity   = String(opacity);
  noBtn.style.transform = `scale(${shrink})`;

  if (opacity <= 0.02){
    // Effectively gone: invisible and not clickable
    noBtn.style.visibility   = 'hidden';
    noBtn.style.pointerEvents = 'none';
  } else {
    noBtn.style.visibility   = 'visible';
    noBtn.style.pointerEvents = 'auto';
  }
}

// Optional: close (hides modal; background remains)
closeX.addEventListener('click', () => {
  overlay.classList.remove('show');
  overlay.setAttribute('aria-hidden', 'true');
});

// Initialize state (ensure NO is visible on first load)
>>>>>>> 8002cd02f9fae92fa7a972575d10c4f0cd7d19bc
updateNoVisibility(growScale);