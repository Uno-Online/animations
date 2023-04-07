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
        const middleCard = document.querySelector('.middle .main .middle-card');
        middleCard.dataset.lastIdx = cardIdx$.getValue();
        target.dataset.idx = cardIdx$.getValue();
        
        const timeline = gsap.timeline();
            timeline.to(target, {top: '-10rem', zIndex: cardIdx$.getValue()})
            timeline.to(target, {duration: .3, opacity: 0, pointerEvents: 'none', onComplete: () => addCartToMain()});
        const timeline2 = gsap.timeline({paused: true});
            timeline2.to(target, {top:0, ease: 'back', position: 'absolute', opacity: 1});

        function addCartToMain() {
            for(let child of middleCard.children) {
                if(cardIdx$.getValue() != child.dataset.idx) {
                    child.remove();
                }
            }
            middleCard.prepend(target);
            timeline2.resume();
        }
    }
}
