/* 

  objects can store any type of value, including arrays and other objects 

*/


let pusheen = {
  name: 'Pusheen',
  age: 7,
  colors: ['gray', 'tabby']
};

// console.log(pusheen.colors);
// console.log(pusheen.colors[0]);
// const pusheenColors = pusheen.colors;
// console.log(pusheenColors[1]);
// pusheenColors.push('silver');

// console.log(pusheen);

// let age = pusheen.age;
// pusheen.age = [];
// pusheen.age.push(age);
// pusheen.age.push(9);
// age = 25;
// const pusheenColors = pusheen.colors;
// pusheen.colors.push("Brown");

// console.log(pusheen);
// console.log(pusheenColors);
// pusheenColors.push('black');
// console.log(pusheenColors);

// console.log(pusheen);
// num++;
// console.log(pusheenColors);
// console.log(pusheen.colors);

// console.log(num);
// console.log(pusheen.age);

const pusheenColors = pusheen.colors.slice();
pusheenColors.push('black');

console.log(pusheenColors);
console.log(pusheen);
