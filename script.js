let nav = document.querySelector("nav");
nav.style.height = document.body.outerHTML + "px";

let wrepper = document.querySelector(".wrepper");


let box = document.querySelectorAll(".box");
for (let i = 0; i < box.length; i++) {
    box[i].style.minHeight = (window.innerHeight - 30) + "px";
}