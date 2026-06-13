let originalString = "I love cats.";

console.log("Original string:");
console.log(originalString);

let replacedString = originalString.replace("cats", "dogs");

console.log("After using the replace() method:");
console.log(replacedString);

let exampleSentence = "I love cats and cats are so much fun!";
console.log("Original sentence:");
console.log(exampleSentence);

let dogsOnlySentence = exampleSentence.replaceAll("cats", "dogs");
console.log("Replacing all occurrences of cats with dogs:");
console.log(dogsOnlySentence);

let learningSentence = "I love learning!";
console.log("Original learning sentence:");
console.log(learningSentence);

let repeatedLove = "love ".repeat(3).trimEnd();
console.log(repeatedLove);

let newSentence = "I "+repeatedLove+" learning.";
console.log(newSentence);