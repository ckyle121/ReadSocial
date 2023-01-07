//DOM elements
const reviewContainer = document.getElementById("all-reviews")

const baseUrl = "http://localhost:8080/api/v1/reviews/"

const headers = {
    'Content-Type': 'application/json'
}

async function getReviews() {
    await fetch(`${baseUrl}`, {
        method: "GET",
        headers: headers
    })
        .then(response => response.json())
        .then(data => createBookCards(data))
        .catch(err => console.error(err))
}

const createBookCards = (array) => {
    reviewContainer.innerHTML = ''
    array.forEach(review => {
        let bookCard = document.createElement("div")
        bookCard.classList.add("col-md-4")
        bookCard.innerHTML = `
                    <div class="book-card">
                            <img
                              src=${review.bookDto.poster}
                              class="img img-responsive"
                            />
                            <div class="book-title">${review.bookDto.title}</div>
                            <div class="book-position"></div>
                            <div class="book-overview">
                              <div class="book-overview">
                                <div class="row text-center">
                                  <div class="col-xs-4">
                                    <h3><a href="./user/${review.userDto.id}" class="book-links">@${review.userDto.username}</a></h3>
                                  </div>
                                  <div class="col-xs-4">
                                    <h3><a href="./book/${review.bookDto.id}" class="book-links">See More Reviews</a></h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
        `
        reviewContainer.append(bookCard);
    })
}

// call function to get all reviews
getReviews()
