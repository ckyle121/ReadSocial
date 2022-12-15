const bookList = document.querySelector("#booklist");
let currentBook = {};
const cookieArr = document.cookie.split("=")
const userId = cookieArr[1];
console.log(userId);

const baseUrl = "http://localhost:8080/api/v1/reviews/"
const bookBaseUrl = "http://localhost:8080/api/v1/books"

async function newFormHandler(event) {
  event.preventDefault();

  const book_id = currentBook.book_id;

  await fetch(`${baseUrl}user/${userId}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((result) => {
      const previousReviews = result.filter(
        (book) => book.book_id === book_id
      );
      if (previousReviews.length === 0) {
        postBook();
      } else {
        alert("You've already reviewed that book!");
      }
    });
}

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

  const bookResponse = await fetch(`${bookBaseUrl}/${book_id}`, {
    method: "GET",
  });
  // check to see if the book is in the database first
  if (!bookResponse.ok) {
    // if not, add it
    const postNewBook = await fetch(`${bookBaseUrl}/${book_id}`, {
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

  const bookReview = await fetch(`${baseUrl}book/${book_id}`, {
    method: "POST",
    body: JSON.stringify({
      book_id,
      book_rating,
      review_text,
      userId
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

   const userReview = await fetch(`${baseUrl}user/${userId}`, {
      method: "POST",
      body: JSON.stringify({
         book_id,
         book_rating,
         review_text,
         userId
      }),
      headers: {
        "Content-Type": "application/json",
      },
   });

  if (userReview.ok && bookReview.ok) {
    document.location.replace("http://localhost:8080/dashboard.html");
  } 
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