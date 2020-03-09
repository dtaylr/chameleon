var sqNum = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square")
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var heading1 = document.querySelector("h1");
var newColors = document.querySelector("#reset")
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setButtons();
    setSquares();
    reset();
}

function setButtons(){
    for (var i = 0; i < modeButtons.length; i++){
        //mode Event listeners
        modeButtons[i].addEventListener("click", function(){
            //stops selected from being on both.
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            //then adds class
            this.classList.add("selected");
            this.textContent === "Easy" ? sqNum = 3: sqNum = 6;
            reset();
            //how many squares to show
            //pick colors
            //picked color
            //update page w/ changes.
        });
    }
}

function setSquares(){
    //Simplifies code below this for loop.
for (i = 0; i < squares.length; i++){
    //events for clicked squares
squares[i].addEventListener("click", function() {
   //grab color of clicked sq.
   var clickedColor = this.style.backgroundColor;
   //compares colors clicked and picked
   if (clickedColor === pickedColor){
       messageDisplay.textContent = "Correct!";
       newColors.textContent = "Play Again?";
       changeColors(clickedColor)
       heading1.style.background = clickedColor;
   }else{
       //changes incorrect sq color to background.
       this.style.backgroundColor= "#FFBF00";
       messageDisplay.textContent="Try Again!";
    }
   });
   }
}

function reset() {
     //new random colors for sq
     colors = genRandomColors(sqNum);
     //picks new random color
     pickedColor = pickColor();
     colorDisplay.textContent = pickedColor;
     newColors.textContent= "New Colors";
     messageDisplay.textContent = "";
     //change colors of sq
     for (var i = 0; i < squares.length; i++){
         squares[i].style.backgroundColor = colors[i];
        if (colors[i]){
        //makes squares visible againbefore hiding
            squares[i].style.display = "block"
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
     }
     heading1.style.backgroundColor = "#FFBF00";
}
newColors.addEventListener("click", function(){
    reset();
})

//Functions
function changeColors(color){
    //loops through all colors
    for (i = 0; i < squares.length; i++){
        //change each color to match given color. 
        squares[i].style.backgroundColor = color;
        heading1.style.backgroundColor = pickedColor;
    }
}

function pickColor(){
    //USES FOR RANDOM NUMBER (0-1(DOesnt incluced 1))
   var random = Math.floor(Math.random() * colors.length); 
   return colors[random];
}

function genRandomColors(num){
//make an array ofg 6 rgb
var arr = [];
//repeat num times
for (var i = 0; i < num; i++){
//Get random color and push into arr.
    arr.push(ranColor());
}
//return the array
return arr
}

function ranColor(){
//pick red from 255
var r = Math.floor(Math.random() * 256);
//pick green from 255
var g = Math.floor(Math.random() * 256);
//pick blue from 255
var b = Math.floor(Math.random() * 256);

return "rgb(" + r + ", " + g + ", " + b + ")";
}
// easyBtn.addEventListener("click", function(){
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     sqNum = 3;
//     colors = genRandomColors(sqNum);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     //loops through first three and assigns color. Then hides rest.
//     for (var i = 0; i < squares.length; i++){
//         //checks if sq has color on it
//         if(colors[i]){
//             //applies new color  to sq
//             squares[i].style.backgroundColor = colors[i];
//         }else{
//             //hides other 6
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardBtn.addEventListener("click", function(){
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     sqNum = 6;
//     colors = genRandomColors(sqNum);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++){
//         //checks if sq has color on it
//     squares[i].style.backgroundColor = colors[i];
//     squares[i].style.display = "block";
//     }
// });

//