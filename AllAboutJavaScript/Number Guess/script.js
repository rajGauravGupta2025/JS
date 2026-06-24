let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
//To store the guessed number....
const guessSolt = document.querySelector('.guesses');
//The remaining attempts left....
const remaining = document.querySelector('.lastResult');
//It's a para that will show your guessed number is high or low....
const lowOrHigh = document.querySelector('.lowOrHi');
//It is used to start the game and hide the guessSlot, remaining....
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
//It is used to store your guesses number....
let prevGuess = [];
//It is used to count your numberof guesses....
let numGuess = 1;
//If it is true means you can play the game, basically this strategy is used while designing the game....
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

//Validating the guessed number i.e., checking number<0 or guess>100 or guess is not a string....
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please, Enter a valid number');
  } else if (guess < 0) {
    alert('Please, Enter a number greater than or equal to 1');
  } else if (guess > 100) {
    alert('Please a number less than or equal to 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over!, Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

/*Since validateGuess() function only validate the number, but doesn't print anything.
So this function will print your guesses and give the output accordingly....*/
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('You guessed correctly');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('Your guess is too low');
  } else if (guess > randomNumber) {
    displayMessage('Your guess is too high');
  }
}

//It is used to clean the userInput, update the previousGuess array, update the remaining guess....
function displayGuess(guess) {
  userInput.value = '';
  guessSolt.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

//It is used to print message that your guessed number is high or low....
function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  startGame();
}

function startGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSolt.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
