function pairElement(str) {
  const result = [];

  let splitted = str.split("");
  for (let i = 0; i < splitted.length; i++) {
    // console.log(splitted[i]);
    switch (splitted[i]) {
      case "A":
        result.push([splitted[i], "T"]);
        break;
      case "T":
        result.push([splitted[i], "A"]);
        break;
      case "C":
        result.push([splitted[i], "G"]);
        break;
      case "G":
        result.push([splitted[i], "C"]);
        break;
    default:
        result.push([]);
    }
  }

  return result;
}

// console.log(pairElement("ATCGA"));
// console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));