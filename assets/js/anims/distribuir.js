game.generateCards(7);
let cardsEl = document.querySelectorAll('.cards img');

cardsEl.forEach((card, i) => {
    card.classList.add('sameSpace');
});

let timeline = gsap.timeline();
    timeline.fromTo('.cards img', {delay: .8, rotation: -8, zIndex:0, x: '-130px', stagger: .5}, {delay: .8, rotation: 0, x: 0, y: '-20px', ease: 'back', duration: 1, stagger: .5, onComplete: () => revealCard()});
let timelineMainCard = gsap.timeline();
    timelineMainCard.to('.cards img:nth-last-child(2)', {duration: 1.5, ease: 'circ', x: '80px', y: '-68px', rotation: "5deg"});
    timelineMainCard.to('.cards img:nth-last-child(2)', {duration: .5, ease: 'circ', x: '150px', rotation: '20deg'});
    timelineMainCard.to('.cards img:nth-last-child(2)', {duration: .5, ease: 'circ', zIndex: 2});
    timelineMainCard.to('.cards img:nth-last-child(2)', {duration: 1.5, ease: 'back', x: 0, y: '-20px', rotation: 0, });
    timelineMainCard.fromTo('.cards img:nth-last-child(3)', {delay: .8}, { zIndex: 2, duration: 1 , onComplete: () => removeAllCards()});
timelineMainCard.pause();

timeline.play();
    
function revealCard() {
    let randomNum = Math.floor(Math.random() * 7) + 1;
    const color = game.colors[Math.floor(Math.random() * game.colors.length - 1) + 1];
    const lastSecondCard = cardsEl[cardsEl.length - 2];
    timelineMainCard.resume();
    lastSecondCard.src = `assets/img/cards/${randomNum}_card_${color}.png`;
    
}
function removeAllCards() {
    cardsEl.forEach((card, i) => {
        if(i != cardsEl.length - 2) {
            card.style.transition = 'opacity 1.5s';
            card.style.opacity = 0;
            setTimeout(() => {
                card.remove();
            }, 1000);
        }
    });
}

reloadBtn.onclick = () => {
    window.location.reload();
}