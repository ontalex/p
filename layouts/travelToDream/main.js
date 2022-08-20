let button_prev = document.querySelector('.button_prev');
let button_next = document.querySelector('.button_next');

let slider_line = document.querySelector('.slider_line');
let slider_index = 1;
let slide_gap = 20;
let slide_border = 3;
let last_left_margin = 0;

function button_visibility(e) {
    
}

function slider_next(e) {
    console.log("hi");
    // перенести из стрелочной функции слушателя событий
}

function slider_prev(e) {
    console.log("hi 2");
    // перенести из стрелочной функции слушателя событий
}

button_next.addEventListener('mouseup', ()=>{
    console.log(slider_index);
    if(slider_index==slider_line.childElementCount-3) {
        button_next.classList.toggle("inactive_button")
    }
    if(slider_index == slider_line.childElementCount-2) {
        return true; 
    } else {
        if (slider_index == 1) {
            button_prev.classList.remove("inactive_button")
        }
        last_left_margin -= document.querySelector('.slide').clientWidth + slide_gap + slide_border*2;
        slider_line.style.left = last_left_margin + "px";
        slider_index++;
        
    }
});
button_prev.addEventListener('mouseup', ()=>{
    if(slider_index == 2) {
        button_prev.classList.add("inactive_button");
    }
    if (slider_index == 1) {
        return true;
    } else {
        last_left_margin += document.querySelector('.slide').clientWidth + slide_gap + slide_border*2;
        slider_line.style.left = last_left_margin + "px";
        slider_index--;
    }
});