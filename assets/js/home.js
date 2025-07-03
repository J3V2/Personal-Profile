// SPLASH: Evolution cycle then auto-hide
document.documentElement.classList.add('loading');

window.addEventListener('load', () => {
  const images = [
    '/assets/images/gastly.png',
    '/assets/images/haunter.png',
    '/assets/images/gengar.png',
    '/assets/images/mega gengar.png',
    '/assets/images/gigantamax gengar.png'
  ];
  const evolveImg = document.getElementById('evolve-img');
  let idx = 0;

  const evoInterval = setInterval(() => {
    idx++;
    if (idx < images.length) {
      evolveImg.src = images[idx];
    } else {
      clearInterval(evoInterval);
      // after a short pause, fade out the splash
      setTimeout(() => {
        document.documentElement.classList.remove('loading');
        const splash = document.getElementById('splash-screen');
        splash.style.transition = 'opacity 0.6s ease';
        splash.style.opacity = 0;
        setTimeout(() => splash.remove(), 600);
      }, 500);
    }
  }, 1000);
});

// ABOUT ACCORDION (multiple)
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const accordion = header.parentElement;
      accordion.classList.toggle('open');
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.projects-section .carousel-track');
  const slides = Array.from(track.children);
  const dots   = Array.from(document.querySelectorAll('.projects-section .nav-dot'));
  const prev   = document.querySelector('.projects-section .prev-arrow');
  const next   = document.querySelector('.projects-section .next-arrow');
  let index = 0;

  function update() {
    track.style.transform = `translateX(-${100 * index}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
  }

  prev.addEventListener('click', () => {
    index = index > 0 ? index - 1 : slides.length - 1;
    update();
  });
  next.addEventListener('click', () => {
    index = index < slides.length - 1 ? index + 1 : 0;
    update();
  });
  dots.forEach((dot, i) =>
    dot.addEventListener('click', () => { index = i; update(); })
  );
  // ---- Lightbox logic ----
  const lightbox    = document.querySelector('.lightbox');
  const lbImg       = lightbox.querySelector('.lightbox-img');
  const lbClose     = lightbox.querySelector('.lightbox-close');
  const lbBackdrop  = lightbox.querySelector('.lightbox-backdrop');

  // Delegate all project images & carousel images
  document.body.addEventListener('click', e => {
    // if an <img> inside .carousel-slide or .project-card
    if (
      e.target.matches('.carousel-slide img, .project-card img')
    ) {
      const src = e.target.src;
      lbImg.src = src;
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
    }
  });

  // Close on click of X or backdrop
  const closeLB = () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    lbImg.src = '';
  };
  lbClose.addEventListener('click', closeLB);
  lbBackdrop.addEventListener('click', closeLB);

  // Close on ESC key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) {
      closeLB();
    }
  });
});


