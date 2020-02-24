/* 

  What if we do invoke it???
  https://goo.gl/uitj9N
   
*/

function greetMe() {
  console.log(`Hi!`);
}

function getGreeter() {
  return greetMe(); // what if we did invoke it?
}

// let greeter = greetMe;
let greeter = getGreeter();

console.log(typeof greeter);
console.log(greeter);
greeter();