// MAIN BODY
const main = document.querySelector("html");
main.addEventListener("contextmenu", (e) => {
  logo.textContent = "";
  logo.append(newLogo);
  logo.style.width = "200px";
  e.preventDefault();
});

// NAV LINKS
const navLink = document.querySelectorAll("nav a");
navLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    link.style.color = "red";
    e.preventDefault();
    e.stopPropagation()
    alert('NO!')
  });
});

// NAV BAR
const navBar = document.querySelector(".nav-container");
navBar.addEventListener("dblclick", () => {
  navBar.style.flexDirection = "row-reverse";
});

// LOGO
const logo = document.querySelector(".logo-heading");
const newLogo = document.createElement("img");
newLogo.src = "https://i.imgur.com/FcMc7HE.png";

logo.addEventListener("mousedown", () => {
  logo.style.transform = "rotate(0.5turn)";
});

// HERO IMAGE
const hero = document.querySelector(".intro img");
hero.addEventListener("wheel", () => {
  hero.src =
    "https://assets-global.website-files.com/5cd091cfb5499f22bdf72905/5f14900d5a496bdfa378d523_Outcomes_header.jpg";
  hero.style.height = "250px";
  hero.style.width = "900px";
});

// CONTENT SECTION
const letsGo = document.querySelector(".content-section");
letsGo.addEventListener("mouseenter", () => {
  letsGo.style.flexDirection = "row-reverse";
});

// CONTENT 2
const adventure = document.querySelector(".inverse-content");
adventure.addEventListener("mouseleave", () => {
  adventure.style.flexDirection = "row-reverse";
});

// DESTINATION
const dest = document.querySelector(".content-destination img");
dest.addEventListener("click", () => {
  dest.style.filter = "grayscale(1)";
});

// BUTTONS
const signup = document.querySelectorAll(".destination .btn");
signup.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btn.style.background = "red";
  });
});
