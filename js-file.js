const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let tieCounter = 0;
let matchResult = 0;


function getComputerChoice() {
    
    randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection) { 

      if ((playerSelection == "rock" && computerSelection == "scissors") ||
          (playerSelection == "paper" && computerSelection == "rock") || 
          (playerSelection == "scissors" && computerSelection == "paper")) {
        
          return playerScore++;
           
         } else if 
         
         ((computerSelection == "rock" && playerSelection == "scissors") ||
          (computerSelection == "paper" && playerSelection == "rock") ||
          (computerSelection == "scissors" && playerSelection == "paper")) {

            return computerScore++;

         } else if 
         
         ((computerSelection == "rock" && playerSelection == "rock") ||
          (computerSelection == "paper" && playerSelection == "paper") ||
          (computerSelection == "scissors" && playerSelection == "scissors")) {
            
            return tieCounter++;

          }
}  


function game() {
  
  for(let rounds = 0; rounds < 5; rounds++) {
    const playerSelection = prompt("Which sign do you choose?");
    const computerSelection = getComputerChoice();  
    let roundResult = playRound(playerSelection, computerSelection);
  }
  
  if (playerScore > computerScore) {
     
     matchResult = "You won! Player beats the computer!";

  } else if
     (computerScore > playerScore) {

     matchResult = "Computer wins! You lost!" 

     }
 return matchResult;        
}

console.log(game());

