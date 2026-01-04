const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}

burger.addEventListener("click", burgerClick);
