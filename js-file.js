const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice.toLowerCase() === "Rock" && computerChoice === "Paper") {
        return "You lose! Paper beats Rock."
    }
    else if (playerChoice.toLowerCase() === "Paper" && computerChoice === "Rock") {
        return "You win! Paper beats Rock."
    }  
}
