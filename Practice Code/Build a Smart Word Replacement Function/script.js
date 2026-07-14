function myReplace(str, wordToBeReplaced, wordToReplace) {
  let result = "";

  if (wordToBeReplaced[0] === wordToBeReplaced[0].toUpperCase()) {
    let upperCase = wordToReplace[0].toUpperCase();
    result = str.replace(wordToBeReplaced, upperCase + wordToReplace.slice(1));
  } else {
    let lowerCase = wordToReplace[0].toLowerCase();
    result = str.replace(wordToBeReplaced, lowerCase + wordToReplace.slice(1));
  }

  return result;
}

console.log(myReplace("Let us go to the store", "store", "mall"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("I think we should look up there", "up", "Down"));
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));
console.log(myReplace("His name is Tom", "Tom", "john"));
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));