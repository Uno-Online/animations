class Arco {
    constructor(genCards, delay = 0) {
        let cards = document.querySelector('.cards.cards-curved .deck');
        let w = cards.offsetWidth;
        let totalarc = 270;
        let numcards = genCards.length;
        let angles = Array(numcards)
            .fill('')
            .map((a, i) => (totalarc / numcards) * (i + 1) - (totalarc / 2 + totalarc / numcards / 2));
        let margins = angles.map((a, i) => (w / numcards) * (i + 1));

        angles.forEach((a, i) => {
            const card = genCards[i];
            card.classList.add('card');
            cards.appendChild(card);
            const cardReveal = JSON.parse(JSON.stringify(card.src));
            card.src = 'assets/img/cards/uno.png';
            card.style.setProperty('left', `${50 * i}px`);
            setTimeout(() => {
                card.style = `transform:rotate(${angles[i] / 3}deg); filter: brightness(0%);`;
                card.style.setProperty('left', `${50 * i}px`);
            }, delay);
            setTimeout(() => {
                card.style.setProperty('filter', 'brightness(100%) drop-shadow(2px 4px 6px #000000ab)');
                if (i == 0) {
                    card.style.setProperty('z-index', '0');
                }
                card.src = cardReveal;
                card.classList.add('select');
            }, delay + 500);
        });
    }
}
