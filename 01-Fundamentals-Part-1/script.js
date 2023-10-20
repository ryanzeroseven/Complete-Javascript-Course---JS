/*
// LECTURE: Values and Variables
let js = "amazing"; //declared variable
console.log(40 + 8 + 23 - 10);

console.log("Irsjaad");
console.log("23");

let firstName = "Irsjaad";

console.log(firstName);
console.log(firstName);
console.log(firstName);

//Notes
// Naming conventions
// different types of naming conventions
let first = "Irsjaad";
let firstNamePerson;
let first_name_person;
let PI = 3.1415; // Constants should be all caps

//DO NOT
// let 3years = 3; numbers are not allowed as a start
// let irsjaad&daanisj = 'ID'; & sign is not allowed, underscores or symbols are
// let new = 27; New is a reserved word
// let name = 'Irsjaad' Name is allowed but a reserved word
// let Person = 'Irsjaad' Do not start variable with a Uppercase

//Make variable names descriptive
let myFirstJob = "Cook";
let myCurrentJob = "IT Engineer";
// dont do it like this
let job1 = "Cook";
let job2 = "IT Engineer";

console.log(myFirstJob);


// LECTURE: Data types

// Boolean
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'Irsjaad');

// Dynamic type
javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun);
console.log(javaScriptIsFun);

// Undefined
let year;
console.log(year); //prints value
console.log(typeof year); //prints type of value

year = 1991;
console.log(year); //prints value
console.log(typeof year); //prints type of value

// Null
console.log(typeof null); //returns an object
// This is bug in JavaScript, null is not an object, it should print 'null'



// LECTURE: let, const and var

// let
// let are variables that can change, it creates a variable we can change/mutate/re-assign. let is blocked scoped
let age = 30;
age = 31;

// const
// const are variables that can't change, it creates a variable we cannot mutate/change/re-assign
const birthYear = 1991;

// A const cannot change and cannot be empty, it always needs a value
// birthYear = 1992;
// const job

// var
// var is legacy or older javacsript, works like 'let' but its function scoped
var job = 'developer';
console.log(job);
job = 'cook';
console.log(job);

//Its not always needed to declare variables but it creates a variable out of scope. So bad practice.
lastName = 'Mahabier';
console.log(lastName);


// LECTURE: Basic Operators

// math operators
const yearNow = 2037;
const ageIrsjaad = yearNow - 1991;
const ageYasmin = yearNow - 2018;
console.log(ageIrsjaad, ageYasmin);

console.log(ageIrsjaad * 2, ageIrsjaad / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// concatonations
const firstName = 'Irsjaad';
const lastName = 'Mahabier';
console.log(firstName + ' ' + lastName);

// typeof
// see earlier lectures above

// assignment operators
let x = 10 + 5; // '=' is a assignment operator, 'x' will be assigned 15
console.log(x);
x += 10; //  '+=' x = x + 10 = 25
console.log(x);
x *= 4; // '*=' x = x * 4 = 100
console.log(x);
x++; // ('++') x = x + 1 = 101
console.log(x);
x--; // '--' x = x - 1 = 100
x--; // '--' x = x - 1 = 99
console.log(x);

// comparison operators
// create boolean outcomes. >, <, >=, <=
console.log(ageIrsjaad > ageYasmin);
console.log(ageYasmin >= 18);

const isFullAge = ageYasmin >= 18;

console.log(yearNow - 1991 > yearNow - 2018);


const yearNow = 2037;
const ageIrsjaad = yearNow - 1991;
const ageYasmin = yearNow - 2018;

console.log(yearNow - 1991 > yearNow - 2018);

// console.log(25 - 10 - 5)

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const avgAge = (ageIrsjaad + ageYasmin) / 2;
console.log(ageIrsjaad, ageYasmin, avgAge);

// LECTURE: Strings and Template Literals

const firstName = 'Irsjaad';
const job = 'developer';
const birthYear = 1991;
const currentYear = 2037;

const irsjaad =
  "I'm " +
  firstName +
  ', a ' +
  (currentYear - birthYear) +
  ' years old ' +
  job +
  '!';
console.log(irsjaad);

const irsjaadNew = `I'm ${firstName}, a ${
  currentYear - birthYear
} years old ${job}!`;
console.log(irsjaadNew);

console.log(`Just a regular string...`);

console.log(
  'String with \n\
multiple \n\
lines '
);

console.log(`string
multiple
lines`);

// LECTURE: Taking decisions: if / else

const age = 15;
// const isOldEnough = age >= 18;

if (age >= 18) {
  console.log('Sarah can start her driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait ${yearsLeft} more years. 😀`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


// LECTURE: Type conversion and coercion

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Irsjaad')); //NaN: Not a Number (invalid number)
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('I am 23 years old'); // same as above
//JS converts the number here to a string

console.log('23' - '10' - 3);
//JS converts the strings to number (10)
console.log('23' + '10' + 3);
//JS converts this to a string (23103)
console.log('23' * '2');
console.log('23' / '2');
//JS converts the strings to number (46) (11,5)

let n = '1' + 1; //converts string (11)
n = n - 1; //converts to number (11-1 = 10)
console.log(n); // (10)

let m = 2 + 3 + 4 + '5'; // adds numbers to 9 and then concat 5
console.log(m); // (95)

let a = '10' - '4' - '3' - 2 + '5'; // adds strings as number 3 - 2 is 1 concat 5
console.log(a); // (15)

// LECTURE: Truthy en Falsy values

// 5 falsy values: 0, '', undefined, null, NaN.
// Falsy values will be converted to false when converted to boolean. They are not exactly false. Any string that is not empty or number that is not 0 will be true.

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Irsjaad')); // true
console.log(Boolean({})); // true
console.log(Boolean('')); // false

const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}
// JS will try to coerce anything in the condition of the 'if'  to a boolean.

let height;
if (height) {
  console.log('YAY height is defined');
} else {
  console.log('Height is UNDEFINED');
}
// Since height is undefined, the condition is false.


// LECTURE: Equality Operators: == vs. ===

const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite == 23) {
  // '23' == 23 type coercian converts strng to number
  console.log('Cool! 23 is an amazing number');
}

if (favorite === 23) {
  console.log('Cool! 23 is an amzing number');
} else if (favorite === 7) {
  console.log(' 7 is also a cool number');
} else if (favorite === 9) {
  console.log(' 9 is also a cool number');
} else if (favorite === 11) {
  console.log('11 is also a cool number');
} else {
  console.log('Number is not 23, 7, 9 or 11');
}

// strict version of different then or not.
if (favorite !== 23) {
  console.log('Why not 23?');
}

// LECTURE: Logical Operators

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // AND
console.log(hasDriversLicense || hasGoodVision); // OR
console.log(!hasDriversLicense); // NOT

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired); // AND
console.log(hasDriversLicense || hasGoodVision || isTired); // OR

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}


// LECTURE: The switch Statement

const day = 'monday';

switch (day) {
  case 'monday': // day === 'monday', strict comparison
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log(' Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log(' Enjoy the weekend :D');
} else console.log('Not a valid day');
*/

// LECTURE: The Conditional (Ternary) Operator

const age = 23;
age >= 18
  ? console.log('I like to drink win 🍷')
  : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine';
} else {
  drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
