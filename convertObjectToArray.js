// ekhane person ekta object.....vetorer gula object er property

const person = {
    name : 'Muhit',
    address : 'shariatpur',
    phone : 01777877630
}

const prototypeObject = Object.values(person);
console.log(prototypeObject);

prototypeObject.forEach(element => {
    console.log(element);
});