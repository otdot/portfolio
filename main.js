const button = document.querySelector("#contactForm__button");
const first_name = document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const navContent = document.querySelector("#nav_content");
const navMenu = document.querySelector(".navMenu");
const hamburgerMenu = document.querySelector("#hamburgerMenu");
const toTopButton = document.querySelector("#toTopButton");
const navLinks = document.querySelectorAll(".navMenu li");

const openMenu = () => {
  const x = document.getElementById("hamMenu");
  if (x.style.display === "block") x.style.display = "none";
  else x.style.display = "block";
};

window.onscroll = function () {
  BgToNav();
};

const BgToNav = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navContent.classList.add("scrolling");
    navMenu.classList.add("scrollingPhone");
    toTopButton.style.display = "block";
  } else {
    navContent.classList.remove("scrolling");
    navMenu.classList.remove("scrollingPhone");
    toTopButton.style.display = "";
  }
};

const displayMenu = () => {
  if (navMenu.classList.contains("navPhone"))
    navMenu.classList.remove("navPhone");
  else navMenu.classList.add("navPhone");
};

const toTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

//contact form getting values from inputs

const testFunc = (e) => {
  e.preventDefault();
  console.log(first_name.value, last_name.value, email.value, message.value);
};

navLinks.forEach((link) => link.addEventListener("click", displayMenu));
hamburgerMenu.addEventListener("click", displayMenu);
button.addEventListener("click", testFunc);
toTopButton.addEventListener("click", toTop);
