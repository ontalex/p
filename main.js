let button_menu = document.querySelector(".header_button");
let isOpenMenu = false;

function close_openMenu() {
  if (!isOpenMenu) {
    button_menu.classList.remove("header_button--open");
    button_menu.classList.add("header_button--close");

    isOpenMenu = true;

    console.log(`Статус меню: ${isOpenMenu}`);

  } else {
    button_menu.classList.remove("header_button--close");
    button_menu.classList.add("header_button--open");

    isOpenMenu = false;

    console.log(`Статус меню: ${isOpenMenu}`);
  }
}

button_menu.addEventListener("mouseup", close_openMenu);