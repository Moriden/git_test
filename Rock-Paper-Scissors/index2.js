function computerPick () {
    const computerChoice = ['rock', 'paper', 'scissors'];
    const randomGenerator = [Math.floor(Math.random()*computerChoice.length)];
    return computerChoice[randomGenerator];
};

function playRound (playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();

    if (playerChoice === computerChoice) {
    return 'tie';
} else if (playerChoice === 'rock' && computerChoice === 'scissors' ||
        playerChoice === 'paper' && computerChoice === 'rock' ||
        playerChoice === 'scissors' && computerChoice === 'paper') {
return 'you have won !';
} else {
    return 'you have lost !';
}
}

function score () {
    let computerScore = 0;
    let playerScore = 0;

    if (playerScore > computerScore) {
        return  `you won': ${playerScore} to ${computerScore}`;
    } else if (playerScore < computerScore) {
        return `you lost': ${playerScore} to ${computerScore}`;
    } else if (playerScore === computerScore) {
        return `tie': ${playerScore} to ${computerScore}`;
    }
};


rockBtn.addEventListener('click', () => {
    playRound(rockBtn);

        const paperBtn = document.querySelector('.paperBtn');

        paperBtn.addEventListener('click', () => {
            playRound(paperBtn);
    
            const scissorsBtn = document.querySelector('.scissorsBtn');

        scissorsBtn.addEventListener('click', () => {
            playRound(scissorsBtn);
            
            const resultsDiv = document.querySelector('#resultEnd');

            function playRound(playerSelection) {
              // ...
              resultsDiv.textContent = `You chose ${playerSelection}. Computer chose ${computerSelection}. ${result}`;
            }

console.log(gameSettings());
console.log(score());  

