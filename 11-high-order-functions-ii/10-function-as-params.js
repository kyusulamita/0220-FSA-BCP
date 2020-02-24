// function getMonster(species) {
//   return function(color) {
//     console.log(`ROAR, I am a ${color} ${species}`);
//   };
// }

// let dragonCreator = getMonster('dragon');

// dragonCreator('red');
// dragonCreator('blue');
// dragonCreator('emerald');


// http://www.pythontutor.com/visualize.html#code=function%20cacheMyFunc%20%28callbackFunc%29%20%7B%0A%20%20//%20hey,%20what%20if%20I%20save%20somthing%20once%20i%20see%20it%3F%0A%20%20//%20so%20if%20someone%20asks%20me%20for%20it%20i%20already%20know%20where%20it%20is%0A%20%20//%20and%20I%20dont%20have%20to%20look%20for%20it%20again%0A%0A%20%20const%20cache%20%3D%20%7B%7D%3B%0A%0A%20%20return%20function%20%28num%29%20%7B%0A%20%20%20%20//%20if%20ive%20already%20seen%20this%20number%0A%20%20%20%20//%20im%20going%20to%20give%20you%20the%20answer%20i%20already%20have%0A%20%20%20%20if%20%28num%20in%20cache%29%20%7B%0A%20%20%20%20%20%20return%20cache%5Bnum%5D%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20//%20if%20not%0A%20%20%20%20//%20ill%20calculate%20it,%20save%20it,%20then%20give%20it%20back%20to%20you%0A%20%20%20%20const%20value%20%3D%20callbackFunc%28num%29%3B%0A%20%20%20%20cache%5Bnum%5D%20%3D%20value%3B%0A%0A%20%20%20%20return%20value%3B%0A%20%20%7D%0A%0A%7D%0A%0A%0Afunction%20square%20%28num%29%20%7B%0A%20%20return%20num%20%20*%20%20num%3B%0A%7D%0Aconst%20cachedSquare%20%3D%20cacheMyFunc%28square%29%3B%0A%0A%0AcachedSquare%283%29%3B%0AcachedSquare%284%29%3B%0AcachedSquare%285%29%3B%0AcachedSquare%284%29%3B&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false

function cacheMyFunc (callbackFunc) {
  // hey, what if I save somthing once i see it?
  // so if someone asks me for it i already know where it is
  // and I dont have to look for it again

  const cache = {};

  return function (num) {
    // if ive already seen this number
    // im going to give you the answer i already have
    if (num in cache) {
      return cache[num];
    }

    // if not
    // ill calculate it, save it, then give it back to you
    const value = callbackFunc(num);
    cache[num] = value;

    return value;
  }

}


function square (num) {
  return num  *  num;
}
const cachedSquare = cacheMyFunc(square);
