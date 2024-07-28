// rps = rock paper scissors

function getCompChoice() {
    
    let choice;
    let num = Math.floor(Math.random() * 3);

    if (num === 0) {
        choice = 'rock';
    } else if (num === 1) {
        choice = 'paper';
    } else {
        choice = 'scissors';
    }
    return choice
}

function getPlayerChoice() {
    
    let num = Number(prompt("Enter a choice (1 = rock, 2 = paper, 3 = scissors)"));
    let choice;
    
    while (num != 1 && num != 2 && num != 3) {
        num = Number(prompt("Please enter a valid number! (1 = rock, 2 = paper, 3 = scissors)"));
    }

        if (num === 1) {
            choice = 'rock';
        } else if (num === 2) {
            choice = 'paper';
        } else if (num === 3) {
            choice = 'scissors';
        }
        return choice;
}

function playRound(playerChoice, compChoice) {
    let result;
    if (playerChoice === 'rock'){
        if (compChoice === 'rock') {
            result = 'Draw';
        } else if (compChoice === 'paper') {
            result = 'Loss';
        } else if (compChoice === 'scissors') {
            result = 'Win';
        }
    } else if (playerChoice === 'paper') {
        if (compChoice === 'rock') {
            result = 'Win';
        } else if (compChoice === 'paper') {
            result = 'Draw';
        } else if (compChoice === 'scissors') {
            result = 'Loss';
        }
    } else if (playerChoice === 'scissors') {
        if (compChoice === 'rock') {
            result = 'Loss';
        } else if (compChoice === 'paper') {
            result = 'Win';
        } else if (compChoice === 'scissors') {
            result = 'Draw';
        }
    }   return result;
}

const allBtn = document.querySelectorAll('button');
allBtn.forEach( (btn) => {
    btn.addEventListener('click', () => {
        let playerInput = btn.className;
        console.log(playRound(playerInput, getCompChoice()));
    })
})


function bestOf() {
    let games = Number(prompt("Lets play rock paper scissors! \nHow many games would you like to play? (1-9)"));
    let result;
    let playerScore = 0;
    let computerScore = 0;

    while (games < 0 || games > 9 || (!(Number.isInteger(games)))) {
        games = Number(prompt("Please enter a number between 1-9!"));
    }
    
    if (games === 0 || games === '' || games === null) {
        alert(`Maybe another time! (Refresh to run program again)`);
        return;
    }

    for (let i = 0; i < games; i++) {
        alert(`Round ${i + 1}`);

        let player = getPlayerChoice();
        let computer = getCompChoice();
        result = playRound(player, computer);

        if (result === 'Win') {
            playerScore++;
            alert(`You win! ${player} (You) beats ${computer} (Computer). Current score is \nPlayer:${playerScore}     Computer:${computerScore}`);
        } else if (result === 'Loss') {
            computerScore++;
            alert(`You lost! ${computer} (Computer) beats ${player} (You). Current score is \nPlayer:${playerScore}     Computer:${computerScore}`);
        } else if (result === 'Draw') {
            alert(`Draw - no score change! Computer picked ${computer}. Current score is \nPlayer:${playerScore}     Computer:${computerScore}`);
        }
    }

    if (playerScore > computerScore) {
        alert('Congrats! You win!');
    } else if (playerScore < computerScore) {
        alert('Better luck next time!');
    } else if (playerScore === computerScore) {
        alert('Draw! So close!');
    }
}

