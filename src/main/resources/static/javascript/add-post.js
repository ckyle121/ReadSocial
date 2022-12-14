const bookList = document.querySelector("#bookList");
let currentBook = {};


//async function newFormHandler(event) {
//  event.preventDefault();
//
//  const book_id = currentBook.book_id;
//
//  await fetch(`/api/v1/reviews/user/{userId}`, {
//    method: "GET",
//  })
//    .then((response) => response.json())
//    .then((result) => {
//      const previousReviews = result.filter(
//        (book) => book.book_id === book_id
//      );
//      if (previousReviews.length === 0) {
//        postBook();
//      } else {
//        alert("You've already reviewed that book!");
//      }
//    });
//}

async function postBook() {
  const book_id = currentBook.book_id;
  const title = currentBook.title;
  const poster = currentBook.poster;
  const review_text = document.querySelector(
    'textarea[name="post-text"]'
  ).value;
  const book_rating = document
    .querySelector(".rating")
    .querySelectorAll(".fas").length;

  const bookResponse = await fetch(`/api/v1/books/${book_id}`, {
    method: "GET",
  });
  // check to see if the book is in the database first
  if (!bookResponse.ok) {
    // if not, add it
    const postNewBook = await fetch(`/api/v1/books`, {
      method: "POST",
      body: JSON.stringify({
        book_id,
        title,
        poster,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const review = await fetch(`/api/v1/reviews`, {
    method: "POST",
    body: JSON.stringify({
      review_text,
      book_id,
      book_rating,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (review.ok) {
    document.location.replace("./dashboard.html");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-post-form")
  .addEventListener("submit", postBook);

document.addEventListener("click", function (e) {
  if (e.target && e.target.className == "bookChoice") {
    // get the title
    const title =
      e.target.parentElement.parentElement.childNodes[1].textContent;
    document.querySelector("#bookReviewLabel").innerText = title;
    // get the book id
    const book_id =
      e.target.parentElement.parentElement.getAttribute("data-id");
    document
      .querySelector("#bookReviewLabel")
      .setAttribute("data-id", book_id);
    // get the poster source
    const posterLength =
      e.target.parentElement.parentElement.getAttribute("style").length;
    const poster = e.target.parentElement.parentElement
      .getAttribute("style")
      .substr(23, posterLength - 25);
    document.querySelector("#book-poster").setAttribute("src", poster);

    currentBook = { title: title, book_id: book_id, poster: poster };
  }
});