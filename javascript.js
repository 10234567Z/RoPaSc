let choices = ['rock', 'paper', 'scissor'];
let roundWinner
, computerPoints = 0
, playerPoints = 0;

let playerScore = document.querySelector('.PlayerScore');
let computerScore = document.querySelector('.ComputerScore');
playerScore.textContent = playerPoints;
computerScore.textContent = computerPoints;

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
    console.log(choices[computerRandomChoice]); // Debugging purposes
    return choices[computerRandomChoice].toString();
}
function getPlayerChoice(value) {
    let playerChoice = value;
    playRound(playerChoice,getComputerChoice());
}

function playRound(playerSelection, computerSelection) {

    // // What if the playerInput is not in the choices array 
    // if (!choices.includes(playerSelection)) {
    //     roundWinner = "Please enter something only among rock , paper or scissor.";
    // }
    // What if the computer and player choices are same
    if (playerSelection == computerSelection) {
        roundWinner = "Draw";
    }
    // What if player choose rock and computer choeos paper
    else if (playerSelection == 'rock' && computerSelection == choices[1]) {
        roundWinner = "Computer";
        console.log(roundWinner);
    }
    // What if player choose rock and computer choose scissor
    else if (playerSelection == 'rock' && computerSelection == choices[2]) {
        roundWinner = "Player";
        console.log(roundWinner);
    }
    // What if player choose paper and computer choose rock
    else if (playerSelection == 'paper' && computerSelection == choices[0]) {
        roundWinner = "Player";
        console.log(roundWinner);
    }
    // What if player choose paper and computer choose scissor
    else if (playerSelection == 'paper' && computerSelection == choices[2]) {
        roundWinner = "Computer";
        console.log(roundWinner);
    }
    // What if player choose scissor and computer choose rock
    else if (playerSelection == 'scissor' && computerSelection == choices[0]) {
        roundWinner = "Computer";
        console.log(roundWinner);
    }
    // What if player choose scissor and computer choose paper
    else if (playerSelection == 'scissor' && computerSelection == choices[1]) {
        roundWinner = "Player";
        console.log(roundWinner);
    }
    gamePlay();
}


function gamePlay() {

    /** This commented out code is for future upgradations!

    // let totalRounds = "";
    // if (isNaN(totalRounds)) {
    //     alert("Please enter a number");
    //     gameLoop() // For restarting the game
    // }

    */

    let announceWinner = document.querySelector('.winners');
    let container = document.querySelector('.container');
    if(computerPoints === 5){
        container.textContent = "Computer side WINS!" ;
    }
    else if(playerPoints === 5){
       container.textContent = "Humanity WON!";
    }
    else if(playerPoints !== 5 && computerPoints !== 5){
        if(roundWinner == "Draw"){
            announceWinner.textContent = "Whoa! Its a draw.";
        }
        else if(roundWinner == "Player"){
            announceWinner.textContent = "Human won this round!";
            playerPoints++;
            playerScore.textContent = playerPoints;

            /**To not forward to next round even after 5 points on board */
            if(computerPoints === 5){
                container.textContent = "Computer side WINS!" ;
            }
            else if(playerPoints === 5){
               container.textContent = "Humanity WON!";
            }
        }
        else if(roundWinner == "Computer"){
            announceWinner.textContent = "Computers...as always won the race of this round";
            computerPoints++;
            computerScore.textContent = computerPoints;

            /**To not forward to next round even after 5 points on board */
            if(computerPoints === 5){
                container.textContent = "Computer side WINS!" ;
            }
            else if(playerPoints === 5){
               container.textContent = "Humanity WON!";
            }
        }
    }

}