/*
  https://goo.gl/1H5LhL
  https://goo.gl/qjSqGV
  https://goo.gl/c84i4E

  hoisting
*/

// function callAllWith(arr, callbackFunc) {
//  // callbackFunc => isGreat
//   for (let i = 0; i < arr.length; i++) {
//     // elem => "Jane"
//     const elem = arr[i];
//    isGreat("Jane")
//     callbackFunc(elem);
//   }
// }

// let group = ["Jane", "Jill", "Pip", "Mike"];

// function sayByeWithName(name) {
//   console.log("Bye, " + name + "!");
// }

// function sayHelloWithName(name) {
//   console.log("Hello, " + name + "!");
// }

// function isGreat() {
//   console.log('Is great');
// }

// callAllWith(group, sayHelloWithName);

// callAllWith(group, sayByeWithName);

// callAllWith(group, isGreat);

// const pets = ['Mr Bear', 'Pusheen', 'Sookie', 'Winkie'];
// function petThePet(petName){
//   console.log(`Pet ${petName}`);
// }
// // pet all the pets
// callAllWith(pets, petThePet);
// // say hi to all the pets
// callAllWith(pets, sayHelloWithName);

// function petLovesToJump(petName){
//   console.log(`${petName} loves to jump`);
// };
// function petLovesToEat(petName){
//   console.log(`${petName} loves to eat`);
// };


// callAllWith(pets, petLovesToJump);

/* we can pass anonymous functions into another function, too */

function callAllWith(names, sayWithNameFunc) {
  // names => ['Mr Bear', 'Pusheen', 'Sookie', 'Winkie']
  // sayWithNameFunc => console.log("Bye, " + name + "!");
  for (let i = 0; i < names.length; i++) {
    sayWithNameFunc(names[i]);
  }
}
const group = ['Mr Bear', 'Pusheen', 'Sookie', 'Winkie'];

// let group = ["Jane", "Jill", "Pip", "Mike"];

// callAllWith(group, function (name) {
//   console.log("Bye, " + name + "!");
// });

// callAllWith(group, function(name){
//   console.log(`${name} loves to jump.`);
// });

callAllWith(group, (name) => {
  console.log(`${name} loves to jump.`);
});

//


// high order
// callback 

// function callAllWith(arr, callbackFunc) {
//   for (let i = 0; i < arr.length; i++) {
//     const elem = arr[i];
//     callbackFunc(elem);
//   }
// }


// const pets = ['Mr Bear', 'Pusheen', 'Sookie', 'Winkie'];

// function petLovesToJump(petName){
//   console.log(`${petName} loves to jump.`)
// }

// function lovesToEat(name){
//   console.log(`${name} loves to eat.`)
// }

// console.log(lovesToEat);
// callAllWith(pets, petLovesToJump);  //
// callAllWith(pets, lovesToEat); //


// const plants = ['Planty', 'Mr. Plant', 'Theodore'];
// callAllWith(plants, lovesToEat);

// function needsFertilizer(name) {
//   console.log(`${name} need fertilizer.`)
// }
// callsAllWith(plants, needsFertilizer);
// callAllWith(plants, function (name) {
//   console.log(`${name} need fertilizer.`)
// })
