"use strict";

window.onresize = draw;

function draw () {
    let canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    // Sky
    context.beginPath();
    context.rect(50, 50, 500, 500);
    context.fillStyle = 'hotpink';
    context.fill();
    
    // Sea
    context.beginPath();
    context.rect(50, 350, 500, 200);
    context.fillStyle = 'aqua';
    context.fill();

    // Sun
    context.beginPath();
    context.ellipse(300, 350, 200, 100, Math.PI, 0, Math.PI);
    context.fillStyle = 'yellow';
    context.fill();
    
}

draw();