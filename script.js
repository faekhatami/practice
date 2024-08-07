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

let numbers2 = [1, 2, 3, 4, 5];

let fruits = ["apple", "banana", "cherry"];

let people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

console.log("Numbers:", numbers2);
console.log("Fruits:", fruits);
console.log("People", people);

console.log("First number:", numbers2[0]);
console.log("Second fruit:", fruits[1]);
console.log("First person's name:", people[0].name);

numbers2.push(6);
fruits.unshift("orange");

numbers2.pop();
fruits.shift();

numbers2[2] = 10;
fruits[1] = "blueberry";

console.log("Modified Numbers:", numbers2);
console.log("Modified Fruits:", fruits);

let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  start: function () {
    console.log("The car has started.");
  },
  drive: function () {
    console.log("The car is driving.");
  },
};

console.log("Car make:", car.make);
console.log("Car model:", car.model);

car.start();
car.drive();
