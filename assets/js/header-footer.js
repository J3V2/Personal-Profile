// Find all elements with the header & footer and injects the corresponding file/templates.

async function head_foot() {
    const h_f = document.querySelectorAll('[data-include]');
    await Promise.all([...h_f].map(async hf => {
        const url = hf.getAttribute('data-include');
        const resp = await fetch(url);
        hf.innerHTML = await resp.text();
    }));
    
}

document.addEventListener('DOMContentLoaded', head_foot);
