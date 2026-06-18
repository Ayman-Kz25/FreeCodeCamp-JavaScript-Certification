function mutation(arr) {
  const first = arr[0].toLowerCase();
  const second = arr[1].toLowerCase();

  for (let i = 0; i < second.length; i++) {
    if(!first.includes(second[i])){
        return false;
    }
  }
  return true;
}

console.log(mutation(["hello", "Hello"]));

console.log(mutation(["hello", "hey"]));

console.log(mutation(["Alien", "line"]));

console.log(mutation(["floor", "for"]));

console.log(mutation(["hello", "neo"]));

console.log(mutation(["voodoo", "no"]));

console.log(mutation(["ate", "date"]));

console.log(mutation(["Tiger", "Zebra"]));

console.log(mutation(["Noel", "Ole"]));