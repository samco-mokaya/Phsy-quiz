const questions = [
    {
        questions: "Whats the Toughest stone",
        answer:[
            {text:"Diamonds",correct: false},
            {text:"Gold",correct: true},
            {text:"Saphire",correct: false},
            {text:"firestone",correct: false}
        ]
    },
    {
        questions: "Whats the most expensive mineral",
        answer:[
            {text:"cobalt",correct: false},
            {text:"Jadeite",correct: true},
            {text:"painite",correct: false},
            {text:"Saphire",correct: false},
        ]  
    },
    {
        question: "Who discoverd black holes",
        answer:[
            {text:"Luke Harret",correct: false},
            {text:"John Michell",correct: true},
            {text:"Gerald holmes",correct: false},
            {text:"lambert john",correct: false},
        ]
    },
    {
        question: "Whats the world largest salt water inland lake",
        answers:[
            {text:"Lake van",correct: false},
            {text:"Lake Urmia",correct: false},
            {text:"Lake Utah",correct: true},
            {text:"Chilika lake",correct: false},
        ]
    }
];

const questionElement =document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = '0';

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML = "Next"
    showQuestion();
}
function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.questions;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button); // Make sure this is defined
    });
}

startQuiz();
