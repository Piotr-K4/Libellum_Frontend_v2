function toggleMenu(){
    let mobileMenu = document.querySelector(".mobile-menu")


    mobileMenu.classList.toggle("mobile-menu--is-active")

}

function toggleSearchInput(){
    let searchBox = document.querySelector(".wrapper-search--mobile")
    searchBox.classList.toggle("wrapper-search--mobile-is-active")
}

function toggleMenuLinks(option){
    option.parentElement.nextElementSibling.classList.toggle("mobile-menu__links-is-active")
}


