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