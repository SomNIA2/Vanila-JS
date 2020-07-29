const obj = {
  name: "SB",
  gender: "Male",
  favFood: [
    //오브젝트 안에 배열안에 오브젝트
    { name: "pizza", fatty: true },
    {
      name: "burgerking",
      fatty: false,
    },
  ],
};
obj.gender = "Female";
console.log(obj.favFood[1].fatty);

//function
function greeting(name, old) {
  return `Hi ${name} your age is ${old}`;
  // console.log("Hi", name, "your age is", old);
}
greeting("skybuddy5", 21);

const greetings = greeting("skybuddy5", 21);

console.log(greetings);

function cal(a, b) {
  plus(a, b);
  minus(a, b);
}
function plus(a, b) {
  console.log(a + b);
}
function minus(a, b) {
  console.log(a - b);
}
cal(4, 5); //함수로 만들기

const cl = {
  pls: function (a, b) {
    return a + b;
  },
}; //오브젝트로 만들기
const pl = cl.pls(5, 5);
console.log(pl);
