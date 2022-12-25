const bookList = document.querySelector("#booklist");
let currentBook = {};
const cookieArr = document.cookie.split("=")
const userId = parseInt(cookieArr[1]);

const baseUrl = "http://localhost:8080/api/v1/reviews/"
const bookBaseUrl = "http://localhost:8080/api/v1/books/"

async function newFormHandler(event) {
  event.preventDefault();

  const bookId = currentBook.bookId;

  await fetch(`${baseUrl}user/${userId}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((result) => {
      const previousReviews = result.filter(
        (book) => book.bookId === bookId
      );
      if (previousReviews.length === 0) {
        postBook();
      } else {
        alert("You've already reviewed that book!");
      }
    });
}

async function postBook() {
  const bookId = currentBook.bookId;
  const title = currentBook.title;
  const poster = currentBook.poster;
  const review_text = document.querySelector(
    'textarea[name="post-text"]'
  ).value;
  const book_rating = document
    .querySelector(".rating")
    .querySelectorAll(".fas").length;

    console.log(bookId);
  const bookResponse = await fetch(`${bookBaseUrl}${bookId}`, {
    method: "GET",
  });

  console.log("Hello");
  // check to see if the book is in the database first
  if (!bookResponse.ok) {
    // if not, add it
    const postNewBook = await fetch(`${bookBaseUrl}`, {
      method: "POST",
      body: JSON.stringify({
        bookId,
        title,
        poster,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  console.log(bookResponse);

   const review = await fetch(`${baseUrl}`, {
      method: "POST",
      body: JSON.stringify({
         bookId,
         book_rating,
         review_text,
         userId
      }),
      headers: {
        "Content-Type": "application/json",
      },
   });

  if (review.ok) {
  console.log(review);
    //document.location.replace("http://localhost:8080/dashboard.html");
  } else {
    alert(review.statusText);
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
    const bookId =
      parseInt(e.target.parentElement.parentElement.getAttribute("data-id"))
    document
      .querySelector("#bookReviewLabel")
      .setAttribute("data-id", bookId);
    // get the poster source
    const posterLength =
      e.target.parentElement.parentElement.getAttribute("style").length;
    const poster = e.target.parentElement.parentElement
      .getAttribute("style")
      .substr(23, posterLength - 25);
    document.querySelector("#book-poster").setAttribute("src", poster);

    currentBook = { title: title, bookId: bookId, poster: poster };
  }
});