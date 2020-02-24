/* 

  so if functions can return values, and functions are values… 
   …functions can return other functions! 

  https://goo.gl/yF6KQD

*/

function greetMe() {
  console.log('Hi!');
}

function getGreeter() {
  return greetMe; // note: we're returning the function without calling it
}


let greeter = getGreeter();
console.log(typeof greeter);
console.log(greeter);
console.log(greeter === greetMe);
greeter();