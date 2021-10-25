class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }

    static getName(){
        return this.name
    }

    static getAge(){
        return this.age
    }
}

module.exports = Person;