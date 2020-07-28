const COORDS = "coords";

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
    //getweather
  }
}

function init() {
  loadCoords();
}
init();
