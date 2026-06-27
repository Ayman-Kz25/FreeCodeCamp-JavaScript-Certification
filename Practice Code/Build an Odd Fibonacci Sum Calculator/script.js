function sumFibs(num) {
  let sum = 0;

  if (num < 0) {
    return "Please enter a valid positive number.";
  }

  if (num >= 0) {
    let prev = 0;
    let current = 1;
    while (current <= num) {
      if (current % 2 !== 0) {
        sum += current;
      }
      let next = prev + current;
      prev = current;
      current = next;
    }
  }

  return sum;
}

console.log(sumFibs(1));
console.log(sumFibs(1000));
console.log(sumFibs(4000000));
console.log(sumFibs(4));
console.log(sumFibs(75024));
console.log(sumFibs(75025));
