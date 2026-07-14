function translatePigLatin(str) {
  let result = "";
  let firstVowel = str.search(/[aeiou]/);
  if (firstVowel === 0) {
    result = str + "way";
  } else if (firstVowel > 0) {
    result = str.slice(firstVowel) + str.slice(0, firstVowel) + "ay";
  } else if (firstVowel === -1) {
    result = str + "ay";
  }
  return result;
}

console.log(translatePigLatin("california"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("rhythm"));
