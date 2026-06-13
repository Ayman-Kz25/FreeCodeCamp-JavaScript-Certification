let botName = "MathBot";
let greeting = `Hi there! My name is ${botName} and I am here to teach you about the Math object!`;
console.log(greeting);

console.log(
  "The Math.random() method returns a pseudo random number greater than or equal to 0 and less than 1.",
);

let randomNum = Math.random();
console.log(randomNum);

console.log("Now, generate a random number between two values.");
let min = 1;
let max = 100;

// Formula to Generate a random number between 2 values
// Math.random() * (maximum - minimum) + minimum;
let randomNum2 = Math.random() * (max - min) + min;
console.log(randomNum2);

console.log(
  "The Math.floor() method rounds the value down to the nearest whole integer.",
);

let numRoundedDown = Math.floor(6.7);
console.log(numRoundedDown);

console.log("Now, generate a random integer between two values.");

let randomInt = Math.floor(Math.random() * (max - min) + min);
console.log(randomInt);

console.log("The Math.ceil() method rounds the value up to the nearest whole integer.");

let numRoundedUp = Math.ceil(3.2);
console.log(numRoundedUp);

console.log("The Math.round() method rounds the value to the nearest whole integer.");

let numRounded = Math.round(2.7);
console.log(numRounded);
let numRounded2 = Math.round(11.2);
console.log(numRounded2);

console.log("The Math.max() and Math.min() methods are used to get the maximum and minimum number from a range.");

let maxNum = Math.max(3, 125, 55, 24);
console.log(maxNum);
let minNum = Math.min(6, 90, 14, 90, 2);
console.log(minNum);

console.log("It was fun learning about the different Math methods with you!");