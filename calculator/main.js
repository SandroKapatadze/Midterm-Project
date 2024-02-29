let numberOne = prompt("input first number");
while (isNaN(numberOne) || numberOne === null) {
  alert("input is not a number. input a number");
  numberOne = prompt("input first number");
}

let operation = prompt("input operation");
let numberTwo = prompt("input second number");
while (isNaN(numberTwo) || numberTwo === null) {
  alert("input is not a number. input a number");
  numberTwo = prompt("input second number");
}

numberOne = Number(numberOne);
numberTwo = Number(numberTwo);

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
