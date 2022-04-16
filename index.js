const min = 2, max = 11;

let firstCard, secondCard, sum;

let hasBlackJack = false, isAlive = true;

let message = "";

firstCard = getRandomCard();
// Math.floor(Math.random() * (max - min)) + min;
secondCard = getRandomCard();

let cards = [firstCard, secondCard];

sum = firstCard + secondCard;

// let sumEl = document.querySelector("#message-el");
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function getRandomCard() {
    return 5;
}

function startGame() {
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";

    for(let i = 0; i < cards.length; i += 1) {
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = `Sum: ${sum}`;

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    }
    else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    }
    else {
        message = "You're out of the game!";
        isAlive = false;
    }

    messageEl.textContent = message;
}

function newCard() {
    console.log("Drawing a new card from the deck!");
    let card = getRandomCard();
    
    sum += card;
    cards.push(card);

    cardsEl.textContent = ""

    renderGame();
}