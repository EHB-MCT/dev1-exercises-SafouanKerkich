"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let width  = context.canvas.width;
let height = context.canvas.height;

let margin = 100;
let spacing = 80;

drawLines();


function drawLines (){
 

    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(margin, spacing);
    context.lineTo(width - margin, spacing);
    context.lineTo(margin, spacing * 2);
    context.lineTo(width-margin,spacing*2);
    context.lineTo(margin, spacing*3);
    context.lineTo(width-margin,spacing*3);
    context.lineTo(margin, spacing*4);
    context.lineTo(width-margin,spacing*5);
    context.lineTo(margin, spacing*6);
    context.lineTo(width-margin,spacing*6);
    context.lineTo(margin, spacing*3);
    context.lineTo(width-margin,spacing*3);

    context.lineTo(margin,spacing);
    context.stroke();


} 