const favBtns = document.querySelectorAll(".favorite-icon");

function toggleIcon(btn) {
    let filled = btn.classList.toggle("filled");
    if(filled) {
        btn.innerHTML = "&#10084;";
    } else {
        btn.innerHTML = "&#9825;";
    }
}

favBtns.forEach((favBtn) => {
  favBtn.addEventListener("click", () => toggleIcon(favBtn));
});
