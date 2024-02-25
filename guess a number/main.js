let input = Number(prompt("amount of tries you need"));
let randomNumber = Math.floor(Math.random() * 1000 + 1);
let guess = Number(prompt("try to guess the number"));

console.log(randomNumber);

if (input == 0 || input == NaN) {
  input = 10;
}

for (let i = 1; i < input; i++) {
  if (guess == randomNumber) {
    console.log("correct guess.");
    break;
  } else if (guess > randomNumber) {
    guess = Number(prompt("try lower number"));
  } else {
    guess = Number(prompt("try higher number"));
  }
}

if ((i = input)) {
  console.log("try again next time");
}
