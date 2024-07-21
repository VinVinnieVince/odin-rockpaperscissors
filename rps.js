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
// 6. Repeat 2-5 unless cancelled

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

function rps() {
    let player = getPlayerChoice();
    let computer = getCompChoice();
    let results = getResult(player, computer);

    if (results === 'Draw') {
        if (confirm(`Draw! Opponent picked ${computer}. Try again?`) === true) {
            rps();
        } else {
            alert("Thanks for playing! Refresh page to try again.");
        }
    } else if (results === 'Win') {
        if (confirm(`You win! Opponent picked ${computer}. Try again?`) === true) {
            rps();
        } else {
            alert("Thanks for playing! Refresh page to try again.");
        }
    } else if (results === 'Loss') {
        if (confirm(`You lost! Opponent picked ${computer}. Try again?`) === true) {
            rps();
        } else {
            alert("Thanks for playing! Refresh page to try again.");
        }
    }
}

rps();

// function rps(playerChoice, compChoice) {
//     if (playerChoice === 'Rock'){
//         if (compChoice === 'Rock') {
//             if (confirm(`Draw! Opponent picked ${compChoice}. Try again?`) === true) {
//                 rps(getPlayerChoice(), getCompChoice());
//             } else {
//                 alert("Thanks for playing! Refresh page to try again.");
//             }
//         } else if (compChoice === 'Paper') {
//             if (confirm(`You lost! Opponent picked ${compChoice}. Try again?`) === true) {
//                 rps(getPlayerChoice(), getCompChoice());
//             } else {
//                 alert("Thanks for playing! Refresh page to try again.");
//             } 
//         } else if (compChoice === 'Scissors') {
//             if (confirm(`You won! Opponent picked ${compChoice}. Try again?`) === true) {
//                 rps(getPlayerChoice(), getCompChoice());
//             } else {
//                 alert("Thanks for playing! Refresh page to try again.");
//             }
//         } 
//     } else if (playerChoice === 'Paper') {
//         if (compChoice === 'Rock') {
//             if (confirm(`You won! Opponent picked ${compChoice}. Try again?`) === true) {
//                 rps(getPlayerChoice(), getCompChoice());
//             } else {
//                 alert("Thanks for playing! Refresh page to try again.");
//             }
//         } else if (compChoice === 'Paper') {
//             if (confirm(`Draw! Opponent picked ${compChoice}. Try again?`) === true) {
//                 rps(getPlayerChoice(), getCompChoice());
//             } else {
//                 alert("Thanks for playing! Refresh page to try again.");
//             }
//         } else if (compChoice === 'Scissors') {
//             if (confirm(`You lost! Opponent picked ${compChoice}. Try again?`) === true) {
//                 rps(getPlayerChoice(), getCompChoice());
//             } else {
//                 alert("Thanks for playing! Refresh page to try again.");
//             }
//         }
//     } else if (playerChoice === 'Scissors') {
//         if (compChoice === 'Rock') {
//             if (confirm(`You lost! Opponent picked ${compChoice}. Try again?`) === true) {
//                 rps(getPlayerChoice(), getCompChoice());
//             } else {
//                 alert("Thanks for playing! Refresh page to try again.");
//             }
//         } else if (compChoice === 'Paper') {
//             if (confirm(`You won! Opponent picked ${compChoice}. Try again?`) === true) {
//                 rps(getPlayerChoice(), getCompChoice());
//             } else {
//                 alert("Thanks for playing! Refresh page to try again.");
//             } 
//         } else if (compChoice === 'Scissors') {
//             if (confirm(`Draw! Opponent picked ${compChoice}. Try again?`) === true) {
//                 rps(getPlayerChoice(), getCompChoice());
//             } else {
//                 alert("Thanks for playing! Refresh page to try again.");
//             }
//         }
//     } else {
//         alert(`Error!`);
//     }
// }

// rps(getPlayerChoice(), getCompChoice())