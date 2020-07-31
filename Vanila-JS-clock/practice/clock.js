const clockDiv = document.querySelector(".js-clock");
const clockTitle = clockDiv.querySelector(".js-title");

function getTime() {
  const date = new Date();
  const min = date.getMinutes();
  const hours = date.getHours();
  const sec = date.getSeconds();
  clockTitle.innerText = `${hours >= 12 ? `PM ${hours}` : `AM ${hours}`}:${
    min < 10 ? `0${min}` : min
  }:${sec < 10 ? `0${sec}` : sec}`;
}
function init() {
  setInterval(getTime, 1000);
  getTime();
}
init();
