function pyramid(char, rows, isInverted) {
  let result = "\n";
  if (!isInverted) {
    for (let i = 0; i < rows; i++) {
      let row = "";
      let spacesPerRow = rows - i - 1;
      let patternCount = 2 * i + 1;

      row += " ".repeat(spacesPerRow);
      row += char.repeat(patternCount);

      result += row + "\n";
    }
  } else {
    for (let i = rows; i > 0; i--) {
      let row = "";
      let spacesPerRow = rows - i;
      let patternCount = 2 * i - 1;

      row += " ".repeat(spacesPerRow);
      row += char.repeat(patternCount);

      result += row + "\n";
    }
  }
  return result;
}

console.log(pyramid("o", 4, false));
console.log(pyramid("p", 5, true));