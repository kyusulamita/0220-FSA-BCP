/* 

  closure is the fact that an inner function can STILL to access values defined in the outer function even after the outer function is finished running! 
  OLD
  https://goo.gl/G9tKtG

  NEW
  http://www.pythontutor.com/visualize.html#code=function%20getMonster%28%29%20%7B%0A%20%20console.log%28'getFunc%20is%20running'%29%3B%0A%0A%20%20let%20species%20%3D%20'dragon'%3B%0A%20%20console.log%28'getFunc%20is%20finishing'%29%3B%0A%0A%20%20return%20function%28%29%20%7B%0A%20%20%20%20console.log%28%60ROAR,%20I%20am%20a%20%24%7Bspecies%7D%60%29%3B%0A%20%20%7D%3B%0A%0A%7D%0A%0Alet%20dragon%20%3D%20getMonster%28%29%3B%0A%0Adragon%28%29%3B%0Adragon%28%29%3B%0Adragon%28%29%3B&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false

*/

function getMonster() {
  console.log('getMonster is running');

  let species = 'dragon';
  console.log('getMonster is finishing');

  return function() {
    console.log(`ROAR, I am a ${species}`);
  };

}

let dragon = getMonster();

dragon();
dragon();
dragon();
