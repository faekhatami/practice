const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    answer: "Paris",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: [
      "Harper Lee",
      "Mark Twain",
      "Ernest Hemingway",
      "F. Scott Fitzgerald",
    ],
    answer: "Harper Lee",
  },
  {
    question: "What is the largest planet in our Solar System?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Jupiter",
  },
];

function loadQuiz() {
  const quizContainer = document.getElementById("quiz");
  quizData.forEach((quizItem, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    const questionText = document.createElement("h2");
    questionText.textContent = quizItem.question;
    questionDiv.appendChild(questionText);

    quizItem.options.forEach((option) => {
      const optionLabel = document.createElement("label");
      const optionInput = document.createElement("input");
      optionInput.type = "radio";
      optionInput.name = `question${index}`;
      optionInput.value = option;
      optionLabel.appendChild(optionInput);
      optionLabel.appendChild(document.createTextNode(option));
      questionDiv.appendChild(optionLabel);
      questionDiv.appendChild(document.createElement("br"));
    });

    quizContainer.appendChild(questionDiv);
  });
}

function submitQuiz() {
  let score = 0;
  quizData.forEach((quizItem, index) => {
    const selectedOption = document.querySelector(
      `input[name="question${index}"]:checked`
    );
    if (selectedOption && selectedOption.value === quizItem.answer) {
      score++;
    }
  });

  const resultContainer = document.getElementById("result");
  resultContainer.textContent = `Your score is ${score} out of ${quizData.length}`;
}

loadQuiz();
