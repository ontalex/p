document.body.innerHTML = `<p>Window width: ${window.innerWidth} // Window height: ${window.innerHeight}</p>`;
document.body.style.minHeight = window.innerHeight+"px";

document.body.addEventListener("mouseup", ()=>{document.body.innerHTML = `<p>Window width: ${window.innerWidth} // Window height: ${window.innerHeight}</p>`;});