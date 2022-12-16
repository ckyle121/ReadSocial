//DOM elements
const userReviewContainer = document.getElementById("user-reviews");

const baseUrl = "http://localhost:8080/api/v1/reviews/"

//Get reviews by UserId
async function getReviews(userId) {
    await fetch(`${baseUrl}user/${userId}`, {
        method: "GET",
        headers: headers
    })
        .then(response => response.json())
        .then(data => createBookCards(data))
        .catch(err => console.error(err))
}

// Edit Review
async function editFormHandler(event) {
    event.preventDefault();

    const review_text = document.querySelector("#review-text").value.trim();
    const book_rating = document
      .querySelector(".rating")
      .querySelectorAll(".fas").length;

    const id = window.location.toString().split("/")[
      window.location.toString().split("/").length - 1
    ];
    const response = await fetch(`/api/reviews/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        review_text,
        book_rating,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard/");
    } else {
      alert(response.statusText);
    }
  }

 document
    .querySelector(".save-post-btn")
    .addEventListener("click", editFormHandler);

// Delete Review
async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/reviews/${id}`, {

    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".delete-post-btn")
  .addEventListener("click", deleteFormHandler);


const createReviewCards = (array) => {
    userReviewContainer.innerHTML = ''
    array.forEach(obj => {
        let reviewCard = document.createElement("div")
        reviewCard.classList.add("col-md-4")
        reviewCard.innerHTML = `
              <div class="book-card"><img
                  src="{{movie.poster}}"
                  class="img img-responsive"
                />
                <div class="book-title">$obj.{book.title}</div>
                <div class="book-position">
                    <div onload=times({$obj.book_rating}>
                /div>
                <div class="book-overview">
                  <div class="book-overview">
                    <div class="row text-center">
                      <div class="col-xs-4">
                        <h3><a href="/book/{{movie.id}}">See More Reviews</a></h3>
                      </div>
                      <div class="col-xs-4">
                        <h3><a href="/dashboard/edit/{{id}}" class="edit-link">Edit Review</a></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        `
        userReviewContainer.append(reviewCard);
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

getReviews(userId);