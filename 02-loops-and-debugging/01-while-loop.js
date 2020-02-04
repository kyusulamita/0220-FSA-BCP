/* 

  a while loop requires three elements:
    1. the while keyword
    2. a conditional expression that evaluates to a boolean value
    3. a block of code

  while (conditional) {
    // block of code
  }


  the block of code will run over and over as long as the conditional expression evaluates to true

*/

let count = 3;
while (count >= 1) {
  console.log('count is', count);
  count--;
}

// while (false) {
//   console.log('this line of code will never run');
// }


// ! very dangerous, do not do
// while (true) {
//   console.log('this line will run forever');
//  // (or until the machine running the code runs out of memory)
// }

// let count = 3;
// // have to make sure the conditional is eventually false!
// while (count >= 1) {
//   console.log('count is', count);
// }