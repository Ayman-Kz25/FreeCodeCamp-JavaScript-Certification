function frankenSplice(arr1=[], arr2, index) {
  let before = arr2.slice(0, index);
  let after = arr2.slice(index);
  
  let result = [...before, ...arr1, ...after];

  return result;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));
console.log(frankenSplice([1, 2], ["a", "b"], 1));
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
console.log(frankenSplice([1, 2, 3, 4], [], 0));