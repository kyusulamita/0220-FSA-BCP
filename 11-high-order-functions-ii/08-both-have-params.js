/*

  what if both functions take parameters?
  https://goo.gl/v6EHCW
  https://goo.gl/1KuZJg
  

  http://www.pythontutor.com/visualize.html#code=function%20getMonster%28species%29%20%7B%0A%20%20console.log%28'getMonster%20is%20running'%29%3B%0A%0A%20%20console.log%28'getMonster%20is%20finishing'%29%3B%0A%20%20//%20let%20colorCount%20%3D%200%3B%0A%20%20return%20function%28color%29%20%7B%0A%20%20%20%20console.log%28%60ROAR,%20I%20am%20a%20%24%7Bcolor%7D%20%24%7Bspecies%7D%60%29%3B%0A%20%20%7D%3B%0A%0A%7D%0A%0Alet%20dragonCreator%20%3D%20getMonster%28'dragon'%29%3B%0A%0AdragonCreator%28'red'%29%3B%0AdragonCreator%28'blue'%29%3B%0AdragonCreator%28'emerald'%29%3B%0A%0A&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false
*/


// function getMonster(species) {
//   // species
//   return function(color) {
//     // color
//     console.log(`ROAR, I am a ${color} ${species}`);
//   };
// }

// let dragonCreator = getMonster('dragon');

// dragonCreator('red');
// dragonCreator('blue');
// dragonCreator('emerald');


// make it so it adds one more exclamation point each time it gets called??
// http://www.pythontutor.com/visualize.html#code=function%20getMonster%28species%29%20%7B%0A%20%20return%20function%28color%29%20%7B%0A%20%20%20%20console.log%28%60ROAR,%20I%20am%20a%20%24%7Bcolor%7D%20%24%7Bspecies%7D%60%29%3B%0A%20%20%20%20species%20%2B%3D%20'!'%3B%0A%20%20%7D%3B%0A%7D%0A%0Alet%20dragonCreator%20%3D%20getMonster%28'dragon'%29%3B%0A%0AdragonCreator%28'red'%29%3B%0AdragonCreator%28'blue'%29%3B%0AdragonCreator%28'emerald'%29%3B&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false


function getMonster(species) {
  let emotion = '!';
  // species
  return function(color) {
    // color
    console.log(`ROAR, I am a ${color} ${species}${emotion}`);
    emotion += '!';
  };
}

let dragonCreator = getMonster('dragon');

dragonCreator('red');
dragonCreator('blue');
dragonCreator('emerald');

// make another monster creator??

// let gryphonCreator = getMonster('gryphon');

// gryphonCreator('brown');
// gryphonCreator('white');
// gryphonCreator('gold');
