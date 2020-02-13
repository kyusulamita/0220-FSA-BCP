/* eslint-disable no-console */

/*
  .concat Combines two or more arrays

  @param items — Additional items to add to the end of array1.
  @returns combinedArr {arr} 
*/


let older = ["Mr Bear", "Pusheen"];
let younger = ["Planty", "Mr Sheep"];
const moreNames = ["Theodore"];
let notAnArr = "John";
let notAnArr2 = "Thomas"

// const names = older.concat(younger);
// console.log(names);
// console.log(older);
// console.log(younger);
// const names = older.concat(younger, moreNames);
// console.log(names);
const names = younger.concat(notAnArr, notAnArr2);
console.log(names);
// console.log(names);
// console.log(older);
// console.log(younger);