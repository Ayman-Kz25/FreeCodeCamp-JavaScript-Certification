const themes = [
  {
    name: "light",
    message: "Light theme activated!"
  },
  {
    name: "dark",
    message: "Dark theme activated!"
  },
  {
    name: "dim",
    message: "Dim theme activated!"
  },
  {
    name: "sepia",
    message: "Sepia theme activated!"
  }
];

const themeBtn = document.getElementById("theme-switcher-button");
const themeDropdown = document.getElementById("theme-dropdown");
const messageEl = document.querySelector('[aria-live="polite"]');

themeBtn.addEventListener("click", () => {
    if(themeDropdown.hidden){
        themeDropdown.hidden = false;
        themeBtn.setAttribute("aria-expanded", "true");
    } else {
        themeDropdown.hidden = true;
        themeBtn.setAttribute("aria-expanded", "false");
    }
});

const listItem = document.querySelectorAll("li");

listItem.forEach((item) => {
  item.addEventListener("click", (e) => {

    const selected = e.target.textContent.toLowerCase();

    const theme = themes.find(t => t.name === selected);

    messageEl.textContent = theme.message;

    document.body.className = `theme-${theme.name}`;

    themeDropdown.hidden = true;

    themeBtn.setAttribute("aria-expanded", "false");
  });
});

