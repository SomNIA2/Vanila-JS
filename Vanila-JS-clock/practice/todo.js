const todoForm = document.querySelector(".js-todoform"),
  toDoInput = todoForm.querySelector("input"),
  toDoList = document.querySelector(".js-todolist");

const TODOS_LS = "toDos";

function createListToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "x";
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  toDoList.appendChild(li);
}
function handleSubmit(event) {
  event.preventDefault(); //헷갈리는 부분 event.preventDefault가 왜 event뒤에 붙는가
  // 폼 태그를 초기화하지 않으려고 preventDefault()를 사용하는 건데 toDoInput.뒤에 사용하면 안되나여??..
  const currentValue = toDoInput.value;
  createListToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const toDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
  } else {
  }
}
function init() {
  loadToDos();
  todoForm.addEventListener("submit", handleSubmit);
}
init();
