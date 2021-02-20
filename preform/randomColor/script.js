let 
    cell = document.querySelectorAll(".cell"),
    textCell = document.querySelectorAll(".textCell");
    textCellArr = [],
    colorsBG = [],
    colorsF = [],
    heightCell = window.innerHeight / 3 - 20;


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function randomColor(min, max) {
    return "#" +
        getRandomIntInclusive(min, max).toString(16) +
        getRandomIntInclusive(min, max).toString(16) +
        getRandomIntInclusive(min, max).toString(16) +
        getRandomIntInclusive(min, max).toString(16) +
        getRandomIntInclusive(min, max).toString(16) +
        getRandomIntInclusive(min, max).toString(16);
}

for (let i = 0; i < cell.length; i++) {
    cell[i].style.height = heightCell + "px";
}

for (let i = 0; i < cell.length; i++) {
    colorsBG.push(randomColor(2, 14));
    textCellArr.push(colorsBG[i]);
}

for (let i = 0; i < cell.length; i++) {
    cell[i].style.backgroundColor = colorsBG[i];
    textCell[i].innerHTML = textCellArr[i];
}
