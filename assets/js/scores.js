var list = document.querySelector("#highscores");
var highscore = [];
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
