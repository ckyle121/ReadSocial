const tryAgain = document.querySelector("#try-again");
function bookSearch() {
  event.preventDefault();

  tryAgain.innerHTML = `<div class="spinner-border text-light" style="width: 3rem; height: 3rem;" role="status">
  <span class="visually-hidden">Loading...</span>
</div></div>`;
  // imdb get request
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const searchOption = document.querySelector("#book-search").value;
  // search bar value set to nothing
  document.querySelector("#book-search").value = "";
  // if there is something in the search bar, fetch request
  if (searchOption) {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchOption}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        showBooks(result);
      })
      .catch((error) => {
        console.log("error", error);
        tryAgain.innerHTML = "";
      });
  } else {
    alert("Please enter search information");
    tryAgain.innerHTML = "";
  }
}

function showBooks(books) {
  const bookList = document.querySelector("#bookList");
  // if bookList has child elements, remove them for the next search
  while (bookList.firstChild) {
    bookList.removeChild(bookList.firstChild);
  }
  //  for loop for top 5 books of the search
  let temp = "";
  for (let i = 0; i < 5; i++) {
    temp += `<div class="userCard" data-id=${
      books.results[i].id
    } style="background-image: url('${books.results[i].image}')">
      <h3 class="title book-name">${
        books.results[i].title
      }</h3><div class="inner-text">${books.results[i].description.substr(
      0,
      6
    )}</div>
      <div class="bottom-button"><button type="button" data-bs-toggle="modal" data-bs-target="#bookReview" class="bookChoice">Choose This One</button></div>
    </div>`;
  }

  bookList.innerHTML = temp;

  tryAgain.innerHTML = `<a href="/dashboard">Didn't see what you were looking for? Try to get more specific. We aren't mind readers.</a>`;
}

document.querySelector("#searchBook").addEventListener("click", bookSearch);