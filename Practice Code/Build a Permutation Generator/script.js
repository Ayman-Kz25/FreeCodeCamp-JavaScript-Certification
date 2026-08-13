function permuteString(str = "", prefix = "", results = []) {
  if (str.length === 0) {
    if(!results.includes(prefix)){
        results.push(prefix);
    }
    return results;
  }

  function chooseChar(index) {
    if (index === str.length) {
      return;
    }

    let char = str[index];
    let remaining = str.slice(0, index) + str.slice(index + 1);
    permuteString(remaining, prefix + char, results);
    chooseChar(index + 1);
  }

  chooseChar(0);
  return results;
}

console.log(permuteString("cat"));
console.log(permuteString("far"));
console.log(permuteString("fcc"));
console.log(permuteString("p"));
console.log(permuteString(""));
console.log(permuteString("walk"));