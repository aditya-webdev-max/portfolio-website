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

window.addEventListener("scroll", function() {

    revealElements.forEach(function(element) {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < window.innerHeight - 100) {

            element.classList.add("show");

        }

    });

});

// NAVBAR SCROLL EFFECT

const header = document.querySelector("header");

window.addEventListener("scroll", function() {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});