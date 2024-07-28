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
    return choice;
};

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
};

let pScore = 0;
let cScore = 0;

const computerScore = document.querySelector('.computerScore');
const playerScore = document.querySelector('.playerScore');

// Result obtained from playRound(), called at event listener
function addToScore(result) {
    if (result === 'Loss') {
        cScore++ ;
        computerScore.textContent = cScore ;
    } else if (result === 'Draw') {
        return;
    } else if (result === 'Win') {
        pScore++ ;
        playerScore.textContent = pScore ;
    }
}

const actionLog = document.querySelector('.actionLog');

const roundCount = document.createElement('p');
let roundNo = 0;
function addtoRound() {
    roundNo++ ;
    let roundText = 'Round: ' + String(roundNo);
    roundCount.textContent = roundText;
    actionLog.appendChild(roundCount);
};

const displayResult = document.createElement('p');
function displayResult(result) {
    displayResult.textContent = String(result) + '!';
    actionLog.appendChild(displayResult);
};

const playerAction = document.createElement('p');
// Player input
function displayPInput(playerInput) {
    let pInputCap = playerInput.charAt(0).toUpperCase() + playerInput.slice(1);
    playerAction.textContent = `You picked '${pInputCap}'.`;
    actionLog.appendChild(playerAction);
};

const compAction = document.createElement('p');
// Computer input
function displayCInput(compInput) {
    let cInputCap = compInput.charAt(0).toUpperCase() + compInput.slice(1);
    compAction.textContent = `Computer picked '${cInputCap}'.`;
    actionLog.appendChild(compAction);
};

const allBtn = document.querySelectorAll('button');
const resetBtn = document.createElement('button')

function clearLog() {
    pScore = 0;
    cScore = 0;
    roundNo = 0;
    
    playerScore.textContent = '0';
    computerScore.textContent = '0';

    // Clears all .actionLog child elements
    actionLog.textContent = '';

    allBtn.forEach((btn) => {
        btn.disabled = false;
    });
};

function endGame() {
    allBtn.forEach( (btn) => {
        btn.disabled = true;
    })
    
    const msg = document.createElement('p')

    if (pScore > cScore) {
        msg.textContent = 'You win! Play again?';
    } else {
        msg.textContent = `You'll get them next time! Play again?`;
    };

    resetBtn.textContent = 'Reset';
    resetBtn.addEventListener ('click', clearLog);

    actionLog.appendChild(msg);
    actionLog.appendChild(resetBtn);
};

allBtn.forEach( (btn) => {
    btn.addEventListener('click', () => {
        let playerInput = btn.className;
        let compInput = getCompChoice();
        let result = playRound(playerInput, compInput);

        addtoRound();
        displayResult(result);
        addToScore(result);
        displayPInput(playerInput);
        displayCInput(compInput);

        if (pScore + cScore === 5) {
            endGame();
        };
    });
});

