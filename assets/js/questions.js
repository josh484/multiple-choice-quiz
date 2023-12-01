var question =  document.querySelector("#questions");
var choices = document.querySelector("#choices");
var questionTitle =  document.querySelector("#question-title");
var button = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var counter = 0;
var arr = [roundTwo, roundThree];
 
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
        if(newQuestion.getAttribute("data-question") == 0){
            newQuestion.setAttribute("data-question", "answer");
        }
        choices.appendChild(newQuestion);
    }

}

function roundTwo(){
    var quiz = [answer1= {detail: "true", right: true}, 
    answer2= {detail: "false", right: false}];
    
    for (var i = 0; i < quiz.length; i++) {
        var newQuestion = document.createElement("p");
        newQuestion.textContent = quiz[i].detail;
        newQuestion.setAttribute("data-question", i);
        if(newQuestion.getAttribute("data-question") == 0){
            newQuestion.setAttribute("data-question", "answer");
        }
        choices.appendChild(newQuestion);
    }

}

function roundThree() {
    var quiz = [answer1= {detail: "true", right: true}, 
    answer2= {detail: "false", right: false}];
    for (var i = 0; i < quiz.length; i++) {
        var newQuestion = document.createElement("p");
        newQuestion.textContent = quiz[i].detail;
        newQuestion.setAttribute("data-question", i);
        if(newQuestion.getAttribute("data-question") == 0){
            newQuestion.setAttribute("data-question", "answer");
        }
        choices.appendChild(newQuestion);
    }
}

function moveArr() {
    if ( counter < arr.length) {
        arr[counter]();
        counter++;
    }
}

choices.addEventListener("click", function(event){
    var element = event.target
    if (element.matches("p") === true){
        var chosen = element.getAttribute("data-question");
        if(chosen == "answer") {
            moveArr();
        }
    }
});


