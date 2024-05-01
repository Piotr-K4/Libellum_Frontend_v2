function toggleMenu(){
    let mobileMenu = document.querySelector(".mobile-menu")


    mobileMenu.classList.toggle("mobile-menu--is-active")

}

function toggleOptionLinks(element){
    let linksOption = element.nextElementSibling;
    linksOption.classList.toggle("navbar__links--is-active")
}


