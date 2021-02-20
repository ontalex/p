let line = document.getElementsByClassName("slider_line");
let butPrev = document.querySelector(".prev");
let butNext = document.querySelector(".next");
let wVBox = document.getElementsByClassName("slider_box")[0];
let slide = document.querySelectorAll(".slide"); // записывает как NodeList (arrey)
let butts = document.querySelector(".buttons");
let colors = [];

let widthCard = 450; // ширина карточки
let margin = 20; // отступ от карточки
let widthSlide = widthCard + margin * 2;
let countElem = (window.innerWidth <= 1000) ? 1 : 2; // слайдов на view box


let sLine = 0;
/* **************************************************************** */

/* ------------------- RANDOM BACKGROUND-COLOR -------------------- */



function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function randomColor(min, max) {
    return "#"+
    getRandomIntInclusive(min, max).toString(16)+
    getRandomIntInclusive(min, max).toString(16)+
    getRandomIntInclusive(min, max).toString(16)+
    getRandomIntInclusive(min, max).toString(16)+
    getRandomIntInclusive(min, max).toString(16)+
    getRandomIntInclusive(min, max).toString(16);
}

for (let i = 0; i < slide.length; i++) {
    colors.push( randomColor(2, 10) );
}

for (let i = 0; i < slide.length; i++) {
    slide[i].style.backgroundColor = colors[i];
}

/* **************************************************************** */

if (window.innerWidth <= 1000) {
    widthSlide = window.innerWidth;
    butts.style.maxWidth = window.innerWidth - margin * 2 + "px";
    let viewHeight = ((4 * widthSlide) / 3).toFixed(0);
    wVBox.style.height = viewHeight + "px";
    wVBox.style.width = widthSlide + "px";
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.width = widthSlide - margin * 2 + "px";
        slide[i].style.height = viewHeight + "px";
    }
} else {
    true;
}

wVBox.style.width = (widthSlide * countElem) + "px"; // width view box slider
let maxSLine = (line[0].childElementCount - countElem) * widthSlide; // Максимальная длинна slider_line

function nextAct() {
    if (sLine == maxSLine) {
        line[0].style.left = `-${maxSLine}px`;
    } else {
        if (sLine == maxSLine - widthSlide) {
            butNext.style.opacity = "0.5"; // 'эфект 
        }
        butPrev.style.opacity = "1"; // 'эфект 
        sLine = sLine + widthSlide;
        line[0].style.left = `-${sLine}px`;
    }
}
function prevAct() {
    if (sLine == 0) {
        butPrev.style.opacity = "0.5"; // 'эфект 
        line[0].style.left = `0px`;
    } else {
        sLine = sLine - widthSlide;
        if (sLine == 0) {
            butPrev.style.opacity = "0.5"; // 'эфект 
        }
        line[0].style.left = `-${sLine}px`;
        butNext.style.opacity = "1"; // 'эфект 
    }

}

/* *************************************************************** */

// --------------------EVENT ZONE------------------------------------

butPrev.addEventListener("mousedown", () => { prevAct() });
butNext.addEventListener("mousedown", () => { nextAct() });