let userInput = "   Hello World!   ";

console.log("Original input:");

console.log(userInput);

let cleanedInput= userInput.trim();

console.log("Result of trimming whitespace from both ends:");
console.log(cleanedInput);

let trimmedStart = userInput.trimStart();

console.log("After using the trimStart() method, leading spaces removed:");
console.log(trimmedStart);

let trimmedEnd = userInput.trimEnd();

console.log("After using the trimEnd() method, trailing spaces removed:");
console.log(trimmedEnd);

let upperCaseInput = cleanedInput.toUpperCase();

console.log("Result of using the toUpperCase() method:");
console.log(upperCaseInput);

let lowerCaseInput = cleanedInput.toLowerCase();
console.log("Result of using the toLowerCase() method:");
console.log(lowerCaseInput);

let lowercaseWord = "camelcase";
let camelCasedVersion = lowercaseWord.slice(0, 5)+lowercaseWord[5].toUpperCase()+lowercaseWord.slice(-3);
console.log("Camel cased version:");
console.log(camelCasedVersion);