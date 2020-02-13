// let rsvpGroups = ['Jane', 'Mel', "Jack", 'Rohan', 'David', 'Meg'];

// for (let i = 0; i < rsvpGroups.length; i++) {
//   let element = rsvpGroups[i]; 
//   console.log(element);
// }

// http://www.pythontutor.com/visualize.html#code=let%20rsvpGroups%20%3D%20%5B%5B'Jane',%20'Mel'%5D,%20%22Jack%22,%20%5B'Rohan',%20'David',%20'Meg'%5D%5D%3B%0A%0A//%20console.log%28rsvpGroups%5B1%5D%29//%20'Jack'%0A//%20console.log%28rsvpGroups%5B2%5D%5B1%5D%29//%20'David'%0A%0Afor%20%28let%20i%20%3D%200%3B%20i%20%3C%20rsvpGroups.length%3B%20i%2B%2B%29%20%7B%0A%0A%20%20let%20element%20%3D%20rsvpGroups%5Bi%5D%3B%20%0A%20%20//%20what%20do%20i%20want%20to%20do%3F%0A%20%20//%20if%20its%20just%20a%20string,%20i%20can%20just%20console.log%20it%20out%0A%20%20//%20but%20if%20it's%20an%20array,%20i%20want%20to%20do%20something%20else%0A%0A%20%20//%20Array.isArray%0A%20%20if%20%28Array.isArray%28element%29%29%20%7B%0A%20%20%20%20//%20do%20something%0A%20%20%20%20const%20nestedArr%20%3D%20element%3B%0A%20%20%20%20for%20%28let%20j%20%3D%200%3B%20j%20%3C%20nestedArr.length%3B%20j%2B%2B%29%7B%20%0A%20%20%20%20%20%20const%20nestedElement%20%3D%20nestedArr%5Bj%5D%3B%20//%20rsvpGroup%5Bi%5D%5Bj%5D%0A%20%20%20%20%20%20console.log%28%22nested%20Element%22,%20nestedElement%29%3B%0A%20%20%20%20%7D%0A%20%20%7D%20else%20%7B%0A%20%20%20%20//%20its%20a%20string,%20we're%20just%20going%20to%20log%20it%20out%0A%20%20%20%20console.log%28element%29%0A%20%20%7D%0A%7D&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false
// let rsvpGroups = [['Jane', 'Mel'], "Jack", ['Rohan', 'David', 'Meg']];

// console.log(rsvpGroups[1])// 'Jack'
// console.log(rsvpGroups[2][1])// 'David'

// for (let i = 0; i < rsvpGroups.length; i++) {
//   let element = rsvpGroups[i]; 
//   // what do i want to do?
//   // if its just a string, i can just console.log it out
//   // but if it's an array, i want to do something else

//   // Array.isArray
//   if (Array.isArray(element)) {
//     // do something
//     const nestedArr = element;
//     for (let j = 0; j < nestedArr.length; j++){
//       const nestedElement = nestedArr[j];
//       console.log("nested Element", nestedElement);
//     }
//   } else {
//     // its a string, we're just going to log it out
//     console.log(element)
//   }
// }


let grid = [
  [11, 12, 13],
  [21, 22, 23],
  [31, 32, 33],
];
// console.log(grid);
// row
// console.log(grid[1])
// columns -> the second index doesn't change
// console.log([grid[0][2], grid[1][2], grid[2][2]])

// const firstColumn = [];
// for (let rowNumber = 0; rowNumber < grid.length; rowNumber++){
//   const elem = grid[rowNumber][0];
//   firstColumn.push(elem)
// }
// console.log(firstColumn);

for (let i = 0; i < grid.length; i++) {
  const row = grid[i]; // grab the row
  console.log(row);
  for (let j = 0; j < row.length; j++){ // iterate over every element in the row
    // const elem = row[j]; //grid[i][j]

    // console.log("The elem at row", i + 1, "and column", j+1, "is", elem);
  }
}

