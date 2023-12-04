var list = document.querySelector("#highscores");
var clear = document.querySelector("#clear");
var highScores = [];

getHighscore();
function getHighscore() {
    var getHighscore = JSON.parse(localStorage.getItem("highScores"));
    if (getHighscore !== null){
        highScores = getHighscore;
    }
    renderHighScores();
}

function renderHighScores() {
    list.innerHTML == "";
    for (var i = 0; i < highScores.length; i++){
        var li = document.createElement("li"); 
        li.textContent = highScores[i];
        li.setAttribute("data-score", i);
        list.append(li);
    }
}

clear.addEventListener("click", function(event){
        highScores = [];
        localStorage.setItem("highScores", JSON.stringify(highScores));
        location.reload();
});