function Person (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emails = [];
}

Person.prototype = {
    addEmail: function(a,b){this.emails.push(new Email(a,b))},
}

function Email(address, type){
    
    this.emailAddress = address;
    
    if (type === 'work' | 'home' | 'other') { 
        this.type = type;
        } 
    else {
        this.type = 'other';
    };
}

var person = new Person('Dan', 'Mcauley');

person.addEmail('dan@gmail.com', 'work');

console.log(person);