// Задание: Калькулятор чисел

// Получаем все динамические элемнты
let 
  numsBox = document.querySelector(".nums"),
  out = document.getElementsByClassName("out")[0],
  oper = {
    plus : document.querySelector(".plus"),
    minus: document.querySelector(".minus"),
    get: document.querySelector(".get")
  };

function g() {
  console.log("Good");
}

// Слушатели

numsBox.onclick = function(event) { // Ввод чисел
  if(event.target.className == numsBox.firstElementChild.className) {
    let target = event.target;
  }

}

plus.addEventListener("click", operPlus);
minus.addEventListener("click", operMinus);
get.addEventListener("click", operGet);


// Функции

function operPlus() {
  
}
function operMinus() {

}
function operGet() {

}


