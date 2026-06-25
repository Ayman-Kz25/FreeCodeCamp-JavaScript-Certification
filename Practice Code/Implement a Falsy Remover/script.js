function bouncer(arr) {
  let result = [];
  let copy = [...arr];

  for (let i = 0; i < copy.length; i++) {
    if (!Boolean(copy[i])) {
      continue;
    }
    result.push(copy[i]);
  }

  return result;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([null, NaN, 1, 2, undefined]));
console.log(bouncer([]));
