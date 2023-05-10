const choices = ['rock', 'paper', 'scissors'];

let winningMessage = "";
let playerScore = 0;
let computerScore = 0;




function getComputerChoice() {
    
    randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {  
      
      if ((playerSelection == "rock" && computerSelection == "scissors") ||
          (playerSelection == "paper" && computerSelection == "rock") || 
          (playerSelection == "scissors" && computerSelection == "paper")) {
        
           winningMessage = `You won! ${playerSelection} beats ${computerSelection}.`;
           playerScore++;
          
         } else if 
         
         ((computerSelection == "rock" && playerSelection == "scissors") ||
          (computerSelection == "paper" && playerSelection == "rock") ||
          (computerSelection == "scissors" && playerSelection == "paper")) {

           winningMessage = `You lost! ${computerSelection} beats ${playerSelection}.`;
           computerScore++;
           
         }
 return winningMessage;
}  


function game() {
  
  for(let rounds = 0; rounds < 5; rounds++) {
    const playerSelection = prompt("Which sign do you choose?");
    const computerSelection = getComputerChoice();  
    let roundResult = playRound(playerSelection, computerSelection);

    
  } 
}

console.log(game());

