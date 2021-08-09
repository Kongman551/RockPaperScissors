let pScore = 0;
let cScore = 0;
let round = 0;

function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    let result = "";

    switch (num) {
        case 0:
            result = "Rock";
            break;
        case 1:
            result = "Paper";
            break;
        case 2:
            result = "Scissors";
            break;
    }
    return result;
}

function playRound(playerSelection, computerSelection) {

    let input = prompt("Rock, Paper, or Scissors?").toUpperCase();
    let choice = computerPlay().toUpperCase();

    playerSelection = input;
    computerSelection = choice;

    console.log("Computer selection: " + computerSelection);
    if (playerSelection == "ROCK") {
        if (computerSelection == "SCISSORS") {
            pScore++;
            alert("Rock crushes scissors! Player wins!");
        }
        else if (computerSelection == "PAPER"){
            cScore++;
            alert("Your rock was covered! Computer wins!");
        }
        else{
            alert("It's a tie!");
        }
    }

    if (playerSelection == "PAPER") {
        if (computerSelection == "ROCK") {
            pScore++;
            alert("Paper covers rock! Player wins!");
        }
        else if (computerSelection == "SCISSORS"){
            cScore++;
            alert("Your paper was cut! Computer wins!");
        }
        else{
            alert("It's a tie!");
        }
    }

    if (playerSelection == "SCISSORS") {
        if (computerSelection == "PAPER") {
            pScore++;
            alert("Scissors cut paper! Player wins!");
        }
        else if (computerSelection == "ROCK") {
            cScore++;
            alert("Rock crushes scissors! Computer wins!");
        }
        else{
            alert("It's a tie!");
        }
    }
    console.log("Player: " + pScore);
    console.log("Computer: " + cScore);
    round++;
}


function game() {

    while (round < 5) {
        playRound();
    }
    if (round = 5) {
        if (pScore > cScore) {
            alert("Congratulations! You won!");
            console.log("Player wins!");
        }
        else if (pScore === cScore){
            alert("Tie Game!")
        }
        else {
            alert("Better luck next time! Computer wins");
            console.log("Computer wins!")

        }
    }
}
