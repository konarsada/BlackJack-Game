/**
 * Ace (A) = 1 or 11
 * Other cards = 2, 3, 4, 5, 6, 7, 8, 9
 * J, K, Q all = 10
 */

let sum = 0, cards = [];

let hasBlackJack = false, isAlive = false;

let message = "";

let player = {
    name: "Sada",
    chips: 145
}

// let sumEl = document.querySelector("#message-el");
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": Rs." + player.chips;

function getRandomCard() {
    /**
     * if 1 -> return 11
     * if 11-13 -> return 10
     */

    let randomNumer = Math.floor(Math.random() * 13) + 1;

    if(randomNumer > 10) {
        return 10;
    }
    else if(randomNumer === 1) {
        return 11;
    }
    else {
        return randomNumer;
    }
}

function startGame() {
    isAlive = true;

    let firstCard = getRandomCard();
    let secondCard = getRandomCard();

    cards = [firstCard, secondCard];

    sum = firstCard + secondCard;

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
    if(isAlive && !hasBlackJack) {
        let card = getRandomCard();
    
        sum += card;
        cards.push(card);

        cardsEl.textContent = ""

        renderGame();
    }
}