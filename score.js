//Creates selectors to be manipulated
var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var newGame = document.getElementById("reset");
var numbersP1 = document.querySelector("#p1Display");
var numbersP2 = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var pTag = document.querySelector("p");
var winningScoreDisplay = document.querySelector("p span")//Selects spans inside of parent elements when written this way,
var p1Score = 0
var p2Score = 0

var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            p1Display.classList.add("winner");
            gameOver = true;
            alert("Player 1 Wins");
        }
p1Display.textContent=p1Score;
    }
});

p2Button.addEventListener("click", function(){
    if(!gameOver){
    p2Score++
    if(p2Score === winningScore){
    p2Display.classList.add("winner");
    gameOver = true;
    alert("Player 2 Wins");
    }
    p2Display.textContent=p2Score;
    }
});

newGame.addEventListener("click", function(){

    reset();
})

//Update game count mid game (starts game over)

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent= 0;
    p2Display.textContent= 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}

//change event anytime input value changes
numInput.addEventListener("change", function(){
winningScoreDisplay.textContent = this.value;
winningScore = Number(this.value);//turns into string number cap N.
reset();
})
``



