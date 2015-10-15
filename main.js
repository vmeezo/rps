var userChoice = prompt("Do you choose rock, paper or scissors?"); //prompts the user to select one.. doesn't really matter.
var computerChoice = Math.random();
console.log(computerChoice);

if (computerChoice <=.33) {
  computerChoice ="rock";
}
else if (computerChoice >=.34 & computerChoice <=.66) {
computerChoice ="paper";
}
else {
computerChoice = "scissors";
}
