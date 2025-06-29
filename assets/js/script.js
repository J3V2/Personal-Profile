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
  const track   = document.querySelector('.carousel-track');
  const slides  = Array.from(track.children);
  const dots    = Array.from(document.querySelectorAll('.nav-dot'));
  const prevBtn = document.querySelector('.prev-arrow');
  const nextBtn = document.querySelector('.next-arrow');
  let current   = 0;

  function moveToSlide(index) {
    current = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    slides.forEach((slide,i) => slide.classList.toggle('active', i === current));
    dots.forEach((dot,i)   => dot.classList.toggle('active', i === current));
  }

  // Dot navigation
  dots.forEach(dot => {
    dot.addEventListener('click', () => moveToSlide(parseInt(dot.dataset.slide)));
  });

  // Prev/Next
  prevBtn.addEventListener('click', () => moveToSlide(current - 1));
  nextBtn.addEventListener('click', () => moveToSlide(current + 1));

  // Auto-play every 5s
  setInterval(() => moveToSlide(current + 1), 5000);

  // Initialize
  moveToSlide(0);
});
