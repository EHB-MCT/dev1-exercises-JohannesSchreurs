"use strict";

function draw () {
    let canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.lineWidth = 2;

    // First 2 squares
    context.beginPath();
    context.strokeStyle = 'red';
    context.rect(50, 50, 200, 200);
    context.rect(250, 250, 200, 200);
    context.rect(350, 100, 50, 50);
    context.rect(100, 350, 50, 50);
    context.stroke();
    context.closePath();

    // Big center square
    context.beginPath();
    context.fillStyle = 'black';
    context.rect(150, 150, 200, 200);
    context.fill();
    context.stroke();
    context.closePath();

    context.beginPath();
    context.fillStyle = 'black';
    context.rect(400, 75, 25, 25);
    context.rect(75, 400, 25, 25);
    context.fill();
}

draw();