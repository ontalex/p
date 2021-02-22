let
  menu = document.querySelector(".menu"),
  menubox = document.querySelector(".menubox"),
  countMenu = 0,
  closeMenu = document.querySelector(".close"),
  menuBotton = document.querySelector(".menuBotton");

menubox.style.height = window.innerHeight + 100 + "px";

function menuF() {
  if (countMenu == 0) {
    menubox.style.left = "0%";
    countMenu++;
    console.log(countMenu);
    menuBotton.style.display = "none";
    document.body.style.overflow = "hidden";
  } else {
    menubox.style.left = "-100%";
    countMenu--;
    console.log(countMenu);
    menuBotton.style.display = "flex";
    document.body.style.overflow = "auto";
  }
}

menuBotton.addEventListener("mouseup", ()=>{menuF()} );
closeMenu.addEventListener("mouseup", ()=>{menuF()} );