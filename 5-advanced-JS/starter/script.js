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
/*
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
*/

// Functions are FIRST CLASS in Javascript
/*
let years = [1990, 1965, 1937, 2005, 1998, 1984];

function arrayCalc(arr, fn) {
    let arrRes = [];
    for (let i=0; i<arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2020-el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round( 206.9 - (0.67 * el) ); 
    } else {
        return -1;
    }
}

let ages = arrayCalc(years, calculateAge);
console.log(years);
console.log(ages);

let fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

let maxRates = arrayCalc(ages, maxHeartRate);
console.log(maxRates);
*/



/* Functions returning functions */
/*
// each job, return function that builds string using name as input. function returning another function
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(`${name}, can you please explain what UX design is?`);
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log(`What subject do you teach, ${name}?`);
        }
    } else {
        return function(name) {
            console.log(`Hello, ${name}, what do you do?`);
        }
    }
}

let teacherQuestion = interviewQuestion('teacher');
let designerQuestion = interviewQuestion('designer');
teacherQuestion('John');
designerQuestion('Doug');
designerQuestion('Mark');

// READS from left to right, first part gets evaluated and returns a function, which can get called then with the name
interviewQuestion('retired')('Jeff');
*/

/* IIFE */
// Immediately invoked function expressions
/*
function game() {
    let score = Math.random() * 10;
    console.log(score >= 5);
}
//game();

// Need to trick parser into believing this is an expression instead of a declaration, not a function. So add parentheses, without them parser throws error
(function () {
    // Data privacy, score cannot be accessed from the outsides.
    var score = Math.random() * 10;
//    console.log(score >= 5);
})();

// Add parameter, which is the '5' here, taken by the function inside. We just wanted to create a private scope for the SCORE, and execute some code. Don't need stored anywhere
(function (goodLuck) {
    // Data privacy, score cannot be accessed from the outsides.
    var score = Math.random() * 10;
    console.log(score >= (5 - goodLuck));
})(5);
*/


/* CLOSURES */
/*
function retirement(retirementAge) {
    let a = ' years left until retirement.'; // cool because retirementAge and a are available to the following function AFTER retirement() has already returned. THIS is the closure
    return function(yearOfBirth) {
        let age = 2020- yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

let retirementUS = retirement(66);
retirementUS(1985);

retirement(66)(1985); // should give same result

// An innter function always has access to the variables and parameters of outer functions even after it's returned

let retirementGermany = retirement(65);
let retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);
*/

// rewrite this using closures
        // each job, return function that builds string using name as input. function returning another function
/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(`${name}, can you please explain what UX design is?`);
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log(`What subject do you teach, ${name}?`);
        }
    } else {
        return function(name) {
            console.log(`Hello, ${name}, what do you do?`);
        }
    }
}
*/

function interviewQuestion(job) { // job is available after interviewQuestion() has returned. It's used in the anonymous function below when it's called.
    return function(name) {
        if (job === 'designer') {
            console.log(`${name}, can you please explain what UX design is?`);
        } else if (job === 'teacher') {
            console.log(`What subject do you teach, ${name}?`);
        } else {
            console.log(`Hello, ${name}, what do you do?`);
        }
    }
}

let interviewDesigner = interviewQuestion('designer');
interviewDesigner('Doug');


/* SOLUTION */
