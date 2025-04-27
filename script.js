const questions = [
    {
        questions: "Whats the Toughest stone",
        answers:[
            {text:"Diamonds",correct: false},
            {text:"Gold",correct: true},
            {text:"Saphire",correct: false},
            {text:"firestone",correct: false}
        ]
    },
    {
        questions: "Whats the most expensive mineral",
        answers:[
            {text:"cobalt",correct: false},
            {text:"Jadeite",correct: true},
            {text:"painite",correct: false},
            {text:"Saphire",correct: false},
        ]  
    },
    {
        questions: "Who discoverd black holes",
        answers:[
            {text:"Luke Harret",correct: false},
            {text:"John Michell",correct: true},
            {text:"Gerald holmes",correct: true},
            {text:"lambert john",correct: false},
        ]
    },
    {
        questions: "Whats the world largest salt water inland lake",
        answers:[
            {text:"Lake van",correct: false},
            {text:"Lake Urmia",correct: false},
            {text:"Lake Utah",correct: true},
            {text:"Chilika lake",correct: false},
        ]
    }
];

const questionElement =document.getElementById("question");
const questionButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");