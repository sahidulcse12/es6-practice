
let food;
const money = 100;
const active = true;
const inactive = false;

const result = money > 100 ? 'biriyani' : 'alur vorta';
console.log(result);

const show = active ? active : inactive;
const x = active && 5;
const y = inactive || 5;

console.log(show);
console.log(x);
console.log(y);