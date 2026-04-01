// Assignment Three - Buggy Starter Code
// Fix the bugs so all four features work correctly.

let helloBtn = document.querySelector("#helloBtn");
let greetingOutput = document.querySelector("#greetingOutput");

// #themeButton was written wrong so it is not selecting the button correctly
let themeBtn = document.querySelector("#themeBtn");

let messageInput = document.querySelector("#messageInput");
let liveOutput = document.querySelector("#liveOutput");

let welcomeForm = document.querySelector("#welcomeForm");
let nameInput = document.querySelector("#nameInput");
let formOutput = document.querySelector("#formOutput");

// 1. Greeting Button
helloBtn.addEventListener("click", function() {
    greetingOutput.textContent = "Hello, student!";
});

// 2. Theme Toggle
// darkmode was written wrong so it is not toggling the class correctly
themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// 3. Live Input
// used change instead of input event
// also messageinput was written wrong so it is not updating the live output
messageInput.addEventListener("input", function() {
    liveOutput.textContent = messageInput.value;
});

// 4. Welcome Form
// missing event parameter so preventDefault was not working
// added event parameter to function
welcomeForm.addEventListener("submit", function(event) {
    event.preventDefault();
    formOutput.textContent = "Welcome, " + nameInput.value;
});