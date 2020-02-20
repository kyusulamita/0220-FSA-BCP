/* 
  create a new object using curly braces 
*/


/* 

an object's keys are always strings; you can omit the quotation marks 


*/

let pusheen = {
  name: 'Pusheen',
  age: 7,
  colour: 'gray and tabby',
  isHappy: true,
};


/*

is the same as:

*/

let pusheenTheSecond = {
  "name": 'Pusheen II',
  "age": 7,
  "colour": 'gray and tabby',
  "isHappy": true,
};


/*
  avoid mixing both formats though :( Not good practice
*/

// let pusheenTheThird = {
//   "name": 'Pusheen III',
//   age: 7,
//   colour: 'gray and tabby',
//   "isHappy": true,
// }


//
// ─── ACCESSING VALUES ───────────────────────────────────────────────────────────
//

  

// let pusheen = {
//   name: 'Pusheen',
//   age: 7,
//   colour: 'gray and tabby',
//   isHappy: true,
//   favouriteFood: 'cookies',
// };
/*
if you have a long key like "favourite food", then you need quotes
*/

/* 

use bracket notation to access a value  

pass a string into the brackets that corresponds with a key in the object 

*/


// console.log(pusheen['name']);
// console.log(pusheen['age']);
// console.log(pusheen['colour']);

// console.log(pusheen['notAKeyInTheObject']);

// let keyToCheck = 'isHappy';
// let word = 'favourite'
// console.log(pusheen[keyToCheck]);
// console.log(pusheen['is' + 'Happy']); // isHappy
// console.log(pusheen[word + 'Food']) //'favouriteFood'


/* 

you can also use dot notation to access values

*/
let keyToCheck = 'name';
console.log(pusheen);

console.log(pusheen.age);
console.log(pusheen.colour);

// YOU CAN NOT USE VARIABLES WITH DOT NOTATION !!

console.log(pusheen.keyToCheck); //undefined
// ! will not work
// console.log(pusheen.name); // no quotes needed with dot notation