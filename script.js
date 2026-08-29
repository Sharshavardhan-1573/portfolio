document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', () => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

const revealTargets = document.querySelectorAll('.feature-card, .step, blockquote, .buy-card');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.14 });

revealTargets.forEach((target) => {
    target.classList.add('reveal');
    revealObserver.observe(target);
});