let line = document.getElementsByClassName("slider_line");
let butPrev = document.querySelector(".prev");
let butNext = document.querySelector(".next");
let wVBox = document.getElementsByClassName("slider_box")[0];
let slide = document.querySelectorAll(".slide"); // записывает как NodeList (arrey)
let butts = document.querySelector(".buttons");

let widthCard = 450; // ширина карточки
let margin = 20; // отступ от карточки
let widthSlide = widthCard + margin * 2;
let countElem = (window.innerWidth <= 1000) ? 1 : 2; // слайдов на view box

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

let maxSLine = (line[0].childElementCount - countElem) * widthSlide;
let sLine = 0;



wVBox.style.width = (widthSlide * countElem) + "px"; // width view box slider



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




butPrev.addEventListener("mousedown", () => { prevAct() });
butNext.addEventListener("mousedown", () => { nextAct() });