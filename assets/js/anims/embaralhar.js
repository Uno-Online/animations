game.generateCards(7);
let cardsEl = document.querySelectorAll('.cards img');

cardsEl.forEach(card => {
    card.classList.add('sameSpace');
});

let startCards = gsap.timeline();
let tweek = gsap.fromTo('.cards img', {delay: .8, rotation: 12, x: '-120px', stagger: .5}, {delay: .8, rotation: 0, x: 12, ease: 'back', duration: 1, stagger: .5});
tweek.play();

reloadBtn.onclick = () => {
    tweek.restart();
}