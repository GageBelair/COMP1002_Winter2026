// ===============================
// Dark Mode Toggle
// ===============================

const themeToggle = document.querySelector("#themeToggle");

if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
}


// ===============================
// Contact Form Interaction
// ===============================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function(event){

        event.preventDefault();

        const name = document.querySelector("#name").value;

        alert("Thank you for your message, " + name + "!");

        contactForm.reset();

    });

}