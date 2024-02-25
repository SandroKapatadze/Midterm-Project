let numberOne = Number(prompt("input first number"));
let operation = prompt("input operation");
let numberTwo = Number(prompt("input second number"));

if (operation == "+") {
  console.log(numberOne + numberTwo);
} else if (operation == "-") {
  console.log(numberOne - numberTwo);
} else if (operation == "*") {
  console.log(numberOne * numberTwo);
} else if (operation == "%") {
  console.log(numberOne % numberTwo);
} else if (operation == "/") {
  console.log(numberOne / numberTwo);
} else if (operation == "**") {
  console.log(numberOne ** numberTwo);
} else {
  console.log("this operation does not exist");
}
