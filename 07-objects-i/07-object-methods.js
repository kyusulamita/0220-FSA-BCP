/* 

use Object.keys() to get an array of the keys in the object 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
*/

// let pusheen = {
//   name: 'Pusheen',
//   age: 7,
//   color: 'gray and tabby'
// };

// const arrOfKeys = Object.keys(pusheen);
// console.log(arrOfKeys);

// // key => value
// for (let i = 0; i < arrOfKeys.length; i++){
//   const key = arrOfKeys[i];
//   console.log('The key at index i', i , "is", key);
//   const value = pusheen[key];
//   console.log("the value at", key, "is", value);
// }

/* 

use Object.values() to get an array of the values in the object 

*/

// let pusheen = {
//   name: 'Pusheen',
//   age: 7,
//   color: 'gray and tabby'
// };

// const arrOfValues = Object.values(pusheen);
// console.log(arrOfValues);

// for (let i = 0; i < arrOfValues.length; i++){
//   const value = arrOfValues[i];
//   console.log(value);

//   // we can't go from value => key
// }


/* 

  use Object.entries() to get an array of the entries in the object 

  you will get a nested array here
*/

let pusheen = {
  name: 'Pusheen',
  age: 7,
  isHappy: true,
  color: 'gray and tabby'
};

const arrOfEntries = Object.entries(pusheen);
console.log(arrOfEntries);


// for (let i = 0; i < arrOfEntries.length; i++){
//   const entry = arrOfEntries[i];
//   const key = entry[0];
//   const value = entry[1];
//   console.log(key, value)
// }