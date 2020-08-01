const todoForm = document.querySelector(".js-todoform"),
  todoInput = todoForm.querySelector(input),
  toDoList = document.querySelector(".js-todolist");

const toDoList_LS = "toDos";

function handleSubmit(event) {
  todoForm.preventDefault();
  const currentValue = toDoInput.value;
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
