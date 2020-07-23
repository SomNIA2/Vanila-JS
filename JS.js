/*function sayHello(name, age) {
  return `Hello ${name} you are ${age} years old`;
}

const greetNicolas = sayHello("Nicolas", 15);
//greetNicolas는 sayHello의 return값
*/

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
