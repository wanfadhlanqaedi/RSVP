// toggle class active

const navbarNav = document.querySelector(".navbar-nav");

// ketika menu di click

document.querySelector("#book-open").onclick = () => {
  navbarNav.classList.toggle("active");
};

// click di luar sidebar untuk menghilangkan nav

const book = document.querySelector("#book-open");

document.addEventListener("click", function (e) {
  if (!book.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
