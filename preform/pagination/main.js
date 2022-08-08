let articles = document.querySelector('.articles');
let pages = document.querySelector('.pages');
let countArticles = 7;

function loadArticles(startItem, countItems) {
    const requestURl = `https://jsonplaceholder.typicode.com/posts?_start=${startItem}&_limit=${countItems}`;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', requestURl)

    xhr.responseType = 'json'

    xhr.onload = () => {
        var base = xhr.response;
        articles.innerHTML = "";
        base.forEach(article => {
            articles.innerHTML +=
                `<article class="article">
                <p class="article_id">article id: <span>${article.id}</span></p>
                <h2 class="article_header">${article.title}</h2>
                <p class="article_text">${article.body}</p>
                </article>`;
        });
        pages.addEventListener("click", (e)=changePage);
    }

    xhr.send();
}

loadButtons();

function loadButtons() {
    let page = 1;
    let maxPage = 5;

    for(let i = page; i<=maxPage; i++) {
        pages.innerHTML += `<a href="#"><button topage="${i}" class="toPage"><span>${i}</span></button></a>`;
    }
}

function changePage(event) {
    console.log(event);
    console.log(event.target);

    let begin = +event.target.innerText * countArticles - countArticles;

    loadArticles(begin, countArticles);

    pages.removeEventListener("click", (e)=changePage);
}

loadArticles(0, countArticles)