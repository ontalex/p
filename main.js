let button_menu = document.querySelector(".header_button");
let float_menu = document.querySelector(".header_menu--float");

let isOpenMenu = false;

function addEffectWriting(element, time) {
  console.log(element);

  let element_array = element.innerText.split("");

  console.log(element_array);

  element.count = 0;
  element.innerText = "";

  function writeSymbols() {
    element.innerText += element_array[element.count];
    element.count++;

    console.log(element.count);

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
  if (!isOpenMenu) {
    button_menu.classList.remove("header_button--open");
    button_menu.classList.add("header_button--close");

    isOpenMenu = true;

    console.log(`Статус меню: ${isOpenMenu}`);

    float_menu.classList.remove("header_menu--float-closed");
    float_menu.classList.add("header_menu--float-opened");
  } else {
    button_menu.classList.remove("header_button--close");
    button_menu.classList.add("header_button--open");

    isOpenMenu = false;

    console.log(`Статус меню: ${isOpenMenu}`);

    float_menu.classList.remove("header_menu--float-opened");
    float_menu.classList.add("header_menu--float-closed");
  }
}
function fixing_floatMenu() {
  if (window.scrollY >= document.querySelector("header").offsetHeight) {
    document.querySelector("header").style.position = "fixed";
    document.querySelector(".baner").style.paddingTop =
      document.querySelector("header").offsetHeight + "px";
  }
}

button_menu.addEventListener("mouseup", close_openMenu);
window.addEventListener("scroll", fixing_floatMenu);

addEffectWriting(document.querySelector('.baner_language-js'), 15);
