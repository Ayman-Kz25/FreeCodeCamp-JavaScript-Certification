function sumAll([n, m]) {
  let sum = 0;

  if (n < m) {
    for (let i = n; i <= m; i++) {
      sum += i;
    }
  } else {
    for(let i=m; i<=n; i++){
        sum += i;
    }
  }

  return sum;
}

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));

console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));