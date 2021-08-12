//Global Variables
const rockButton = document.getElementById('rock-btn');
const paperButton = document.getElementById('paper-btn');
const scissorsButton = document.getElementById('scissors-btn');
const resultsContainer = document.getElementById('results-container');
const results = document.getElementById('results');
const playerScore = document.getElementById('p-score');
const compScore = document.getElementById('c-score');
const restartButton = document.getElementById('restart-btn');
const modal = document.getElementById("popUp");
const popUpRestart = document.getElementById('popUp-restart-btn');
const popUpResult = document.getElementById('popUp-result');
const popUpImage = document.getElementById('popUp-img');

let pScore = 0;
let cScore = 0;

//Event Listeners
rockButton.addEventListener('click', function doRock() {
    playRound("ROCK", computerPlay());
});
paperButton.addEventListener('click', function doPaper() {
    playRound("PAPER", computerPlay());
});
scissorsButton.addEventListener('click', function doScissors() {
    playRound("SCISSORS", computerPlay());
});
restartButton.addEventListener('click', () => restart());

popUpRestart.addEventListener('click', function () {
    modal.style.display = 'none';
    restart();
});

/* function checkResults(){
    if(results.textContent != ''){
        resultsContainer.style.display='block';
    }
    else {
        resultsContainer.style.display='none';
    }
} */

function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    let result = "";

    switch (num) {
        case 0:
            result = "ROCK";
            break;
        case 1:
            result = "PAPER";
            break;
        case 2:
            result = "SCISSORS";
            break;
    }
    return result;
}

function updateScore() {
    playerScore.textContent = `Player: ${pScore}`;
    compScore.textContent = `Computer: ${cScore}`;
}


function playRound(playerSelection, computerSelection) {

    if (playerSelection == "ROCK") {
        if (computerSelection == "SCISSORS") {
            pScore++;
            updateScore();
            results.textContent = "Rock crushes scissors! Player wins!";
        }
        else if (computerSelection == "PAPER") {
            cScore++;
            updateScore();
            results.textContent = "Your rock was covered! Computer wins!";
        }
        else {
            results.textContent = "It's a tie!";
        }
    }

    if (playerSelection == "PAPER") {
        if (computerSelection == "ROCK") {
            pScore++;
            updateScore();
            results.textContent = "Paper covers rock! Player wins!";
        }
        else if (computerSelection == "SCISSORS") {
            cScore++;
            updateScore();
            results.textContent = "Your paper was cut! Computer wins!";
        }
        else {
            results.textContent = "It's a tie!";
        }
    }

    if (playerSelection == "SCISSORS") {
        if (computerSelection == "PAPER") {
            pScore++;
            updateScore();
            results.textContent = "Scissors cut paper! Player wins!";
        }
        else if (computerSelection == "ROCK") {
            cScore++;
            updateScore();
            results.textContent = "Rock crushes scissors! Computer wins!";
        }
        else {
            results.textContent = "It's a tie!";
        }
    }
    endGame(pScore, cScore);
}

function restart() {
    pScore = 0;
    cScore = 0;
    updateScore();
    results.textContent = "";
}

function endGame(pScore, cScore) {
    if (pScore == 5) {
        modal.style.display = "block";
        popUpResult.textContent = "Congratulations, you win!";
    }
    else if (cScore == 5) {
        modal.style.display = "block";
        popUpResult.textContent = "Sorry, you lost!"
    }

}
