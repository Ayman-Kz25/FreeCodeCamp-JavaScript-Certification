function convertHTML(str) {
  let result = "";
  let splitted = str.split("");

  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i] === "&") {
      splitted.splice(i, 1, "&amp;");
      result = splitted.join("").toString();
    } else if (splitted[i] === "<") {
      splitted.splice(i, 1, "&lt;");
      result = splitted.join("").toString();
    } else if (splitted[i] === ">") {
      splitted.splice(i, 1, "&gt;");
      result = splitted.join("").toString();
    } else if (splitted[i] === '"') {
      splitted.splice(i, 1, "&quot;");
      result = splitted.join("").toString();
    } else if (splitted[i] === "'") {
      splitted.splice(i, 1, "&apos;");
      result = splitted.join("").toString();
    } else {
      result = splitted.join("").toString();
    }
  }

  return result;
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("<>"));
console.log(convertHTML("abc"));
