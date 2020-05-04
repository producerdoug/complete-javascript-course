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
//var john = ['John', 26];
//var name = john[0];
//var age = john[1];

// ES6
//const [name, age] = ['John', 26];
//console.log(name);
//console.log(age);
/*
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
*/

// SPREAD and REST
// ------------------ ---- ---- ---- > break and join elements to and from enumerable objects

/*
let family = ['Mommy', 'Daddy', 'Joey', 'Venice'];

function sayHiString(name1, name2, name3, name4) {
    console.log(`Hello ${name1}, ${name2}, ${name3}, ${name4}!`)
}

sayHiString(...family);
*/
/*
function isFullAge5() {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(element => {
        console.log((2020-element) >= 18)
    });
}

isFullAge5(1990, 2006, 1965);

// ES6 -- rest operator takes an arbitrary number of arguments and transforms them into an array
function isFullAge6(...years) {
    years.forEach(cur => {
        console.log((2020-cur) >= 18)
    });
}

isFullAge6(1990, 1965, 2017, 2010, 1973);
*/

/*
function isFullAge6(limit, ...years) {
    years.forEach(cur => {
        console.log((2020-cur) >= limit)
    });
}

isFullAge6(21, 1990, 1965, 2017, 2010, 1973);
*/

/*
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'British': nationality = nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
*/
/*
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
*/
/*
const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :)');
question.set(false, 'Wrong, please try again!');

console.log(question.get('question'));
//console.log(question.size);
*/
/*if(question.has(4)) {
    ////question.delete(4);
    console.log('Answer 4 is here');
}*/

//question.clear();

//question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));
/*
for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));

console.log(question.get(ans === question.get('correct')));
*/

/*
// CLASSES
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete6 extends Person6 {

    constructor (name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    althleteMethod() {
        console.log(`${this.name} has won ${this.medals} medals in ${this.olympicGames} olympics games!`);
    }

}

const john6 = new Person6('John', 1990, 'teacher');
const jeff6 = new Athlete6('Jeff', 1984, 'Athlete', 3, 13);
*/

// CODING CHALLENGE
/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class CityArea {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends CityArea {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area;
        this.numTrees = numTrees;
    }

    calculateDensity() {
        const density = this.numTrees / this.area;
        console.log(`Tree density for ${this.name} with ${this.numTrees} trees: ${density} trees per sq/m`);
    }
}

class Street extends CityArea {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`The classification for ${this.name} built in ${this.buildYear} with length (${this.length}) miles is ${classification.get(this.size)}`);
    }
}

const Parks = [
    new Park('Ida Holm Park', 1990, 1, 17),
    new Park('Big Trees Park', 1981, 3, 4500),
    new Park('Olivina Park', 1962, .5, 12)
];

const Streets = [
    new Street('Sardonyx Court', 2016, .25, 2),
    new Street('First Street', 1887, 8, 5),
    new Street('Quimby Road', 1980, 1.2),
    new Street('Olivina', 1951, .75)
];

let sumParkAges = 0;
let bigPark = undefined;
let sumStreetLength = 0;

console.log('PARKS & TREES ----------');
Parks.forEach(cur => {
    cur.calculateDensity();
    sumParkAges += (new Date().getFullYear() - cur.buildYear);

    if (cur.numTrees > 1000) {
        bigPark = cur.name;
    }
});
console.log(`Average park age: ${sumParkAges/Parks.length} years`);
console.log(`${bigPark} has more than 1000 trees!`);

console.log('STREETS ----------');
Streets.forEach(cur => {
    cur.classifyStreet();
    sumStreetLength += cur.length;
});
console.log(`The town has a total of ${sumStreetLength} miles of streets, with an average length of ${sumStreetLength/Streets.length} miles`);