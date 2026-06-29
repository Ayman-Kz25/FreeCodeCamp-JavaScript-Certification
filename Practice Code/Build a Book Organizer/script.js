const books = [
  {
    title: "ABC",
    authorName: "abc",
    releaseYear: 2000,
  },
  {
    title: "LMN",
    authorName: "lmn",
    releaseYear: 1990,
  },
  {
    title: "XYZ",
    authorName: "xyz",
    releaseYear: 1950,
  },
];

function sortByYear(b1, b2) {
  if (b1.releaseYear < b2.releaseYear) {
    return -1;
  } else if (b1.releaseYear > b2.releaseYear) {
    return 1;
  } else if (b1.releaseYear === b2.releaseYear) {
    return 0;
  }
}

const filteredBooks = books
  .filter((book) => book.releaseYear <= 1990);
console.log(filteredBooks.sort(sortByYear));
