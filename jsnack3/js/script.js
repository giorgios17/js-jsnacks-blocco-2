//Crea due array che hanno un numero di elementi diversi. 
//Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti l’altro.

const arrayOne = [1,2,3,4,5];
const arrayTwo = [1,2,3,4,5,6,7,8,9];
let numeroCasuale;

while(arrayOne.length < arrayTwo.length){
    numeroCasuale = Math.floor(Math.random()* 10);
    arrayOne.push(numeroCasuale)
}

while(arrayTwo.length < arrayOne.length){
    numeroCasuale = Math.floor(Math.random()* 10);
    arrayTwo.push(numeroCasuale)
}


console.log(arrayOne);
console.log(arrayTwo);
