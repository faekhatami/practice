let currentInput = "";
let previousInput = "";
let operation = null;

function appendNumber(number) {
  currentInput += number;
  updateResult();
}

function setOperation(op) {
  if (currentInput === "") return;
  if (previousInput !== "") {
    calculate();
  }
  operation = op;
  previousInput = currentInput;
  currentInput = "";
}

function calculate() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  if (isNaN(prev) || isNaN(current)) return;
  switch (operation) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = prev / current;
      break;
    default:
      return;
  }
  currentInput = result;
  operation = null;
  previousInput = "";
  updateResult();
}

function clearResult() {
  currentInput = "";
  previousInput = "";
  operation = null;
  updateResult();
}

function updateResult() {
  document.getElementById("result").value = currentInput;
}
