function getComputerChoice() {
    let choice = Math.floor(Math.random()*3)
    return (choice === 1 ? 'rock' : 
        choice === 2 ? 'paper' : 'scissors');
}

function playRound(playerSelection, computerSelection = getComputerChoice()) {
    if (playerSelection === computerSelection) {
        return -1;
    } else if((playerSelection === 'rock' && computerSelection === 'scissors')
        || (playerSelection === 'paper' && computerSelection === 'rock')
        || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        return 1;
    } else {
        return 0;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 5 && computerScore < 5) {
        let playerSelection = prompt("Rock, Paper or Scissors: ");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);

        if (result === 1) {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            playerScore++;
        } else if (result === 0) {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            computerScore++;
        } else {
            console.log("It's a tie!")
        }
    }

    if (playerScore > computerScore) {
        console.log("You Win!");
    } else {
        console.log("You Lose");
    }
}

game();