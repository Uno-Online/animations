game.generateCards(7);
let cardsEl = document.querySelectorAll('.cards img');

cardsEl.forEach((card, i) => {
    card.classList.add('sameSpace');
});

let timeline = gsap.timeline();
    timeline.fromTo('.cards img', {delay: .8, rotation: 12, x: '-120px', stagger: .5}, {delay: .8, rotation: 0, x: 0, ease: 'back', duration: 1, stagger: .5, onComplete: () => revealCard()});
    
timeline.play();
    
function revealCard() {
    let randomNum = Math.floor(Math.random() * 7) + 1;
    const color = game.colors[Math.floor(Math.random() * game.colors.length - 1) + 1];
    const lastSecondCard = cardsEl[cardsEl.length - 2];
    lastSecondCard.src = `assets/img/cards/${randomNum}_card_${color}.png`;
    gsap.fromTo('.cards img:nth-last-child(2)', {delay: .8, opacity: 0, filter: 'brightness(0%)'}, { opacity: 1, zIndex: 2, duration: 1, filter: 'brightness(100%)'});
}

reloadBtn.onclick = () => {
    window.location.reload();
}