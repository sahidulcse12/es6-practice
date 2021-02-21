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

const newMaterial = materials.filter(material => material.length>=6);
console.log(newMaterial);