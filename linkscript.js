const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const mobileNav = document.getElementById("mobilenav")
var audioMenu = document.querySelector(".audio");

var isOpen = false
hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
    hamburger.classList.toggle("active");
    if (isOpen === false) {
        $("#mobilenav").show();
        $('#mobilenav').css('display', 'block');
        isOpen = true;
    }
    else {
        $("#mobilenav").hide();
        $('#myFlexbox').css('display', 'block');
        isOpen = false;
    }
}


//Closes the nav menu
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

