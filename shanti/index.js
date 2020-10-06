let randomNumber = Math.floor(parseInt(Math.random() * 10) + 1);
console.log(randomNumber);
let number = "Guess a number between 1 - 10:";
    for (let i = 0; i < 3; i++) {
        let guessNumber = prompt(number);
        if (guessNumber == randomNumber) {
            console.log(`Success, the number was ${randomNumber}! Attempts: ${i + 1}`);
            break;
        } else if (i === 3 && guessNumber != randomNumber) {
            console.log(`Sorry, you failed to guess the number in three attempts. The number was ${randomNumber}!`);
        } else  {
            console.log("Wrong!!! Try Again!");
        }
        
    }






