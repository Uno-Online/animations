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
        const main = document.querySelector('.middle .main');
        const maincard = document.querySelector('.all');
        main.dataset.lastIdx = cardIdx$.getValue();
        target.dataset.idx = cardIdx$.getValue();
        
        const timeline = gsap.timeline();
        target.style.setProperty('transition', 'none');
        console.log(target)
            timeline.to(target, {duration: 0, rotation: '0deg', transform: 'none'})
            timeline.to(target, {duration: .2, top: '-40vh', left: '150px', ease: 'circ', position: 'fixed', zIndex: cardIdx$.getValue()})
            timeline.to(target, {duration: .2, opacity:0, pointerEvents: 'none', onComplete: () => {addCartToMain()}});
        const timeline2 = gsap.timeline({paused: true});
            timeline2.to(target, {duration: .2, top:0, left:0, position: 'absolute', onComplete: () => {
                target.style.opacity = 1
            }});

        function addCartToMain() {
            maincard.prepend(target);
            timeline2.resume();
        }
    }
}
