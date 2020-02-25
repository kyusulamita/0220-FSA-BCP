function whosASpecial(pets){
  // Sadie the cat is very special! Layla the cat is very special! Bogie the dog is very special!
  let newStr = '';
  // for (let i = 0; i < pets.length; i++) {
  //   const pet = pets[i]; 
  // //   {
  // //   name: 'Sadie',
  // //   species: 'cat'
  // // }
  //   // const name = pet.name;
  //   // const species = pet.species;
  //   const { name, species } = pet;
  //   newStr += `${name} the ${species} is very special!`;
  //   if (i !== pets.length - 1){
  //     newStr += ' ';
  //   }
  // }
  
  // pets.forEach(function(pet, idx) {
  //   const { name, species } = pet;
  //   newStr += `${name} the ${species} is very special!`;
  //   if (idx !== pets.length - 1){
  //     newStr += ' ';
  //   }
  // });
  // return pets.join('!')
  // const sentences = [];
  // pets.forEach(function(pet, idx) {
  //   const { name, species } = pet;
  //   const sentence =  `${name} the ${species} is very special!`;
  //   sentences.push(sentence);
  // });
  
  const sentences = pets.map(function(pet, idx) {
    const { name, species } = pet;
    const sentence =  `${name} the ${species} is very special!`;
    return sentence;
  })
  
  return sentences.join(' ');
  
}