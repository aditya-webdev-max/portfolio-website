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

 