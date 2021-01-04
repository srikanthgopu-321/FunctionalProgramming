var userInput = require('readline-sync');
let inputArray = [];

let size = Number(userInput.question("N = "));
for( var i = 0; i< size; i++) {
inputArray[i] = userInput.question("enter the element : "+(i + 1));
}
console.log(inputArray);