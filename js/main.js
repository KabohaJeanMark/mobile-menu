const nav = document.querySelector("nav");
const menuButton = document.querySelector(".menu-bars");
const navIcon = document.querySelectorAll(".navIcon");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
  navIcon.forEach((icon) => {
    icon.classList.toggle("hidden");
  });
});