function findElement(arr, func) {
  for (const item of arr) {
    if (func(item)) {
      return item;
    }
  }
  return undefined;
}

console.log(
  findElement([1, 3, 5, 8, 9], function (num) {
    return num % 2 === 0;
  }),
);

console.log(
  findElement([1, 3, 5, 9], function (num) {
    return num % 2 === 0;
  }),
);

console.log(
  findElement([1, 2, 3, 4], function (num) {
    return num > 2;
  }),
);

console.log(
  findElement(["hello", "world", "javascript"], function (str) {
    return str.length > 5;
  }),
);

console.log(
  findElement(["cat", "dog", "bird"], function (str) {
    return str.length > 10;
  }),
);

console.log(
  findElement([2, 4, 6, 8], function (num) {
    return num % 2 === 0;
  }),
);

console.log(
  findElement([], function (num) {
    return num > 0;
  }),
);
