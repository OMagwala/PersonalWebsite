const hamburgerMenu = document.querySelector(".menuBars");
const menuLinks = document.querySelector(".webTabs");

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    menuLinks.classList.toggle("active");
})

document.querySelectorAll(".webTabs").forEach(link => link.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
    menuLinks.classList.remove("active");
}))