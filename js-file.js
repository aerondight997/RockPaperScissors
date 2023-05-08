function getComputerChoice {
    const choices = ["Rock", "Paper", "Scissors"];
    randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}