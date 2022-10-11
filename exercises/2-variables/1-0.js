"use strict";


function drawLines () {
    let canvas = document.querySelector('canvas');
    let width = window.innerWidth;
    let height = window.innerHeight
    canvas.width = width;
    canvas.height = height;
    let context = canvas.getContext("2d");

    let START_POINT = 20;
    let INCREMENT = 40;
    let AMOUNT = 30;

    let startBound = 200;
    let endBound = width - startBound;

    context.beginPath();

    context.lineWidth = 2;

    // START
    context.moveTo(startBound, START_POINT);
    
    context.lineTo(endBound, START_POINT);
    context.stroke()

    for (let i = 1; i <= AMOUNT; i++) {
        context.lineTo(startBound, START_POINT + INCREMENT * i);
        context.lineTo(endBound, START_POINT + INCREMENT * i);
    }

    context.lineTo(startBound, START_POINT)

    context.stroke();
}

drawLines();