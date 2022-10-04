"use strict";

function drawName () {
    let canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.beginPath();

    context.lineWidth = 3;

    // J
    context.moveTo(50, 50);
    context.lineTo(100, 50);
    context.moveTo(75, 50);
    context.lineTo(75, 100);
    context.lineTo(50, 75);

    // O
    context.moveTo(125, 50);
    context.lineTo(175, 50);
    context.lineTo(175, 100);
    context.lineTo(125, 100);
    context.lineTo(125, 50);

    // H
    context.moveTo(205, 50);
    context.lineTo(205, 100);
    context.moveTo(205, 75);
    context.lineTo(240, 75);
    context.moveTo(240, 50);
    context.lineTo(240, 100);

    // A
    context.moveTo(275, 100);
    context.lineTo(295, 50);
    context.lineTo(315, 100);
    context.moveTo(285, 75);
    context.lineTo(305, 75);
    
    // N
    context.moveTo(350, 100);
    context.lineTo(350, 50);
    context.lineTo(375, 100);
    context.lineTo(375, 50);

    context.stroke();
}

drawName();