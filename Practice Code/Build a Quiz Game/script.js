const question1 = {
  category: "Science",
  question: "What planet is known as the Red Planet?",
  choices: ["Mars", "Venus", "Jupiter"],
  answer: "Mars",
};

const question2 = {
  category: "Geography",
  question: "What is the capital of France?",
  choices: ["Paris", "Berlin", "Madrid"],
  answer: "Paris",
};

const question3 = {
  category: "Programming",
  question: "Which keyword declares a constant in JavaScript?",
  choices: ["let", "const", "var"],
  answer: "const",
};

const question4 = {
  category: "Math",
  question: "What is 8 × 7?",
  choices: ["54", "56", "64"],
  answer: "56",
};

const question5 = {
  category: "History",
  question: "Who was the first President of the United States?",
  choices: ["Abraham Lincoln", "George Washington", "Thomas Jefferson"],
  answer: "George Washington",
};

const questions = [question1, question2, question3, question4, question5];

const getRandomQuestion = (q) => {
  const randomIndex = Math.floor(Math.random() * q.length);
  return q[randomIndex];
};

const getRandomComputerChoice = (choices) => {
  const randomAnswer = Math.floor(Math.random() * choices.length);
  return choices[randomAnswer];
};

const getResults = (questionObj, computerChoice) => {
  return questionObj.answer === computerChoice
    ? "The computer's choice is correct!"
    : `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
};

const randomQuestion = getRandomQuestion(questions);
console.log(randomQuestion.question);

const computerChoice = getRandomComputerChoice(randomQuestion.choices);

console.log(computerChoice);

console.log(getResults(randomQuestion, computerChoice));
