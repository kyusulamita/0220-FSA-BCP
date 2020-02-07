/* 

  a for loop requires three elements:
     1. the for keyword
     2. three optional expressions
     3. a block of code

  for (initialization; condition; final-expression) {
    // block of code

  }

  the block of code will run over and over until the condition evaluates to false
  
*/

// remember the while loop from earlier??
// let count = 1;
// while (count <= 3) {
//   console.log('count is', count);
//   count++;
// }

// for (let i = 1; i <= 3; i++) {
//   console.log('i is:', i);
// }

/* the initialization is run first, and only once. it's often used to define a counter variable */


/* then, before every iteration, the condition is checked to see if it's true - if it is, the for loop will run another iteration */

/* then, after each iteration, the final expression is run */

// for (let i = 1; i <= 3; i++) {
//   console.log('i is:', i);
// }

// // loop in either direction
// for (let i = 5; i >= 1; i--) {
//   console.log('i is:', i);
// }
// i += 100 // i = i + 100
// can increment by any number

// for (let i = 100; i <= 300; i += 100) {
//   console.log('i is:', i);
// }



// Are for loops just for counting??
// No! They have a number of different uses;
// For examples, the most common

// use for loops to iterate through a string
let letters = 'abcdefg';

// console.log(letters[0])//'a'
// console.log(letters[1])//'b'
// console.log(letters[2])//'c'
//
// console.log(letters[6]) // 'g'
// console.log(letters[7]);

// console.log(letters.length);

// for (let i = 0; i < letters.length; i++) {
//   let currentLetter = letters[i];
//   console.log(`The letter at index ${i} is ${currentLetter}`);
// }

// let count = 0;
// while ( count < letters.length){
//   let currentLetter = letters[count];
//   console.log(`The letter at index ${count} is ${currentLetter}`);
//   count++;
// }

// console.log(letters);

// FOR THIS WORKSHOP
// important to note -> strings are inmutable
// what does this mean???
// console.log(letters);
// letters[0] = 'Z';
// console.log(letters);
// nothing happened!


// if you want a different string, you have to build it yourself

// Try it out:
// make a capitalized version of our letters string
let newStr = ''; // undefined

for (let i = 0; i < letters.length; i++) {
  let currentLetter = letters[i];
  // making it an uppercase letter
  let capitalLetter = currentLetter.toUpperCase();
  letters[i] = capitalLetter;
  // '' + 'A'
  // 'A' + 'B'
  // 'AB' + 'C'
  newStr = newStr + capitalLetter;
  console.log(`The letter at index ${i} is ${capitalLetter}`);
}

console.log(newStr);
console.log(letters);
