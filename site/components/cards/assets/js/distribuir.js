// generate game
(() => {
    // generate game cards
    const userBoard = document.querySelector('.cards.cards-curved .deck');
    const cards = game.generateCardsNum(7)
    const originalCards = game.generateRandomCardsNum(7);
    cards.forEach((card, i) => {
        card.style.setProperty('--i', (i+1));
        card.style.setProperty('--numCards', cards.length);
        card.classList.add('card');
        card.classList.add('select');
        userBoard.innerHTML += card.outerHTML;
    });

    // generate bg
    let randomNumber = Math.floor(Math.random() * 5);
    let bg = randomNumber == 0 ? 'radial-gradient(50% 50% at 50% 50%, #FFF5B1 21.87%, #E3BF00 100%'
                : randomNumber == 1 ? 'radial-gradient(50% 50% at 50% 50%, #43F555 0%, #01A54E 100%)' 
                : randomNumber == 2 ? 'radial-gradient(50% 50% at 50% 50%, #F97E84 23.44%, #ED1A24 100%)'  
                : 'radial-gradient(50% 50% at 50% 50%, #65C0E3 0%, #3E6BD9 100%)';
    document.body.style.setProperty('background', bg);
})();

class Distribuir {

    constructor() {
        const userCards = document.querySelectorAll('.user-cards');
        this.generateCardsFromUser(userCards);
    }

    generateCardsFromUser(userCards) {
        userCards.forEach(user => {
            const cards = game.generateCardsNum(7);
            for(let card of cards) {
                user.innerHTML += card.outerHTML;
            }
        });
    }

}

new Distribuir();