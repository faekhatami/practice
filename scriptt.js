let titleElement = document.getElementById("title");
let paragraphElement = document.querySelector(".description");
let buttonElement = document.getElementById("changeTextButton");

console.log("Title Element:", titleElement);
console.log("Paragraph Element:", paragraphElement);
console.log("Button Element:", buttonElement);

titleElement.innerHTML = "Hello, JavaScript!";
paragraphElement.textContent = "This paragraph has been modified.";

titleElement.setAttribute("style", "color: blue;");

buttonElement.addEventListener("click", function () {
  paragraphElement.textContent = "Button was clicked!";
});
