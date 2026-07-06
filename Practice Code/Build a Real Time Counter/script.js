const inputText = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

inputText.addEventListener("input", (event) => {
  let text = event.target.value;

  if (text.length > 50) {
    text = text.slice(0, 50);
    event.target.value = text;
  }

  let count = text.length;

  charCount.textContent = `Character Count: ${count}/50`;
  charCount.style.color = count === 50 ? "red" : "black";
});
