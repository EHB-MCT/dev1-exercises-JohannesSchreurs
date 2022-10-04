"use strict";

function drawBox () {
    let canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.beginPath();

    context.lineWidth = 3;

    context.strokeStyle = 'red';

    // First red line
    context.moveTo(50, 50);
    context.lineTo(200, 200);

    // Second red line
    context.moveTo(50, 200);
    context.lineTo(200, 50);
    context.closePath();

    context.stroke();

    // Box
    context.beginPath();
    context.strokeStyle = 'black';

    context.moveTo(50, 50);
    context.lineTo(200, 50);
    context.lineTo(200, 200);
    context.lineTo(50, 200);
    context.lineTo(50, 50);

    context.stroke();
}

drawBox();