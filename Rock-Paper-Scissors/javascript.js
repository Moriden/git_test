const playerChoice = document.querySelector(".playerChoice");
const computerChoice = document.querySelector(".computerChoice");
const resultEnd = document.querySelector(".resultEnd");
const choiceBtn = document.querySelectorAll(".choiceBtn");

let player;
let computer;
let result;

choiceBtn.forEach(button => button.addEventListener ("click", () =>  {
player = button.textContent;    
computerTurn();

playerChoice.textContent = `player ${player}`;
computerChoice.textContent = `computer ${computer}`;
resultEnd.textContent = checkWinner ();
})); 


function computerTurn() { 
const randNum = Math.floor(Math.random() *3) +1;   

switch(randNum){
    case 1:
    computer= "ROCK";
    break;
case 2:
    computer= "PAPER";
    break;
case 3:
        computer= "SCISSORS";
    break;
}
}

function checkWinner() {
    if (player == computer){
        return "Draw";
    }

    else if (computer == "ROCK") {
        return (player == "PAPER") ? "You win" : "You lose"
    }

    else if (computer == "PAPER") {
        return (player == "SCISSORS") ? "You win" : "You lose"
    }

    else if (computer == "SCISSORS") {
        return (player == "ROCK") ? "You win" : "You lose"
    }
}




