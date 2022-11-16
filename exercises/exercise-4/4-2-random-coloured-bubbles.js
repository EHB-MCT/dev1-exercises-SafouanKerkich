"use strict"
import context from "../../scripts/context.js";
import * as Utils from '../../scripts/utils.js';

let width   = context.canvas.width;
let height  = context.canvas.height;

let frameCount= 0;

window.onmousemove=drawBubbles;


function (drawBubbles) {
    if (frameCount % 144 == 0) {
    let x = Utils.randomNumber (0, width) ;
    let y = Utils.randomNumber (0, height);
    let radius = Utils.randomNumber (5, 100)
    let hue = Utils.randomNumber (160, 240) ;
    drawBubble(x, y, radius, hue);
    } 
    frameCount++;
    requestAnimationFrame(drawBubbles)
}
