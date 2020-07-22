let mySwiper = new Swiper('.swiper-container', {
    pagination: {
        el: ".swiper__pagintation",
        type: "bullets",
        clickable: true,
    },
});



const body = document.querySelector("body"),
    headerBurger = document.querySelector(".header-burger"),
    headerNav = document.querySelector(".header-nav");

headerBurger.onclick = function() {
    headerBurger.className = (headerBurger.className == 'header-burger' ? 'header-burger-active' : 'header-burger');
    headerNav.className = (headerNav.className == 'header-nav' ? 'header-nav-active' : 'header-nav');
};