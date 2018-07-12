// MAKE SURE YOU CHOOSE GOOD, RELEVANT NAMES FOR YOUR FUNCTIONS AND PARAMETERS

// 1a. Write (declare) a function that prints out "meow"
function Meow() {
  console.log("meow");
}

Meow();
// 1b. Call it three times in a row. Run your code to make sure it works.



// 2a. Write (declare) a function that takes one parameter and prints out the square of that number
function square(num1) {
  console.log(num1**2);

}

square(9)
// 2b. Call it three times with three different parameters. Run your code to make sure it works.
function square(num1) {
  console.log(num1**2);
}

square(1)
square(2)
square(3)
// 3a. Write (declare) a function that takes two parameters and prints out
// "_____ is greater than ____" with the blanks filled in correctly with the two inputs.
function squarer(num1 , num2) {
if(num1 > num2){
  console.log(num1 + "is greater than " + num2)
}
  else {
    console.log(  num2 + "is greater than" + num1)
}
}

squarer(2 , 9)
// 3b. Call it three times with three different parameters
// Make sure to try cases where the first one is bigger, the second one is bigger, and when they are equal.
// Run your code to make sure it works.
function squarer(num1 , num2) {
if(num1 > num2){
  console.log(num1 + "is greater than " + num2)
}
  else {
    console.log(  num2 + "is greater than" + num1)
}
}

squarer(2 , 9)
squarer(3 , 2)
squarer(4, 10)


// 4a. Write (declare) a function that takes one parameter called name and
// returns (not prints out, just returns) the string "Hello ____", with the name in the blank.
var readline = require("readline-sync");

function username(name) {
  // var name = readline.question("please enter your name");
  return ("hello  " + name + "!")
}
console.log(username("Greg"))
// 4b. Call the function and store the result in a variable. Then, print out that variable.
// Repeat this three times with different names.
function username(name) {
  // var name = readline.question("please enter your name");
  return ("hello  " + name + "!")
}
let storage = console.log(username("Greg"));
console.log(storage);



// 5a. Write (declare) a function that takes two parameters and
// returns (not prints out, just returns) the average of the parameters.
function average(num1, num2){
  return ((num1*num2)/2)
}


// 5b. Call the function and store the result in a variable. Then, print out that variable
// in a sentence like "The average is _____".
// Repeat this three times with different numbers. What happens if you pass in
// something that isn't a number, like true or "apple"?
function average(num1, num2){
  return ((num1+num2)/2)
}
var apple = console.log(average(2,4));
console.log(average(apple))
