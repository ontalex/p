let nav = document.querySelector("nav");
if (window.innerWidth <= 1000) {
    nav.style.top = (window.innerHeight - 36) / 2 + "px";
    nav.style.height = 36 + "px";
    nav.style.borderTopRightRadius = "5px";
    nav.style.borderBottomRightRadius = "5px";
}else {
    true
}


let cell = document.querySelectorAll(".cell");
for (let i = 0; i < cell.length; i++) {
    cell[i].style.height = (window.innerHeight / 2).toFixed(0) - 20 + "px";
}


let box = document.querySelectorAll(".box");
for (let i = 0; i < box.length; i++) {
    box[i].style.minHeight = (window.innerHeight - 30) + "px";
}