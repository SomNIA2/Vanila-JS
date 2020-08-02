const todoForm = document.querySelector(".js-todoform"),
  toDoInput = todoForm.querySelector("input"),
  toDoList = document.querySelector(".js-todolist");

const toDoList_LS = "toDos";

function handleSubmit(event) {
  event.preventDefault();
  const inputValue = input.value;
  const currentValue = toDoInput.value;
  saveToDolist(inputValue);
  toDoInput.value = "";
}
function saveToDolist(text) {
  localStorage.setItem(toDoList_LS, text);
}
function loadToDoList() {
  const toDos = localStorage.getItem(toDoList_LS);
  if (toDos !== null) {
  }
}

function init() {
  loadToDoList();

  todoForm.addEventListener("submit", handleSubmit);
}
init();
