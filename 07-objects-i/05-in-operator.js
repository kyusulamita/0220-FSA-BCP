/* 

use the in operator to check if a KEY is in the object 

*/


let pusheen = {
  name: 'Pusheen',
  age: 7,
  color: 'gray and tabby'
};

console.log('name' in pusheen); // true
console.log('sadness' in pusheen); // false
console.log('Pusheen' in pusheen); // false

const keyToLookFor = 'age';
console.log(keyToLookFor in pusheen); // true


console.log(name in pusheen); // reference error