"use strict";

let variablesCSS = getComputedStyle(document.body);
let card = document.querySelector(".card");
let slider_line = document.querySelector(".slider_line");
let button_left = document.querySelector(".slider_control--left");
let button_right = document.querySelector(".slider_control--right");
let indexView = 0;
let valueLeftMove = 0;
let maxLeft = true;
let maxRight = false;
let widthCard = parseInt(variablesCSS.getPropertyValue("--wCard").match(/\d+/));
let gapCard = parseInt(
  variablesCSS.getPropertyValue("--gapCards").match(/\d+/)
);
let valueCardView = parseInt(
  variablesCSS.getPropertyValue("--kCountCards").match(/\d+/)
);
let maxStep = document.getElementsByClassName("card").length / valueCardView;

let points = document.querySelectorAll(".slider_point");
let point = document.querySelector(".slider_point");
let underSection = document.querySelector(".slider_underSection");

function makePoints(steps) {
  // Обновлять количесво элементов через создание определённого количества точек
  for (let i = steps-1; i > 0; i--) {
    let copePoint = document.createElement("div");
    copePoint.classList = "slider_point";
    underSection.append(copePoint);
    console.log("append point");
  }
//   underSection.children[0].classList.add(".slider_point--checked");
}

function getElementIndex(elem) {
    elem = elem.tagName ? elem : document.querySelector(elem) // можно добавить еще проверок
    return [].indexOf.call(elem.parentNode.children, elem)
}

makePoints(maxStep);

window.addEventListener(
  "resize",
  () => {
    widthCard = parseInt(variablesCSS.getPropertyValue("--wCard").match(/\d+/));
    gapCard = parseInt(
      variablesCSS.getPropertyValue("--gapCards").match(/\d+/)
    );
    valueCardView = parseInt(
      variablesCSS.getPropertyValue("--kCountCards").match(/\d+/)
    );
    maxStep = document.getElementsByClassName("card").length / valueCardView;

    makePoints(maxStep);
  },
  true
);

button_right.addEventListener("click", function () {
  console.log("click br");
  if (maxRight == false) {
    if (maxStep - 2 <= indexView) {
      maxRight = true;
    }
    indexView++;
    slider_line.style.left = `-${indexView * ((widthCard + gapCard) * valueCardView)}px`;
    maxLeft = false;
    button_left.classList.remove("slider_control--hidden");
    underSection.children[indexView].classList.toggle("slider_point--checked");
    underSection.children[indexView-1].classList.toggle("slider_point--checked");

  } else { // бавить отдельную функцию
    indexView = indexView;
    maxRight = true;
    console.log("stop - max right");
  }
  if (indexView >= maxStep - 1) {
    button_right.classList.add("slider_control--hidden");
    console.log("Hide the right button");
  }
});


button_left.addEventListener("click", function () {
  console.log("click bl");
  if (maxLeft == false && indexView != 0) {
    indexView--;
    slider_line.style.left = `-${indexView * ((widthCard + gapCard) * valueCardView)}px`;
    button_right.classList.remove("slider_control--hidden");
    maxRight = false;
    underSection.children[indexView].classList.toggle("slider_point--checked");
    underSection.children[indexView+1].classList.toggle("slider_point--checked");
  } else if (indexView == 0) { // бавить отдельную функцию
    indexView = 0;
    maxLeft = true;
    console.log("stop - max left");
    
  }
  if (indexView == 0) {
    button_left.classList.add("slider_control--hidden");
    console.log("Hide the left button");
  }
});

underSection.addEventListener("click", (e)=>{
    if(e.target.classList == "slider_point") {
        let toPoint = getElementIndex(e.target);
        underSection.children[indexView].classList.remove("slider_point--checked");
        indexView=toPoint;
        underSection.children[indexView].classList.add("slider_point--checked");
        slider_line.style.left = `-${indexView * ((widthCard + gapCard) * valueCardView)}px`;

        // вставить вызов функции конца и начала слайдера в зависимости от порядкового номера элемента
        // проверка на первый и последний элемент для скрытия кнопок
    }
});