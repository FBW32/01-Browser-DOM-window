let myNum = Math.floor(Math.random() * 10 + 1);
let guessMessage = "Guess a number between 1 and 10:";
let wrongMessage = "Wrong!!!Try again!";
let successMessage = "Success! The number was " + myNum + "!";
let lostMessage =
  "Sorry! You failed to guess the number in three attempts! The number was " +
  myNum +
  "!";
console.log(myNum);

for (let i = 1; i <= 3; i++) {
  let guess = prompt(guessMessage);
  if (i == 3 && guess != myNum) {
    alert(lostMessage);
  } else if (guess == myNum) {
    alert(successMessage + "Attempts: " + i);
    break;
  } else {
    alert(wrongMessage);
  }
}
