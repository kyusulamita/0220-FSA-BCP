/*
https://goo.gl/zFvFvx
https://goo.gl/t6AKRa

*/

// // callback
function addWorld(string) {
  // string = 'Hello'
  // return 'Hello' + ' world';
  return string + ' world';
}

// // high order
// function callsWithHello(func) {
//   // func = addPerson
//   // return addPerson('Hello');
//   // return 'Hello person';
//   return func('hello');
// }

// result = 'Hello world';
// let result = callsWithHello(addWorld);
// console.log(result);


// function addPerson(string) {
//   // string 'hello'
//   // return 'hello person'
//   return string + ' person';
// }
// // addPerson('Hello')
// result = callsWithHello(addPerson);
// console.log(result);

// // high order function
function callsWithHello(func) {
  let sentence = func('hello');
  return sentence +  '!!!';
}

function addsEveryone(string) {
  return string + ' everyone';  
}

let result1 = callsWithHello(addWorld);  
console.log(result1);
// let result1 = addWorld('hello')
// result1 = result1 + '!!!';
let result2 = callsWithHello(addsEveryone);
// let result2 = addsEveryone('hello')
// result2 = result2 + '!!!';

console.log(result1);
console.log(result2);

