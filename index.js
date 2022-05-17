const openMenu = document.getElementById("open-menu-button");
const closeMenu = document.getElementById("close-menu-button");
const menu = document.querySelector(".menu");
const darkScreen = document.querySelector(".dark-screen");

openMenu.addEventListener("click", () => {
  menu.classList.add("opened-menu");
  darkScreen.classList.add("dark-screen-active");
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("opened-menu");
  darkScreen.classList.remove("dark-screen-active");
});
