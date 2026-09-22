const sculpture = document.querySelector('.sculpture-wrap');
const heroArt = document.querySelector('.hero-art');

heroArt.addEventListener('pointermove', (event) => {
  const bounds = heroArt.getBoundingClientRect();
  const x = (event.clientX - bounds.left) / bounds.width - 0.5;
  const y = (event.clientY - bounds.top) / bounds.height - 0.5;
  sculpture.style.transform = `rotateY(${x * 22}deg) rotateX(${y * -18}deg) translateZ(12px)`;
});

heroArt.addEventListener('pointerleave', () => { sculpture.style.transform = ''; });

const cards = document.querySelectorAll('.art-card');
const title = document.querySelector('#detail-title');
const artist = document.querySelector('#detail-artist');
const description = document.querySelector('#detail-description');
const medium = document.querySelector('#detail-medium');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    cards.forEach((item) => item.classList.remove('selected'));
    card.classList.add('selected');
    title.textContent = card.dataset.title;
    artist.textContent = `${card.dataset.artist} · ${card.dataset.year}`;
    description.textContent = card.dataset.description;
    medium.textContent = card.dataset.medium;
  });
});

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.main-nav');
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
});
