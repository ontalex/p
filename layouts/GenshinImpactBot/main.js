const description_text_about = document.querySelector('.description_text_about');
const description_text_buy = document.querySelector('.description_text_buy');

const header_link = document.querySelector('.header_link');
const header_info = document.querySelector('.header_info');

header_link.addEventListener("click", () => {
    header_link.classList.toggle("header_button--hidden");
    header_info.classList.toggle("header_button--hidden");

    description_text_about.classList.add("description_text--hidden");
    description_text_buy.classList.remove("description_text--hidden");
});

header_info.addEventListener("click", () => {
    header_info.classList.toggle("header_button--hidden");
    header_link.classList.toggle("header_button--hidden");

    description_text_buy.classList.add("description_text--hidden");
    description_text_about.classList.remove("description_text--hidden");
});