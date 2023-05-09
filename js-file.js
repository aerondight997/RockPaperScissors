const choices = ['rock', 'paper', 'scissors'];

let winningMessage = "";
let winner = "";
let scorePlayer;
let scoreComputer;
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
    
    let scoreCount;

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
 return winner;     
}


