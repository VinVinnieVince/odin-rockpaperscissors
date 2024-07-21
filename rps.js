// rps = Rock paper scissors

//*Pseudocode */

// 1. Get CPU choice
    // 1a. Generate random number:  0, 1, 2
    // 1b. Convert number to choice (Rock, Paper, Scissors)
// 2. Get Human choice
    // 2a. Numbers? vs Choices?
    // Pros: Numbers are faster ; Cons: May be confusing initially
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