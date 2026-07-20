const pads = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");

function playSound(key) {
  const audio = document.getElementById(key);

  audio.currentTime = 0;
  audio.play();

  display.innerText = audio.parentElement.id;

  const pad = audio.parentElement;
  pad.classList.add("active");

  setTimeout(() => {
    pad.classList.remove("active");
  }, 100)
}

pads.forEach((button) => {
  button.addEventListener("click", () => {
    playSound(button.querySelector("audio").id);
  });
});

document.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();
  if (document.getElementById(key)) {
    playSound(key);
  }
});
