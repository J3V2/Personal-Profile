document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const dots   = Array.from(document.querySelectorAll('.nav-dot'));
  const prev   = document.querySelector('.prev-arrow');
  const next   = document.querySelector('.next-arrow');
  let index = 0;

  function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('current', i === index));
  }

  prev.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : slides.length - 1;
    updateCarousel();
  });
  next.addEventListener('click', () => {
    index = (index < slides.length - 1) ? index + 1 : 0;
    updateCarousel();
  });
  dots.forEach((dot, i) =>
    dot.addEventListener('click', () => { index = i; updateCarousel(); })
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

document.addEventListener('DOMContentLoaded', () => {
  // existing carousel code...
  
  // ===== Project Filters =====
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards      = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // highlight active
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const type = card.dataset.type;
        card.style.display = (filter === 'all' || type === filter) ? 'flex' : 'none';
      });
    });
  });
});

