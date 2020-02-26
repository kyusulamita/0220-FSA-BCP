//HIGHER ORDER FUNCTIONS II REVIEW

// const getDogBreeder = (defaultName, defaultAge) => {

//   function dogBreeder(name = defaultName, age = defaultAge) {
//     if (typeof name === 'number') {
//       age = name
//       name = defaultName
//     }
//     let newDog = {
//       name,  //name: name --> this is short hand
//       age  //age: age --> this is short hand
//     }
//     return newDog
//   }

//   return dogBreeder
// }

// const cacheSavings = (callback) => {
//   let cache = {}
//   return (arg) => {
//     if (!(arg in cache)) {
//       cache[arg] = callback(arg) //--> return the result
//     }
//     return cache[arg]
//   }
// }

//RECURSION

//recursion is when a function calls itself

// function sayHello() {
//   console.log('hello')
// }

// function sayGoodbye() {
//   sayHello()
//   console.log('goodbye!!!!!!!!!!!!')
// }

// sayGoodbye()

//
//sayGoodbye()
//CALLSTACK

// const countDown = (num) => {
//   if(num === 0){
//     console.log('Done!!')
//   } else {
//     console.log(num)
//     countDown(num-1)
//   }

// }

// const whatAmI = countDown(3)
// console.log("WHAT IS THIS: ", whatAmI)
//CALLSTACK

// 0 -- > 1
//1 --> 1
//2! --> 2 * 1
//3! --> 3 * 2 * 1
//4! --> 4 * 3 * 2 * 1

// const factorial = (num) => {
//   if (num === 0 || num === 1)return 1
//   return num * factorial(num - 1)
// }

// let result = factorial(2)
// console.log(result)

//
//6
//CALLSTACK
