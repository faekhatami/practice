// Selecting elements
let titleElement = document.getElementById("title");
let paragraphElement = document.querySelector(".description");
let buttonElement = document.getElementById("changeTextButton");

// Intentional error: Misspelled function name
titleElement.inerHTML = "Hello, JavaScript!";

console.log("Title Element:", titleElement);
console.log("Paragraph Element:", paragraphElement);
console.log("Button Element:", buttonElement);

// Responding to user events with intentional error
buttonElement.addEventListener("clic", function () {
  // Intentional typo in 'click'
  paragraphElement.textContent = "Button was clicked!";
});
