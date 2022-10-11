"use strict";

function drawSquares () {
    let canvas = document.querySelector('canvas');
    let width = window.innerWidth;
    let height = window.innerHeight
    canvas.width = width;
    canvas.height = height;
    let context = canvas.getContext("2d");

    let startX = 200;
    let startY = 200;
    let squareWidth = 500;
    let squareDifference = 25;
    let amount = 10;

    for(let i = 0; i < amount; i++) {
        let randomNumberR = Math.floor(Math.random() * 255);
        let randomNumberG = Math.floor(Math.random() * 255);
        let randomNumberB = Math.floor(Math.random() * 255);
    
        context.beginPath();
        context.rect(startX + squareDifference * i, startY + squareDifference * i, squareWidth - (squareDifference * (i * 2)), squareWidth - (squareDifference * (i * 2)))
        context.fillStyle = "rgb(" + randomNumberR + "," + randomNumberG + "," + randomNumberB + ")";
        context.fill();
    }
}

drawSquares();

// window.setInterval(drawSquares, 1000 / 24);