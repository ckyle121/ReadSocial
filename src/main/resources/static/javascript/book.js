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

// Create Review Cardds

const createBookCards = (array) => {
    
    reviewDiv.innerHTML = ''
    array.forEach(obj => {
        let reviewCard = document.createElement("div")
        reviewCard.classList.add("reviews mt-3")
        reviewCard.innerHTML = `
           <div class="d-flex inline justify-content-between">

             <p><a
                 href="/users/{{comment.user.username}}"
               >@{$obj.user.username}}</a></p>

             <div class="ratebox text-center">
               {{#times review.book_rating}}
                 <i class="rating__star fas fa-star"></i>
               {{/times}}
             </div>

             <p class="d-flex justify-content-end review-text">{{format_date
                 comment.created_at
               }}</p>

           </div>

           <p class="review-text p-4">{$obj.review_text}}</p>
        `
        reviewDiv.append(reviewCard);
    })
}