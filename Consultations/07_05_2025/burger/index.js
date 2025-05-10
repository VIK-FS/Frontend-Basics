// При клике на burger_icon класс nav_active
//

const burger_icon = document.querySelector(".burger_icon");
const nav_menu = document.querySelector(".nav_menu"); // ul list

burger_icon.addEventListener("click", () =>
  nav_menu.classList.toggle("nav_active")
);
