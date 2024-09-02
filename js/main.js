// Menu
const menu = document.querySelector(".navbar__links")
const menuBtn = document.querySelector(".fas")

// function to show menu
menuBtn.addEventListener('click', () => {
    menu.classList.toggle("navbar__open")
    if(menu.classList.contains("navbar__open")){
        menuBtn.classList.remove("fa-bars")
        menuBtn.classList.add("fa-times")
    } else {
        menuBtn.classList.remove("fa-times")
        menuBtn.classList.add("fa-bars")
    }
})  