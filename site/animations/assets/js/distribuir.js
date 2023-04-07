gameStarted$.subscribe((value) => {
    if (value) {
        for (let card of getDeck('img')) {
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
        const middle = document.querySelector('.all');
        main.dataset.lastIdx = cardIdx$.getValue();
        target.dataset.idx = cardIdx$.getValue();
        
        const timeline = gsap.timeline();
        target.style.setProperty('transition', 'none');
        const goTop = '-40vh';
            timeline.to(target, {duration: 0, rotation: '0deg', transform: 'none'})
            timeline.to(target, {duration: .2, top: goTop, left: '140px', ease: 'circ', position: 'fixed', zIndex: cardIdx$.getValue()})
            timeline.to(target, {duration: .2, opacity:0, pointerEvents: 'none', onComplete: () => {addCartToMain()}});
        const timeline2 = gsap.timeline({paused: true});
            timeline2.to(target, {opacity: '0', top:0, left:0, position: 'relative'});
            timeline2.to(target, {duration: .2, ease: 'circ', opacity: 1})
        function addCartToMain() {
            timeline2.resume();
            middle.append(target);
            const middleCardsQuantity = middle.children.length;
            // remove early card added 
            if(middleCardsQuantity >= 2) {
                middle.children[0].remove();
            }
        }
    }
}
