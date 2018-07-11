var readline = require("readline-sync");
var input = readline.question("Rock, Paper, or Scissor?");
const compNum = Math.random() * 3;
let computer;
if (compNum > 0 && compNum < 1) {
  computer = "rock"
}
else if (compNum > 1 && compNum < 2)
  computer = "paper"
}
else {
  computer = "scissor"
}

if(input == "rock"){
  console.log(compNum)
}
//fixing
