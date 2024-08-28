const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const INVISIBLE_CLASSNAME = "invisible";
const USERNAME_KEY = "username";

function handleLoginForm(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
  loginForm.classList.add(INVISIBLE_CLASSNAME);
}

const paintGreetings = (name) => {
  greeting.classList.remove(INVISIBLE_CLASSNAME);
  greeting.classList.innerText = `Welcome ${name}`;
};

const existingUsername = localStorage.getItem(USERNAME_KEY);

if (existingUsername) {
  paintGreetings(existingUsername);
} else {
  loginForm.classList.remove(INVISIBLE_CLASSNAME);
  loginForm.addEventListener("submit", handleLoginForm);
}
