//COERCION && TRUTHINESS REVIEW

//false
//null
//undefined
//0
//''
// const isTruthy = (arg) => {
//   if(arg) {
//     return true
//   }
//   if (arg === false) return 'This is false or whatever'
//   if (arg === null) return 'This is null'
//   if (arg === undefined) return undefined
//   if (arg === 0) return '0!!!!!'
//   if (arg === '') return 'empty!'
// }

//10001
//11
// const zeroDarkThirty = (originalValue) => {
//   if (originalValue === 0) return NaN
//   originalValue = '' + originalValue

//   let newValue = ''
//   for (let i = 0; i < originalValue.length; i++) {
//     if (originalValue[i] !== '0') {
//       newValue += originalValue[i]
//     }
//   }
//   return +newValue
//   // return Number(newValue)
// }

// console.log(zeroDarkThirty(10.001))
// console.log(+undefined)

//SCOPE

//global scope
// let hello = 'world'

// function saysHello() {
//   for (let i =0; i < 5; i++) {
//     //local scope
//     console.log('Hello', hello)
//       let willIReachHere = 'no'
//       console.log(i)
//   }
//   //still inside the function
//   // console.log(willIReachHere)
// }

// saysHello()
// console.log(hello)

// function outer() {
// const outerVar = 'outer'
//   function inner() {
//     const innerVar = 'inner'
//     console.log(outerVar, innerVar)
//   }
//   inner()
// }

// outer()
// console.log(innerVar)

// function hello() {
//   function goodbye() {
//     console.log('made it')
//   }
// }
// //NOOOOOO
// goodbye()

// if (true) {
//   const  hello = () =>  {
//     console.log('made it')
//   }
//   // var hello = 'world'
// }
// hello = 'goodbye'
// console.log(hello)
// hello()
