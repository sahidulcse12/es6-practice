
const person = { name: "muhit", age:25, phone:"01777",address:"shariatpur"}

const {phone} = person; //only phone number show korbe ekhane
console.log(phone);

const friends = ['ami','tmi','se','tahara'];

const [first] = friends;  // first index er element show korbe
console.log(first);

const complexObject  = {
    name: 'muhit',
    info:{
        address: 'dhaka',
        leader: 'tiger'
    }
}

const {leader} = complexObject.info;
console.log(leader);

const one = 25;
const two = 30;
const obj1 = {one,two};
console.log(obj1);