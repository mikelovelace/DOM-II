// NAV LINKS
const navLink = document.querySelectorAll(".nav-link")

navLink.forEach(link => {
    link.addEventListener("click", () => {
        link.style.color = "white"
        navBar.style.background = "teal"
    })
})

// NAV BAR
const navBar = document.querySelector(".nav-container")

navBar.addEventListener("dblclick", () => {
    navBar.style.background = "blue"
    logo.style.color = "white"
})

// LOGO
const logo = document.querySelector(".logo-heading")

logo.addEventListener("mouseover", () => {
    logo.textContent = "Unfun Bus"
})