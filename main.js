const nav = document.querySelector(".navIcon");
const close = document.querySelector(".closeIcon");

nav.addEventListener("click", openNav);
function openNav() {
    const menu = document.querySelector(".mob-nav");
    menu.style.width = "100%"
}

close.addEventListener("click", closeNav)
function closeNav() {
    const menu = document.querySelector(".mob-nav");
    menu.style.width = "0%";
}