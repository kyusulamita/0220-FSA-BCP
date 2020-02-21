/* 

functions aren't special. we can push them into an array, too! 
https://goo.gl/372Pfk

*/
let amazingArray = [];

function happyFunction() {
  console.log('I am happy!');
}

amazingArray.push(happyFunction);
amazingArray.push(happyFunction);
amazingArray.push(happyFunction);
// console.log(amazingArray);

const elem = amazingArray[0];
console.log(elem);
elem();
// console.log(amazingArray[0])
amazingArray[0]();
