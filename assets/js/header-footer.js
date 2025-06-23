// Find all elements with the header & footer and injects the corresponding file/templates.

async function head_foot() {
    const h_f = document.querySelectorAll('[data-include]');
    await Promise.all([...h_f].map(async hf => {
        const url = hf.getAttribute('data-include');
        const resp = await fetch(url);
        hf.innerHTML = await resp.text();
    }));
    initNavToggle();
}

function initNavToggle() {
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav   = document.querySelector('.site-nav');
  if (!navToggle || !siteNav) return;

  // open/close
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    siteNav.classList.toggle('open');
  });

  // close on link-click (mobile UX)
  siteNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 768) {
        navToggle.classList.remove('open');
        siteNav.classList.remove('open');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', head_foot);
