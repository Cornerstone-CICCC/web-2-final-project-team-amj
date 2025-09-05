const burgerMenuBtn = document.querySelector(".burger-menu");
const burgerMenuItem = document.querySelector(".burger-menu-items");

burgerMenuBtn.addEventListener("click", function () {
  burgerMenuItem.classList.toggle("active");
});
