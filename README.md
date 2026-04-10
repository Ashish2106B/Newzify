# 📰 Newzify – Smart News Dashboard

## 📌 Project Overview

Newzify is a responsive web application that displays real-time news using a public API. It allows users to explore, search, filter, and interact with news articles in a clean and modern interface.

---

## 🎯 Objective

To build an interactive frontend application that integrates real-time data from an API and enhances user experience with dynamic features.

---

## 🔗 API Used

GNews API
https://gnews.io

This API provides:

* Latest headlines
* Category-based news
* Search-based results
* Article images and descriptions

---

## ✨ Features Implemented

### 🔹 Core Features

* Fetch and display real-time news using `fetch()`
* Dynamic rendering using DOM manipulation
* Responsive design for mobile, tablet, and desktop
* Loading indicator during API calls

---

### 🔹 Interactive Features (Milestone 3)

#### 🔍 Search

* Search news by keywords
* Implemented using `Array.filter()`

#### 📂 Filtering

* Filter news by categories (Technology, Sports, Business)
* Uses API-based filtering

#### 🔃 Sorting

* Sort news alphabetically
* Implemented using `Array.sort()`

#### 🌙 Dark/Light Mode

* Toggle between dark and light themes

---

### 🔹 Bonus Features

#### ⚡ Debouncing

* Optimizes search by delaying execution
* Prevents unnecessary function calls

#### 📄 Pagination

* Displays limited number of news per page
* Implemented using `Array.slice()`

---

## 🛠️ Technologies Used

* HTML
* CSS
* JavaScript
* Fetch API

---

## ⚙️ Setup Instructions

1. Clone or download the project
2. Open `index.html` in a browser
3. Add your GNews API key in `script.js`:

   ```javascript
   let API_KEY = "YOUR_API_KEY"
   ```
4. Run the project

---

## 📱 Responsiveness

The application is fully responsive and adapts to:

* Desktop 💻
* Tablet 📱
* Mobile 📲

---

## 🧠 Learning Outcomes

* Working with REST APIs
* DOM manipulation
* Using higher-order functions (`filter`, `sort`, `slice`)
* Implementing UI interactivity
* Handling asynchronous JavaScript

---

## 👨‍💻 Author

Ashish Singh Bisht
