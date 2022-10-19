"use strict"
import context from './context.js';

/**
 * Draws a line between 2 points
 * @param {number} x1 X cooradinate of the starting point
 * @param {number} y1 Y coordinate of the starting point
 * @param {number} x2 X coordinate of the end point
 * @param {number} y2 Y cooradinate of the starting point 
 */

export fucntion  drawLine(x1, y1, x2, y2){
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2,y2);
    context.stroke();
}

