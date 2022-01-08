/*
В этот комментарий записывайте идеи, задачи и тому подобное. 
И только то, что касается данного проекта.

! НЕОБХОДИМО разбивать тяжёлые функции на более мелкие
! Много повторов -> сделай ПАТЕРН
! Длинные переменные -> сделай ОБЪЕКТ

// * Можно переписать элеметы тем с isChecked в Объект
* Добавить сверку с темой пользователя в браузере/устройстве/времени
* Добавить плавности переходов/анимации

TODO: Записывать PROPERTY в LocalStorage
TODO: Записывать elem_theme_-_isChecked в LocalStorage
//TODO: Добавить файлы подгрузки цветовых тем (CSS files with CSS variables inside)
//TODO: Написать скрипт для кнопки открытия-закрытия меню
TODo: Дописать скрипт для кнопок тем
*/

let 
    elem_range_fontSize     = document.querySelector(".range_fs"),
    elem_range_margin       = document.querySelector(".range_m"),
    elem_range_lineHeight   = document.querySelector(".range_lh"),
    rootBox                 = document.querySelector(":root"),
    elms_theme = {
        light: {
            dom: document.querySelector(".theme_light"),
            isChecked: false
        },
        dark: {
            dom: document.querySelector(".theme_dark"),
            isChecked: true,
        },
        history: {
            dom: document.querySelector(".theme_history"),
            isChecked: false,
        }
    },

    menu = {
        box: document.querySelector(".menu"),
        body: document.querySelector(".menu_body"),
        btn: document.querySelector(".btn_menu"),
        isOpen: false,
    }


elem_range_fontSize.addEventListener("change", ()=>{
    let property = elem_range_fontSize.value;
    elem_range_fontSize.parentElement.lastElementChild.lastChild.innerText = property;

    // add to css variable property
    rootBox.style.setProperty("--font_size", property);
});
elem_range_margin.addEventListener("change", ()=>{
    let property = elem_range_margin.value;
    elem_range_margin.parentElement.lastElementChild.lastChild.innerText = property;

    // add to css variable property
    rootBox.style.setProperty("--margin_mainText", property);
});
elem_range_lineHeight.addEventListener("change", ()=>{
    let property = elem_range_lineHeight.value;
    elem_range_lineHeight.parentElement.lastElementChild.lastChild.innerText = property;

    // add to css variable property
    rootBox.style.setProperty("--line_height_p", property);
});


elms_theme.light.dom.addEventListener("click", ()=>{
    elms_theme.light.isChecked      = true;
    elms_theme.dark.isChecked       = false;
    elms_theme.history.isChecked    = false;

    // TODO: Add functions are show/hidden links CSS

    console.log("Active LIGHT");
});
elms_theme.history.dom.addEventListener("click", ()=>{
    elms_theme.light.isChecked      = false;
    elms_theme.dark.isChecked       = false;
    elms_theme.history.isChecked    = true;

    // TODO: Add functions are show/hidden links CSS
    
    console.log("Active HISTORY");
});
elms_theme.dark.dom.addEventListener("click", ()=>{
    elms_theme.light.isChecked      = false;
    elms_theme.dark.isChecked       = true;
    elms_theme.history.isChecked    = false;

    // TODO: Add functions are show/hidden links CSS

    console.log("Active DARK");
});


menu.btn.addEventListener("click", ()=>{
    if(menu.isOpen == true) {
        menu.box.style.bottom = "calc(var(--h_menu_body) / -1)";
        menu.isOpen = !menu.isOpen;
    }else{
        menu.box.style.bottom = "0px";
        menu.isOpen = !menu.isOpen;
    }
});