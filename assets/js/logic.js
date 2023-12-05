/* creating vars for index.html ids */
var question =  document.querySelector("#questions");
var choices = document.querySelector("#choices");
var questionTitle =  document.querySelector("#question-title");
var button = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var endScreen = document.querySelector("#end-screen");
var timer = document.querySelector("#time");
var finalScore = document.querySelector("#final-score")
var submit = document.querySelector("#submit");
var initials = document.querySelector("#initials");
var feedback = document.querySelector("#feedback");

var counter = 0;
var currentGameScore = 0;
var currentGameFails = 0;
var gTime = 80;
var answerTime = 2;

var newQuiz = [question2, question3,question4];
var highScores = [];
pushHighscore();

localStorage.setItem("score", currentGameScore);
localStorage.setItem("totalScore", currentGameFails);

/* when start game button is pressed, starts the game by hiding the starting
screen and unhiding the quiz and starts the first question */
button.addEventListener("click", function(){
    startScreen.className = "hide";
    question.className = "";
    gameTimer();
    quizzes(question1);
});

/* function that goes through an array with all the quizzed apart from q1*/
function moveArr() {
    if ( counter < newQuiz.length) {
        quizzes(newQuiz[counter]);
        counter++;
    } 
}

/* a listener for the answers when clicked gives a point based on the correct answer
or loses time if the answer chosen is wrong. when reaching max points hides the quiz and reach end of game */
choices.addEventListener("click", function(event){
    var element = event.target
    if (element.matches("button") === true){
        var chosen = element.getAttribute("data-question");
        if(chosen == "true") {
            localStorage.setItem("score", currentGameScore++);
            removeStuff();
            moveArr();
            answerTimer("Answer is Correct");
        }
        else {
            localStorage.setItem("totalScore", currentGameFails++);
            gTime -= 10;
            removeStuff();
            moveArr();
            answerTimer("Answer is Incorrect");
        }
        if (currentGameScore + currentGameFails === 4) {
            localStorage.setItem("score", currentGameScore);
            finalScore.textContent = currentGameScore;
            question.className = "hide";
            endScreen.className = "";
        }
    }
});

/* function for answers when clicking on answer it removes the previous quiz elements from the page to give way for the next quiz */
function removeStuff(){
    while(choices.firstChild){
        choices.removeChild(choices.lastChild);
    }
    while(questionTitle.firstChild){
        questionTitle.removeChild(questionTitle.lastChild);
    }
}

/* function used by moveArr() when given a quiz question array, goes through the array and then creates 2 elements,
a header for the quiz question and buttons for each answer. They are give an data attribute based on true or false. a true statement means the question is correct*/
function quizzes(quiz){

    for (var i = 0; i < quiz.length; i++) {
        if(i > 0) {
        var newQuestion = document.createElement("button");
        newQuestion.textContent = quiz[i].detail;
        newQuestion.setAttribute("data-question", quiz[i].right);
        choices.appendChild(newQuestion);
        }
        else{
            var newQuestion = document.createElement("h2");
            newQuestion.textContent = quiz[0];
            questionTitle.append(newQuestion);
        }
    }

}

/* saves current highscore as a string in localstorage*/
function storeHighScores() {
    localStorage.setItem("highScores", JSON.stringify(highScores));
}

/* at the save highscore screen take the initials in the text box and the current highscore and push that onto highScores array then save to local storage*/
submit.addEventListener("click", function(event){
    event.preventDefault();
    var newHighscore = currentGameScore;
    var newInitials = initials.value.trim();
    if (newInitials === ""){
        return;
    }
    else{
    highScores.push(newInitials + " Score: " + newHighscore);
    storeHighScores();
    location.replace("./highscores.html");
    }
});

/* function used at the top of page. Gets the highscores from local storage and pushes them onto the highScores array */
function pushHighscore() {
    var getHighscore = JSON.parse(localStorage.getItem("highScores"));
    if (getHighscore !== null){
        highScores = getHighscore;
    }
}

/* game timer that counts down and if the time reaches 0 then skip to the end screen */
function gameTimer() {
    var timerInterval = setInterval(function() {
        gTime--;
        timer.textContent = gTime;
        if(gTime === 0) {
          clearInterval(timerInterval);
        }
        if(gTime <= 0){
            question.className = "hide";
            endScreen.className = "";
        }
      }, 800);
}

/* function countdown timer when used countsdown from 2 and shows the feedback div then hides it again after 2 seconds
content of feedback is either correct or incorrect depending on answer */
function answerTimer(youGot) {
    var answerInterval = setInterval(function() {
        answerTime--;
        feedback.textContent = youGot;
        feedback.className = "";
        if(answerTime === 0) {
          feedback.className = "feedback hide";
          clearInterval(answerInterval);
          answerTime = 2;
        }
      }, 1000);
}
