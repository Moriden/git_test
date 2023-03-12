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


const rockBtn = document.querySelector('.rockBtn');

rockBtn.addEventListener('click', () => {
    playRound(playerChoice(rockBtn));

});

const paperBtn = document.querySelector('.paperBtn');

paperBtn.addEventListener('click', () => {
    playRound(playerChoice(paperBtn));

});

const scissorsBtn = document.querySelector('.scissorsBtn');

scissorsBtn.addEventListener('click', () => {
    playRound(playerChoice(scissorsBtn));

});

console.log('rockBtn', 'paperBtn', 'scissorsBtn');


function gameSettings (playerChoice, computerChoice) {
    for (let round = 0; round < 5; round++) {

const resultsDiv = document.querySelector('#resultEnd');
        const resultsDiv = `You chose ${playerChoice}, Computer chose ${computerChoice}, "=" ${result}`;
        const computerChoice = computerPick();
        
        function playRound (playerChoice, computerChoice) {
            playerChoice = playerChoice.toLowerCase();
        const winner = playRound(computerChoice, playerChoice);
        console.log("ME",playerChoice, "COMPUTER",computerChoice, '=', result);
    }
}


console.log(score());  
console.log(gameSettings());
console.log(winner());  

