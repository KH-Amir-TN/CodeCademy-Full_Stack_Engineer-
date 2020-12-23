let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const getAbsoluteDistance = (x,y) => Math.abs(x-y);

const generateTarget = () => Math.floor(Math.random() *10);

const compareGuesses = (userGuess ,computerGuess ,secretTarget) => {
  const computerDistance = getAbsoluteDistance(computerGuess,secretTarget);
  const userDistance = getAbsoluteDistance(userGuess,secretTarget);
   return userDistance <= computerDistance ?true:false;

}

const updateScore = winner => {
  winner==='human' ? humanScore++ : computerScore++;
}

const advanceRound = () => {
  currentRoundNumber++;
}


