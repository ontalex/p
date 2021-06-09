let
    itemUp = document.querySelectorAll(".item"),
    itemUnder = document.querySelectorAll(".item_under"),
    butt = document.querySelectorAll(".buttOpen"),
    arrIFor =[],
    function open(a) {
        if (arrIFor[a] == 0) {
            butt[a].style.transform = "rotate(270deg)";
            itemUnder[a].style.display = "block";
            arrIFor[a]++;
        }else {
            butt[a].style.transform = "rotate(90deg)";
            itemUnder[a].style.display = "none";
            arrIFor[a]--;
        }
    };

for (let i = 0; i < itemUp.length; i++) {
    arrIFor.push(0);
    itemUp[i].addEventListener("mouseup", ()=>{open(i)});
}