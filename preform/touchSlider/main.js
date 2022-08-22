let slider_view = document.querySelector('.slider_view');
let slider_line = document.querySelector('.slider_line');

let state = {
    start: 0,
    end: 0,
    move: 0,
    path: 0,
}

function touchstart(event) {
    state.start = event.changedTouches[0].clientX;


    document.querySelector(".cl_start").innerText = state.start;
}



function touchmove(event) {
    state.path = 1 * (event.changedTouches[0].clientX - state.start);

    state.move = state.end + state.path*1.5;
    if(state.move >= 50) {
        state.move = 50;
    }
    if(state.move <=  -(slider_line.clientWidth - slider_view.clientWidth)) {
        state.move = -(slider_line.clientWidth - slider_view.clientWidth);
    }

    slider_line.style.left = state.move + "px";

    

    document.querySelector('.cl_left').innerText = state.move;
    document.querySelector(".cl_move").innerText = state.path;
}



function touchend(event) {
    state.end = state.move;

    document.querySelector(".cl_stop").innerText = state.end;
}

slider_view.addEventListener("touchstart", touchstart, false);
slider_view.addEventListener("touchmove", touchmove, false);
slider_view.addEventListener("touchend", touchend, false);