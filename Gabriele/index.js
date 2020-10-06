
let randomNum = Math.floor(Math.random() * 10);
console.log(randomNum);

let playerNum = parseInt(prompt("Guess a number between 1 - 10"));
console.log(playerNum);

let i= 0;
while  (i < 3) {
        if (playerNum === randomNum) {
                console.log("Success, the number was "+ playerNum + "!. Attempts " + i) } 
                else {
                        if (i < 2) { 
                                playerNum = parseInt(prompt("Nope, sorry. Try again"));
                        }
                         else {
                                console.log("Sorry, you failed to guess the number in three attempts. The number was " + randomNum);
                        
                        } }
                        i++;                         
                }
        
                       
   









