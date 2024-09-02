// Menu
const menu = document.querySelector(".navbar__links");
const menuBtn = document.querySelector(".fas");
const overlay = document.querySelector("#overlay");
const menuLinks = document.querySelectorAll(".navbar__links a");

// function to show menu
menuBtn.addEventListener('click', () => {
    menu.classList.toggle("navbar__open");
    if (menu.classList.contains("navbar__open")) {
        menuBtn.classList.remove("fa-bars");
        menuBtn.classList.add("fa-times");
    } else {
        menuBtn.classList.remove("fa-times");
        menuBtn.classList.add("fa-bars");
    }
});

// function to close menu when a link is clicked
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove("navbar__open");
        menuBtn.classList.remove("fa-times");
        menuBtn.classList.add("fa-bars");
    });
});


