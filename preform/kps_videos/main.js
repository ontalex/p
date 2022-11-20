/**
 * 
 * @param {string} elem  - CSS обозначение тега <video> (например: ".video")
 * @param {number} delay - колличество милисекунд задержки
 * @param {string} linkRequest - адресс запроса
 * @param {string} linkSource - шаблоная часть ссылки для источника видео
 * @description Функция бесконечного изменения адресса видео-файла, данные беруться из ответа сервера на запрос (by Ontalex (https://ontalex.github.io/p/))
 */

function setVideos(elem, delay, linkRequest, linkSource) {
    var requestOptions = {
        method: "GET",
        redirect: "follow",
    };
    let videoElem = document.querySelector(elem);
    let count_steps = 1;
    fetch(linkRequest, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            videoElem.setAttribute("src", linkSource + result[0]);
            setInterval(() => {
                let link = linkSource + result[count_steps];
                videoElem.setAttribute("src", link);
                count_steps > result.length ? (count_steps = 0) : (count_steps += 1);
            }, delay);
        })
        .catch((error) => console.log("error", error));
}

setVideos(".video", 15000, "http://api.kioskapi.ru/videos/", "http://api.kioskapi.ru/videos/");
