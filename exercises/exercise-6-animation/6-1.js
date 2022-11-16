"use strict";

import context from "../../scripts/context.js"; 
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove =  drawCrosshair;


function drawCrosshair(event) {
    console.log (event.pageX, event.pageY);

    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    Utils.drawLine(event.pageX, 0, event.pageX, height);
    Utils.drawLine(0, event.pageY, width, event.pageY);
    

    /*
    context.fillStyle="cyan";
    context.fillRect(eventData.x/200, eventData.y, width, 2);
    context.fillRect(eventData.x, eventData.y/200, 2, width);
    */

}