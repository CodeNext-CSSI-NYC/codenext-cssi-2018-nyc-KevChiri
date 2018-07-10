// Author: Kevin Chiriboga
var readline = require("readline-sync");
var number = readline.question("enter your change");
let x = number % 25
let y = x % 10 
console.log(number + " makes ")
