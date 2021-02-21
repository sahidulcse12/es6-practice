
const doubleIt = num => num*2; // arrow function..doubleIt=function name...num=argument
const add = (x,y) => {
    return x+y;
}
const empty = () => {
    console.log("ok done");
}

const give5 = () => 5;

const large = (a,b) =>{
    const sum = a + b;
    const diff = a - b;
    const mul =  sum * diff;
    return mul;
}



// const result = doubleIt(5);
// const sum = add(10,15);
// console.log(sum);
//empty();
console.log(give5());

const result = large(10,5);
console.log(result);
console.log(add(10,20));
console.log(doubleIt(5));

