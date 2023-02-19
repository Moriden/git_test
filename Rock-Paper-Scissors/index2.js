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


function gameSettings (playerChoice, computerChoice) {
    for (let round = 0; round < 5; round++) {
        const playerChoice = prompt ('choose', 'rock', 'paper', 'scissors');
        const computerChoice = computerPick();
        const result = playRound(computerChoice, playerChoice);
        console.log("ME",playerChoice, "COMPUTER",computerChoice, '=', result);
    }
}

console.log(gameSettings());
console.log(score());  




