
const person = { name: "muhit", age:25, phone:"01777",address:"shariatpur"}

const {phone} = person;
console.log(phone);

const friends = ['ami','tmi','se','tahara'];

const [first] = friends;
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