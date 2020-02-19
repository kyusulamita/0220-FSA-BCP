/* 
  methods on an object generally should perform an action that's relevant to the idea or concept represented by the object itself
*/


// let pusheen = {
//   name: 'Pusheen',
//   age: 7,
//   color: 'gray and tabby',
//   isHappy: true,
//   greet: function(){
//     console.log("Hello I am Pusheen the cat.");
//   }
// };

// pusheen.greet();


/* 
  other methods
*/


let pusheen = {
  name: 'Pusheen',
  age: 7,
  color: 'gray and tabby',
  isHappy: true,
  greet: function(){
    console.log("Hello I am pusheen the cat.");
  },
  getBirthYear: function(currentYear = 2020){
    // if (currentYear === undefined){
    //   currentYear = 2019;
    // }
    return currentYear - 7;
  },
  getAgeInNYears: function(years){
    return 7 + years;
  }
};

// console.log(pusheen.getBirthYear(2017))
// console.log(pusheen.getBirthYear())


// pusheen.greetSulamita = function(){
//   console.log("Hello Sulamita");
// }
pusheen["greetSulamita"] = function(){
  console.log("Hello Sulamita");
}

pusheen.greetSulamita()