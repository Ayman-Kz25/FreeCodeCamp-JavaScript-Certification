function updateCount(btnEl) {
  const count = btnEl.querySelector(".count");
  let currCount = +count.textContent.split("/")[0];
  if (currCount === 10) {
    return;
  }
  currCount++;
  count.textContent = `${currCount}/10`;
}

const btns = document.querySelectorAll(".emoji-btn");

btns.forEach((btn) => 
    btn.addEventListener("click", () => updateCount(btn))
);

// const happyBtn = document.querySelector("#happy-btn");
// const confusedBtn = document.querySelector("#confused-btn");
// const sadBtn = document.querySelector("#sad-btn");
// const lovingBtn = document.querySelector("#loving-btn");

// happyBtn.addEventListener("click", () => {
//     updateCount(happyBtn);
// });

// confusedBtn.addEventListener("click", () => {
//     updateCount(confusedBtn);
// });

// sadBtn.addEventListener("click", () => {
//     updateCount(sadBtn);
// });

// lovingBtn.addEventListener("click", () => {
//     updateCount(lovingBtn);
// });