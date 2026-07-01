function steamrollArray(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      result.push(arr[i]);
    } else {
      for (let j = 0; j < arr[i].length; j++) {
        if (!Array.isArray(arr[i][j])) {
          result.push(arr[i][j]);
        } else {
          for (let k = 0; k < arr[i][j].length; k++) {
            if (!Array.isArray(arr[i][j][k])) {
              result.push(arr[i][j][k]);
            } else {
              for (let m = 0; m < arr[i][j][k].length; m++) {
                if (!Array.isArray(arr[i][j][k][m])) {
                  result.push(arr[i][j][k][m]);
                }
              }
            }
          }
        }
      }
    }
  }

  return result;
}

// console.log(steamrollArray([[["a"]], [["b"]]]));
// console.log(steamrollArray([1, [2], [3, [[4]]]]));
// console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));
