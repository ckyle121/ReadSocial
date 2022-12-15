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
    array.forEach(obj => {
        let bookCard = document.createElement("div")
        bookCard.classList.add("col-md-4")
        bookCard.innerHTML = `
              <div class="book-card"><img
                  src="{$obj.book.poster}"
                  class="img img-responsive"
                />
                <div class="book-title">{$obj.book.title}}</div>
                <div class="book-position"><a>{{#times book_rating}}
                      <i class="fas fa-star"></i>
                    {{/times}}</a>
                <div class="book-overview">
                  <div class="book-overview">
                    <div class="row text-center">
                      <div class="col-xs-4">
                        <h3><a href="/users/{$obj.user.userId}">@{$obj.user.username}</a></h3>
                      </div>
                      <div class="col-xs-4">
                        <h3><a href="/book/{$bookId}">See More Reviews</a></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        `
        reviewContainer.append(bookCard);
    })
}