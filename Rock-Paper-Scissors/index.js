// select html files

//const btn = document.querySelectorAll(".choiceBtn");
//const player = document.querySelector(".playerChoice");
//const computer = document.querySelector(".computerChoice");
//const result = document.querySelector(".resultEnd");

// get random  'rock 'paper 'scissors'
let playerScore = 0;
let computerScore = 0;

function computerPick() {
  const computerChoice = ['rock', 'paper', 'scissors'];
  const randomGenerator = [Math.floor(Math.random()*computerChoice.length)];
  return computerChoice[randomGenerator];
  };


// player vs computer (game)

function game(playerChoice, computerChoice) {
  playerChoice = playerChoice.toUpperCase();
  computerChoice = computerChoice.toUpperCase();

  if (playerChoice === computerChoice) {
  return 'tie!';
} else if (playerChoice === 'rock' && computerChoice === 'scissors' ||
        playerChoice === 'paper' && computerChoice === 'rock' ||
        playerChoice === 'scissors' && computerChoice === 'paper') {
   playerScore++;
          return 'You win!';
} else {
  computerScore++;
  return 'You loose!';
}
}

function winner() {
  if (playerScore > computerScore) {
    return `you won: ${playerScore} to ${computerScore}`;
    } else if (playerScore < computerScore) {
    return `you lost: ${playerScore} to ${computerScore}`;
    } else {
      return `tie: ${playerScore} to ${computerScore}`;
    }
  }

function playGame(playerChoice, computerChoice) {
  
  playerScore = 0;
  computerScore = 0;
  
  for (let round = 0; round < 5; round++) {
  const playerChoice = prompt('choose', 'rock', 'paper', 'scissors');
  const computerChoice = computerPick();
  const result = game(playerChoice, computerChoice);
  console.log("1",playerChoice, "2",computerChoice, '=', result);
}
console.log('game over');             
console.log(winner());    
}
  
playGame();


