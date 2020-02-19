//ARRAYS II REVIEW

//makeGrid(3,3)
[
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3]
];

// const makeGrid = (numColumns, numRows) => {
//   let grid = []
//   for (let i = 0; i < numRows;i++) {
//     let row = []
//     for (let j = 0; j < numColumns; j++) {
//       row.push(j + 1)
//     }
//     //rows should look like [1,2,3]
//     grid.push(row)
//   }
//   return grid
// }
// console.log(makeGrid(3,3))

// const mySlice = (originalArray, startIdx = 0, endIdx = originalArray.length) => {
//   if (startIdx < 0) startIdx = originalArray.length + startIdx
//   if (endIdx < 0) endIdx = originalArray.length + endIdx
//   let resultArray = []
//   for (let i = startIdx; i < endIdx; i++) {
//     resultArray.push(originalArray[i])
//   }
//   return resultArray
// }

// const exampleArray = [1,2,3,4,5]
//no one cares if you know this
//but its cool, and someone might
// let copyArray = [...exampleArray]
// console.log(copyArray)

//OBJECTS

// const myFirstObject = {}

// console.log(typeof myFirstObject)

let height = "hei   _-  ght";
const person = {
  "hei   _-  ght": 6.3,
  name: "Marko",
  isAlive: true,
  hobbies: ["teaching", "sleeping"],
  humanTrait: NaN
};

// console.log(person[height])
// const myVar = 'lastName'
// person['pets'] = []
// person.myVar = 'Lisonek'
// console.log(person)

// person.pets = false
// console.log(person)

// delete person.pets
// console.log(person)

// for (let humanTrait in person) {
//   // console.log('the key is', humanTrait)
//   // console.log('the value is', person.humanTrait)
//   console.log(person[humanTrait], person.humanTrait)

// }

// console.log(Object.keys(person))
// console.log(Object.values(person))
