const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultEl = document.getElementById("result");

function isPalindrome(input) {
  let loweredInput = input.toLowerCase();
  let cleanedInput = loweredInput.replace(/[^a-z0-9]/g, "");
  let reversedInput = cleanedInput.split("").reverse().join("");

  if (cleanedInput === reversedInput) {
    return true;
  }

  return false;
}

checkBtn.addEventListener("click", () => {
  if (textInput.value === "") {
    alert("Please input a value");
  }

  let result = isPalindrome(textInput.value);
  resultEl.hidden = false;

  if (result) {
    resultEl.classList.add("palindrome");
    resultEl.textContent = `${textInput.value} is a palindrome`;
  } else {
    resultEl.classList.remove("palindrome");
    resultEl.textContent = `${textInput.value} is not a palindrome`;
  }
});
