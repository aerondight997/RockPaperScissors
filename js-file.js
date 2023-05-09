const choices = ['rock', 'paper', 'scissors'];

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
        
           winningMessage = `You won! ${playerSelection} beats ${computerSelection}.`;

         }
     if ((computerSelection == "rock" && playerSelection == "scissors") ||
         (computerSelection == "paper" && playerSelection == "rock") ||
         (computerSelection == "scissors" && playerSelection == "paper")) {

           winningMessage = `You won! ${computerSelection} beats ${playerSelection}.`;

         }
     if (playerSelection == computerSelection) {

        winningMessage = 'Its tied! Try again!';

     }
 return winningMessage;  
}

function game() {
    
    let userInput = prompt();
    let scoreCount = 0;
    let winner = '';
    let scorePlayer = 0;
    let scoreComputer = 0;

    for(scoreCount = 0; scoreCount <= 5; scoreCount++) {
        playRound(playerSelection, computerSelection); 
        
        if(winningMessage = `You won! ${playerSelection} beats ${computerSelection}.`) {
               
               scorePlayer++;

        } else if 
          (winningMessage = `You won! ${computerSelection} beats ${playerSelection}.`) {
               
               scoreComputer++;

        } else if 
          (winningMessage = 'Its tied! Try again!') {
            
            playRound(playerSelection, computerSelection); 
            
        }
    }

    if (scorePlayer === 5){
        
        winner = "Human is victorious! Computer is done for!";

    } else if 
       (scoreComputer === 5) {

         winner = "Computer has won! Human runs in fear!";

       }
}





