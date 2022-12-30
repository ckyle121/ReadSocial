async function editFormHandler(event) {
  event.preventDefault();

  const review_text = document.querySelector("#comment-text").value.trim();
  const book_rating = document.querySelector(".rating").querySelectorAll(".fas").length;

  const response = await fetch(`/api/comments/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      comment_text,
      movie_rating,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("http://localhost:8080/dashboard.html");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".save-post-btn")
  .addEventListener("click", editFormHandler);
