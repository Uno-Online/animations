class Game {
    colors = ["yellow", "blue", "red", "green"];
    
    constructor() {
    }

    generateRandomCards(value) {
        const appCards = document.querySelector('#app .cards');
        let i = 1;
        while(i <= value) {
            const img = document.createElement('img');
            let randomNum = Math.floor(Math.random() * this.colors.length - 1) + 1;
            const color = this.colors[randomNum];
            img.src = `assets/img/cards/${i}_card_${color}.png`;
            img.setAttribute('name', JSON.stringify({color: color, symbol: i})),
            appCards.appendChild(img);
            i++;
        }
    }

    preventHoldingImgs() {
        const allImg = document.querySelectorAll('img');
        allImg.forEach(img => {
            img.draggable = false;
        });
    }

}

const game = new Game();
game.generateRandomCards(7);
game.preventHoldingImgs();