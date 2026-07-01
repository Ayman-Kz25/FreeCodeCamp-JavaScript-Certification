function steamrollArray(arr) {
  let result = [];

  function flatten(item){
      if(!Array.isArray(item)){
        result.push(item);
      } else {
        for(const element of item){
          flatten(element);
        }
      }
  }

  flatten(arr);

  return result;
}

console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));
