     
let num = Math.floor((Math.random() * 10) + 1);
console.log(num);
let guess = prompt('Guess the number between 1 - 10.');

let guess2 = parseInt(guess)

for(let i = 0; i < 3; i++){  

    if(guess2 !== num){  
        if(i == 2 && guess2 !== num){
            alert(`Sorry, you failed to guess number three times!
            The number was ${num}`)

        }else {
            guess2 = parseInt(prompt(`Wrong!! Try again`));
        }       
       

    }else{
        alert(`Succes, the number was ${num}, Attempts: ${i + 1}`)
         
    break;
    }
    

}


  



