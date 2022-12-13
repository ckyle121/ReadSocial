const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

const baseUrl = 'http://localhost:8080/api/v1/users'

async function loginFormHandler(event) {
  event.preventDefault();

  const password = document.querySelector("#password-login").value.trim();
  const username = document.querySelector("#username-login").value.trim();

  if (username && password) {
    const response = await fetch(`${baseUrl}/login`, {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    }).catch(err => console.error(err.message));

    const responseArr = await response.json()

    if (response.ok) {
        document.cookie = `userId=${responseArr[1]}`
        document.location.replace(`http://localhost:8080/all-reviews.html`);
    } else {
      alert(response.statusText);
    }
  }
}

async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && password) {
    const response = await fetch(`${baseUrl}/register`, {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    }).catch(err => console.error(err.message));

    if (response.ok) {
      document.location.replace(`http://localhost:8080/all-reviews.html`);
    } else {
      alert("This username is already taken");
      console.log(response);
    }
  }
}

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);

//if(myModal){
//    myModal.addEventListener("shown.bs.modal", function () {
//      myInput.focus();
//    })
//}



