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

const products = [
  {id: 1, name: 'laptop', price: 500},
  {id: 2, name: 'mobile', price: 400},
  {id: 3, name: 'tablet', price: 450},
  {id: 4, name: 'camera', price: 600}
]

const prices = products.map(product => product.price);
console.log(prices);

console.log(materials.map(material => material.length));
console.log(materials.map(material => material));