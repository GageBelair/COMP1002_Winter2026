//1. JavaScript finds the HTML elements - JavaScript searches the DOM tree for the element with id title.
let heading = document.getElementById("title");
let button = document.getElementById("changeBtn");
let greetingBtn = document.getElementById("greetingBtn");

//CHALLENGE  - 
// 1.) create a variable to store your name 
// 2.) Change the span text to say your name instead of World 

let name = "Jessica";

let nameSpan = document.querySelector('span');


greetingBtn.addEventListener("click", function () {
    nameSpan.textContent = name;
});

//2. JavaScript listens for an event - When the button is clicked, run this code.
button.addEventListener("click", function () {
    /* 3. JavaScript changes the DOM - JavaScript didn’t edit the HTML file.
    It changed the DOM representation in the browser.*/
    heading.textContent = "JavaScript changed the page!";

});










