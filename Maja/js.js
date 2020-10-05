console.dir(window);

alert("hi");

let firstAlert = prompt("Guess a number between 1 - 10:");

let y = Math.floor(Math.random() * 10 + 1);

let number = parseInt(firstAlert);


    for ( i = 0; i < 3; i++) {
        
         if (y === number) {
             alert(`Success, the number was ${y}! Attempts: ${i+1}`);
         } else {
             if(i < 2) {
            firstAlert = parseInt(prompt("try again with the new number"));
         } else {
             alert("you lost your three times")
         }
        }
     }


