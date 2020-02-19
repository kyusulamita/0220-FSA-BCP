/* 
  We can create our own methods too! 
*/


/* 
  Consider this object: 
*/

// let pusheen = {
//   name: 'Pusheen',
//   age: 7,
//   color: 'gray and tabby',
//   isHappy: true,
// };

/* 

  objects can hold any type of value, including functions!
  if we add a function to this object, that function is now a method of the object 
  
*/

let pusheen = {
  name: 'Pusheen',
  age: 7,
  color: 'gray and tabby',
  isHappy: true,
  myMethod: function(){
    console.log("This is my method");
  }
};

console.log(pusheen.myMethod);
console.log(pusheen.name);
pusheen.myMethod();
