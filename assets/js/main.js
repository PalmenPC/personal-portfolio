// Hamburger menu
const hamburgerButton = document.getElementById("hamburger-btn");
const hamburgerNav = document.getElementById("mobile-nav");

hamburgerButton.addEventListener("click", () => {
  hamburgerButton.classList.toggle("open");
  hamburgerNav.classList.toggle("open");
});
