const grid = document.getElementById('grid');
const icons = ['🍎', '🍎', '🍌', '🍌', '🍇', '🍇', '🍓', '🍓', '🍒', '🍒', '🥝', '🥝'];
let flippedCards = [];
let matchedCount = 0;

function createBoard() {
    icons.sort(() => Math.random() - 0.5);
    icons.forEach(icon => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.icon = icon;
        card.innerText = icon; // ဒီနေရာမှာ မူလက '?' ထားပြီး ပြလို့ရပါတယ်
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    });
}

function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
        this.classList.add('flipped');
        flippedCards.push(this);
        
        if (flippedCards.length === 2) checkMatch();
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    if (card1.dataset.icon === card2.dataset.icon) {
        matchedCount += 2;
        flippedCards = [];
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
        }, 1000);
    }
}

function resetGame() {
    grid.innerHTML = '';
    flippedCards = [];
    matchedCount = 0;
    createBoard();
}

createBoard();