//Il software deve chiedere per 5 volte all’utente di inserire un numero. 
//Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.

const numbers = [];
let somma = 0;

for(let i=0; i < 5; i++){
    numbers.push(parseInt(prompt('Inserisci un numero')))
    somma += numbers[i];
}

console.log(numbers)
console.log(somma)