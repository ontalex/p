let button_prev      = document.querySelector('.button_prev');
let button_next      = document.querySelector('.button_next');
let slider_line      = document.querySelector('.slider_line');
let free_menu        = document.querySelector('.free_menu');
let button_menu      = document.querySelector('.header_btn--menu');
let slider_index     = 1;
let slide_gap        = 20;
let slide_border     = 3;
let last_left_margin = 0;
let count_view       = 3;

function next_scroll_slider(e) {
    console.log(slider_index);
    if (slider_index == slider_line.childElementCount - count_view) {
        button_next.classList.add("inactive_button")
    }
    if (slider_index == slider_line.childElementCount - (count_view - 1)) {
        return true;
    } else {
        if (slider_index == 1) {
            button_prev.classList.remove("inactive_button")
        }
        last_left_margin       -= document.querySelector('.slide').clientWidth + slide_gap + slide_border * 2;
        slider_line.style.left  = last_left_margin + "px";
        slider_index++;
    }

}
function prev_scroll_slider(e) {
    console.log("hi 2");
    button_next.classList.remove("inactive_button");
    if (slider_index == 2) {
        button_prev.classList.add("inactive_button");
    }
    if (slider_index == 1) {
        return true;
    } else {
        last_left_margin       += document.querySelector('.slide').clientWidth + slide_gap + slide_border * 2;
        slider_line.style.left  = last_left_margin + "px";
        slider_index--;
    }
}
function touchSlider() {
    let slider_view = document.querySelector('.slider_view');
    let slider_line = document.querySelector('.slider_line');
    let state       = {
        start: 0,
        end  : 0,
        move : 0,
        path : 0,
    }
    function touchstart(event) {
        state.start = event.changedTouches[0].clientX;

        // count_view = 1;
    }
    function touchmove(event) {
        state.path = 1 * (event.changedTouches[0].clientX - state.start);

        state.move = state.end + state.path * 1.5;
        if (state.move >= 50) {
            state.move = 50;
        }
        if (state.move <= -(slider_line.clientWidth - slider_view.clientWidth)) {
            state.move = -(slider_line.clientWidth - slider_view.clientWidth);
        }

        slider_line.style.left = state.move + "px";
    }
    function touchend(event) {
        state.end = state.move;
    }

    slider_view.addEventListener("touchstart", touchstart, false);
    slider_view.addEventListener("touchmove", touchmove, false);
    slider_view.addEventListener("touchend", touchend, false);
}
function click_btn_menu() {
    if (free_menu.classList == "free_menu free_menu--closed") {
        free_menu.classList.remove("free_menu--closed");
        free_menu.classList.add("free_menu--opened");
    } else if (free_menu.classList == "free_menu free_menu--opened") {
        free_menu.classList.remove("free_menu--opened");
        free_menu.classList.add("free_menu--closed");
    }
}

button_next.addEventListener('mouseup', next_scroll_slider);
button_prev.addEventListener('mouseup', prev_scroll_slider);
button_menu.addEventListener('click', click_btn_menu);

touchSlider();