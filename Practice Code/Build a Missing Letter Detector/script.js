function fearNotLetter(input) {
  for (let i = 0; i < input.length - 1; i++) {
    let currentCode = input[i].charCodeAt();
    let nextCode = input[i + 1].charCodeAt();
    if (nextCode - currentCode !== 1) {
      return String.fromCharCode(currentCode + 1);
    }
  }
  return undefined;
}

console.log(fearNotLetter("abce"));

console.log(fearNotLetter("abcdefghjklmno"));

console.log(fearNotLetter("stvwx"));

console.log(fearNotLetter("bcdf"));

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
