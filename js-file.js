const choices = ['rock', 'paper', 'scissors'];

let result = 0;
let playerScore = 0;
let computerScore = 0;
let tiedScore = 0;

function getComputerChoice() {
    
    randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {  
      
      if ((playerSelection == "rock" && computerSelection == "scissors") ||
          (playerSelection == "paper" && computerSelection == "rock") || 
          (playerSelection == "scissors" && computerSelection == "paper")) {
        
           result = playerScore++;
          
         } else if 
         
         ((computerSelection == "rock" && playerSelection == "scissors") ||
          (computerSelection == "paper" && playerSelection == "rock") ||
          (computerSelection == "scissors" && playerSelection == "paper")) {

            result = computerScore++;

         } else if 
         
         ((computerSelection == "rock" && playerSelection == "rock") ||
          (computerSelection == "paper" && playerSelection == "paper") ||
          (computerSelection == "scissors" && playerSelection == "scissors")) {
            
            result = tiedScore++;

          }

 return result;
}  


function game() {
  
  for(let rounds = 0; rounds < 5; rounds++) {
    const playerSelection = prompt("Which sign do you choose?");
    const computerSelection = getComputerChoice();  
    let roundResult = playRound(playerSelection, computerSelection);
  } 
}
console.log(`Player score: ${playerScore}`);
console.log(`Computer score: ${computerScore}`);
console.log(`Tied: ${tiedScore}`);
console.log(game());

