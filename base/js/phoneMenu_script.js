let phoneMenu = document.getElementById("phoneMenu");
let htmlBody = document.getElementById("body");
let shadowBox = document.getElementById("shadowBox");
let i = 0;
function openMenu() {
	if(i == 0){ 
		phoneMenu.style.right = "0vw";
		htmlBody.style.overflow = "hidden";
		i = 1;
	}else{
		phoneMenu.style.right = "-100vw";
		htmlBody.style.overflow = "auto";
		i = 0;
	}	
}

let underMenu = [
	document.getElementById("UM1"),
	document.getElementById("UM2"),
	document.getElementById("UM3")
];
let arrow = [
	document.getElementById("burgerBottun1"),
	document.getElementById("burgerBottun2"),
	document.getElementById("burgerBottun3")
];
let iUM = [1,1,1];
function openUnderMenu(iDUM, iDA, i) {
	if (iUM[i] == 1) {
		underMenu[iDUM].style.display = "block";
		arrow[iDA].innerHTML = "&minus;";
		iUM[i] = 0;
	}else{
		underMenu[iDUM].style.display = "none";
		arrow[iDA].innerHTML = "&plus;";
		iUM[i] = 1;
	}
}
