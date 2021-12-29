let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

//generates a random Target number
let generateTarget = () => { return Math.floor(Math.random() * 9) + 1;
};

//Comparison function between human, computer, target
let compareGuesses = (humanGuess, computerGuess, target) => {
  if (Math.abs(humanGuess - target) <= Math.abs(computerGuess - target)) {
    return true;
  } else if (Math.abs(humanGuess - target) >= Math.abs(computerGuess - target)) {
    return false;
  } else if (humanGuess === computerGuess) {
    return 'You win!';
    }
  };


//This function increases score for each round
let updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
};

//This function updates the Round number
function advanceRound() {
  currentRoundNumber++;
};

