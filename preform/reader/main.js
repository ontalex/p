/*

Вот комментарий записывайте идеи, задачи и тому подобное. 
И только то, что касается данного проекта.

* Можно переписать элеметы тем с isChecked в Объект

TODO: Записывать PROPERTY в LocalStorage
TODO: Записывать elem_theme_-_isChecked в LocalStorage
TODO: Добавить файлы подгрузки цветовых тем (CSS files with CSS variables inside)
TODO: Написать скрипт для кнопки открытия-закрытия меню
TODo: Дописать скрипт для кнопок тем
*/

let 
    elem_range_fontSize     = document.querySelector(".range_fs"),
    elem_range_margin       = document.querySelector(".range_m"),
    elem_range_lineHeight   = document.querySelector(".range_lh"),
    rootBox                 = document.querySelector(":root"),
    elem_theme_l            = document.querySelector(".theme_light"),
    elem_theme_l_isChecked  = false,
    elem_theme_h            = document.querySelector(".theme_history"),
    elem_theme_h_isChecked  = false,
    elem_theme_d            = document.querySelector(".theme_dark"),
    elem_theme_d_isChecked  = true;

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

elem_theme_l.addEventListener("click", ()=>{});
elem_theme_h.addEventListener("click", ()=>{});
elem_theme_d.addEventListener("click", ()=>{});
