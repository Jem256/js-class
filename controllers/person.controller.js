const Person = require('./models/Person')

function infoController() {
    let person = new Person("Jemimah", 25)
    return{
        age: person.getAge(),
        name: person.getName()
    }
}

module.exports = infoController;