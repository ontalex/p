'use strict';

let variablesCSS  = getComputedStyle(document.body);
let card          = document.querySelector(".card");
let slider_line   = document.querySelector(".slider_line");
let button_left   = document.querySelector(".slider_control--left");
let button_right  = document.querySelector(".slider_control--right");
let indexView     = 0;
let valueLeftMove = 0;
let maxLeft       = true;
let maxRight      = false;
let widthCard     = parseInt(variablesCSS.getPropertyValue("--wCard").match(/\d+/));
let gapCard       = parseInt(variablesCSS.getPropertyValue("--gapCards").match(/\d+/));
let valueCardView = parseInt(variablesCSS.getPropertyValue("--kCountCards").match(/\d+/));
let maxStep       = document.getElementsByClassName("card").length / valueCardView;

window.addEventListener("resize", ()=>{
    widthCard     = parseInt(variablesCSS.getPropertyValue("--wCard").match(/\d+/));
    gapCard       = parseInt(variablesCSS.getPropertyValue("--gapCards").match(/\d+/));
    valueCardView = parseInt(variablesCSS.getPropertyValue("--kCountCards").match(/\d+/));
    maxStep       = document.getElementsByClassName("card").length / valueCardView;
}, true);

button_right.addEventListener('click', function () {
    console.log("click br");
    if(maxRight == false) {
        if (maxStep-2 <= indexView) {
            maxRight = true;
        }
        indexView++;
        slider_line.style.left = `-${(indexView*((widthCard+gapCard)*valueCardView))}px`;
        maxLeft                = false;
        button_left.classList.remove("slider_control--hidden");
    } else {
        indexView = indexView;
        maxRight  = true;
    }
    if(indexView >= maxStep-1){
        button_right.classList.add("slider_control--hidden");
    }
});
button_left.addEventListener('click', function () {
    console.log("click bl");
    if(maxLeft == false && indexView != 0) {
        indexView--;
        slider_line.style.left = `-${(indexView*((widthCard+gapCard)*valueCardView))}px`;
        button_right.classList.remove("slider_control--hidden");
        maxRight = false;
    } else if (indexView==0){
        indexView = 0;
        maxLeft   = true;
    }
    if(indexView == 0){
        button_left.classList.add("slider_control--hidden");
    }
});