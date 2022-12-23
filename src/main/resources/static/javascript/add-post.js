const bookList = document.querySelector("#booklist");
let currentBook = {};
const cookieArr = document.cookie.split("=")
const userId = parseInt(cookieArr[1]);
console.log(userId);

const baseUrl = "http://localhost:8080/api/v1/reviews/"
const bookBaseUrl = "http://localhost:8080/api/v1/books/"

async function newFormHandler(event) {
  event.preventDefault();

  const googleId = currentBook.googleId;

  await fetch(`${baseUrl}user/${userId}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((result) => {
      const previousReviews = result.filter(
        (book) => book.googleId === googleId
      );
      if (previousReviews.length === 0) {
        postBookReview();
      } else {
        alert("You've already reviewed that book!");
      }
    });
}

async function postBookReview() {
    const googleId = currentBook.googleId;
    const title = currentBook.title;
    const poster = currentBook.poster;
    const review_text = document.querySelector('textarea[name="post-text"]').value;
    const book_rating = document.querySelector(".rating").querySelectorAll(".fas").length;

  const bookResponse = await fetch(`${bookBaseUrl}${googleId}`, {
    method: "GET",
  });

  // check to see if the book is in the database first
  if (bookResponse.status === 500) {
    // if not, add it
    const postNewBook = await fetch(`${bookBaseUrl}`, {
      method: "POST",
      body: JSON.stringify({
        googleId,
        title,
        poster,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  console.log(bookResponse);
//
//   const review = await fetch(`${baseUrl}`, {
//      method: "POST",
//      body: JSON.stringify({
//         googleId
//         book_rating,
//         review_text,
//         userId
//      }),
//      headers: {
//        "Content-Type": "application/json",
//      },
//   });

//  if (review.ok) {
//    //document.location.replace("http://localhost:8080/dashboard.html");
//    console.log(bookResponse);
//  } else {
//    console.log(bookResponse);
//    alert(bookResponse.statusText);
//        console.log(review)
//  }
}

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);

document.addEventListener("click", function (e) {
  if (e.target && e.target.className == "bookChoice") {

    // get the title
    const title =
      e.target.parentElement.parentElement.childNodes[1].textContent;

    document.querySelector("#bookReviewLabel").innerText = title;

    // get the google books api id
    const googleId =
      parseInt(e.target.parentElement.parentElement.getAttribute("data-id"))

    document
      .querySelector("#bookReviewLabel")
      .setAttribute("data-id", googleId);

    // get the poster source
    const posterLength =
      e.target.parentElement.parentElement.getAttribute("style").length;
    const poster = e.target.parentElement.parentElement
      .getAttribute("style")
      .substr(23, posterLength - 25);

    document.querySelector("#book-poster").setAttribute("src", poster);

    currentBook = { title: title, googleId: googleId, poster: poster };
  }
});