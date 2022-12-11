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
    });

    if (response.ok) {
        document.cookie = `userId=${responseArr[1]}`
        window.location.replace(responseArr[0])
    } else {
      alert(response.statusText);
    }
  }
}

async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("This username is already taken");
    }
  }
}

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);

myModal.addEventListener("shown.bs.modal", function () {
  myInput.focus();
});
