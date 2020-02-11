//L00PS REVIEW

// const myIndexOf = (source, searchValue, startIdx = 0) => {
//   // if (startIdx === undefined) {
//   //   startIdx = 0
//   // }
//   for (let i = startIdx; i <= source.length - searchValue.length; i++) {
//     let subString = source.slice(i, i+ searchValue.length)
//     // if (subString === searchValue) return i
//       if (subString === searchValue) {
//         return i
//       }
//   }
//   return -1

// }

// let example = 'most vowels'
// const mostVowels = (sentence) => {
//   let currentWord = ''
//   let currentCount = 0
//   let maxWord = ''
//   let maxCount = 0
//   for (let i = 0; i < sentence.length;i ++) {
//     if (sentence[i] !== ' ' && i !== sentence.length - 1) {
//       currentWord += sentence[i]
//       if (isVowel(sentence[i])) {
//         currentCount++
//       }
//     } else {
//       if (currentCount > maxCount) {
//         maxCount = currentCount
//         maxWord = currentWord
//       }
//       currentWord = ''
//       currentCount = 0
//     }
//   }
//   return maxWord
// }

// function isVowel(char) {
//   let vowels = 'aeiou'
//   return vowels.indexOf(char.toLowerCase()) !== -1
// }

//COERCION && TRUTHINESS

// let string = '55'
// let num = 1001
// console.log(typeof string)
// console.log(typeof num)
// console.log(typeof false)
// console.log(typeof Number(string))
// console.log(Number('abc'))
// console.log(typeof String(true))
// console.log(typeof Boolean(100))

// let num = '' + 100
// console.log(typeof num)
// let string = +undefined
// console.log(string)

// console.log('55' == 55) //DONT DO THIS OR YOU WILL PAY

// console.log(100 + 100 +'50' + 50 + (2 * 3))

// if (-49494949494) {
//   console.log('here i am')
// }
// !==
// console.log(!null)
const whatAmI = "hello!!!" && "apples" && [] && 0 && true;
const whatAmI2 = "hello" || null || undefined || "" || NaN;
if ("hello" || "there" || 0) {
  console.log("i am here");
}

console.log(whatAmI2);

//&& returns first falsey thing or last truthy thing
// || returns first truthy thing or last falsey thing
