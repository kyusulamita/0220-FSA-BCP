//RECURSION I REVIEW

// const reverseArray = (array) => {
//   if (array.length === 1) return array.slice()
//   let newArray = []
//   newArray.push(array[array.length - 1])
//   let remaining = reverseArray(array.slice(0, -1))
//   return newArray.concat(remaining)
// }

// //CALLSTACK
// console.log(reverseArray([1,2,3]))

// const isPalindrome = (string) => {
//   string = string.toLowerCase()
//   if (string.length === 1) return true
//   if (string.length === 2) return string[0] === string[1]

//   let first = string[0]
//   let last = string[string.length - 1]
//   if (first !== last) return false
//   return isPalindrome(string.slice(1,-1))
// }

//RECURSION II

const obj = {
  a: 5,
  b: 6,
  c: {
    d: 10
  },
  x: 100
};

// const getSum = (obj) => {
//   let sum = 0
//   for ( let key in obj) {
//     let currentValue = obj[key]

//     if (typeof currentValue === 'object') {
//       sum += getSum(currentValue)
//     } else {
//       sum += currentValue
//     }
//   }
//   return sum
// }

//getSum({a: 5, b: 6, c: { d: 10}, x: 100}) --> 121
//CALLSTACK
// const obj = {
//   a: 5,
//   b: 6,
//   c: {
//     d: 10
//     }
//   },
//   x: 100
// }
