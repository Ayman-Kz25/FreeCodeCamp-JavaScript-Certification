const lunches = [];

//1. Add to end
function addLunchToEnd(arr, lunchItem) {
  arr.push(lunchItem);
  console.log(`${lunchItem} added to the end of the lunch menu.`);
  return arr;
}

//2. add to start
function addLunchToStart(arr, lunchItem) {
  arr.unshift(lunchItem);
  console.log(`${lunchItem} added to the start of the lunch menu.`);
  return arr;
}

//3. Remove last
function removeLastLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
    return arr;
  }

  const removedItem = arr.pop();
  console.log(`${removedItem} removed from the end of the lunch menu.`);
  return arr;
}

//4. Remove first
function removeFirstLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
    return arr;
  }

  const removedItem = arr.shift();
  console.log(`${removedItem} removed from the start of the lunch menu.`);
  return arr;
}

//5. Random Lunch
function getRandomLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches available.");
    return;
  }

  const index = Math.floor(Math.random() * arr.length);
  console.log(`Randomly selected lunch: ${arr[index]}`);
}

//6. Show menu
function showLunchMenu(arr) {
  if (arr.length === 0) {
    console.log("The menu is empty.");
    return;
  }

  console.log(`Menu items: ${arr.join(", ")}`);
}

addLunchToEnd(lunches, "Tacos");
console.log(addLunchToEnd(["Pizza", "Tacos"], "Burger"));
addLunchToStart(lunches, "Sushi");
console.log(addLunchToStart(["Burger", "Sushi"], "Pizza"));

console.log(removeLastLunch([]));
removeLastLunch(["Stew", "Soup", "Toast"]);
console.log(removeLastLunch(["Sushi", "Pizza", "Noodles"]));

console.log(removeFirstLunch([]));
removeFirstLunch(["Salad", "Eggs", "Cheese"]);
console.log(removeFirstLunch(["Sushi", "Pizza", "Burger"]));

console.log(getRandomLunch([]));
getRandomLunch(lunches);

console.log(showLunchMenu([]));
showLunchMenu(["Greens", "Corns", "Beans"]);

console.log(showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]));
