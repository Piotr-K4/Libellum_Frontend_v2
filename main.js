function toggleMenu(){
    let mobileMenu = document.querySelector(".mobile-menu")
    mobileMenu.classList.toggle("mobile-menu--is-active")
}

function toggleSearchInput(){
    let searchBox = document.querySelector(".wrapper-search--mobile")
    searchBox.classList.toggle("wrapper-search--mobile-is-active")
}

// function toggleMenuLinks(option){
//     option.firstElementChild.classList.toggle("mobile-menu__option--button-is-active")
//     option.parentElement.nextElementSibling.classList.toggle("mobile-menu__links-is-active")
// }

function toggleMenuLinks(option) {
    const arrowIcon = option.firstElementChild;
    const menuLinks = option.parentElement.nextElementSibling;
    console.log(window.innerWidth)

    arrowIcon.classList.toggle("mobile-menu__option--button-is-active");

    if (arrowIcon.classList.contains("mobile-menu__option--button-is-active")) {
        arrowIcon.style.transition = "transform 0.2s ease-in-out";
        arrowIcon.style.transform = "rotate(90deg)";
        setTimeout(() => {
            menuLinks.classList.toggle("mobile-menu__links-is-active");
        }, 30);
    } else {
        arrowIcon.style.transition = "transform 0.2s ease-in-out";
        arrowIcon.style.transform = "rotate(0deg)";
        setTimeout(() => {
            menuLinks.classList.toggle("mobile-menu__links-is-active");
        }, 30);
    }
}


window.addEventListener("resize", () => {
    if ( document.querySelector(".mobile-menu").className === "mobile-menu mobile-menu--is-active"){
        if(window.innerWidth >= 992){
            toggleMenu();
        }
    }

    if ( document.querySelector(".wrapper-search--mobile").className === "wrapper-search--mobile wrapper-search--mobile-is-active"){
        if(window.innerWidth >= 992){
            toggleSearchInput();
        }
    }
}
)

