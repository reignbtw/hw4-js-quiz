const landingPage = document.querySelector("#landing-page");
const questionContainer = document.querySelector("#question-container");
const scoreContainer = document.querySelector("#score-container");
const leaderboardContainer = document.querySelector("#leaderboard-container");
const results = document.querySelector("#results");
const resultsText = document.querySelector("#results-text");

// questions
const questions = [
    {
        Quizquestions: "How can a datatype be declared to be a constant type?",
        options: ["var", "let", "constant", "const"],
        answer: "const",
    },
    {
        Quizquestions: "JavaScript is an ___ language",
        options: ["Object-Oriented", "Object-Based", "Procedural", "None of the above"],
        answer: "Object-Oriented",
    },
    {
        Quizquestions: "Which of the following keywords is used to define a variable in Javascript?",
        options: ["var", "let", "Both var and let", "None of the above"],
        answer: "Both var and let",
    },
    {
        Quizquestions: "Which of the following methods is used to access HTML elements using Javascript?",
        options: ["getElementbyId()", "getElementsByClassName()", "Both a and b", "None of the above"],
        answer: "Both a and b",
    },
    {
        Quizquestions: "Which of the following methods can be used to display data in some form using Javascript?",
        options: ["document.write()", "console.log()", "window.alert()", "All of the above"],
        answer: "All of the above",
    },
];