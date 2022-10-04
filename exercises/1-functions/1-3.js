"use strict";

window.onresize = draw;

function draw () {
    let canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.lineWidth = 5;
    context.strokeStyle = 'black';
    context.fillStyle = 'hotpink';

    let randomNumber = Math.floor((Math.random() * 100) + 50);

    context.beginPath();
    context.rect(50, 50, randomNumber + 200, randomNumber + 200);
    context.stroke();
    context.fill();

    
    context.beginPath();
    context.rect(50, 50, randomNumber + 150, randomNumber + 150);
    context.stroke();
    context.fill();

    context.beginPath();
    context.rect(100, 50, randomNumber + 100, randomNumber + 100);
    context.stroke();
    context.fill();

    context.beginPath();
    context.rect(150, 100, randomNumber + 50, randomNumber + 50);
    context.stroke();
    context.fill();
    
    context.beginPath();
    context.rect(150, 150, randomNumber, randomNumber);
    context.stroke();
    context.fill();

}

draw();