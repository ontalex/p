console.log('start');

let header = document.querySelector("header");
let beginBox = document.querySelectorAll(".beginBox");
let nav = document.querySelector("nav");
header.style.height = window.innerHeight + "px";
beginBox[0].style.height = window.innerHeight - nav.clientHeight + "px";