const bookList = document.querySelector("#booklist");
let currentBook = {};
const cookieArr = document.cookie.split("=")
const userId = parseInt(cookieArr[1]);

const baseUrl = "http://localhost:8080/api/v1/reviews/"
const bookBaseUrl = "http://localhost:8080/api/v1/books/"

async function newFormHandler(event) {
  event.preventDefault();
    postBook();
}

async function postBook() {
  const googleId = currentBook.googleId;
  const title = currentBook.title;
  const poster = currentBook.poster;

  console.log(googleId);
  console.log(title);
  console.log(poster);


  // add book to data base first
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
   })
   .catch(err => console.log(err.message))

   if (postNewBook.ok){
        postReview();
   }
}

async function postReview(){
    const review_text = document.querySelector('textarea[name="post-text"]').value;
    const book_rating = document.querySelector(".rating").querySelectorAll(".fas").length;

     const postNewReview = await fetch(`${baseUrl}`, {
          method: "POST",
          body: JSON.stringify({
             googleId,
             book_rating,
             review_text,
             userId
          }),
          headers: {
            "Content-Type": "application/json",
          },
       })
     .catch(err => console.error(err.message))

     if (postNewReview.ok){
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