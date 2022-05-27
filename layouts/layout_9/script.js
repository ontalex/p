"use strict";

let variablesCSS = getComputedStyle(document.body);
let card = document.querySelector(".slider_card");
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
let maxStep = document.getElementsByClassName("slider_card").length / valueCardView;

let points = document.querySelectorAll(".slider_point");
let point = document.querySelector(".slider_point");
let underSection = document.querySelector(".slider_underSection");

function makePoints(steps) {
  for (let i = steps - 1; i > 0; i--) {
    let copePoint = document.createElement("div");
    copePoint.classList = "slider_point";
    underSection.append(copePoint);
  }
}
makePoints(maxStep);

function getElementIndex(elem) {
  elem = elem.tagName ? elem : document.querySelector(elem);
  return [].indexOf.call(elem.parentNode.children, elem);
}

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
    maxStep = document.getElementsByClassName("slider_card").length / valueCardView;

    makePoints(maxStep);
  },
  true
);

button_right.addEventListener("click", () => {
  if (maxRight == false) {
    if (maxStep - 2 <= indexView) {
      maxRight = true;
    }
    indexView++;
    slider_line.style.left = `-${
      indexView * ((widthCard + gapCard) * valueCardView)
    }px`;
    maxLeft = false;
    button_left.classList.remove("slider_control--hidden");
    underSection.children[indexView].classList.toggle("slider_point--checked");
    underSection.children[indexView - 1].classList.toggle(
      "slider_point--checked"
    );
  } else {
    indexView = indexView;
    maxRight = true;
  }
  if (indexView >= maxStep - 1) {
    button_right.classList.add("slider_control--hidden");
  }
});

button_left.addEventListener("click", () => {
  if (maxLeft == false && indexView != 0) {
    indexView--;
    slider_line.style.left = `-${
      indexView * ((widthCard + gapCard) * valueCardView)
    }px`;
    button_right.classList.remove("slider_control--hidden");
    maxRight = false;
    underSection.children[indexView].classList.toggle("slider_point--checked");
    underSection.children[indexView + 1].classList.toggle(
      "slider_point--checked"
    );
  } else if (indexView == 0) {
    indexView = 0;
    maxLeft = true;
  }
  if (indexView == 0) {
    button_left.classList.add("slider_control--hidden");
  }
});

underSection.addEventListener("click", (e) => {
  if (e.target.classList == "slider_point") {
    let toPoint = getElementIndex(e.target);
    underSection.children[indexView].classList.remove("slider_point--checked");
    indexView = toPoint;
    underSection.children[indexView].classList.add("slider_point--checked");
    slider_line.style.left = `-${
      indexView * ((widthCard + gapCard) * valueCardView)
    }px`;

    if (toPoint != 0 && toPoint != maxStep) {
      maxLeft = 0;
      maxRight = 0;
      button_left.classList.remove("slider_control--hidden");
      button_right.classList.remove("slider_control--hidden");
    }

    if (indexView == maxStep - 1) {
      indexView = indexView;
      maxRight = true;
      button_right.classList.add("slider_control--hidden");
    } else if (toPoint == 0) {
      indexView = 0;
      maxLeft = true;
      button_right.classList.remove("slider_control--hidden");
      button_left.classList.add("slider_control--hidden");
    }
  }
});
