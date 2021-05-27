// filter kore new array return korbe

const number = [10,20,30,-40];

const result = number.filter(element => element%2>=0)
console.log(result);

const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium',
    'muhit'
  ];
  const products = [
    {id: 1, name: 'laptop', price: 500},
    {id: 2, name: 'mobile', price: 400},
    {id: 3, name: 'tablet', price: 450},
    {id: 4, name: 'camera', price: 600}
  ]
  
  const prices = products.filter(product => product.price != 450);
  console.log(prices);


const newMaterial = materials.filter(material => material.length>=6);
console.log(newMaterial);