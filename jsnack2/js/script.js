//Il software deve chiedere per 5 volte all’utente di inserire un numero. 
//Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.



let number;
let somma = 0;

// VERSIONE FOR


/*
for(let i=0; i < 5; i++){
    number = (parseInt(prompt('Inserisci un numero')));
    while(isNaN(number)){
        number = (parseInt(prompt('Inserisci un numero')));
    }
    somma += number;
}

console.log(somma)
*/

//VERSIONE WHILE

const numbers = [];

while(numbers.length < 5){
    let number = (parseInt(prompt('Inserisci un numero')));
        while(isNaN(number)){
            number = (parseInt(prompt('Inserisci un numero')));
        }
    numbers.push(number);
    somma += number;
}

console.log(somma)


