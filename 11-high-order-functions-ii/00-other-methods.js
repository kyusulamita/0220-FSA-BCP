/*
  filter => callBackFunc

  callBackFunc 
  @elem [optional]
  @index [optional]
  @arr [optional]

  @returns an array with only the values that returned true for my call back
*/

// function isApple(string, idx, arr) {
//   // console.log(string, idx, arr)
//   return string === 'apple';
// }

// let fruits = ['not an apple', 'not an apple', 'apple', 'not an apple', 'apple'];
// console.log(fruits);
// const apples = fruits.filter(isApple);
// console.log(apples);

// what is filter doing under the hood??
// const myFilter = (arr, checker) => {
//   const metReqs = [];

//   for (let i = 0; i < arr.length; i++){
//     const elem = arr[i];
//     if (checker(elem, i, arr)) {
//       metReqs(elem);
//     }
//   }
//   return metReqs;
// }

// want ANOTHER challenge?
// use filter to solve `Even And Odd`
// https://learn.fullstackacademy.com/workshop/5ac579437ec3340004bdde15/content/5ac579437ec3340004bdde1a/text


/*
  reduce => @callBackFunc
  @initializer

  callBackFunc 
  @acc [optional]
  @elem [optional]
  @index [optional]
  @arr [optional]

  @returns an array with only the values that returned true for my call back
*/


// reduce is used for when i want to reduce all the elements on my array to one value

// this is super useful for when I want to add things up
// !!!!!!! REDUCE IS KINDA WEIRD !!!!!!!!!
// it's syntax is different from other array methods with callback we encountered


// const nums = [1, 2, 3, 4, 5];

// const total = nums.reduce(function(acc, elem) {
//   // acc is whatever you returned in your previous call to the callback
//   console.log(acc, elem);
//   console.log(acc + elem)
//   return acc + elem;
// }, 0);


// console.log(total);

// // let's bring who's a special
// const pets = ['Mr Bear', 'Pusheen', 'Sookie', 'Winkie'];

// const phrase = pets.reduce(function(sentenceSoFar, pet, idx) {
//   const newSection = `${pet} is so great!`;
//   console.log(JSON.stringify({ sentenceSoFar, idx }));
//   return sentenceSoFar + newSection;
// }, '');

// console.log(phrase);

