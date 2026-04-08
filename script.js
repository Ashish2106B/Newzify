let articles = []
let API_KEY = "9854af16b847e1da9ff7504a636c5a02"

let URL = `https://gnews.io/api/v4/top-headlines?lang=en&token=${API_KEY}`

let container = document.getElementById("newsContainer")
let loading = document.getElementById("loading")


function fetchNews(url){
    loading.style.display = "block"

    fetch(url)
    .then(res => res.json())
    .then(data => {
        loading.style.display = "none"

        articles = data.articles || []

        showNews(articles)
    })
    .catch(() => {
        loading.innerText = "Failed to load news"
    })
}

fetchNews(URL)



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
    let query = document.getElementById("search").value.toLowerCase()

    if(query === ""){
        showNews(articles)
        return
    }

    let filtered = articles.filter(a => {
        let text = `${a.title} ${a.description}`.toLowerCase()
        return text.includes(query)
    })

    showNews(filtered)
}


function filterNews(category){
    let url = `https://gnews.io/api/v4/top-headlines?topic=${category}&lang=en&token=${API_KEY}`
    fetchNews(url)
}


function showAll(){
    fetchNews(URL)
}


function toggleMode(){
    document.body.classList.toggle("light")
}
