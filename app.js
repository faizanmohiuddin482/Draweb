// set canvas id to a variable
var canvas = document.getElementById("draw");

//get canvas 2d context and set it to the corect size
var ctx = canvas.getContext("2d");
resize();

//resize canvas when window is resized
function resize(){
    ctx.context.width = window.innerWidth;
    ctx.context.height = window.innerHeight;
}

//add event listener when window is resized
window.addEventListener("resize",resize);

//add event listener to mouse events
