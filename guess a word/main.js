const array = [
  "AUDI",
  "MERCEDES",
  "FERRARI",
  "LAMBORGHINI",
  "PORSCHE",
  "BENTLEY",
  "MASERATI",
  "MCLAREN",
  "BUGATTI",
  "RENAULT",
  "PEUGEOT",
  "FIAT",
  "FORD",
  "NISSAN",
  "KIA",
  "BMW",
  "SUBARU",
  "MITSUBISHI",
  "TOYOTA",
  "LADA",
  "MAZDA",
  "HYUNDAI",
  "HONDA",
  "VOLKSWAGEN",
  "VOLVO",
  "MAN",
  "GENESIS",
  "ISUZU",
  "SUZUKI",
  "OPEL",
  "BUICK",
  "DAIHATSU",
  "CHEVROLET",
  "DACIA",
  "CHEVY",
  "JAGUAR",
  "DODGE",
  "MERCURY",
  "SAAB",
  "KOENIGSEGG",
];
let randomNumber = Math.floor(Math.random() * 40);
let randomWord = array[randomNumber];
word = randomWord.split("");

let length = randomWord.length;

let guess = [];

for (let i = 0; i < length; i++) {
  guess.push("_");
}

let attempt = 10;
let x = 0;
while (x < length && attempt > 0) {
  let letter = prompt(`${guess} (${attempt})\n guess a letter`);
  x = 0;
  attempt -= 1;
  letter = letter.toUpperCase();
  let lengthTwo = letter.length;
  letter = letter.split("");
  for (i = 0; i < length; i++) {
    for (let j = 0; j < lengthTwo; j++) {
      if (letter[j] == word[i]) {
        guess[i] = letter[j];
      }
    }
    if (guess[i] == word[i]) {
      x++;
    }
  }
}

if (attempt == 0) {
  alert("You Lost :(");
} else {
  alert("Good Job!");
}
