let playerOneSelection = prompt("Please choose rock, paper or scissors");
let playerTwoSelection = prompt("Please choose rock, paper or scissors");
const choices = ["rock", "paper", "scissors"];

playerOneSelection = playerOneSelection.toLowerCase();
playerTwoSelection = playerTwoSelection.toLowerCase();

if (
  choices.includes(playerOneSelection) &&
  choices.includes(playerTwoSelection)
) {
  if (playerOneSelection === playerTwoSelection) {
    console.log("The game ended in a tie");
  } else if (
    (playerOneSelection == "rock" && playerTwoSelection == "scissors") ||
    (playerOneSelection == "scissors" && playerTwoSelection == "paper") ||
    (playerOneSelection == "paper" && playerTwoSelection == "rock")
  ) {
    console.log("Player 1 won the game");
  } else {
    console.log("Player 2 won the game");
  }
} else {
  console.log("Please choose rock, paper or scissors.");
}
