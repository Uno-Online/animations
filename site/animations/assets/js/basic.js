class Basic {
    static generateGameCards() {
        // generate game cards
        const userBoard = document.querySelector('.cards.cards-curved .deck');
        const cards = game.generateCardsNum(7);
        const originalCards = game.generateRandomCardsNum(7);

        cards.forEach((card, i) => {
            card.style.setProperty('--i', i + 1);
            card.style.setProperty('--numCards', cards.length);
            card.classList.add('card');

            userBoard.appendChild(card);

            //fx
            setTimeout(() => {
                card.classList.add('uno-card');
            }, 500);

            setTimeout(() => {
                card.src = originalCards[i].src;
                // card.classList.remove('uno-card');
                card.classList.add('select');
                card.setAttribute('name', originalCards[i].name);
                card.classList.add('spread');
            }, 1000);
        });

        // generate game cards for another users
        const userCards = document.querySelectorAll('.user-cards');
        userCards.forEach((user) => {
            const cards = game.generateCardsNum(7);
            for (let card of cards) {
                user.innerHTML += card.outerHTML;
            }
        });
    }

    static generateBg() {
        let randomNumber = Math.floor(Math.random() * 5);

        let bg =
            randomNumber == 0
                ? 'radial-gradient(50% 50% at 50% 50%, rgb(183 175 125) 21.87%, rgb(149 129 25) 100%'
                : randomNumber == 1
                ? 'radial-gradient(50% 50% at 50% 50%, #43F555 0%, rgb(33 110 69) 100%)'
                : randomNumber == 2
                ? 'radial-gradient(50% 50% at 50% 50%, #F97E84 23.44%, rgb(181 16 23) 100%)'
                : 'radial-gradient(50% 50% at 50% 50%, #65C0E3 0%, #3E6BD9 100%)';
        let bgImage = '';
        // bgImage += "url('assets/img/bg-1.png') repeat";
        // bgImage += "url('assets/img/pattern02.png') repeat,";
        bgImage += "url('assets/img/pattern01.png') repeat";
        // bgImage += "url('assets/img/Oct002.svg') no-repeat center 50%/cover";
        document.body.style.setProperty('background', `${bgImage}, ${bg}`);
        // prevent drag images
        document.querySelectorAll('img').forEach((img) => {
            img.draggable = false;
        });
    }
}

(() => {
    Basic.generateGameCards();
    Basic.generateBg();
})();
