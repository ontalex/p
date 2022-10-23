const description_text_about = document.querySelector('.description_text_about');
const description_text_buy = document.querySelector('.description_text_buy');

const header_link = document.querySelector('.header_link');
const header_info = document.querySelector('.header_info');

const shift_about_buy = function () {
    if (!description_text_about.classList.contains("description_text--hidden")) {
        description_text_about.classList.add("description_text--hidden");
        description_text_buy.classList.toggle("description_text--hidden");
    } else {
        description_text_buy.classList.add("description_text--hidden");
        description_text_about.classList.toggle("description_text--hidden");
    }
}

header_link.addEventListener("click", () => {
    console.log("Click 1");
    shift_about_buy();
});

header_info.addEventListener("click", () => {
    console.log("Click 2");
    shift_about_buy();
});