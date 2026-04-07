let articles = []

let API_KEY = "9854af16b847e1da9ff7504a636c5a02"

let URL = `https://gnews.io/api/v4/top-headlines?lang=en&token=${API_KEY}`

let container = document.getElementById("newsContainer")
let loading = document.getElementById("loading")

loading.style.display = "block"

fetch(URL)
.then(res => res.json())
.then(data => {
    loading.style.display = "none"

    articles = data.articles   

    showNews(articles)         
})
.catch(() => {
    loading.innerText = "Failed to load news"
})



function showNews(arr){
    container.innerHTML = ""

    arr.forEach(a => {
        let card = document.createElement("div")
        card.className = "card"

        card.innerHTML = `
            <img src="${a.image || 'https://via.placeholder.com/300'}">
            <h3>${a.title}</h3>
            <p>${a.description || ""}</p>
            <a href="${a.url}" target="_blank">Read More</a>
        `

        container.appendChild(card)
    })
}



function searchNews(){
    let query = document.getElementById("search").value

    let url = `https://gnews.io/api/v4/search?q=${query}&lang=en&token=${API_KEY}`

    loading.style.display = "block"

    fetch(url)
    .then(res => res.json())
    .then(data => {
        loading.style.display = "none"

        articles = data.articles

        showNews(articles)
    })
    .catch(() => {
        loading.innerText = "Failed to load news"
    })
}





