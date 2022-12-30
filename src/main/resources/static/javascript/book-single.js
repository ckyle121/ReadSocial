// Get bookId from URL
var bookId = window.location.pathname.split("/").pop()

// DOM elements
const reviewDiv = document.getElementById('single-review-container');

const baseUrl = "http://localhost:8080/api/v1/reviews/"
const bookBaseUrl = "http://localhost:8080/api/v1/books/"

const headers = {
    'Content-Type': 'application/json'
}

// Get Reviews by Book Id
async function getBookReviews(bookId) {
    await fetch(`${baseUrl}book/${bookId}`, {
        method: "GET",
        headers: headers
    })
        .then(response => response.json())
        .then(data => createBookCards(data))
        .catch(err => console.error(err))
}

// Create Review Cards

const createBookCards = (array) => {
    
    reviewDiv.innerHTML = ''
    array.forEach(review => {
        let reviewCard = document.createElement("div")
        reviewCard.classList.add("reviews mt-3")
        reviewCard.innerHTML = `
           <div class="d-flex inline justify-content-between">
            <p><a href="/users/{review.user.userId}">@{$review.userDto.username}</a></p>

             <div class="ratebox text-center">
                <div onload=times({$review.book_rating}>
             </div>

           </div>

           <p class="review-text p-4">{$review.review_text}}</p>
        `
        reviewDiv.append(reviewCard);
    })
}

function times(n){
    let starDiv = document.createElement("div")
    for (var i = 0; i < n; ++i) {
        let star = document.createElement("i")
        star.classList.add("rating__star fas fa-star")
        starDiv.appendChild(star)
    }
    return starDiv
}