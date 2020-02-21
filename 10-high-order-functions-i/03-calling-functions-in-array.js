/* 

how do we call all the functions in the array? 
how have we always looped through an array of values? 

*/

function happyFunction(person) {
  console.log(`${person} is so happy`);
}

function jumpingFunction(person){
  console.log(`${person} is jumping`);
}

function sleepingFunction(person){
  console.log(`${person} is sleeping`)
}

let amazingArray = [happyFunction, jumpingFunction, sleepingFunction];
// console.log(amazingArray);

for (let i = 0; i < amazingArray.length; i++) {
  let element = amazingArray[i]; // each element is a function!
  // element('Pusheen');
  // element;
}
