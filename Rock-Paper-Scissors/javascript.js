const userChoice = document.getElementsByClassName("userchoice");
const computerChoice = document.getElementsByClassName("computerchoice");
const resultDisplay = document.getElementsByClassName("result");
const possibleChoices = document.querySelectorAll("button");

let user;
let computer;
let result;  
 
possibleChoices.forEach(button => button.addEventListener("click", () => {

user = button.textContent;
computerTurn();
userChoice.textContent = `user" ${user}`;
computerChoice.textContent = `computer ${computer}`;
result.textContent = checkWinner();
}));

function computerTurn(){
    const randNum = Math.floor(Math.random() *3);

    switch(randNum){
        case 1:
        computer = "ROCK";
        break;
        case 2:
        computer = "PAPER";
        break;
        case 3:
        computer = "SCISSORS";
        break;
    }
}

function checkWinner() {
    if (user == computer){
return "Draw"
}

else if (computer == "ROCK") {
return (user == "PAPER") ? "You win" : "You lose"
}

else if (computer == "PAPER"){
    return (user == "SCISSORS") ? "You win" : "You lose"
}

else if (computer == "SCISSORS"){
    return (user == "ROCK") ? "You win" : "You lose"
}
};