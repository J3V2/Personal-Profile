// Image compare drag
window.addEventListener('load', () => {
  const container = document.querySelector('.img-compare');
  const topImg    = container.querySelector('.img-top');
  const handle    = container.querySelector('.slider-handle');
  let dragging = false;

  handle.addEventListener('mousedown', () => dragging = true);
  window.addEventListener('mouseup', () => dragging = false);
  window.addEventListener('mousemove', e => {
    if (!dragging) return;
    const rect = container.getBoundingClientRect();
    let x = e.clientX - rect.left;
    x = Math.max(0, Math.min(x, rect.width));
    const pct = (x / rect.width) * 100;
    topImg.style.width = pct + '%';
    handle.style.left = pct + '%';
  });
});