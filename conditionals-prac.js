var readline = require("readline-sync");
var ourNum = 5;
var Usernum = readline.question("Please guess a number from 1 to 10")
if (Usernum == ourNum) {
  console.log("You guessed it! Lucky!");
}
else if (Usernum < ourNum) {
  console.log( "Your number is too low! try again");
}
else {
console.log("Your number is too high! Try again");
}
