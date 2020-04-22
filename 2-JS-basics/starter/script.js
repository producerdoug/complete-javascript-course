/* ******************************
 * Variables and data types
*/
/*
const firstName = 'Doug';
console.log(firstName);

const lastName = 'Allen';
const age = 35;

const fullAge = true;
console.log(fullAge);

let job;
console.log(job);

job = 'Creative Director';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
var if = 23;
*/

/* ******************************
 * Variables mutation and type coercion
 */
/*
 var firstName = 'Doug';
var age = 35;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Creative Director';
isMarried = true;
console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'Thirty five';
job = 'Driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/*****************************
* Basic operators
*/
/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yeahMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);


// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

/*****************************
* Operator precedence
*/
/*
var now = 2020;
var yearJohn = 1984;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 30;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26 (first assigned to y, then to x)
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x **= 2;
console.log(x);
x++;
console.log(x);
*/

/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/
/*
const markMass = 90.7;
const markHeight = 2;
const johnMass = 80.9;
const johnHeight = 1.6;
const markBMI = markMass / (markHeight * markHeight);
const johnBMI = johnMass / (johnHeight * johnHeight);
console.log(markBMI, johnBMI);
markHigher = markBMI > johnBMI;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigher);
*/
/*
var firstName = 'John';
var age = 16;

// ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer': 'juice';
console.log(firstName + ' drinks ' + drink);

// Switch
var job = 'teacher';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    default:
        console.log(firstName + ' sits around.');
}
console.log(job);

// Truthy and falsy values
// Falsy: undefined, null, 0, '', NaN
// Truthy: anything else
*/

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/
/*
var averageJohn = (89 + 120 + 103) / 3;
var averageMike = (116 + 94 + 123) / 3;
var averageMary = (97 + 134 + 105) / 3;

var winner;

switch (true) {
    case (averageJohn > averageMike && averageJohn > averageMary):
        winner = 'John wins with average score: ' + averageJohn;
        break;
    case (averageMike > averageJohn && averageMike > averageMary):
        winner = 'Mike wins with average score: ' + averageMike;
        break;
    case (averageMary > averageJohn && averageMary > averageMike):
        winner = 'Mary wins with average score: ' + averageMary;
        break;
    default:
        winner = 'Nobody won outright.'
}
console.log(winner);
*/

/*****************************
* FUNCTIONS
*/
/*
function calculateAge(birthYear) {
    return 2020 - birthYear;
}
var ageJohn = calculateAge(1984);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    retirement > 0 ? console.log(`${firstName} retires in ${retirement} years.`) : console.log(`${firstName} has already retired.`);
}
yearsUntilRetirement(1984, 'Doug');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/

/*****************************
* FUNCTIONS statements and expressions
*/
/*
// Function declaration
// function whatDoYouDo(job, firstName) {}

// Function expression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives around.';
        case 'designer':
            return firstName + ' makes stuff.';
        default:
            return firstName + ' does something else.';
    }
}
console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/

/*
 * OBJECTS
 */
/*
class Person {
    constructor(
        firstName,
        lastName,
        birthYear,
        family=[],
        job,
        income,
        isMarried=false
        ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.family = family;
        this.job = job;
        this.income = income;
        this.isMarried = isMarried;
    }
}

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john);
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);

var jeff = new Person;
jeff.firstName = 'Jeff';
jeff.lastName = 'Allen';
jeff.income = '$100,000';
console.log(jeff);

var doug = new Person('Doug','Allen',1984,['Rob','Karen','Jessica'],'Creative Director','$100,000',true);
console.log(doug);
*/

/* OBJECT METHODS */
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2020 - this.birthYear;
    }
};
john.calcAge();
console.log(john);
*/

/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/
/*
class Person {
    constructor(
        firstName,
        lastName,
        birthYear,
        family=[],
        job,
        income,
        isMarried=false
        ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.family = family;
        this.job = job;
        this.income = income;
        this.isMarried = isMarried;
    }
}*/
/*
var Mark = {
    fullName: 'Mark Johnson',
    mass: 79.3,
    height: 1.75,
    calcBmi: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};
var John = {
    fullName: 'John Johnson',
    mass: 93,
    height: 1.667,
    calcBmi: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
console.log(Mark.calcBmi(),John.calcBmi());

console.log((Mark.bmi > John.bmi) ? `Mark's BMI of ${Mark.bmi} is higher.` : `John's BMI of ${John.bmi} is higher.`);
*/

/* LOOPS */
/*
var John = {
    fullName: 'John Johnson',
    mass: 93,
    height: 1.667,
    calcBmi: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
for (let i in John) {
    console.log(i + " = " + John[i]);
}
*/
/*
let countEvens = 0;
for (let i=0; i<100;i++) {
    if ( (i % 2) === 0 ) {
        console.log('Even: ' + i)
        countEvens++;
    }
    else {
        continue;
    }
}
*/

/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

function averageTips(tips) {
    let sum = 0;
    for (let i=0; i<tips.length;i++) {
        sum += tips[i];
    }
    return (sum / tips.length);
}

// JOHN
let johnBills = {
    subtotals: [124, 48, 268, 180, 42],
    tips: [],
    totals: [],
    calcTips: function(subtotals) {
        //console.log('Inside calcTips');
        for (let i=0; i<subtotals.length; i++) {
            if (subtotals[i] < 50) {
                this.tips[i] = this.subtotals[i] * .2;
            }
            else if (subtotals[i] >= 50 || subtotals[i] <= 200) {
                this.tips[i] = this.subtotals[i] * .15;
            }
            else {
                this.tips[i] = this.subtotals[i] * .1;
            }
            this.totals[i] = this.subtotals[i] + this.tips[i];
        }
    }
}
johnBills.calcTips(johnBills.subtotals);
let tips = johnBills.tips; let totals = johnBills.totals;
//console.log(bills.tips, bills.totals);

console.log('John\'s tips:');
for (let i=0; i<tips.length; i++) {
    console.log(`Subtotal: ${johnBills.subtotals[i]}`);
    console.log(`Tip: ${tips[i]}`);
    console.log(`Total: ${totals[i]}`);
    console.log(' ');
}

// MARK
let markBills = {
    subtotals: [77, 375, 110, 45],
    tips: [],
    totals: [],
    calcTips: function(subtotals) {
        //console.log('Inside calcTips');
        for (let i=0; i<subtotals.length; i++) {
            if (subtotals[i] < 100) {
                this.tips[i] = this.subtotals[i] * .2;
            }
            else if (subtotals[i] >= 100 || subtotals[i] <= 300) {
                this.tips[i] = this.subtotals[i] * .1;
            }
            else {
                this.tips[i] = this.subtotals[i] * .25;
            }
            this.totals[i] = this.subtotals[i] + this.tips[i];
        }
    }
}
markBills.calcTips(markBills.subtotals);
tips = markBills.tips; totals = markBills.totals;

console.log('Mark\'s tips:');
for (let i=0; i<tips.length; i++) {
    console.log(`Subtotal: ${markBills.subtotals[i]}`);
    console.log(`Tip: ${tips[i]}`);
    console.log(`Total: ${totals[i]}`);
    console.log(' ');
}

// Who paid more?
let johnAverage = averageTips(johnBills.tips);
let markAverage = averageTips(markBills.tips);
//(johnAverage > markAverage) ? console.log(`John's family paid more with a tip average of ${johnAverage} vs Mark's of ${markAverage}`) :  console.log(`Mark's family paid more with a tip average of ${markAverage} vs John's of ${johnAverage}`);
console.log(johnAverage > markAverage ? `John ${johnAverage}` : `Mark: ${markAverage}`);