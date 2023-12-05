var list = document.querySelector("#highscores");
var clear = document.querySelector("#clear");
var highScores = [];

/* gets the highscores from local storage and pushes them into an array and used function renderHighscores */
getHighscore();
function getHighscore() {
    var getHighscore = JSON.parse(localStorage.getItem("highScores"));
    if (getHighscore !== null){
        highScores = getHighscore;
    }
    renderHighScores();
}

/* for each element within the highscores array create an element li for it and fill it out with all the highscores */
function renderHighScores() {
    list.innerHTML == "";
    for (var i = 0; i < highScores.length; i++){
        var li = document.createElement("li"); 
        li.textContent = highScores[i];
        li.setAttribute("data-score", i);
        list.append(li);
    }
}

/* when clicking on the clear button highscores arrary will be emptied and then save that to local storage. reloads page to see new empty highscore */
clear.addEventListener("click", function(event){
        highScores = [];
        localStorage.setItem("highScores", JSON.stringify(highScores));
        location.reload();
});