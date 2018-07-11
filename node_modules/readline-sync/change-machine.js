// Author: Kevin Chiriboga
var readline = require("readline-sync");
let num1 = parseInt(readline.question("enter your change"));
console.log( num1 + " makes ")
let x = Math.floor(num1 / 25)
console.log( x + " Quarters ")
let y = Math.floor(num1 / 10)
console.log( y + " Dimes ")
let z = Math.floor(num1 / 5)
console.log( z + " Nickles")
//Make it less than
