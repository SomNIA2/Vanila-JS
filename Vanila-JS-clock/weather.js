const weather = document.querySelector("js-selector");

const API_KEY = "-";
const COORDS = "coords";

function getweather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return console.log(response.json());
    })
    .then(function (json) {
      const temperture = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperture}@${place}`;
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}
function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude: latitude, //객체의 변수의 이름 : key의 이름
    longitude: longitude,
    //객체의 변수의 이름과 key의 이름이 같을 때는 latitude:latitude대신 latitude 한개만 써서 생략이 가능
  };
  saveCoords(coordsObj);
  getweather(latitude, longitude);
}
function handleGeoError() {
  console.log("Cant access");
}
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}
function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    getweather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  loadCoords();
}
init();
