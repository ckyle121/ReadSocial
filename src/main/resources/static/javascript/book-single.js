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

    let titleDiv = document.createElement("div")
    titleDiv.innerHTML = `
        <h2 class="text-center display-4" id="currentMovieTitle">${array[0].bookDto.title}</h2>
        <div class="average-rate text-center mb-2"></div>
        <div class="d-flex justify-content-center">
          <img src="${array[0].bookDto.poster}" class="w-25 h-30 mb-2" id="currentMoviePoster" />
        </div>
    `

    reviewDiv.appendChild(titleDiv);

    for (let i = 0; i < array.length; i++){
        let reviewCard = document.createElement("div")
        reviewCard.classList.add("reviews", "mt-3")
        reviewCard.innerHTML = `
           <div class="d-flex inline justify-content-between">
            <p><a href="http://localhost:8080/user/${array[i].userDto.id}">@${array[i].userDto.username}</a></p>

             <div class="ratebox text-center">
                <div onload=times(${array[i].book_rating})>
             </div>

           </div>

           <p class="review-text p-4">${array[i].review_text}</p>
        `
        reviewDiv.appendChild(reviewCard);
    }
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


// call function to display reviews
getBookReviews(bookId);