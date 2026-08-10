function rangeOfNumbers(startNum, endNum) {
  let result = [];

  if (startNum === endNum) {
    return [startNum];
  } else {
    result = rangeOfNumbers(startNum + 1, endNum);
    result.unshift(startNum);
    return result;
  }

  return result;
}

console.log(rangeOfNumbers(1, 5));
console.log(rangeOfNumbers(6, 9));
console.log(rangeOfNumbers(4, 4));
console.log(rangeOfNumbers(2, 8));
