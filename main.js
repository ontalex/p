let button_menu = document.querySelector("#header_button");
let float_menu = document.querySelector(".header_menu--float");
let menu_box = document.querySelector('.menu_box');


button_menu.isSelected = false;

function addEffectWriting(element, time) {
  let element_array = element.innerText.split("");

  element.count = 0;
  element.innerText = "";

  function writeSymbols() {
    element.innerText += element_array[element.count];
    element.count++;

    if (element.count <= element_array.length) {
      setTimeout(() => {
        writeSymbols();
      }, time);
    } else if (element.count >= element_array.length) {
      element.count = 0;
      element.innerText = "";

      writeSymbols();
    }
  }
  writeSymbols();
}

function close_openMenu() {
  menu_box.classList.toggle("menu_box--hidden");
  menu_box.classList.toggle("menu_box--visible");
  button_menu.classList.toggle("header_button--selected");
}

function fixing_floatMenu() {
  if (window.scrollY >= document.querySelector("header").offsetHeight) {
    document.querySelector("header").style.position = "fixed";
    document.querySelector(".hello").style.marginTop =
      document.querySelector("header").offsetHeight + "px";
  }
}

button_menu.addEventListener("click", close_openMenu);
window.addEventListener("scroll", fixing_floatMenu);

addEffectWriting(document.querySelector(".hello_code"), 5);
