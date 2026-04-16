let regForm = document.querySelector("#regForm");
let nameInput = document.querySelector("#nameInput");
let formOutput = document.querySelector("#formOutput");

regForm.addEventListener("submit", function (event) {
    event.preventDefault();
    formOutput.textContent = "Thank you for registering, " + nameInput.value + "!";
});