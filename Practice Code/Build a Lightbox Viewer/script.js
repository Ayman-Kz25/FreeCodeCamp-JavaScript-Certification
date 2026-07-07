const gallery = document.querySelector(".gallery");
const galleryItems = document.querySelectorAll(".gallery-item");

const lightbox = document.querySelector(".lightbox");
const closeBtn = document.getElementById("close-btn");
const lightboxImage = document.getElementById("lightbox-image");

galleryItems.forEach((item) => item.addEventListener("click", () => {
    lightbox.style.display = "flex";
    let itemSrc = item.getAttribute("src").replace("-thumbnail", "");
    console.log(itemSrc)

    lightboxImage.setAttribute("src", itemSrc);
}));

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
})

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});