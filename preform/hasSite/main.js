let slider_view = document.querySelector('.slider_img');
let slider_pagination = document.querySelector('.slider_pagination');

function chooseItem(event) {
    if(event.target.classList.contains("slider_point")) {
        slider_view.setAttribute("style", `background-image: url('${event.target.getAttribute("src")}')`)
    }
}

slider_pagination.addEventListener("click", chooseItem);