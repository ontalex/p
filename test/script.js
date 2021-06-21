let box = document.querySelector(".slider");
let items = document.getElementsByClassName("item");

function prev() {
    items[0].before(items[items.length - 1]);
}

function next() {
    items[items.length - 1].after(items[0]);
}