/* 

  what if it takes in a parameter?

  OLD EXAMPLES
  https://goo.gl/DejnHB
  https://goo.gl/qYWCPL

  NEW EXAMPLES (must copy whole url)
  http://www.pythontutor.com/visualize.html#code=function%20getMonster%28species%29%20%7B%0A%20%20console.log%28'getMonster%20is%20running'%29%3B%0A%0A%20%20console.log%28'getMonster%20is%20finishing'%29%3B%0A%0A%20%20return%20function%28%29%20%7B%0A%20%20%20%20console.log%28%60ROAR,%20I%20am%20a%20%24%7Bspecies%7D%60%29%3B%0A%20%20%7D%3B%0A%0A%7D%0A%0Alet%20dragon%20%3D%20getMonster%28'dragon'%29%3B%0Adragon%28%29%3B%0Adragon%28%29%3B%0Adragon%28%29%3B%0A%0Alet%20gryphon%20%3D%20getMonster%28'gryphon'%29%3B%0Agryphon%28%29%3B%0Agryphon%28%29%3B%0Agryphon%28%29%3B&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false
  http://www.pythontutor.com/visualize.html#code=function%20getMonster%28species%29%20%7B%0A%20%20let%20roars%20%3D%200%3B%0A%0A%20%20return%20function%28%29%20%7B%0A%20%20%20%20console.log%28%60ROAR,%20I%20am%20a%20%24%7Bspecies%7D.%60%29%3B%0A%20%20%20%20console.log%28%60I%20have%20roared%20%24%7Broars%7D%20times%60%29%3B%0A%20%20%20%20roars%2B%2B%3B%0A%20%20%7D%3B%0A%0A%7D%0A%0Alet%20dragon%20%3D%20getMonster%28'dragon'%29%3B%0Adragon%28%29%3B%0Adragon%28%29%3B%0Adragon%28%29%3B%0A%0Alet%20gryphon%20%3D%20getMonster%28'gryphon'%29%3B%0Agryphon%28%29%3B%0Agryphon%28%29%3B%0Agryphon%28%29%3B&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false
*/

// function getMonster(species) {

//   return function() {
//     console.log(`ROAR, I am a ${species}`);
//   };

// }

// let dragon = getMonster('dragon');
// dragon();


// let gryphon = getMonster('gryphon');
// gryphon();
// dragon();


function getMonster(species) {
  let roars = 0;

  return function() {
    console.log(`ROAR, I am a ${species}.`);
    roars++; // im incrementing roar every  time I call it
    console.log(`I have roared ${roars}.`);
  };

}

let dragon = getMonster('dragon');
dragon();
dragon();
dragon();

let gryphon = getMonster('gryphon');
gryphon();
gryphon();
gryphon();

