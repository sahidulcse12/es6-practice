// map function returns a new array
// ekhane element arrow function......eta number array er sob element k loop er maddhome access kroe
const number = [2,4,6];

const newNumber = number.map(element => element*2);
console.log(newNumber);

const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];

console.log(materials.map(material => material.length));
console.log(materials.map(material => material));