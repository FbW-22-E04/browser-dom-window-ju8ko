//Numbers generator

const generateTheNumber = () => {
  const number = Math.floor(Math.random() * 10 + 1);
  return number;
};

//Game code

let guessingNumber = prompt("Guess a number from 1-10");
console.log(guessingNumber);

const generatedNumber = generateTheNumber().toString();
let numberOfAttempts = 10;

while (true) {
  if (guessingNumber === generatedNumber) {
    alert(
      `Success, the number was ${guessingNumber}. Attempts: ${numberOfAttempts}`
    );
    break;
  } else {
    numberOfAttempts--;
    guessingNumber = prompt("Wrong!!! Try again.");
  }
  if (numberOfAttempts === 0) {
    alert(
      `Sorry, you failed to guess the number in three attempts. The number was ${generatedNumber}`
    );
    break;
  }
}
