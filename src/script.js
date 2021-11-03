//elements selection
const menu = document.querySelector("#mobile-menu");
const nav = document.querySelector(".nav-container");
const burgerButton = document.querySelector(".nav-button-burger");
const navItem = document.querySelectorAll(".nav-item");

//closing and opening mobile menu functions
const closeMobileMenu = () => {
    nav.classList.remove("nav-container-active");
    burgerButton.classList.remove("nav-button-burger-active");
}

const mobileMenu = () => {
    nav.classList.toggle("nav-container-active");
    burgerButton.classList.toggle("nav-button-burger-active");
}


//adding event listeners
menu.addEventListener("click", mobileMenu);

navItem.forEach(element => {
    element.addEventListener("click", closeMobileMenu);
});