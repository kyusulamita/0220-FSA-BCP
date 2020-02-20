/* 

an object is a collection of key-value pairs 

*/

/* 

like arrays, objects store values, but instead of storing them in numeric "indices", objects store values in string "keys"

 */

let myArray = ['value1', 'value2'];

let myObject = {
  'key1': 'value1',
  'key2': 'value2'
};

console.log(myArray[0]);
console.log(myObject['key1']);

/* consider representing Pusheen the Cat as an array */

// let pusheen = ['Pusheen', 7, 'gray and tabby'];

/* 
an array is a good place to hold an ordered list of values, but it doesn't store any information about what those values represent
 */

/* 

an object's string keys allows objects to store more information about the values within it 

*/

let pusheen = {
  'name': 'Pusheen',
  'age': 7,
  'colour': 'gray and tabby'
};
/*
  Look at that! It makes so much more sense now

  If only zoo inventory had used objects! Can you imagine what it would have looked like?

  const animal = {
    name: "Simba",
    species: "Lion King",
    age: 7,
  }

*/

/*

typeof

*/

console.log(typeof {});

// console.log(typeof []); // object

// const unknown = [];

/*

  Play around with this later!

  if both object and arrays return a typeof "object", then how do we know if it's actually an object or if it's actually an array??

*/


//  typeof
// Array.isArray

