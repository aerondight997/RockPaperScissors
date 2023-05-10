const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    
    randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {  
      let playerScore = 0;
      let computerScore = 0;

      if ((playerSelection == "rock" && computerSelection == "scissors") ||
          (playerSelection == "paper" && computerSelection == "rock") || 
          (playerSelection == "scissors" && computerSelection == "paper")) {
        
           return playerScore++;
           console.log(`Player score: ${playerScore}`);

          
         } else if 
         
         ((computerSelection == "rock" && playerSelection == "scissors") ||
          (computerSelection == "paper" && playerSelection == "rock") ||
          (computerSelection == "scissors" && playerSelection == "paper")) {

            return computerScore++;
            console.log(`Computer score: ${computerScore}`);

         } else if 
         
         ((computerSelection == "rock" && playerSelection == "rock") ||
          (computerSelection == "paper" && playerSelection == "paper") ||
          (computerSelection == "scissors" && playerSelection == "scissors")) {
            
            return playAgain();

          }

 return;
}  

function playAgain() {
  const playerSelection = prompt("Which sign do you choose?");
  const computerSelection = getComputerChoice();  
  return playRound(playerSelection, computerSelection);
}




function game() {
  
  for(let rounds = 0; rounds < 5; rounds++) {
    const playerSelection = prompt("Which sign do you choose?");
    const computerSelection = getComputerChoice();  
    let roundResult = playRound(playerSelection, computerSelection);
  } 
}

console.log(game());

