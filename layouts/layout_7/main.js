let slides = document.querySelectorAll(".slider_line");
let button_slider_to_right = document.querySelector(".button_toRight");
let button_slider_to_left = document.querySelector(".button_toLeft");

//* Работает только для статичных слайделов

// function move_to_right() {
//     slides.push(slides[0]);
//     slides.shift();
// }
// function move_to_left() {
//     slides.unshift(slides.pop());
// }

let arr = [1, 2, 3, 1];
function revers() {
    arr = arr.reverse();
    console.log(arr);
}
