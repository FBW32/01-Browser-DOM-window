
let numGuess = parseInt(prompt("please guess any number form 1 to 10"))

//console.log(numGuess); // 

let randomNum = Math.floor(Math.random()*10)
//console.log(randomNum); //


for(let t = 1; t <= 4; t++) {

    if ([t] > 3) {
        alert(`Sorry, you failed to guess the number in three attempts, the number was ${randomNum}`)

    } else if (randomNum === numGuess) {
        
        alert(`you won the game in your ${[t]} attempt`)

    } else {

        numGuess = parseInt(prompt("please guess any number form 1 to 10"))     
   }

        console.log(randomNum);

}



