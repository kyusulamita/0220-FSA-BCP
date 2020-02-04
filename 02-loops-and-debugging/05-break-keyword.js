/* eslint-disable no-constant-condition */
// the break keyword breaks out of the loop permanently
// let myGrade = 'A';
// while (true) {

//   myGrade += '+';
//   // 'A++'
//   if (myGrade.length === 3) {
//     break;
//     console.log("After break")
//   }

//   console.log("end of the loop")
// }
// console.log(myGrade);

// // the break keyword also works in for loops
// for (let i = 10; i >= 1; i--) {
//   console.log('i is', i);
//   if (i === 7) {
//     break;
//   }
// }

const isLotteryWinner = (lotteryNum = 25) => {
  // returns a number between 1 and 100;
  const winningNumber = Math.floor(Math.random() * 100) + 1;
  return winningNumber === lotteryNum;
}


const lotteryNum = 14;
let wonLottery = isLotteryWinner(lotteryNum);
let ticketsPurchased = 1;

while (wonLottery === false) {
  if (ticketsPurchased === 25) {
    break;
  }
  wonLottery = isLotteryWinner(lotteryNum);
  ticketsPurchased++;
}

if (wonLottery) {
  console.log(`You finally won! It only took ${ticketsPurchased} tickets to win`);
} else {
  console.log(`You spent too much on tickets, we had to make it stop`);
}
