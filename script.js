// BACK TO TOP

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {

        backToTop.style.display = "flex";

    } else {

        backToTop.style.display = "none";

    }

});


// CONTACT FORM
const form = document.querySelector("#contact-form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Form submitted successfully!");
   
    form.reset();
    
});

// NAVBAR LINKS

const navLinks = document.querySelectorAll("nav ul li a");

const sections = document.querySelectorAll("section");


// ACTIVE NAVBAR ON SCROLL

window.addEventListener("scroll", function() {

    let currentSection = "";

    sections.forEach(function(section) {

        const sectionTop = section.offsetTop - 250;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(function(link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


// SCROLL REVEAL

const revealElements = document.querySelectorAll(".reveal");

// Enable animation only when JavaScript is running
document.documentElement.classList.add("js-enabled");
function revealOnScroll() {


    revealElements.forEach(function(element) {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < window.innerHeight - 100) {
            element.classList.add("show");
        }

    });

}

// Reveal visible sections on page load
revealOnScroll();

// Reveal remaining sections while scrolling
window.addEventListener("scroll", revealOnScroll, { passive: true });



// NAVBAR SCROLL EFFECT

const header = document.querySelector("header");

window.addEventListener("scroll", function() {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

    });


// MOBILE MENU

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#primary-navigation");

function closeMobileMenu() {
    nav.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
}

menuToggle.addEventListener("click", function() {

    const isOpen = nav.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", String(isOpen));

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

});


// CLOSE MOBILE MENU AFTER CLICK

nav.querySelectorAll("a").forEach(function(link) {

    link.addEventListener("click", closeMobileMenu);

});


// CLOSE MOBILE MENU WITH ESCAPE KEY

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeMobileMenu();
        menuToggle.focus();
    }

});


// RESET MENU WHEN SCREEN BECOMES DESKTOP

window.addEventListener("resize", function() {

    if (window.innerWidth > 768) {
        closeMobileMenu();
    }

});


