function generateElement() {
  return Math.floor(Math.random() * 100) + 1;
}

function generateArray() {
  const array = [];

  for (let i = 0; i < 5; i++) {
    array.push(generateElement());
  }

  return array;
}

function generateContainer() {
  return document.createElement("div");
}

function fillArrContainer(element, arr) {
  element.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    const span = document.createElement("span");
    span.textContent = arr[i];
    element.appendChild(span);
  }
}

function isOrdered(num1, num2) {
  return num1 <= num2;
}

function swapElements(arr, index) {
  if (!isOrdered(arr[index], arr[index + 1])) {
    const temp = arr[index];
    arr[index] = arr[index + 1];
    arr[index + 1] = temp;
  }
}

function highlightCurrentEls(element, index) {
  element.children[index].style.border = "2px dashed red";
  element.children[index + 1].style.border = "2px dashed red";
}

const arrayContainer = document.getElementById("array-container");
const startingArr = document.getElementById("starting-array");
const generateBtn = document.getElementById("generate-btn");
const sortBtn = document.getElementById("sort-btn");

function bubbleSort(arr) {
  let swapped = true;
  let firstComparison = true;

  while (swapped) {
    swapped = false;

    for (let i = 0; i < arr.length - 1; i++) {

      /*
       * The #starting-array already represents
       * the first comparison.
       *
       * Therefore, do NOT create another div
       * for the first comparison.
       */
      if (firstComparison) {
        firstComparison = false;

        if (!isOrdered(arr[i], arr[i + 1])) {
          swapElements(arr, i);
          swapped = true;
        }

        continue;
      }

      /*
       * Every comparison after the first one
       * gets its own visual step.
       *
       * The current array is shown first.
       * Then the comparison/swap determines
       * what the next step will contain.
       */
      const container = generateContainer();

      fillArrContainer(container, arr);
      highlightCurrentEls(container, i);

      arrayContainer.appendChild(container);

      if (!isOrdered(arr[i], arr[i + 1])) {
        swapElements(arr, i);
        swapped = true;
      }
    }
  }

  /*
   * Add the final sorted array.
   */
  const finalContainer = generateContainer();

  fillArrContainer(finalContainer, arr);

  arrayContainer.appendChild(finalContainer);
}

generateBtn.addEventListener("click", () => {
  /*
   * Remove all sorting steps.
   * Keep #starting-array.
   */
  while (arrayContainer.children.length > 1) {
    arrayContainer.removeChild(arrayContainer.lastElementChild);
  }

  const array = generateArray();

  fillArrContainer(startingArr, array);
});

sortBtn.addEventListener("click", () => {
  /*
   * Remove previous sorting steps.
   */
  while (arrayContainer.children.length > 1) {
    arrayContainer.removeChild(arrayContainer.lastElementChild);
  }

  /*
   * Make sure an array exists.
   */
  if (startingArr.children.length !== 5) {
    return;
  }

  const arr = [];

  for (let i = 0; i < startingArr.children.length; i++) {
    arr.push(Number(startingArr.children[i].textContent));
  }

  /*
   * The existing starting array is the
   * first Bubble Sort step.
   */
  highlightCurrentEls(startingArr, 0);

  /*
   * Sort the copied JavaScript array.
   */
  bubbleSort(arr);
});