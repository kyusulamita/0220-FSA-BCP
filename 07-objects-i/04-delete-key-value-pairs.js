/* use the delete keyword to delete a key/value pair */


let pusheen = {
  name: 'Pusheen',
  age: 7,
  color: 'gray and tabby',
  favouriteColour: 'sky blue'
};

pusheen.favoriteColor = 'baby blue';

console.log(pusheen);
// undefined
pusheen.favouriteColour = undefined

console.log(pusheen);

// delete keyword

delete pusheen.favouriteColour; // delete the key-value pair

delete pusheen['favColor'];
delete pusheen['color'];

console.log(pusheen);