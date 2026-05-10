const tiltCards = document.querySelectorAll('[data-tilt]');

tiltCards.forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `rotateX(${-y * 5}deg) rotateY(${x * 7}deg)`;
  });
  card.addEventListener('pointerleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.animate([
      { opacity: 0, transform: 'translateY(22px)' },
      { opacity: 1, transform: 'translateY(0)' }
    ], { duration: 620, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'both' });
  });
}, { threshold: 0.14 });

document.querySelectorAll('section, .research-note').forEach((section) => revealObserver.observe(section));


const spinCard = document.querySelector('[data-spin-card]');
if (spinCard) {
  spinCard.addEventListener('pointermove', (event) => {
    const rect = spinCard.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    spinCard.style.animation = 'none';
    spinCard.style.transform = `rotateX(${5 - y * 12}deg) rotateY(${x * 24}deg) translateY(-6px)`;
  });
  spinCard.addEventListener('pointerleave', () => {
    spinCard.style.animation = 'suvShowroomSpin 7.5s ease-in-out infinite';
    spinCard.style.transform = '';
  });
}
