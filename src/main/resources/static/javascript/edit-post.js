// Get reviewId from URL
const reviewId = window.location.pathname.split("/").pop();

// DOM elements
const editReviewContainer = document.getElementById("editReviewContainer");

const baseUrl = "http://localhost:8080/api/v1/reviews/"

const headers = {
    'Content-Type': 'application/json'
}

// Get Review by Id
async function getReviewById(reviewId){
    await fetch(`${baseUrl}${reviewId}`, {
    method: "GET",
            headers: headers
    })
    .then(response => response.json())
    .then(data => createEditCard(data))
    .catch(err => console.error(err))
}

const createEditCard = (review) => {
    editReviewContainer.innerHTML = ''

    let reviewCard = document.createElement("div")
    reviewCard.classList.add("row")
    reviewCard.innerHTML = `
        <h6 class="text-center display-4">${review.bookDto.title}</h6>

        <div class="d-flex justify-content-center">
            <img src="${review.bookDto.poster}" class="w-25 h-30 mb-2" />
        </div>

        <div class="d-flex justify-content-center">
            <div class="rating" name="rating">
                <i class="rating__star far fa-star"></i>
                <i class="rating__star far fa-star"></i>
                <i class="rating__star far fa-star"></i>
                <i class="rating__star far fa-star"></i>
                <i class="rating__star far fa-star"></i>
            </div>
        </div>



        <div class="d-flex justify-content-center">
      <textarea
         id="review-text"
         class="mb-2"
        >${review.review_text}</textarea>
        </div>
    `
    editReviewContainer.appendChild(reviewCard);

}

//// Edit Review by Id
//
//async function editFormHandler(event) {
//  event.preventDefault();
//
//  const review_text = document.querySelector("#comment-text").value.trim();
//  const book_rating = document.querySelector(".rating").querySelectorAll(".fas").length;
//
//  const response = await fetch(`${baseUrl}${reviewId}`, {
//    method: "PUT",
//    body: JSON.stringify({
//      review_text,
//      book_rating,
//    }),
//    headers: {
//      "Content-Type": "application/json",
//    },
//  });
//
//  if (response.ok) {
//    document.location.replace("../dashboard.html");
//  } else {
//    alert(response.statusText);
//  }
//}
//
//document
//  .querySelector(".save-post-btn")
//  .addEventListener("click", editFormHandler);
//
// Delete Review by Id

async function deleteFormHandler(event) {
  event.preventDefault();

  const response = await fetch(`${baseUrl}${reviewId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("../dashboard.html");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".delete-post-btn")
  .addEventListener("click", deleteFormHandler);

// call Review Function
getReviewById(reviewId)
