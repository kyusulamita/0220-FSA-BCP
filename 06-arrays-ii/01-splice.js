/*
  .splice mutates the original array; 

  it's used to add or remove elements from the middle of an array (instead of adding or removing from either end  lets us know if the element is in the array

  @params startIdx {number} [optional]
  @params deleteCount {number} [optional]
  @params elementsToInsert [optional]

  @returns elements that were spliced out of the array
*/

let names = ["Mr Bear", "Pusheen", "Planty", "Mr Sheep"];
// let acrossTheUniverse = names.splice(1); // ["Pusheen", "Planty", "Mr Sheep"]
// console.log(acrossTheUniverse)
// console.log(names);

// let acrossTheUniverse = names.splice(1, 2); // ["Pusheen", "Planty"]
// console.log(acrossTheUniverse);
// console.log(names);

// start at index i, remove 2 elements, then insert "Theodore"
// let acrossTheUniverse = names.splice(1, 2, "Theodore"); // ["Pusheen", "Planty"]
// console.log(acrossTheUniverse);
// console.log(names);

// let acrossTheUniverse = names.splice(1, 2, "Theodore", "Thomas"); // ["Pusheen", "Planty"]
// console.log(acrossTheUniverse);
// console.log(names);


// let names = ["Mr Bear", "Pusheen", "Planty", "Mr Sheep"];
// let acrossTheUniverse = names.splice(1, 0, "Theodore"); // []
// console.log(names);
// console.log(acrossTheUniverse);


// let names = ["Mr Bear", "Pusheen", "Planty", "Mr Sheep"];
// let acrossTheUniverse = names.splice(); 
// console.log(names); // []
// console.log(acrossTheUniverse);  //["Mr Bear", "Pusheen", "Planty", "Mr Sheep"]



