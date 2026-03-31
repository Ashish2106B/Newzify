let API_KEY = "9854af16b847e1da9ff7504a636c5a02"

let URL = `https://gnews.io/api/v4/top-headlines?lang=en&token=${API_KEY}`

let container = document.getElementById("newsContainer")
let loading = document.getElementById("loading")

loading.style.display = "block"

fetch(URL)
.then(res => res.json())
.then(data => {
    loading.style.display = "none"

    let articles = data.articles

    articles.forEach(a => {
        let div = document.createElement("div")

        div.innerHTML = `
            <h3>${a.title}</h3>
            <p>${a.description || ""}</p>
        `

        container.appendChild(div)
    })
})
.catch(() => {
    loading.innerText = "Failed to load news"
})