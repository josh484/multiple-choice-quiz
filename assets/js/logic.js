var question =  document.querySelector("#questions");
var choices = document.querySelector("#choices");
var questionTitle =  document.querySelector("#question-title");
var button = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var endScreen = document.querySelector("#end-screen");
var timer = document.querySelector("#time");
var finalScore = document.querySelector("#final-score")

var counter = 0;
var currentGameScore = 0;
var currentGameFails = 0;
var gTime = 80;

var newQuiz = [question1, question2, question3];

localStorage.setItem("score", currentGameScore);
localStorage.setItem("totalScore", currentGameFails);

button.addEventListener("click", function(){
    startScreen.remove();
    question.className = "";
    gameTimer();
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
        if(chosen == "true") {
            console.log("you got it");
            localStorage.setItem("score", currentGameScore++);
            removeStuff();
            moveArr();
        }
        else {
            localStorage.setItem("totalScore", currentGameFails++);
            gTime -= 10;
            removeStuff();
            moveArr();
        }
        if (currentGameScore + currentGameFails === 3) {
            localStorage.setItem("score", currentGameScore);
            finalScore.textContent = currentGameScore;
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

