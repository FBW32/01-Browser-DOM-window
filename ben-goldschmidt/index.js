// # The Guessing Game
// ## Create a guessing game for players. 

// * Randomize a number between 1-10. Do not show the player.
// * Make the player guess the number in a prompt.
// ![alt text](./images/start-game.png "Starting Game") 
// * If the player guesses the correct number, print out whether the player was successful and in how many attempts (print in the console). 
// ![alt text](./images/game-win.png "Won Game") 
// * If the player is incorrect, change the text in the prompt to inform the player, e.g. "Nope, sorry! Try again!
// ![alt text](./images/wrong-answer.png "Wrong Answer") 
// * If the player fails to guess the number after three attempts, print out that the player was unsuccessful AND what the number was. e.g. "Sorry, you failed to guess the number in three attempts. The number was 0!"
// ![alt text](./images/game-lost.png "Lost Game") 

// **See the images for reference**


// RANDOM NUMBER
let randomNumber = Math.floor(Math.random() * 10) + 1;

// QUESTION PROMPT
let question = prompt(`Guess a number between 1-10:`)
// let question = prompt(`Guess a number between 1-10: ${randomNumber}`)

// ATTEMPT COUNTER
let attemptCounter = 1;

if (question != randomNumber) {
    // ATTEMPT 1 -> incorrect answer
    attemptCounter += 1;
    let wrongPrompt1 = prompt(`Wrong!!! Try again!`)
    console.log(wrongPrompt1)

    if (wrongPrompt1 != randomNumber) {
        // ATTEMPT 2 -> incorrect answer
        attemptCounter += 1;
        let wrongPrompt2 = prompt(`Wrong!!! Try again!`)
        console.log(wrongPrompt2)

        if (wrongPrompt2 != randomNumber) {
            // ATTEMPT 3 -> incorrect answer
            console.log(alert(`Sorry, you failed to guess the number ${randomNumber} in three(3) attempts!`))
        }

        else {
            // ATTEMPT 3 -> answer correct
            console.log(alert(`Success! The number was ${randomNumber}, Attempt: ${attemptCounter}`))
        }
    }

    else {
        // ATTEMPT 2 -> answer correct
        console.log(alert(`Success! The number was ${randomNumber}, Attempt: ${attemptCounter}`))
    }
}

else {
    // ATTEMPT 1 -> answer correct
    console.log(alert(`Success! The number was ${randomNumber}, Attempt: ${attemptCounter}`))
}

