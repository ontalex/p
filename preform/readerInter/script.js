
/* 

Переработать запросы к документу и его использование.

*/

var
    sett = document.getElementsByClassName("box_sett"),
    box_sett = document.getElementsByClassName("sett"),
    openSett = document.getElementsByClassName("open_sett"),
    arrow = document.getElementsByClassName("arrow"),
    sett_shadow = document.getElementsByClassName("sett"),
    body = document.getElementsByTagName("body"),
    boxText = document.getElementsByTagName("main"),
    team = document.getElementsByClassName("team"),
    button = document.getElementsByClassName("button"),
    i = 1,
    rem = 1;

function openSettB() {
    if (i >= 1) {
        sett[0].style.left = "0px";
        arrow[0].style.transform = "rotate(180deg)";
        sett_shadow[0].style.boxShadow = "2px 2px 10px #191919";
        i--;
    } else {
        sett[0].style.left = "-80px";
        arrow[0].style.transform = "rotate(0deg)";
        sett_shadow[0].style.boxShadow = "none";
        i++;
    }
}

function colorChange(comand) {
    if (comand == 0) {
        boxText[0].style.color = "#dfdfdf";
        body[0].style.backgroundColor = "#333333";
        box_sett[0].style.backgroundColor = "#252525";
        openSett[0].style.backgroundColor = "#191919";
        openSett[0].style.color = "#ffffff";
    } else if (comand == 1) {
        boxText[0].style.color = "#7c4700";
        body[0].style.backgroundColor = "#f1d9b9df";
        box_sett[0].style.backgroundColor = "#453117";
        openSett[0].style.backgroundColor = "#251806";
        openSett[0].style.color = "#ffffff";
    } else if (comand == 2) {
        boxText[0].style.color = "#101010";
        body[0].style.backgroundColor = "#ffffff";
        box_sett[0].style.backgroundColor = "rgb(86, 86, 86)";
        openSett[0].style.backgroundColor = "#151515";
        openSett[0].style.color = "#ffffff";
    }
}

function fontSizePlus() {
    rem = rem + 0.1;
    (rem >= 1.5) ? (rem = 1.5) : true;
    boxText[0].style.fontSize = rem + "rem";
}

function fontSizeMinus() {
    rem = rem - 0.1;
    (rem <= 0.7) ? (rem = 0.7) : true;
    boxText[0].style.fontSize = rem + "rem";
}

