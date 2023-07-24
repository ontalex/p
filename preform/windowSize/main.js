let spanWidth   = document.querySelector(".width");
let spanHeight  = document.querySelector(".height");

let rerenderSpans = () => {
    spanWidth.innerHTML     = window.innerWidth.toString();
    spanHeight.innerHTML    = window.innerHeight.toString();
}

window.onload       = () => rerenderSpans();
window.onresize     = () => rerenderSpans();