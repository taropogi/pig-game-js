"use strict";

const btnNewGame = document.querySelector(".btn--new");
const btnRollDice = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const imageDice = document.querySelector(".dice");

//initial values
let totalScore, currentScore, activePlayer, playing;

const init = function () {
  currentScore = 0;
  totalScore = [0, 0];

  activePlayer = 0; // used 0 and 1 to reference in array
  playing = true;
  document.getElementById("score--0").textContent = 0;
  document.getElementById("score--1").textContent = 0;
  imageDice.classList.remove("hidden");

  document.querySelector(`.player--0`).classList.remove("player--winner");
  document.querySelector(`.player--1`).classList.remove("player--winner");
};

init();

const switchPlayer = function () {
  // set current score to 0
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;

  activePlayer = activePlayer === 0 ? 1 : 0;

  document.querySelector(`.player--0`).classList.toggle("player--active");
  document.querySelector(`.player--1`).classList.toggle("player--active");
};

btnRollDice.addEventListener("click", function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    imageDice.src = `dice-${dice}.png`;

    if (dice === 1) {
      // switch player
      switchPlayer();
    } else {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    totalScore[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScore[activePlayer];

    if (totalScore[activePlayer] >= 20) {
      // winner
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      imageDice.classList.add("hidden");
      playing = false;
    }

    switchPlayer();
  }
});

btnNewGame.addEventListener("click", init);
