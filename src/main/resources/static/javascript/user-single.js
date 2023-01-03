// Get userId from URL
const userId = window.location.pathname.split("/").pop()

//DOM elements
const userReviewDiv = document.getElementById("user-reviews")

const baseUrl = "http://localhost:8080/api/v1/reviews/"
const bookBaseUrl = "http://localhost:8080/api/v1/books/"

const headers = {
    'Content-Type': 'application/json'
}

// Get Reviews by userId
async function getReviewsByUser(userId){
    await fetch(`${baseUrl}user/${userId}`, {
    method: "GET",
            headers: headers
    })
    .then(response => response.json())
    .then(data => createReviewCards(data))
    .catch(err => console.error(err))
}

// create Stars Function
function createStars(rating){
    const starDiv = document.getElementById("starDiv")

    for (let i = 0; i < rating; i++){
        let star = document.createElement("i")
        star.classList.add("fas fa-star")
        starDiv.appendChild(star)
    }
}

// Create Review Cards
const createReviewCards = (array) => {

    let name = document.createElement("h2")
    name.classList.add("text-center", "display-4")
    name.innerHTML = `@${array[0].userDto.username}'s Book Reviews`
    userReviewDiv.appendChild(name)

    let reviewDivContainer = document.createElement("div")
    reviewDivContainer.classList.add("container")

    array.forEach(book => {
        let reviewCard = document.createElement("div")
        reviewCard.classList.add("post-list", "row")
        reviewCard.innerHTML = `
              <div class="col-md-4">
                <div class="book-card"><img
                    src="${book.bookDto.poster}"
                    class="img img-responsive"
                  />
                  <div class="book-title">${book.bookDto.title}</div>
                  <div class="book-position" id="starDiv" onLoad=createStars(${book.book_rating})></div>
                  <div class="book-overview">
                    <div class="book-overview">
                      <div class="row text-center">
                        <div class="col-xs-4">
                          <h3><a href="../book/${book.bookDto.id}">See More Reviews</a></h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        `
        reviewDivContainer.appendChild(reviewCard);
        userReviewDiv.appendChild(reviewDivContainer);
    })
}

// call Function to get Reviews by UserId
getReviewsByUser(userId);