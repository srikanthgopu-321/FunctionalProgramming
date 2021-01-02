let cal = require("../UtilityFiles/utility");
let userInput = require("readline-sync");
 n1 = Number(userInput.question("enter the number n1\n"));
 n2 = Number(userInput.question("enter the number n2\n"));
 n3 = Number(userInput.question("enter the number n3\n"));
let z =cal.secondLargest_Number();
console.log("the second largest number is :"+z);