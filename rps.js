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
// 6. Repeat 2-5

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