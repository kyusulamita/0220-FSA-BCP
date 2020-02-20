/* 
use bracket notation or dot notation to add a key/value pair 
*/


// let pusheen = {
//   name: 'Pusheen',
//   age: 7,
//   colour: 'gray and tabby',
//   isHappy: true,
// };

// pusheen['bigSister'] = 'Stormy';
// console.log(pusheen);

// const keyToAdd = "sibling"
// pusheen[keyToAdd] = "Pip";


// pusheen.brother = 'Pip';

// console.log(pusheen);


/* 
use bracket notation or dot notation to change a value 

*/

let pusheen = {
  name: 'Pusheen',
  age: 7,
  colour: 'gray and tabby'
};


// pusheen.age++; // pusheen.age = pusheen.age + 1;
// pusheen.age = 45;
pusheen["age"]++; //pusheen["age"] = pusheen["age"] + 1;
// pusheen["age"] = 45;

pusheen.colour = "Brown";
console.log(pusheen);
// console.log("pusheen age", pusheen.age);
// console.log(pusheen);