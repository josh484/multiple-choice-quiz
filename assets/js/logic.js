var question =  document.querySelector("#questions");
var choices = document.querySelector("#choices");
var questionTitle =  document.querySelector("#question-title");
var button = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var endScreen = document.querySelector("#end-screen");
var timer = document.querySelector("#time");

var counter = 0;
var currentGameScore = 0;
var currentGameTotal = 0;
var gTime = 80;

var newQuiz = [question2, question3];

button.addEventListener("click", function(){
    startScreen.remove();
    question.className = "";
    gameTimer();
    localStorage.setItem("score", currentGameScore++);
    localStorage.setItem("totalScore", currentGameTotal++);
    quizzes(question1);
});

function moveArr() {
    if ( counter < newQuiz.length) {
        quizzes(newQuiz[counter]);
        counter++;
    } 
}
choices.addEventListener("click", function(event){
    var element = event.target
    if (element.matches("button") === true){
        var chosen = element.getAttribute("data-question");
        localStorage.setItem("totalScore", currentGameTotal++);
        if(chosen == "true") {
            console.log("you got it");
            localStorage.setItem("score", currentGameScore++);
            removeStuff();
            moveArr();
        }
        else {
            gTime -= 10;
        }
        if (currentGameTotal == 4) {
            question.className = "hide";
            endScreen.className = "";
        }
    }
});

function removeStuff(){
    while(choices.firstChild){
        choices.removeChild(choices.lastChild);
    }
}

function quizzes(quiz){

    for (var i = 0; i < quiz.length; i++) {
        var newQuestion = document.createElement("button");
        newQuestion.textContent = quiz[i].detail;
        newQuestion.setAttribute("data-question", quiz[i].right);
        choices.appendChild(newQuestion);
    }

}

function gameTimer() {
    var timerInterval = setInterval(function() {
        gTime--;
        timer.textContent = gTime;
        if(gTime === 0) {
          clearInterval(timerInterval);
        }
      }, 800);
}

