/*

https://goo.gl/aHZzHW

*/

function plus(num1, num2) {
  return num1 + num2;
}

function minus(num1, num2) {
  return num1 - num2;
}
// high order function
function calc(num1, operationFunc, num2) {
  // num1 => 10
  // operationFunc => plus
  // num2 => 20
  // return plus(10, 20);
  return operationFunc(num1, num2);
}
// plus(10, 20)
console.log(calc(10, plus, 20));
console.log(calc(50, minus, 10));