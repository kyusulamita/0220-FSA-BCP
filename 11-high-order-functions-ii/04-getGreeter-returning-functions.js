/* 
 returning inner function
 https://goo.gl/XNwThJ
*/


/* ==========Example Start==========

function getGreeter() {
  // we can declare a new inner function and then return it
  function greetMe() {
    console.log('Hi!');
  }
  return greetMe;
}

let greeter = getGreeter();
console.log(greeter);
greeter();
====== Example End =========== */


/* 
 returning inner anonymous function
 https://goo.gl/zNYGVc
*/


/* ==========Example Start==========

function getGreeter() {
  // we can declare a new inner function and then return it
  return function () {
    console.log('Hi!');
  }
}

let greeter = getGreeter();
console.log(greeter);
greeter();

====== Example End =========== */


/* 
 What if returned function takes in a arg
 https://goo.gl/gC9P56
 https://goo.gl/i1CrUq
*/


// /* ==========Example Start==========

function getGreeter() {

  function fancyGreeter (name, age, city) {
    console.log(`hello ${name} from ${city}. You are ${age}`)
  }
  return fancyGreeter;
  
  // return function (name = 'Theodore', age = 12) {
  //   console.log(`Hi ${name}! You are ${age}`);
  // }


}

// let greeter = getGreeter();
// console.log(greeter);
// greeter();
// greeter('Sarah');
// greeter('Sam', 30, 'NYC');

// ====== Example End =========== */



// function getGreeter(emotion) {
//   function happyHello() {
//     console.log('Im so happy to see you!! :)');
//   }
  
//   function madHello() {
//     console.log('im not in the mood. go away');  
//   }
  
//   if (emotion === 'happy'){
//     return happyHello;
//   }
  
//   return madHello;
// }
// //  greeter -> happyHello
// let greeter = getGreeter('happy');
// greeter();
// greeter();

// // greeter2 -> madHello
// let greeter2 = getGreeter('meghh');
// greeter2();
// greeter2();
// greeter();
// greeter2();
