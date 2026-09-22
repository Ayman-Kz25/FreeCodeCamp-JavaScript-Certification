function sumPrimes(n) {
  if (n < 2) {
    return 0;
  }

  let sum = 0;

  for (let i = 2; i <= n; i++) { //i=2,3,4,5
    let isPrime = true;

    for (let j = 2; j < i; j++) { 
      //j=2 - 2<2, 2<3-3<3, 2<4, 2<5-3<5-4<5-5<5
      if (i % j === 0) { 
        // 3%2!=0, 4%2===0, 5%2!=0-5%3!=0-5%4!=0
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      sum += i; // sum = 2+3+5=10
    }
  }

  return sum;
}

console.log(sumPrimes(10));
console.log(sumPrimes(5));
console.log(sumPrimes(2));
console.log(sumPrimes(0));
console.log(sumPrimes(977));
