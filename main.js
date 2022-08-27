let button_menu = document.querySelector(".header_button");
let float_menu  = document.querySelector(".header_menu--float");

let line_top   = document.querySelector(".header_button_line--top");
let line_under = document.querySelector(".header_button_line--bottom");

button_menu.isSelected = false;

function addEffectWriting(element, time) {
  let element_array = element.innerText.split("");

  element.count     = 0;
  element.innerText = "";

  function writeSymbols() {
    element.innerText += element_array[element.count];
    element.count++;

    if (element.count <= element_array.length) {
      setTimeout(() => {
        writeSymbols();
      }, time);
    } else if (element.count >= element_array.length) {
      element.count     = 0;
      element.innerText = "";

      writeSymbols();
    }
  }
  writeSymbols();
}

function close_openMenu() {
  if (button_menu.isSelected == false) {

    line_under.style.marginTop = "-3px";

    setTimeout(() => {

      line_top.style.transform   = "rotate(45deg)";
      line_under.style.transform = "rotate(-45deg)";

      float_menu.classList.toggle("header_menu--float-closed");
      float_menu.classList.toggle("header_menu--float-opened");
    }, 100);
  } else {

    line_top.style.transform   = "rotate(0deg)";
    line_under.style.transform = "rotate(0deg)";

    setTimeout(() => {

      line_under.style.marginTop = "16px";

      float_menu.classList.toggle("header_menu--float-opened");
      float_menu.classList.toggle("header_menu--float-closed");
    }, 100);
  }

  button_menu.isSelected = !button_menu.isSelected;
}

function fixing_floatMenu() {
  if (window.scrollY >= document.querySelector("header").offsetHeight) {
    document.querySelector("header").style.position   = "fixed";
    document.querySelector(".baner").style.paddingTop = 
      document.querySelector("header").offsetHeight + "px";
  }
}

button_menu.addEventListener("mouseup", close_openMenu);
window.addEventListener("scroll", fixing_floatMenu);

addEffectWriting(document.querySelector(".baner_language-js"), 5);
