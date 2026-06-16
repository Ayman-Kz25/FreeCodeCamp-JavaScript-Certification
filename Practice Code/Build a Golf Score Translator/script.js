const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, stroke) {
  if (stroke === 1) {
    return `${names[0]}`; //Hole-in-one
  } else if (stroke <= par - 2) {
    return `${names[1]}`; //Eagle
  } else if (stroke === par - 1) {
    return `${names[2]}`; //Birdie
  } else if (stroke === par) {
    return `${names[3]}`; //Par
  } else if (stroke === par + 1) {
    return `${names[4]}`; //Bogey
  } else if (stroke === par + 2) {
    return `${names[5]}`; //Double Bogey
  } else {
    return `${names[6]}`; //Go Home
  }
}

console.log(golfScore(1, 1));
// console.log(golfScore(3, 1));
// console.log(golfScore(4, 1));
// console.log(golfScore(5, 1));
// console.log(golfScore(4, 2));
// console.log(golfScore(5, 2));
// console.log(golfScore(3, 2));
// console.log(golfScore(4, 3));
// console.log(golfScore(5, 4));
// console.log(golfScore(3, 3));
// console.log(golfScore(4, 4));
// console.log(golfScore(5, 5));
// console.log(golfScore(3, 4));
// console.log(golfScore(4, 5));
// console.log(golfScore(5, 6));
// console.log(golfScore(3, 5));
// console.log(golfScore(4, 6));
// console.log(golfScore(5, 7));
// console.log(golfScore(3, 7));
// console.log(golfScore(4, 8));
// console.log(golfScore(5, 9));
