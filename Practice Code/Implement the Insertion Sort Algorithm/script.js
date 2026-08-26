function insertionSort(array) {
  //[3,6,2,1]
  for (let i = 0; i < array.length; i++) {
    //i=0,1,2
    for (let j = i-1; j >= 0; j--) {
        //i=0 => j=-1 X
        //i=1 => j=0,-1 X
        //i=2 => j=1,0
      if (array[j+1] < array[j]) {
        //6<3 X
        //2<6, 2<3 

        let temp = array[j]; //6,3
        array[j] = array[j + 1]; //2,2
        array[j + 1] = temp; //6,3

        //[3,6,2,1] => [3,2,6,1] => [2,3,6,1]
      }
      //1. [3,6,2,1]
    }
  }

  return array;
}

console.log(insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));