const choices = ["rock", "paper", "scissors"];

let winningMessage = "";

function getComputerChoice() {
    randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
     if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") || 
        (playerSelection == "scissors" && computerSelection == "paper")) {
        
           winningMessage = "You won! ${playerSelection} beats ${computerSelection}";

         }
     if ((computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "paper" && playerSelection == "rock") ||
        (computerSelection == "scissors" && playerSelection == "paper")) {

           winningMessage = "You lost! ${computerSelection} beats ${playerSelection}";

         }
     if (playerSelection == computerSelection) {

        winningMessage = "It's tied! Try again!";
     }
  return winningMessage;        
}

const computerSelection = getComputerChoice();
const playerSelection = "rock";
console.log(playRound(playerSelection, computerSelection));



