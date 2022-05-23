"use strict";

const btnNewGame = document.querySelector(".btn--new");
const btnRollDice = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const imageDice = document.querySelector(".dice");

//initial values
const totalScore = [0, 0];
let currentScore = 0;
let activePlayer = 0; // used 0 and 1 to reference in array

btnRollDice.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;

  imageDice.src = `dice-${dice}.png`;

  if (dice === 1) {
    // set current score to 0
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    // switch player
    activePlayer = activePlayer === 0 ? 1 : 0;
  } else {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }
});
