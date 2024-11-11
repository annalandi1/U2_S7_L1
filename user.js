class User{
    constructor(_firstName, _lastName, _age, _location){
        this.firstName = _firstName
        this.lastName = _lastName
        this.age = _age
        this.location = _location
    }
    compareAge(anotherUser){
        if(this.age < anotherUser.age){
            console.log(`${anotherUser.firstName} é piú vecchio di ${this.firstName}`)
        }else{
            console.log(`${this.firstName} é piú vecchio di ${anotherUser.firstName}`)
        }
    }
}

const user1 = new User ("Mario","Rossi", 20, "Roma")
const user2 = new User ("Anna","Landi", 21, "Bolzano")

user1.compareAge(user2)