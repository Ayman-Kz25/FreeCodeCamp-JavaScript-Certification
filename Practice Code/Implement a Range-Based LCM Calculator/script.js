function smallestCommons(arr) {
  arr.sort((a, b) => a - b);
  let min = arr[0];
  let max = arr[1];

  function gcd(a, b) {
    while (b !== 0) {
      let rem = a % b;
      a = b;
      b = rem;
    }
    return a;
  }

  function lcm(a, b){
    return (a * b) / gcd(a,b);
  }

  let result = min;

  for(let i = min; i <= max; i++){
    result = lcm(result, i);
  }

  return result;
}

console.log(smallestCommons([1, 5]));
console.log(smallestCommons([5, 1]));
console.log(smallestCommons([2, 10]));
console.log(smallestCommons([1, 13]));
console.log(smallestCommons([23, 18]));
