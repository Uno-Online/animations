class Arco {

    constructor(genCards, delay = 0) {
        console.log(genCards)
        let cards = document.querySelector('.cards.cards-curved');
        let w = cards.offsetWidth;
        let totalarc = 270;
        let numcards = genCards.length;
        let angles = Array(numcards).fill('').map((a, i) => (totalarc / numcards * (i + 1)) - (totalarc/2 + (totalarc / numcards) / 2));
        let margins = angles.map((a, i) => w / numcards * (i + 1));
        
        angles.forEach((a, i) => {
            const card = genCards[i];
            card.classList.add('card');
            cards.appendChild(card);
            const cardReveal = JSON.parse(JSON.stringify(card.src));
            card.src = 'assets/img/cards/uno.png'
                setTimeout(() => {
                    card.style = `transform:rotate(${angles[i] / 3}deg); filter: brightness(0%);`
                }, delay)
                setTimeout(() => {
                    card.style.setProperty('filter', 'brightness(100%)');
                    card.src = cardReveal;
                }, delay + 500)
            })
    }
    
}

new Arco(game.generateRandomCardsNum(7), 1000);