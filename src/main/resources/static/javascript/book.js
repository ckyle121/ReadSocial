// DOM elements
const reviewDiv = document.getElementById('single-review-container');

const baseUrl = "http://localhost:8080/api/v1/reviews/"

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
    array.forEach(obj => {
        let reviewCard = document.createElement("div")
        reviewCard.classList.add("reviews mt-3")
        reviewCard.innerHTML = `
           <div class="d-flex inline justify-content-between">

             <p><a
                 href="/users/{review.user.userId}}"
               >@{$obj.user.username}}</a></p>

             <div class="ratebox text-center">
                <div onload=times({$obj.book_rating}>
             </div>

//             <p class="d-flex justify-content-end review-text">{{format_date
//                 comment.created_at
//               }}</p>

           </div>

           <p class="review-text p-4">{$obj.review_text}}</p>
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