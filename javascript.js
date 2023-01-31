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
    // console.log(choices[computerRandomChoice]); // Debugging purposes
    return choices[computerRandomChoice].toString();
}
function getPlayerChoice(value) {
    let playerChoice = value;
    playRound(playerChoice,getComputerChoice());
}

function playRound(playerSelection, computerSelection) {

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

    let announceWinner = document.querySelector('.winners');
    let container = document.querySelector('.container');
    let playAgain = document.getElementById('ReButton');
    if(computerPoints === 5){
        announceWinner.textContent = "Computer side WINS!"
        playAgain.style.visibility= "visible";
    }
    else if(playerPoints === 5){
        announceWinner.textContent = "Humanity WON!";
        playAgain.style.visibility= "visible";
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
                announceWinner.textContent = "Computer side WINS!";
                playAgain.style.visibility= "visible";
            }
            else if(playerPoints === 5){
                announceWinner.textContent = "Humanity WON!";
                playAgain.style.visibility= "visible";
            }
        }
        else if(roundWinner == "Computer"){
            announceWinner.textContent = "Computers...as always won the race of this round";
            computerPoints++;
            computerScore.textContent = computerPoints;

            /**To not forward to next round even after 5 points on board */
            if(computerPoints === 5){
                announceWinner.textContent = "Computer side WINS!";
                playAgain.style.visibility= "visible";
            }
            else if(playerPoints === 5){
                announceWinner.textContent = "Humanity WON!";
                playAgain.style.visibility= "visible";
            }
            
        }
    }

}