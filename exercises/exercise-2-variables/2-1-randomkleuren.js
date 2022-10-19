"use strict"

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let width  = context.canvas.width;
let height = context.canvas.height;





drawRect(100, 400);
drawRect(125, 350);
drawRect(150, 300);
drawRect(175, 275);
drawRect(200, 250);






function drawRect(pos, size){
    let r= Math.floor(Math.random()* 255);
    let g= Math.floor(Math.random()* 255);
    let b= Math.floor(Math.random()* 255);
    console.log(r,g,b);
    let color = "rgb(" + r + "," + g + "," + b + ")"
    context.fillStyle = color;
    context.fillRect(pos, pos, size, size);
}

