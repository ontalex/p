    document.body.style.minHeight = window.outerHeight - 90 + "px";let password = document.querySelector(".password");
let alertIsCopy                   = document.querySelector(".alert");

function showing() {
  alertIsCopy.classList.remove("hidden-alert");
  alertIsCopy.classList.add("shown-alert");

  setTimeout(() => {
    alertIsCopy.classList.remove("shown-alert");
    alertIsCopy.classList.add("hidden-alert");
  }, 2000);
}

password.addEventListener("click", (e) => {
  showing();
  let elem = e.target;
  console.log(elem.innerText);
  navigator.clipboard.writeText(elem.innerText);
});
