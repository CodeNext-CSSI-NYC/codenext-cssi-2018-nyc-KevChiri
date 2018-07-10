//author Kevin Chiriboga
// Remember that you can comment parts of your code in and out!
// Try this as you move from question to question below.

// 1. Ask the user to enter a number, and print out "The square root of ___ is ___ ", but with the blanks filled in correctly. (Not sure how to get the square root of a number in JavaScript? Google it!)
var readline = require("readline-sync");
var number = readline.question("please enter any number to find the square root");
console.log("The square root of " + number  + " is " +  number**2);
// // 2. Ask the user to enter their name, and print out "Your name has ___ letters", but with the blank filled in. Not sure how to get the number of letters in a string in JavaScript? Google it!
var readline = require("readline-sync");
let age = readline.question("please enter your name");
console.log("Your name has '" + age.length + "' letters");
// // 3. Ask the user to enter any word, and print out "The word ____ starts with the letter ___", but with the blanks filled in. Not sure how to get the first letter of a string in JavaScript? ...
var readline = require("readline-sync");
let word = readline.question("Type any word");
console.log( "The word '" + word + "' starts with the letter '" +   word.charAt(0) + "'");
// 4. Ask the user to enter two numbers, and print out "The average of ___ and ___ is ____", but with the blanks filled in.
var readline = require("readline-sync");
let num1 = parseInt(readline.question("enter your first number"));
let num2 = parseInt(readline.question("enter second number"));
let Sum = num1+num2
console.log(Sum)
console.log("The average of " + num1 + " and " + num2 +" is " + Sum /2);
