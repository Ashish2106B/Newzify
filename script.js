let articles = []

let container = document.getElementById("newsContainer")
let loading = document.getElementById("loading")

let currentPage = 1
let itemsPerPage = 8

let BASE_URL = "https://saurav.tech/NewsAPI/top-headlines/category/general/in.json"


function fetchNews(url){
    loading.style.display = "block"

    fetch(url)
    .then(res => res.json())
    .then(data => {
        loading.style.display = "none"

        articles = data.articles || []
        currentPage = 1

        showNews(articles)
    })
    .catch(err => {
        console.log(err)
        loading.innerText = "Failed to load news"
    })
}

fetchNews(BASE_URL)


function showNews(arr){
    container.innerHTML = ""

    let start = (currentPage - 1) * itemsPerPage
    let end = start + itemsPerPage

    let paginated = arr.slice(start, end)

    paginated.forEach(a => {
        let card = document.createElement("div")
        card.className = "card"

        card.innerHTML = `
            <img src="${a.urlToImage || 'https://via.placeholder.com/300'}">
            <h3>${a.title}</h3>
            <p>${a.description || ""}</p>
            <a href="${a.url}" target="_blank">Read More</a>
        `

        container.appendChild(card)
    })

    renderPagination(arr.length)
}


function renderPagination(totalItems){
    let totalPages = Math.ceil(totalItems / itemsPerPage)

    let pagination = document.getElementById("pagination")
    pagination.innerHTML = ""

    if(currentPage > 1){
        let prev = document.createElement("button")
        prev.innerText = "Prev"
        prev.onclick = () => {
            currentPage--
            showNews(articles)
        }
        pagination.appendChild(prev)
    }

    if(currentPage < totalPages){
        let next = document.createElement("button")
        next.innerText = "Next"
        next.onclick = () => {
            currentPage++
            showNews(articles)
        }
        pagination.appendChild(next)
    }
}


function searchNews(){
    let query = document.getElementById("search").value.toLowerCase()

    currentPage = 1

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


let timer

function debounceSearch(){
    clearTimeout(timer)

    timer = setTimeout(() => {
        searchNews()
    }, 500)
}


function filterNews(category){
    let url = `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`
    fetchNews(url)
}


function showAll(){
    fetchNews(BASE_URL)
}


function sortNews(){
    let sorted = [...articles].sort((a, b) =>
        a.title.localeCompare(b.title)
    )

    currentPage = 1
    showNews(sorted)
}


function toggleMode(){
    document.body.classList.toggle("light")
}