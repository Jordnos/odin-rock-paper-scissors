let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random()*3)
    return (choice === 1 ? 'rock' : 
        choice === 2 ? 'paper' : 'scissors');
}

function updateGame() {
    let playerScoreDiv = document.querySelector("#player-score");
    let computerScoreDiv = document.querySelector("#computer-score");

    playerScoreDiv.textContent = `Player Score: ${playerScore}`;
    computerScoreDiv.textContent = `Computer Score: ${computerScore}`;

    if(playerScore >= 5 || computerScore >= 5) {
        if (playerScore > computerScore) {
            alert("You Win!");
        } else {
            alert("You Lose!");
        }
    }
}

function computeScores(result) {
    if (result === 1) {
        playerScore++;
    } else if (result === 0) {
        computerScore++;
    }
}

function displayResults(playerSelection, computerSelection, result) {
    let results = document.querySelector("#results-display");
    if (result === 1) {
        results.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (result === 0) {
        results.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        results.textContent = "It's a tie!";
    }
}

function playRound(playerSelection, computerSelection = getComputerChoice()) {
    let result;
    if (playerSelection === computerSelection) {
        result = -1;
    } else if((playerSelection === 'rock' && computerSelection === 'scissors')
        || (playerSelection === 'paper' && computerSelection === 'rock')
        || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        result = 1;
    } else {
        result = 0;
    }

    computeScores(result);
    displayResults(playerSelection, computerSelection, result);
    updateGame();
}

function initButtons() {
    let buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        let selection = button.id;
        button.addEventListener("click", (e) => playRound(selection));
    });
}

initButtons();