// Welcome Form

// grabbing the form, input, and where the message will show up
const form = document.getElementById("welcomeForm");
const input = document.getElementById("nameInput");
const message = document.getElementById("welcomeMessage");

// when the form is submitted
form.addEventListener("submit", function (event) {

    // stops the page from refreshing
    event.preventDefault();

    // get whatever the user typed in
    const name = input.value;

    // show the welcome message on the page
    message.textContent = "Welcome, " + name + "!";

    // clear the input box after submitting
    input.value = "";
});


// Theme Toggle Button

// grabbing the button
const themeButton = document.getElementById("themeButton");

// when the button is clicked
themeButton.addEventListener("click", function () {

    // this adds/removes dark mode on the page
    document.body.classList.toggle("dark-mode");

    // change the button text so it makes sense
    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "Switch to Light Mode";
    } else {
        themeButton.textContent = "Toggle Dark Mode";
    }
});