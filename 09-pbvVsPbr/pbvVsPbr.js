//OBJECT METHODS REVIEW

// let ticTacToe = {
//   board: [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null]
//   ],
//   move: function(player, row, col) {
//     if (!this.board[row][col]) {
//       this.board[row][col] = player
//     }
//     return this.board
//   },
//   clear: function() {
//     this.board = [
//       [null, null, null],
//       [null, null, null],
//       [null, null, null]
//     ]
//     return this.board
//   }
// }

// let tacoCatInc = {
//   gourmetShell: {
//     'hard treat shell': {cost: 2, quantity: 100},
//     'soft treat shell': {cost: 1.5, quantity: 100}
//   },

//   gourmetFishFilling: {
//     'salmon': {cost: 5, quantity: 100},
//     'tuna': {cost: 5.5, quantity: 100},
//     'sardines': {cost: 1.5, quantity: 100}
//   },

//   gourmetVeggie: {
//     'cat grass': {cost: 1, quantity: 100}
//   },

//   gourmetSeasoning: {
//     'cat nip': {cost: 0.5, quantity: 100},
//     'treat dust': {cost: 0.1, quantity: 100}
//   },

//   cash: 0,
// };

// tacoCatInc.currentInventory = function() {
//   let total = 0
//   for (let category in this) {
//     //category will be gourmetSeasoning
//     if (category === 'cash') continue
//     let items = this[category]
//     //items will be gourmetSeasoning's value
//     for (let itemName in items) {
//       //itemName will be cat nip
//       let currentObj = items[itemName]
//       //currentObj will be cat nip's obj with cost and quantity
//       total += currentObj['cost'] * currentObj.quantity
//     }
//   }
//   return total
// }
// let order = {
//   gourmetShell: 'hard treat shell',
//   gourmetFishFilling: 'salmon'
// };

// tacoCatInc.sale = (order) => {
//   let finalPrice = 0
//   for (let category in order) {
//     let choice = order[category]
//     finalPrice += tacoCatInc[category][choice].cost
//     tacoCatInc.cash += tacoCatInc[category][choice].cost
//     tacoCatInc[category][choice].quantity--
//   }
//   return finalPrice
// }

// Array.isArray([]) === true
// Object.values(false)

//PBR VS. PBV

// let myString = 'hello'
// let otherString = myString
// myString += 'GOOD BYE'

// console.log(myString)
// console.log(otherString)

// let myArray = [1,2,3,4]
// //my Array points to a reference
// let otherArray = myArray
// myArray = false
// // myArray.push(5)
// // myArray.shift()

// console.log(myArray)
// console.log(otherArray)

// let myArray = ['1',2,null,4, false, ['hello', 'world']]

// let otherArray = myArray.slice()
// // myArray.push(false)
// myArray[5][1] = 999999
// myArray[0] = 'whatever'
// console.log(myArray)
// console.log(otherArray)
// console.log(myArray[4] === otherArray[4])
