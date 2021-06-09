let itemUp = document.querySelectorAll(".item");
let itemUnder = document.querySelectorAll(".item_under");
let butt = document.querySelectorAll(".buttOpen");
let arrIFor = [];
function open(a) {
  if (arrIFor[a] == 0) {
    butt[a].style.transform = "rotate(270deg)";
    itemUnder[a].style.display = "block";
    arrIFor[a]++;
  } else {
    butt[a].style.transform = "rotate(90deg)";
    itemUnder[a].style.display = "none";
    arrIFor[a]--;
  }
}

for (let i = 0; i < itemUp.length; i++) {
  arrIFor.push(0);
  itemUp[i].addEventListener("mouseup", () => {
    open(i);
  });
}