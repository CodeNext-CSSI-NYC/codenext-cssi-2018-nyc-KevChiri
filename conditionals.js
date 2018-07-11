// Complete these one at a time. Test each one several times to make sure it works.
// When you are done with each one, comment it out when you move to the next one, so it doesn't keep showing up.

// 1. Ask the user for a number and print whether it is positive or negative or zero.
var readline = require("readline-sync");
var num1 = parseInt(readline.question("Enter any number, positive or negative"));
if (num1 < 0) {
  console.log("Negative");
}
else if (num1 == 0) {
    console.log("zero")
  }
    else {
      console.log("positive")
    }
// 2. Ask the user to enter three numbers, and then print out the biggest number they entered.
var readline = require("readline-sync")
var x = parseInt(readline.question("Enter any number,"));
var y = parseInt(readline.question("Enter any number(2),"));
var z = parseInt(readline.question("Enter any number,(3)"));
if (x > y && x > z){
  console.log( x + " is your greatest number");
}
else if (y > x && y > z) {
  console.log( y + " is your greatest number")
}
else{
  console.log( z + " is your greatest number")
}
// 3. Ask the user for a number and print whether it is odd or even
var readline = require("readline-sync")
var x = parseInt(readline.question("Enter any number "));
if (x%2 == 0){
console.log("Your number is even")
}
else {
  console.log("Your number is odd")
}

// 4. Ask the user to enter a letter and tell them if it is a vowel or consonant
var readline = require("readline-sync");
var letter = readline.question("enter a letter")
if ( letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u" ){
  console.log("The letter is a vowel")
}
else {
  console.log("the letter is a consonant")
}
// 5. Ask the user to enter a year, and tell them if it was a leap year.
// (You can use Google if you're not sure when leap years happen.)
var readline = require("readline-sync");
var year = readline.question("Enter any year")
if (year%4 == 0 && !1700 && !1800 && !1900){
  console.log( year + "is a leap year!");
}
else {
  console.log(year + "is not a leap year")
}
// 6. Ask the user if they have been a citizen for at least 9 years (yes or no), ask them their age, and ask if they live in New York state.
// If they answer yes, their age is above 30, and yes, then tell them they can run for senate in NY. Otherwise, say that they cannot.
var readline = require("readline-sync");
var x = readline.question("Are you citizen for at least 9 years?")

// 7. Write a program that asks the user to enter a whole number 1-7 and prints out the corresponding day of the week.
// If you want another challenge, look up how to use switch statements and use a switch instead of if-else for this.
// Note that we usually don't bother with switch statements unless there are more than a few elses.
