// rps = Rock paper scissors

//*Pseudocode */

// 1. Get CPU choice
    // 1a. Generate random number:  0, 1, 2
    // 1b. Convert number to choice (Rock, Paper, Scissors)
// 2. Get Human choice
    // 2a. Numbers? vs Choices?
    // Pros: Numbers are faster ; Cons: May be confusing initially
    // 2b. Check if choice is valid
// 3. Generate text: 'Rock... Paper... Scissors!'
// 4. Show CPU choice
// 5. If
    // a. Same choice = Show 'draw!'
    // b. Inferior choice = Show 'CPU wins!'
    // c. Superior chocie = Show 'you win!'
// 6. Store variable for player and CPU scores
// 7. Increment if either side wins a game
// 8. Best of 5

function getCompChoice() {
    
    let choice;
    let num = Math.floor(Math.random() * 3);

    if (num === 0) {
        choice = 'Rock';
    } else if (num === 1) {
        choice = 'Paper';
    } else {
        choice = 'Scissors';
    }
    return choice
}

function getPlayerChoice() {
    
    let num = Number(prompt("Enter a choice (1 = Rock, 2 = Paper, 3 = Scissors)"));
    let choice;
    
    while (num != 1 && num != 2 && num != 3) {
        num = Number(prompt("Please enter a valid number! (1 = Rock, 2 = Paper, 3 = Scissors)"));
    }

        if (num === 1) {
            choice = 'Rock';
        } else if (num === 2) {
            choice = 'Paper';
        } else if (num === 3) {
            choice = 'Scissors';
        }
        return choice;
}

function getResult(playerChoice, compChoice) {
    let result, player, comp;
    if (playerChoice === 'Rock'){
        if (compChoice === 'Rock') {
            result = 'Draw';
        } else if (compChoice === 'Paper') {
            result = 'Loss';
        } else if (compChoice === 'Scissors') {
            result = 'Win';
        }
    } else if (playerChoice === 'Paper') {
        if (compChoice === 'Rock') {
            result = 'Win';
        } else if (compChoice === 'Paper') {
            result = 'Draw';
        } else if (compChoice === 'Scissors') {
            result = 'Loss';
        }
    } else if (playerChoice === 'Scissors') {
        if (compChoice === 'Rock') {
            result = 'Loss';
        } else if (compChoice === 'Paper') {
            result = 'Win';
        } 
    }   return result;
}

function bestOf() {
    let games = Number(prompt("Lets play Rock Paper Scissors! \nHow many games would you like to play? (1-9)"));
    let result, player, computer;
    let playerScore = 0;
    let computerScore = 0;

    while (games < 0 || games > 9 || (!(Number.isInteger(games)))) {
        games = Number(prompt("Please enter a number between 1-9!"));
    }
    
    for (let i = 0; i < games; i++) {
        player = getPlayerChoice();
        computer = getCompChoice();
        result = getResult(player, computer);

        if (result === 'Win') {
            playerScore++;
            alert(`You win! Computer picked ${computer}. Current score is \nPlayer:${playerScore}     Computer:${computerScore}`);
        } else if (result === 'Loss') {
            computerScore++;
            alert(`You lost! Computer picked ${computer}. Current score is \nPlayer:${playerScore}     Computer:${computerScore}`);
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

bestOf();