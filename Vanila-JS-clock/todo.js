const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
function paintToDO(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "x";
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
}
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value; //입력한 값을 currentvalue에 넣는다
  paintToDO(currentValue);
  toDoInput.value = "";
}
function loadToDos() {
  const toDos = localStorage.getItem(TODOS_LS);
  if (toDos === null) {
  }
}
function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
