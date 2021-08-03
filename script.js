console.log("This is my news js file");

// Initialize the news api parameters
//let source = 'the-times-of-india';  &source=${source}
//let source = 'bbc-news'
let apiKey = '8fa2bf4f33a84ebfa14821ea53f7849a'

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let indexHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="card">
                    <div class="card-header" id="heading${index}">
                        <h2 class="mb-0">
                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                            aria-expanded="false" aria-controls="collapse${index}">
                           <b>Breaking News ${index + 1}:</b> ${element["title"]}
                        </button>
                        </h2>
                    </div>

                    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                        <div class="cardBody p-3" > ${element["title"]} <hr> ${element["content"]} . <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                    </div>
                </div>`;
            indexHtml += news;
        });
        newsAccordion.innerHTML = indexHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()

//Time
function displayTime() {
    time = new Date();
    document.getElementById(`time`).innerHTML = time;
}
setInterval(displayTime, 1000);

//Search the news;
// let search = document.getElementById('searchTxt');
let searchBtn = document.getElementById('searchBtn');

search.addEventListener("input", function () {
    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let cards = document.getElementsByClassName('card');
    Array.from(cards).forEach(function (element) {
        let cardBody = element.getElementsByClassName("cardBody")[0].innerText;
        if (cardBody.toLowerCase().includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
})