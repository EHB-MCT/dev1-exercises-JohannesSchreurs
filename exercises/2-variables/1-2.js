"use strict";

function drawPattern () {
    let canvas = document.querySelector('canvas');
    let width = window.innerWidth;
    let height = window.innerHeight
    canvas.width = width;
    canvas.height = height;
    let context = canvas.getContext("2d");


    context.beginPath();
    context.fillStyle = "blue";
    context.rect(0,0, width * 0.33, height * 0.66);
    context.rect(width * 0.66, 0, width * 0.33, height * 0.66);
    context.fill();

    context.beginPath();
    context.fillStyle = "aqua";
    context.rect(0, height * .66, width * .33, height * .33);
    context.rect(width * 0.66, height * .66, width * .33, height * .33);
    context.fill();

    context.beginPath();
    context.fillStyle = "red";
    context.rect(0, height * .15, width * .99, height * .33);
    context.fill();
}

drawPattern();