const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

function playRound(playerChoice, computerChoice) {
    

}


const playerChoice = "Rock";
const computerChoice = getComputerChoice();
console.log(playRound(playerChoice, computerChoice));
