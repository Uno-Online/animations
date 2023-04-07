cardIdx$.subscribe((value) => console.log(value));

gameStarted$.subscribe((value) => {
    if (value) {
        const cards = document.querySelectorAll('.cards.cards-curved .deck img');
        for (let card of cards) {
            card.addEventListener('click', (e) => {
                Animations.userCardAnimation(e.target);
                cardIdx$.setState(cardIdx$.getValue() + 1);
            });
        }
    }
});

class Animations {
    static userCardAnimation(target) {
        const timeline = gsap.timeline();
            timeline.to(target, { top: '-320px', left: '160px', rotation: '0deg', transform: 'none', zIndex: cardIdx$.getValue() });
    }
}
