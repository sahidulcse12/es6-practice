
class Parent{
    constructor(){
        this.fatherName = "Salim";
    }
}
class Child extends Parent{
    constructor(name){
        super(); //Parent er constructor k call koranor way
        this.name = name;
    }

    getFullName(){
        return this.fatherName + " " + this.name;
    }
}

const baby = new Child("muhit");
//console.log(baby);
console.log(baby.getFullName());