let header = document.getElementsByTagName("header")[0];

let itemsMenu = document.querySelector(".itemsMenu");
let buttMenu = document.querySelector(".buttMenu");
let menu = document.querySelector(".menu");
let itemMenu = document.querySelectorAll(".itemMenu");

let buttMess = document.querySelector(".buttOpenMess");
let windMess = document.querySelector(".windMess");

header.style.paddingLeft = (window.innerWidth - 1200) / 2 + "px";

menu.addEventListener("mouseover", () => {

    for (let i = 0; i < itemMenu.length; i++) {
        itemMenu[i].style.borderBottom = "2px solid #c31717";
    }
    menu.style.borderBottom = "2px solid #e11212";
    itemsMenu.style.display = "block";
});
menu.addEventListener("mouseout", () => {
    for (let i = 0; i < itemMenu.length; i++) {
        itemMenu[i].style.borderBottom = "none";
    }
    menu.style.borderBottom = "2px solid #c31717";
    itemsMenu.style.display = "none";
});


formMess.addEventListener("mouseover", () => {
    windMess.style.display = "block";
    buttMess.style.borderBottom = "2px solid #fff";
    buttMess.style.borderLeft = "2px solid #c5c5c5";
    buttMess.style.borderRight = "2px solid #c5c5c5";
});
formMess.addEventListener("mouseout", () => {
    windMess.style.display = "none";
    buttMess.style.borderBottom = "none";
    buttMess.style.borderLeft = "2px solid #fff";
    buttMess.style.borderRight = "2px solid #fff";
});