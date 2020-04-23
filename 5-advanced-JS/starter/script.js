/* Constructors */

/*let john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};*/
/*
let Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}


Person.prototype.calculateAge = function() {
//    this.age = 2020-this.yearOfBirth;
    console.log(2020-this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

let john = new Person('John', 1990, 'teacher');
let jane = new Person('Jane', 1969, 'designer');
let mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

/* Object.create */
/*
let personProto = {
    calculateAge: function() {
        console.log(2020-this.yearOfBirth);
    }
};

let john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

let jane = Object.create(personProto,
{
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
});
*/

// Primitives vs objects
    // NOTE: variables containing primitives actually contain the value
let a = 23;
let b = a;
a = 46;
console.log(a);
console.log(b);

    // NOTE: variables containing objects contain a reference to the place in memory where the object is
let obj1 = {
    name: 'John',
    age: 26
}
let obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

let age = 27;
let obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age,obj);
console.log(age);
console.log(obj.city);