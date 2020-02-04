// kebaob case [X NOPE]
const my-favourite-place = 'Fullstack';
// underscore [ALSO NOPE]
const my_favourite_place = 'Fullstack';
// use camelCase when defining variable names
const myFavouritePlace = 'Fullstack';
// why? it’s what is most common

// capital letter variables are also not preffered
// you’ll use them for classes and other things
// if you’re curious about an example refer to 04-pups.js


// don't use ambiguous variable names!
const x = 68;
// what even is `x` here? Minutes late?? Keys I’ve lost??

// use names that describe the value they contain
const desiredTemp = 68;


// when is it ok to use short variables?
// it's ok to use short variable names as counters, like i in a for loop
for (let i = 1; i <= 3; i++) {
  console.log(i);
}