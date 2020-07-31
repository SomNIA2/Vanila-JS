const clockDiv = document.querySelector(".js-clock");
const clockTitle = clockDiv.querySelector(".js-title");

function getTime() {
  const date = new Date();
  const min = date.getMinutes();
  const hours = date.getHours();
  clockTitle.innerText = `${hours}:${min}`;
}
function init() {
  getTime();
}
init();
