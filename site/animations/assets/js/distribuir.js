global.reactive.gameStarted.subscribe((value) => {
    if (value) {
        for (let card of getDeck('img')) {
            card.addEventListener('click', (e) => {
                Animations.userCardAnimation(e.target);
                global.reactive.cardIdx.setState(global.reactive.cardIdx.getValue() + 1);
            });
        }
    }
});
class Animations {
    static getCardTopMax() {
        const calculateVh = (width) => {
            const ratio = width / global.screens.fullHd.width;
            return Math.round(-35 * ratio);
        }
        const vh = calculateVh(current.width) + 'vh';
        console.log(vh)
       return vh;
    }
    
    static userCardAnimation(target) {
        const main = document.querySelector('.middle .main');
        const middle = document.querySelector('.all');
        main.dataset.lastIdx = global.reactive.cardIdx.getValue();
        target.dataset.idx = global.reactive.cardIdx.getValue();
        
        const timeline = gsap.timeline();
        target.style.setProperty('transition', 'none');
            timeline.to(target, {duration: 0, rotation: '0deg', transform: 'none'})
            timeline.to(target, {duration: .2, top: this.getCardTopMax(), left: '140px', ease: 'circ', position: 'fixed', zIndex: global.reactive.cardIdx.getValue()})
            // timeline.to(target, {duration: .2, opacity:0, pointerEvents: 'none', onComplete: () => {addCartToMain()}});
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



  
  const current = { width: window.innerWidth, height: window.innerHeight };
  const offset = getOffset(current);
  
  console.log(offset);