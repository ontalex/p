let
  header      = document.getElementsByTagName("header")[0],
  itemsMenu   = document.querySelector(".itemsMenu"),
  buttMenu    = document.querySelector(".buttMenu"),
  menu        = document.querySelector(".menu"),
  itemMenu    = document.querySelectorAll(".itemMenu"),
  formMess    = document.querySelector(".formMess"),
  buttMess    = document.querySelector(".buttOpenMess"),
  windMess    = document.querySelector(".windMess"),
  states      = {
    menu: false,
    formMess: false,
  },
  interaction = {
    menu: {
      mouseover:function(){
        menu.addEventListener("mouseover",()=>{

          for (let i = 0; i < itemMenu.length; i++) {
            itemMenu[i].style.borderBottom = "2px solid #c31717";
          }
          menu.style.borderBottom = "2px solid #e11212";
          itemsMenu.style.display = "block";
        });
      },
      mouseout:function(){
        menu.addEventListener("mouseout",()=>{
          for (let i = 0; i < itemMenu.length; i++) {
            itemMenu[i].style.borderBottom = "none";
          }
          menu.style.borderBottom = "2px solid #c31717";
          itemsMenu.style.display = "none";
        });
      },
      mouseoverPC:function(){
        if (states.menu == false) {

          windMess.style.display = "block";
          buttMess.style.borderBottom = "2px solid #fff";
          buttMess.style.borderLeft = "2px solid #c5c5c5";
          buttMess.style.borderRight = "2px solid #c5c5c5";

          states.menu = true;
        } else {

          windMess.style.display = "none";
          buttMess.style.borderBottom = "none";
          buttMess.style.borderLeft = "2px solid #fff";
          buttMess.style.borderRight = "2px solid #fff";

          states.menu = false;
        }
      },
    },
    formMess: {
      mouseover:function(){
        formMess.addEventListener("mouseover",()=>{
          windMess.style.display = "block";
          buttMess.style.borderBottom = "2px solid #fff";
          buttMess.style.borderLeft = "2px solid #c5c5c5";
          buttMess.style.borderRight = "2px solid #c5c5c5";
        });
      },
      mouseout:function(){
        formMess.addEventListener("mouseout",()=>{
          windMess.style.display = "none";
          buttMess.style.borderBottom = "none";
          buttMess.style.borderLeft = "2px solid #fff";
          buttMess.style.borderRight = "2px solid #fff";
        });
      },
      mouseoverPC:function(){

        // дописать addEventListener для formMess и menu
        // Click ставить одинарный с логичестким статусом false / true

        if (states.formMess == false) {
          states.formMess = true;
        } else {
          states.formMess = false;
        }
      },
    },
  };

header.style.paddingLeft = (window.innerWidth - 1200) / 2 + "px";

if (window.innerWidth <= 1000) {
  menu.mouseout();
  menu.mouseover();
  formMess.mouseout();
  formMess.mouseover();
} else {
  menu.mouseoverPC();
  formMess.mouseoverPC();
}