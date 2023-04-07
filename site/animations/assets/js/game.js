const appCards = document.querySelector('#app .cards');

class Game {
    colors = ["yellow", "blue", "red", "green"];
    
    constructor() {
    }

    generateCards(value) {
        let i = 1;
        while(i <= value) {
            const img = document.createElement('img');
            img.src = `assets/img/cards/uno.png`;
            img.setAttribute('name', JSON.stringify({color: 'black', symbol: 'uno'})),
            // img.setAttribute('title', img.getAttribute('name'));
            appCards.appendChild(img);
            i++;
        }
    }

    generateCardsNum(value) {
        let cards = [];
        let i = 1;
        while(i <= value) {
            const img = document.createElement('img');
            img.src = `assets/img/cards/uno.png`;
            img.setAttribute('name', JSON.stringify({color: 'black', symbol: 'uno'})),
            // img.setAttribute('title', img.getAttribute('name'));
            cards.push(img);
            i++;
        }
        return cards;
    }

    generateRandomCardsNum(value) {
        let cards = [];
        let i = 1;
        while(i <= value) {
            const img = document.createElement('img');
            let randomNum = Math.floor(Math.random() * this.colors.length - 1) + 1;
            const color = this.colors[randomNum];
            img.src = `assets/img/cards/${i}_card_${color}.png`;
            img.setAttribute('name', JSON.stringify({color: color, symbol: i})),
            // img.setAttribute('title', img.getAttribute('name'));
            cards.push(img);
            i++;
        }
        return cards;
    }

    generateRandomCards(value) {
        let i = 1;
        while(i <= value) {
            const img = document.createElement('img');
            let randomNum = Math.floor(Math.random() * this.colors.length - 1) + 1;
            const color = this.colors[randomNum];
            img.src = `assets/img/cards/${i}_card_${color}.png`;
            img.setAttribute('name', JSON.stringify({color: color, symbol: i})),
            appCards.appendChild(img);
            // img.setAttribute('title', img.getAttribute('name'));
            i++;
        }
    }

    preventHoldingImgs() {
        const allImg = document.querySelectorAll('img');
        allImg.forEach(img => {
            img.draggable = false;
        });
    }

    clearAll() {
        const imgs = document.querySelectorAll('.cards img');
        imgs.forEach(img => {
            img.remove();
        })

    }

}

const game = new Game();
