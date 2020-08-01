const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const userLocalStorage = "currentUser";
const SHOWING = "showing";

function handleSubmit(event) {
  event.preventDefault();
  const inputValue = input.value;
  paintGreeting(inputValue);
  saveName(inputValue);
}

function saveName(text) {
  localStorage.setItem(userLocalStorage, text);
}

function askForName() {
  form.classList.add(SHOWING);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(current) {
  form.classList.remove(SHOWING);
  greeting.classList.add(SHOWING);
  greeting.innerText = `Hi ${current}`;
}
function loadName() {
  const currentUser = localStorage.getItem(userLocalStorage);

  if (currentUser !== null) {
    paintGreeting(currentUser);
  } else {
    askForName();
  }
}

function init() {
  loadName();
}
init();
