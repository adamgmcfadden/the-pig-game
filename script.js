'use strict';

// save required elements as variables
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
const scores = [0, 0];
let currentScore = 0;
// player 1 is '0' and player 2 is '1'
let activePlayer = 0;

// rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2. Display corresponding dice andscore
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. Check for rolled 1: If true, switch player
  if (dice !== 1) {
    //  add rolled dice to current
    currentScore += dice;
    // set activeplayer score to currentScore
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //   Switch to next player
    // reset active player current score to 0
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    // reset global currentScore to 0
    currentScore = 0;
    // if player 0, switch to 1 and vice versa
    activePlayer = activePlayer === 0 ? 1 : 0;
    // remove class if there and if not add it
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
