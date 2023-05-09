const choices = ['rock', 'paper', 'scissors'];

let winningMessage = "";
let winner = "";
let scorePlayer = 0;
let scoreComputer = 0;


const playerSelection = prompt("Which sign do you choose?");
const computerSelection = getComputerChoice();

function getComputerChoice() {
    
    randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {    
      
     if ((playerSelection == "rock" && computerSelection == "scissors") ||
         (playerSelection == "paper" && computerSelection == "rock") || 
         (playerSelection == "scissors" && computerSelection == "paper")) {
        
           winningMessage = `You won! ${playerSelection} beats ${computerSelection}.`;
           scorePlayer++;
         } else if 
         
         ((computerSelection == "rock" && playerSelection == "scissors") ||
         (computerSelection == "paper" && playerSelection == "rock") ||
         (computerSelection == "scissors" && playerSelection == "paper")) {

           winningMessage = `You lost! ${computerSelection} beats ${playerSelection}.`;
           scoreComputer++;

         }
 return winningMessage;
        }  


function game() {
  
  for(let rounds = 1; rounds <= 5; rounds++) {
     






  }





  
    if (scorePlayer == 5) {
        
      winner = "Human is victorious! Computer is done for!";

    } else if (scoreComputer == 5) {
         
      winner = "Computer has won! Human runs in fear!";

    }
 return winner;     
}

console.log(scorePlayer);
console.log(scoreComputer);
console.log(game());

