// function whosASpecial(arrayOfPets) {
//   let result = ''
//   arrayOfPets.forEach(function(element, idx) {
//     let name = element.name;
//     let species = element.species;
//     let sentence = `${name} the ${species} is very special!`;
//     if (idx !== arrayOfPets.length - 1) {
//       sentence += ' '
//     }
//     result += sentence;
//   });

//   return result;
// }

// function whosASpecial(arrayOfPets) {
//   const arrayOfSentences = arrayOfPets.map(function(element) {
//     let name = element.name;
//     let species = element.species;
//     return `${name} the ${species} is very special!`;
//   });
  
//   console.log(arrayOfSentences);
  
//   return arrayOfSentences.join(' ');
// }