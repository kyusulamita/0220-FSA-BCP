/* 

use the for…in loop to loop through all of the keys in an object 

*/


let pusheen = {
  name: 'Pusheen',
  age: 7,
  color: 'gray and tabby'
};

// for (let key in pusheen) {
//   console.log("key", key);
// }

//1
for (let key in pusheen) {
  const value = pusheen[key]; // pusheen @ color
  // grey and tabby
  console.log("Pusheen's", key, 'is', value);
}
//2
for (let key in pusheen) {
  // key = name
  const value = pusheen.key; // pusheen @ key
  console.log("Pusheen's", key, 'is', value);
}