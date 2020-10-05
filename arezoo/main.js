let play = confirm("Do you want to play a game?");
let guessNumber = prompt("Guess a Number between 1-10");
let randomNumber = Math.floor(Math.random() * 10) + 1;
let convertGuessNumber = parseInt(guessNumber);
console.log(randomNumber);
if (play) {
  if (convertGuessNumber == randomNumber) {
    alert(`Well Done! you guess true the number was ${randomNumber}`);
  }
  if (convertGuessNumber != randomNumber) {
    let guessNumber2 = prompt("Try it again,Guess a Number between 1-10");
    let convert2 = parseInt(guessNumber2);
    if (convert2 == randomNumber) {
      alert(`well done! you guess true the number was ${randomNumber}`);
    } else {
      let guessNumber3 = prompt("Try it again,Guess a Number between 1-10");
      let convert3 = parseInt(guessNumber3);
      if (convert3 == randomNumber) {
        alert(`Well Done! you guess true the number was ${randomNumber}`);
      } else {
        alert(`Sorry , You failed the number was ${randomNumber}`);
      }
    }
  }
}
