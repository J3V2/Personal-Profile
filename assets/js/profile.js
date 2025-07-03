// in assets/js/script.js or similar
window.addEventListener('load', () => {
  const container = document.querySelector('.img-compare');
  const topImg    = container.querySelector('.img-top');
  const handle    = container.querySelector('.slider-handle');

  let dragging = false;

  const startDrag = e => {
    e.preventDefault();
    dragging = true;
  };
  const endDrag = () => dragging = false;
  const doDrag = e => {
    if (!dragging) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const rect = container.getBoundingClientRect();
    let x = clientX - rect.left;
    x = Math.max(0, Math.min(x, rect.width));
    const pct = (x / rect.width) * 100;
    topImg.style.width = pct + '%';
    handle.style.left  = pct + '%';
  };

  // Mouse events
  handle.addEventListener('mousedown', startDrag);
  window.addEventListener('mouseup', endDrag);
  window.addEventListener('mousemove', doDrag);

  // Touch events
  handle.addEventListener('touchstart', startDrag);
  window.addEventListener('touchend', endDrag);
  window.addEventListener('touchmove', doDrag);
});

document.addEventListener("DOMContentLoaded", () => {
  const balls = [
        "Poke_ball.png",
        "Great_ball.png",
        "Ultra_ball.png",
        "Safari_ball.png",
        "Master_ball.png",
  ];

  document.querySelectorAll(".skill").forEach(skill => {
    const score = Math.min(5, parseInt(skill.dataset.score, 10) || 0);
    const ratingEl = skill.querySelector(".skill-rating");
    ratingEl.innerHTML = "";

    // For score N, show balls[0] through balls[N-1]
    for (let i = 0; i < score; i++) {
      const img = document.createElement("img");
      img.src = `/assets/images/balls/${balls[i]}`;
      img.alt = `Level ${i + 1}`;
      img.title = balls[i].replace('.png','').replace(/([A-Z])/g, ' $1').trim();
      ratingEl.appendChild(img);
    }
  });
});

// Legend dropdown toggle
document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.skills-legend-dropdown');
  const toggle   = dropdown.querySelector('.legend-toggle');

  toggle.addEventListener('click', () => {
    const isOpen = dropdown.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Close if clicking outside
  document.addEventListener('click', e => {
    if (!dropdown.contains(e.target) && dropdown.classList.contains('open')) {
      dropdown.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
});
