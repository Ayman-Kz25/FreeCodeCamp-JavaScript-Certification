function fibonacci(n) {
  let sequence = [0, 1];
  if (n <= 0) {
    return 0;
  }
  for (let i = 2; i <= n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
    //1, 3, 5, 7
  }

  return sequence[n];
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(5));
console.log(fibonacci(10));
console.log(fibonacci(15));
