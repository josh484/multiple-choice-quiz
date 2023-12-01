var question =  document.querySelector("#questions");
var choices = document.querySelector("#choices");
var questionTitle =  document.querySelector("#question-title");
var button = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");


button.addEventListener("click", function(){
    startScreen.remove();
    roundOne();
});

function roundOne(){
    question.className = "";
    var quiz = [answer1= {detail: "true", right: true}, 
    answer2= {detail: "false", right: false}];
    for (var i = 0; i < quiz.length; i++) {
        var newQuestion = document.createElement("p");
        newQuestion.textContent = quiz[i].detail;
        newQuestion.setAttribute("data-question", i);
        choices.appendChild(newQuestion);
    }
}
