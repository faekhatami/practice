// Selecting elements
let titleElement = document.getElementById("title");
let paragraphElement = document.querySelector(".description");
let buttonElement = document.getElementById("changeTextButton");

// Function to safely change HTML content with error handling
function safeChangeInnerHTML(element, newContent) {
  try {
    element.innerHTML = newContent;
  } catch (error) {
    console.error("An error occurred while changing innerHTML:", error);
  } finally {
    console.log("Attempted to change innerHTML.");
  }
}

// Using the safe function to change HTML content
safeChangeInnerHTML(titleElement, "Hello, JavaScript!");

console.log("Title Element:", titleElement);
console.log("Paragraph Element:", paragraphElement);
console.log("Button Element:", buttonElement);

// Responding to user events with error handling
buttonElement.addEventListener("click", function () {
  try {
    paragraphElement.textContent = "Button was clicked!";
  } catch (error) {
    console.error("An error occurred while changing textContent:", error);
  } finally {
    console.log("Attempted to change textContent.");
  }
});
