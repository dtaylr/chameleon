//var isWhite = true;
//document.getElementsByTagName("button")[0]
var press = document.querySelector("button");


// //METHOD 1
// press.addEventListener("click", function(){
// if(isWhite){
//     document.body.style.background = "purple";
// }else{
//     document.body.style.background = "white";
//     };
//     isWhite = !isWhite;
// });

//METHOD 2 Toggle Class (Create CSS class first)


press.addEventListener("click", function(){
    document.body.classList.toggle("white");
});
