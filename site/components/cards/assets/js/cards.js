game.generateCards(7);
game.preventHoldingImgs();

(() => {
    // cards positioned
    const cardsPositioned = document.querySelector('.cards.cards-positioned');
    for(let [i, card] of cardsPositioned.childNodes.entries()) {
        card.style = `transform: rotateX(40deg) translateZ(${i*4}px) translateX(${i*1.8}px)`;
        // console.dir(card);
    }
    
})();