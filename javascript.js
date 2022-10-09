let choices = ['rock', 'paper', 'scissor'];
let roundWinner;


function getComputerChoice() {
    /**
     * Math.random will choose any number between 0-1
     * choices.length will amount of elements in choices array
     * math.floor at the end will do its work
     * we used choices's length because it is always a number bigger than index and math.floor takes index
     * and multiplying the 1>number<0 number to it will always be less than length leading it to math floor which takes only index
     * by this the number cant exceed past the maximum index number of array
     */
    let computerRandomChoice = Math.floor(Math.random() * choices.length);
    // console.log(choices[computerRandomChoice]); // Debugging purposes
    return choices[computerRandomChoice].toString();
}
function getPlayerChoice() {
    let playerChoice = prompt("Choose Rock , Paper or Scissor", "").toLowerCase();
    return playerChoice.toString();
}

function playRound(playerSelection, computerSelection) {

    // What if the playerInput is not in the choices array 
    if (!choices.includes(playerSelection)) {
        roundWinner = "Please enter something only among rock , paper or scissor.";
    }
    // What if the computer and player choices are same
    else if (playerSelection == computerSelection) {
        roundWinner = "Its a draw!";
    }
    // What if player choose rock and computer choose paper
    else if (playerSelection == choices[0] && computerSelection == choices[1]) {
        roundWinner = "You lost against the paper!";
    }
    // What if player choose rock and computer choose scissor
    else if (playerSelection == choices[0] && computerSelection == choices[2]) {
        roundWinner = "WHOA rock on scissor! gratz on win dud";
    }
    // What if player choose paper and computer choose rock
    else if (playerSelection == choices[1] && computerSelection == choices[0]) {
        roundWinner = "WHOA! you win by catching the rock";
    }
    // What if player choose paper and computer choose scissor
    else if (playerSelection == choices[1] && computerSelection == choices[2]) {
        roundWinner = "Katch! Katch! you lost";
    }
    // What if player choose scissor and computer choose rock
    else if (playerSelection == choices[2] && computerSelection == choices[0]) {
        roundWinner = "Broke right through ya! You lost";
    }
    // What if player choose scissor and computer choose paper
    else if (playerSelection == choices[2] && computerSelection == choices[1]) {
        roundWinner = "You cut through me this time and win for now";
    }
}


function gameLoop() {
    let roundResult
        , playerChoice
        , computerChoice
        , computerPoints = 0
        , playerPoints = 0;

    let totalRounds = prompt("How many rounds you want to play?", "");
    if (isNaN(totalRounds)) {
        alert("Please enter a number");
        gameLoop() // For restarting the game
    }
    else if(totalRounds > 10){
        alert("The maximum amount of total rounds are 10")
        gameLoop() // For restarting the game
    }
    else{
        for (i = 0; i < totalRounds; i++) {
            computerChoice = getComputerChoice();
            playerChoice = getPlayerChoice();
            playRound(playerChoice,computerChoice);

            if (roundWinner.includes("win")){
                playerPoints++;
                console.log(roundWinner);
            }
            else if (roundWinner.includes("lost")){
                computerPoints++;
                console.log(roundWinner)
            }
            else if(roundWinner.includes("draw")){
                i-- // If the round is declared draw , take back the turn
                console.log(roundWinner)
            }
        }

        /** IN the statements below , + 1 was done because 
         * the for loop will end with points at a number less than actual finishing number 
         */
        if(computerPoints > playerPoints){
            console.log("You lost the game by " + (computerPoints - playerPoints))
        }
        else if(computerPoints < playerPoints){
            console.log("You won the game by " + (playerPoints - computerPoints))
        }
    }

}

gameLoop(); // Game will start from here by calling this function
