/*function sayHello(name, age) {
  return `Hello ${name} you are ${age} years old`;
}

const greetNicolas = sayHello("Nicolas", 15);
//greetNicolas는 sayHello의 return값
*/
/*
const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
};
//console.log(greetNicolas);

const plus = calculator.plus(5, 5);
const minus = calculator.minus(10, 5);
console.log(plus);
console.log(minus);
*/
/*
const title = document.getElementById("title");
title.innerHTML = "Hi! From SkyBuddy5";
title.style.color = "red";
document.title = "i own you now";
console.log(document);
*/
/*
const title = document.querySelector("#title");

function handleClick() {
  title.style.color = "blue";
}
title.addEventListener("click", handleClick);
*/

/* 2.5
if (10 === 10 || 10 === 20) {
  console.log("hi");
} else if ("10" === "10") {
  console.log("ho");
} else {
}

const la = "kakak";

const age = prompt("How old are you");

if (age >= 18 && age <= 21) {
  console.log("u can drink but you should not");
} else if (age > 21) {
  console.log("go ahead");
} else {
  console.log("u cant");
}*/

/* 2.6
const title = document.querySelector("#title");

const BASE_COLOR = " rgb(9, 14, 44)";
const OTHER_COLOR = "#ee3123";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}
function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}
init();
function handleOffline() {
  console.log("bye");
}
function handleOnline() {
  console.log("hi! again");
}
window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
*/
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";
function handleClick() {
  /* const hasClass = title.classList.contains(CLICKED_CLASS);
  const currentClass = title.className;
  if (hasClass) {
    title.classList.remove(CLICKED_CLASS);
  } else {
    title.classList.add(CLICKED_CLASS);
  }*/
  title.classList.toggle(CLICKED_CLASS);
  //클래스가 거기 있는지 체크해서 있으면 add 아니먄 remove를 해주는 것을 말한다.
}
function init() {
  title.addEventListener("click", handleClick);
}
init();
