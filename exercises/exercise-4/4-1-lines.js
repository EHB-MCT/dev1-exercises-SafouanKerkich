"use strict"
import context from "../../scripts/context.js"
import * as Utils from '../../scripts/utils.js'

let horizontalLines= 60;
let verticalLines = 30;

let width = 600;
let height = 300;
/*
let width = context.canvas.width;
let height = context.canvas.height;


drawLine();
drawRect(width,height)

function drawLine() {
    let step = 10;
    let amountx = width/step;
    let amounty= height/step
    for(let i=0; i < amountx; i++) {
        Utils.drawLine(step * i , 0, width - (step * i), height);
        console.log(i)
    }
    for(let i=0; i < amounty; i++) {
        Utils.drawLine(0, step * i, width, height - (step * i));
    }


 }
*/
drawLines();

function drawLines () {
    context.fillStyle= "orange"
    context.fillRect(0,0, width, height);
    context.strokeStyle ="white";
    context.lineWidth=2;

    let xSpacing = width / horizontalLines;
    let ySpacing = height / verticalLines;
    
    for ( let i = 0; i < horizontalLines; i++) {
        Utils.drawLine (0, i = xSpacing, 0, width - i * xSpacing, height);
    }
    for (let i = 0; i < verticalLines; i++){
        Utils.drawLine(0, i * ySpacing, width, height - i * ySpacing)
    }
        
    }


 
 