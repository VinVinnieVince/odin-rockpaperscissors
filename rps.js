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
function roundResult(playerInput, compInput) {
    displayResult.textContent = String(playRound(playerInput, compInput)) + '!';
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
allBtn.forEach( (btn) => {
    btn.addEventListener('click', () => {
        let playerInput = btn.className;
        let compInput = getCompChoice();

        addtoRound();
        roundResult(playerInput, compInput);
        displayPInput(playerInput);
        displayCInput(compInput);
    })
});
