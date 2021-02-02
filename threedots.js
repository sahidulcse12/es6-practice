
const age = [12,32,34,54];
const age2 = [44,55,66];
const age3 = [77,88,99,11,22];

const allAges = [...age,...age2,5,...age3]; // array concat korar way

const ticketPrices = [250, 350, 450,500];
const price = Math.max(...ticketPrices); // highest ber korar technique
console.log(price);
console.log(allAges);

