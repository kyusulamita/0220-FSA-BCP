// let pusheen = {
//   name: 'Pusheen',
//   age: 7,
//   color: 'gray and tabby',
//   isHappy: true,
//   greet: function(name){
//     console.log(`Hello ${name}, I am Pusheen the gray and tabby cat. I am 7.`);
//     // console.log("Hello " + name + " , I am Pusheen the gray and tabby cat. I am 7.");

//   },
//   birthYear: function(currentYear){
//     return currentYear - 7;
//   }
// };

// pusheen.greet("Liz");
// pusheen.greet("Paige");

// pusheen.age++;
// pusheen.age++;
// pusheen.name = "Pusheen the Great"

// console.log(JSON.stringify(pusheen, null, 2))
// console.log(pusheen)
// pusheen.greet("Liz");
// pusheen.greet("Paige");

// let pusheen = {
//   name: 'Pusheen',
//   age: 7,
//   color: 'gray and tabby',
//   isHappy: true,
//   greet: function(name){
//     console.log(`Hello ${name}, I am ${pusheen.name} the ${pusheen.color} cat. I am ${pusheen.age}.`);
//     // console.log("Hello " + name + " , I am Pusheen the gray and tabby cat. I am 7.");

//   },
//   birthYear: function(currentYear){
//     return currentYear - 7;
//   }
// };

// pusheen.greet("Liz");
// pusheen.greet("Paige");

// pusheen.age++;
// pusheen.age++;
// pusheen.name = "Pusheen the Great"

// console.log(JSON.stringify(pusheen, null, 2))
// console.log(pusheen)
// pusheen.greet("Liz");
// pusheen.greet("Paige");

// const name = 'Sulamita'

// let pusheen = {
//   name: 'Pusheen',
//   age: 7,
//   color: 'gray and tabby',
//   isHappy: true,
//   greet: function(name){
//     // this === pusheen
//     console.log(`Hello ${name}, I am ${this.name} the ${this.color} cat. I am ${this.age}`);
//     // console.log("Hello " + name + " I am " + this.name + " the " + this.color + " cat. I am " + this.age + ".");
//   },
//   birthYear: function(currentYear){
//     // how can we change this method??
//   },
//   arrowMethod: (name) => {
//     // this != pusheen;
//     console.log(`Hello ${name}, I am ${this.name} the ${this.color} cat. I am ${this.age}`);
//     // console.log("Hello " + name + " I am " + this.name + " the " + this.color + " cat. I am " + this.age);
//   },

//   sibling: {
//     // name: 'Pip',
//     getCoolBro: function () {
//       console.log(this.name);
//     },

  
//     getCoolBroArrow: () => {
//       // undefined
//       console.log(this.name);
//     }
//   }

// };
// pusheen.age += 10;
// pusheen.greet("Pond");
// pusheen.sibling.getCoolBroArrow();
// console.log(pusheen.age)
// console.log(pusheen.birthYear(2019));
// pusheen.arrowMethod("Christine");
// // // pusheen.greet("Mike");

// pusheen.age++;
// pusheen.age++;
// pusheen.name = "Madam Pusheen The Fifth";
// pusheen.greet("Jeff");


// const birthYear = pusheen.birthYear(2019);
// console.log(birthYear);

/*

this keyword

*/


let pusheen = {
  name: 'Pusheen',
  age: 7,
  color: 'gray and tabby',
  level: 1,
  isHappy: true,
  greet: function(name){
    console.log(`Hello ${name}, I am ${this.name} the ${this.color} cat.`);
  },
  birthYear: function(currentYear){
    // how can we change this method??
    return currentYear - this.age;
  },
  getThis: function(){
    // pusheen
    return this;
  }
};


// const a = { a: 1 };
// const b = { a: 1 };
// console.log(a === b);
// console.log(a == b);

// console.log(a === a);

let returnedObject = pusheen.getThis();
console.log(returnedObject === pusheen);
// console.log(returnedObject.name);
// returnedObject.name = "Sir Pusheen";

// console.log(pusheen);

pusheen.levelUp = function(levels = 1){
  // undefined + 20 => NaN
  this.level += levels;
  if (this.level > 30){
    this.name = "The best of all time"
  } 
  if (this.level < 20){
    this.name = "Pusheen"
  }
  return this.level
}

console.log(pusheen)
pusheen.levelUp(10)
console.log(pusheen)
pusheen.levelUp(20)
console.log(pusheen)
// pusheen.levelUp(-20)
console.log(pusheen)
// console.log(returnedObject === pusheen);

const pip = {
  name: 'Pip',
  age: 5,
  color: 'Orange',
}
  // greet: function(name){
  //   console.log(`Hello ${name}, I am ${this.name} the ${this.color} cat.`);
  // },
// pip.sayHi = pusheen.greet;
// pip.sayHi('John');


const mrBear = {
  name: 'Mr Bear',
  color: 'brown',
  age: 2,
  salute: function(name){
    console.log(`Hello ${name}, I am ${this.name} the ${this.color} animal.`);
  },
}

// mrBear.salute("Nicholas")
// pip.salute = mrBear.salute
// pip.name = "Pip the little guy"
// pip.salute("Sara")


// pusheen.greet("Alvin")
// pip.greet = pusheen.greet;
// pip.greet('Alvin')


