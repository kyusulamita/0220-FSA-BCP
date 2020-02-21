/* we know we can pass strings, or any value, into a function */

// function logsAType(value) {
//   console.log(typeof value);
// }

// logsAType('happy string');
// logsAType(true);
// logsAType([]);
// logsAType(null);
// logsAType(4);
/* 

if functions are like any other value, we can pass functions into other functions, too 

functions that take a function or return a function are called"higher-order functions" 

*/

// function logsAType(value) {
//   console.log(typeof value);
// }

// function happyFunction() {
//   console.log('I am happy!');

// }
// logsAType(happyFunction);


/* 

if we want happyFunction to run, we have to call it 
https://goo.gl/E9hXZc
https://goo.gl/r7dHnj
*/

// high order function <= taking in a function


function callsAFunction(anotherFunction) {
  // anotherFunction(); // invoking this time
  console.log("running");
  anotherFunction();
}

function happyFunction() {
  console.log('I am happy!');
}

function jumpingFunction(person){
  console.log(`${person} is jumping`);
}

function sleepingFunction(person){
  console.log(`${person} is sleeping`)
}

callsAFunction(sleepingFunction);

