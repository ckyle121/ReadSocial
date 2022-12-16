const cookieArr = document.cookie.split("=")
const userId = cookieArr[1];

//DOM elements
const userReviewContainer = document.getElementById("user-reviews");

const baseUrl = "http://localhost:8080/api/v1/reviews/"

const headers = {
    'Content-Type': 'application/json'
}

async function getReviewsByUser(userId){
    await fetch(`${baseUrl}user/${userId}`, {
    method: "GET",
            headers: headers
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
}

const createReviewCards = (array) => {
    userReviewContainer.innerHTML = ''
    array.forEach(book => {
        let reviewCard = document.createElement("div")
        reviewCard.classList.add("col-md-4")
        reviewCard.innerHTML = `
              <div class="book-card"><img
                  src="${book.poster}"
                  class="img img-responsive"
                />
                <div class="book-title">${book.title}</div>
//                <div class="book-position">
//                    <div onload=times(${book.book_rating})>
//                /div>
                <div class="book-overview">
                  <div class="book-overview">
                    <div class="row text-center">
//                      <div class="col-xs-4">
//                        <h3><a href="/book/{{book.id}}">See More Reviews</a></h3>
//                      </div>
//                      <div class="col-xs-4">
//                        <h3><a href="/dashboard/edit/{{id}}" class="edit-link">Edit Review</a></h3>
//                      </div>
                    </div>
                  </div>
                </div>
              </div>
        `
        userReviewContainer.append(reviewCard);
    })
}

// get Review By Book

// open Edit Modal


// call Function
getReviewsByUser(userId);