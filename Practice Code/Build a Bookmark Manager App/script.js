const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const categoryDropdown = document.getElementById("category-dropdown");
const categoryName = document.querySelector(".category-name");

const addBookmarkButton = document.getElementById("add-bookmark-button");
const closeFormButton = document.getElementById("close-form-button");
const addBookmarkButtonForm = document.getElementById(
  "add-bookmark-button-form"
);

const bookmarkListSection = document.getElementById("bookmark-list-section");
const viewCategoryButton = document.getElementById("view-category-button");
const closeListButton = document.getElementById("close-list-button");
const deleteBookmarkButton = document.getElementById("delete-bookmark-button");

const bookmarkName = document.getElementById("name");
const bookmarkUrl = document.getElementById("url");
const categoryList = document.getElementById("category-list");

function getBookmarks() {
  let bookmarks;

  try {
    bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  } catch {
    return [];
  }

  if (!Array.isArray(bookmarks)) {
    return [];
  }

  const validBookmarks = bookmarks.every(
    (bookmark) =>
      bookmark &&
      typeof bookmark === "object" &&
      typeof bookmark.name === "string" &&
      typeof bookmark.category === "string" &&
      typeof bookmark.url === "string"
  );

  return validBookmarks ? bookmarks : [];
}

function displayOrCloseForm() {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
}

function displayOrHideCategory() {
  mainSection.classList.toggle("hidden");
  bookmarkListSection.classList.toggle("hidden");
}

function renderCategoryList() {
  const filteredBookmarks = getBookmarks().filter(
    (bookmark) => bookmark.category === categoryDropdown.value
  );

  categoryList.innerHTML = "";

  if (filteredBookmarks.length === 0) {
    categoryList.innerHTML = "<p>No Bookmarks Found</p>";
    return;
  }

  filteredBookmarks.forEach((bookmark) => {
    categoryList.innerHTML += `
      <div class="bookmark-item">
        <input
          type="radio"
          id="${bookmark.name}"
          value="${bookmark.name}"
          name="bookmark"
        />

        <label for="${bookmark.name}">
          <a href="${bookmark.url}" target="_blank">
            ${bookmark.name}
          </a>
        </label>
      </div>
    `;
  });
}

addBookmarkButton.addEventListener("click", () => {
  categoryName.innerText = categoryDropdown.value;
  displayOrCloseForm();
});

closeFormButton.addEventListener("click", () => {
  displayOrCloseForm();
});

addBookmarkButtonForm.addEventListener("click", () => {
  const bookmarks = getBookmarks();

  bookmarks.push({
    name: bookmarkName.value,
    category: categoryDropdown.value,
    url: bookmarkUrl.value,
  });

  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  bookmarkName.value = "";
  bookmarkUrl.value = "";

  displayOrCloseForm();
});

viewCategoryButton.addEventListener("click", () => {
  categoryName.innerText = categoryDropdown.value;

  renderCategoryList();

  displayOrHideCategory();
});

closeListButton.addEventListener("click", () => {
  displayOrHideCategory();
});

deleteBookmarkButton.addEventListener("click", () => {
  const selectedBookmark = document.querySelector(
    'input[name="bookmark"]:checked'
  );

  if (!selectedBookmark) {
    return;
  }

  const updatedBookmarks = getBookmarks().filter(
    (bookmark) =>
      !(
        bookmark.name === selectedBookmark.value &&
        bookmark.category === categoryDropdown.value
      )
  );

  localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));

  renderCategoryList();
});