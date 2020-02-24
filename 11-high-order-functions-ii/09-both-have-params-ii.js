/*

  what if both functions take parameters?
  https://goo.gl/v6EHCW
  
*/

function getGreeter(name1) {
  return function(name2) {
    console.log('Hi ' + name1 + ', meet ' + name2);
  };
}

let introduceMarieTo = getGreeter('Marie');  // (name) => 'Hi Marie, meet ${name}'
let introduceRosalindTo = getGreeter('Rosalind'); // () => 'Hi Rosalind, meet ${name}'

introduceMarieTo('Dorothy'); // 'Hi Marie, meet Dorothy'
introduceMarieTo('Albert'); // 'Hi Marie, meet Albert'
introduceRosalindTo('Barbara');
introduceRosalindTo('Isaac');