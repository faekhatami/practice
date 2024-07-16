console.log("Hello, world!");
console.log("Welcome to Javascript!");

let name = "Alice";
let age = 30;
let isStudent = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student?", isStudent);

function addNumbers(num1, num2) {
  return num1 + num2;
}

let result = addNumbers(5, 3);
console.log("Result of adding numbers:", result);

function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log("Grade for 95:", getGrade(95));
console.log("Grade for 82:", getGrade(82));
console.log("Grade for 68:", getGrade(68));

let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log("Number at index", i, ":", numbers[i]);
}

let count = 0;
while (count < 3) {
  console.log("Count:", count);
  count++;
}
