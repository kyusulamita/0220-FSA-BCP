// For loop is better for when you know how long something is going to take
// for example when you're iterating over a string, you know the length

// const favouritePet = 'Mr. Bear';

// for (let i =  0; i < favouritePet.length; i++) {
//   const char = favouritePet[i];
//   console.log(char);
// }

// counting up to something
// counting up to 100 from 0 in intervals of 10

// for (let i =  0; i <= 100; i += 10) {
//   console.log(i);
// }


// Anything you can do with a for loop you can do with a while loop!
// [Challenge Yourself] - write the two previous examples as while loops



// So then? when is while loop used?? It's often used when you don't know how many iterations something will take


// const isLotteryWinner = (lotteryNum = 25) => {
function isLotteryWinner (lotteryNum = 25) {
  // returns a number between 1 and 100;
  const winningNumber = Math.floor(Math.random() * 100) + 1;
  return winningNumber === lotteryNum;
}


const lotteryNum = 14;
let wonLottery = isLotteryWinner(lotteryNum);
let ticketsPurchased = 1;

while (wonLottery === false) {
  wonLottery = isLotteryWinner(lotteryNum);
  ticketsPurchased++;
}

console.log(`You finally won! It only took ${ticketsPurchased} tickets to win`);

