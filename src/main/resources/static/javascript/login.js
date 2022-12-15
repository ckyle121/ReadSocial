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

    //let number = Math.floor(Math.random()*1000000);
    const responseArr = await response.json()

    if (response.status === 200){
        document.cookie = `userId=${responseArr[1]}`
        window.location.replace(responseArr[0])
    } else {
        alert("Username or Password Incorrect. Please Try Again.");
        location.reload();
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
      document.location.replace(`http://localhost:8080/login.html`);
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



