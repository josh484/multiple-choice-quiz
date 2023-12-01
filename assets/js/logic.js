var question =  document.querySelector("#questions");
var choices = document.querySelector("#choices");
var questionTitle =  document.querySelector("#question-title");
var button = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var counter = 0;
var currentGameScore = 0;

var newQuiz = [question2, question3];
 
button.addEventListener("click", function(){
    startScreen.remove();
    question.className = "";
    localStorage.setItem("score", currentGameScore++);
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
    if (element.matches("p") === true){
        var chosen = element.getAttribute("data-question");
        if(chosen == "true") {
            console.log("you got it");
            localStorage.setItem("score", currentGameScore++);
            removeStuff();
            moveArr();
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
        var newQuestion = document.createElement("p");
        newQuestion.textContent = quiz[i].detail;
        newQuestion.setAttribute("data-question", quiz[i].right);
        choices.appendChild(newQuestion);
    }

}