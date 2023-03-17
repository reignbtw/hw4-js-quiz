// questions
const questions = [
    {
        questionText: "How can a datatype be declared to be a constant type?",
        options: ["var", "let", "constant", "const"],
        answer: "const",
    },
    {
        questionText: "JavaScript is an ___ language",
        options: ["Object-Oriented", "Object-Based", "Procedural", "None of the above"],
        answer: "Object-Oriented",
    },
    {
        questionText: "Which of the following keywords is used to define a variable in Javascript?",
        options: ["var", "let", "Both var and let", "None of the above"],
        answer: "Both var and let",
    },
    {
        questionText: "Which of the following methods is used to access HTML elements using Javascript?",
        options: ["getElementbyId()", "getElementsByClassName()", "Both a and b", "None of the above"],
        answer: "Both a and b",
    },
    {
        questionText: "Which of the following methods can be used to display data in some form using Javascript?",
        options: ["document.write()", "console.log()", "window.alert()", "All of the above"],
        answer: "All of the above",
    },
];

//quiz
var questionContainer = document.getElementById("container-question");
var startContainer = document.getElementById("container-1");
var endContainer = document.getElementById("container-end");
var initialsForm = document.getElementById("quiz-end-form");
var highscoresContainer = document.getElementById("container-highscores");
var viewHighscores = document.getElementById("view-highscores");
var Highscoreslist = document.getElementById("highscore-list");
var correct = document.getElementById("correct-answer");
var wrong = document.getElementById("wrong-answer");
var scoresContainer = document.getElementById("score");

//buttons
var startBtn = document.querySelector("#start-button");
var backBtn = document.querySelector("#back-btn");
var clearHighscoresbtn = document.querySelector("#clear-highscores");

//questions
var question = document.getElementById("questions");
var answers = document.getElementById("answer-btns");
var timer = document.querySelector("#time");
var score = 0;
var timeleft;
var gameover; 

timer.innerText = 0;

//highscore array
var Highscores = [];
var QuestionIndex = 0;

//check to see if there is time left on quiz
var setTime = function() {
    timeleft = 30;

    var timeCheck = setInterval(function() {
        timer.innerText = timeCheck;
        timeCheck--

        if (gameover) {
            clearInterval(timeCheck)
        };

        if (timeleft < 0) {
            showScore()
            timeCheck.innerText = 0
            ckearInterval(timeCheck)
        };
    }, 1000)
};

//go back button
var renderStartpage = function() {
    highscoresContainer.classList.add("hidden");
    highscoresContainer.classList.remove("show");
    startContainer.classList.add("show");
    startContainer.classList.remove("hidden");
    scoresContainer.removeChild(scoresContainer.lastChild)
    QuestionIndex = 0
    gameover = ""
    timeleft.textContent = 0
    score = 0

    if (correct.className = "show") {
        correct.classList.remove("show");
        correct.classList.add("hidden");
    };

    if (wrong.className = "show") {
        wrong.classList.remove("show");
        wrong.classList.add("hidden");
    };
};

//game start function
var gameStart = function() {
    startContainer.classList.add("hidden");
    startContainer.classList.remove("show");
    questionContainer.classList.add("show");
    questionContainer.classList.remove("hidden");

    //randomize questions
    ShuffledQuestionsarray = questions.sort(() => Math.random() - 0.5)
    setTime();
    setQuestion();
};

//next question
var setQuestion = function() {
    answersReset()
    displayQuestion(ShuffledQuestionsarray[QuestionIndex])
}

