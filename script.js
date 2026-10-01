// CONTACT FORM
const form = document.querySelector("#contact-form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Form submitted successfully!");
   
    form.reset();
    
});
