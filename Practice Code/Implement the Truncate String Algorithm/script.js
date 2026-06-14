function truncateString(str = "", num) {
  if (str.length > num) {
    let slicedStr = str.slice(0, num);
    let appendedStr = "...";
    return slicedStr + appendedStr;
  }
  return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
console.log(
  truncateString("A-tisket a-tasket A green and yellow basket","A-tisket a-tasket A green and yellow basket".length),
);
console.log(truncateString("A-tisket a-tasket A green and yellow basket","A-tisket a-tasket A green and yellow basket".length + 2)
);
console.log(truncateString("A-", 1));
console.log(truncateString("Absolutely Longer", 2));
