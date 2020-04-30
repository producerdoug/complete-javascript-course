/*
// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
//name6 = 'Jane Miller';
console.log(name6);

// ES5
function driversLicense(passedTest) {
    if (passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1990;

        console.log(firstName + ' born in ' + yearOfBirth + ' is now officially allowed to drive a car');
    }
}
driversLicense(true);

//ES6
function driversLicense(passedTest) {

    let firstName;
    const yearOfBirth = 1990;

    if (passedTest) {
        firstName = 'John';
    }
    
    console.log(firstName + ' born in ' + yearOfBirth + ' is now officially allowed to drive a car');
    
}
driversLicense(true);
*/

/*
// ES6 -- variables with const or let are BLOCK scope, with var they are function scope.
{
    const a = 1;
    let b = 2;
    var c = 3;
}

//console.log(a + b);
console.log(c);

// ES5 would be
(function() {
    var c = 3;
})();

console.log(c);
*/

/*
// STRINGS
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calculateAge(year) {
    return 2020 - year;
}
console.log(`Hello ${firstName} ${lastName} is ${calculateAge(yearOfBirth)} years old!`);

const n = `${firstName} ${lastName}`;
console.log( n.startsWith('J') );
console.log( n.endsWith('th') );
console.log( n.includes('hn ') );
console.log(`${firstName} `.repeat(5));
*/

/*
// ARROW FUNCTIONS

const years = [1990, 1962, 1971, 2016];

// ES5
var ages5 = years.map(function(e, i, a) {
    return 2020 - e;
});
console.log(ages5);

// ES6
let ages6 = years.map(el => 2020 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2020-el}`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}`
});
console.log(ages6);
*/

// Arrow functions 2
// ----- arrow functions DO NOT have a this keyword.

// ES5
/*
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {

        var self = this;
        document.querySelector('.green').addEventListener('click',
        function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}
//box5.clickMe();
*/

// ES6
/*
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {

        document.querySelector('.green').addEventListener('click',
        () => {
            let str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
//box6.clickMe();
*/

/*
const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {

        document.querySelector('.green').addEventListener('click',
        () => {
            let str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box66.clickMe();
*/

/*
function Person(name) {
    this.name = name;
}

Person.prototype.myFriends5 = function(friends) {

        var arr = friends.map(function(el)
        {
            return this.name + ' is friends with ' + el;
        }.bind(this));
        console.log(arr);
    }

    var friends = ['Bob', 'Janem', 'Mark'];
    new Person('John').myFriends5(friends);
}
*/

/*
const friends = ['Bob', 'Jane', 'Mark', 'Lucy'];

function Person(name) {
    this.name = name;
}

Person.prototype.myFriends6 = function(friends) {

    console.log(`${this.name} is this.name`);

    let arr = friends.map( el => `${this.name} is friends with ${el}` );
    console.log(arr);
}

let Mike = new Person('Mike').myFriends6(friends);
*/

// ES5
var john = ['John', 26];
//var name = john[0];
//var age = john[1];

// ES6
//const [name, age] = ['John', 26];
//console.log(name);
//console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
}

const {firstName, lastName} = obj;
console.log(`${firstName} ${lastName}`);

const {firstName: a, lastName: b} = obj;
console.log(`${a} ${b}`);


function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65-age];
}

const [age, retirement] = calcAgeRetirement(1990);
console.log(`${age} ${retirement}`);