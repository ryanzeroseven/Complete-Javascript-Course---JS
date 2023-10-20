'use strict';
/*

////////////////////////////////////////////////////////////////////////////////
// LECTURE: Activating Strict Mode
////////////////////////////////////////////////////////////////////////////////

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicens = true;
if (hasDriversLicense) console.log('I can drive :D');

// Reserved words, strict mode will detect them.
// const interface = 'Audio';
// const private = 534;

////////////////////////////////////////////////////////////////////////////////
// LECTURE: Functions
////////////////////////////////////////////////////////////////////////////////

function logger() {
  console.log('My name is Irsjaad');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);



////////////////////////////////////////////////////////////////////////////////
// LECTURE: Function Declarations vs. Expressions
////////////////////////////////////////////////////////////////////////////////

//Function Declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1);

// Function Expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);

////////////////////////////////////////////////////////////////////////////////
// LECTURE: Arrow Function
////////////////////////////////////////////////////////////////////////////////

// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1991, 'Irsjaad'));
console.log(yearsUntilRetirement(1980, 'Bob'));

////////////////////////////////////////////////////////////////////////////////
// LECTURE: Functions calling other functions
////////////////////////////////////////////////////////////////////////////////

const cutPieces = function (fruit) {
  return fruit * 4;
};

function fruitProcessor(apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}
console.log(fruitProcessor(2, 3));

////////////////////////////////////////////////////////////////////////////////
// LECTURE: Reviewing functions
////////////////////////////////////////////////////////////////////////////////

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired.`);
    return -1;
  }
  // return
};

console.log(yearsUntilRetirement(1991, 'Irsjaad'));
console.log(yearsUntilRetirement(1950, 'Mike'));


////////////////////////////////////////////////////////////////////////////////
// LECTURE: Introduction to Arrays
////////////////////////////////////////////////////////////////////////////////

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const allYears = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Irsjaad';
const irsjaad = [firstName, 'Mahabier', 2023 - 1991, 'Developer', friends];
console.log(irsjaad);
console.log(irsjaad.length);

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);


////////////////////////////////////////////////////////////////////////////////
// LECTURE: basic Array Operation (Methods)
////////////////////////////////////////////////////////////////////////////////

const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay'); // at the end
console.log(friends);
console.log(newLength); // returns length of array

friends.unshift('John'); // at the start
console.log(friends);

// Remove elements
friends.pop(); // last element
const popped = friends.pop();
console.log(popped); // returns the removed element
console.log(friends);

const shifted = friends.shift(); // first element
console.log(shifted); // returns the removed element
console.log(friends);

console.log(friends.indexOf('Steven')); // returns index number of array of that element
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven')); // returns true of false if  element is in the array
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}


////////////////////////////////////////////////////////////////////////////////
// LECTURE: Introduction to objects
////////////////////////////////////////////////////////////////////////////////

const irsjaadArray = [
  'Irsjaad',
  'Mahabier',
  2037 - 1991,
  'developer',
  ['stef', 'daan', 'dior'],
];

// Creating objects with curly brackets {}

// Key : Value pairs
const irsjaad = {
  firstName: 'Irsjaad',
  lastName: 'Mahabier',
  age: 2037 - 1991,
  job: 'Developer',
  friends: ['stef', 'daan', 'dior'],
};


////////////////////////////////////////////////////////////////////////////////
// LECTURE: Dot vs. Bracket notation
////////////////////////////////////////////////////////////////////////////////

const irsjaad = {
  firstName: 'Irsjaad',
  lastName: 'Mahabier',
  age: 2023 - 1991,
  job: 'Developer',
  friends: ['Stef', 'Daan', 'Dior'],
};
console.log(irsjaad);

// Dot: retrieves based on the Key (property name), onyl allows Key
console.log(irsjaad.lastName);
console.log(irsjaad['lastName']);

// Bracket retrieves based on the Key but allows expression
const nameKey = 'Name';
console.log(irsjaad['first' + nameKey]);
console.log(irsjaad['last' + nameKey]);

const interestedIn =
  'What do you want to know about Irsjaad? Choose between firstName, lastName, age, job and friends.';
console.log(interestedIn);

if (irsjaad[interestedIn]) {
  console.log(irsjaad[interestedIn]);
} else {
  console.log(
    'Wrong request!Choose between firstName, lastName, age, job and friends.'
  );
}

irsjaad.location = 'Netherlands';
irsjaad['instagram'] = '@irsjaadm';
console.log(irsjaad);

// Challenge
// 'Irsjaad has 3 friends, and his best friend is called Daan'
console.log(
  `${irsjaad.firstName} has ${irsjaad.friends.length}, and his best friend is called ${irsjaad.friends[1]}`
);


////////////////////////////////////////////////////////////////////////////////
// LECTURE: Object Methods
////////////////////////////////////////////////////////////////////////////////

const irsjaad = {
  firstName: 'Irsjaad',
  lastName: 'Mahabier',
  birthYear: 1991,
  job: 'Developer',
  friends: ['Stef', 'Daan', 'Dior'],
  hasDriverLicense: true,

  // calcAge: function (birthYear) {
  //   return 2023 - birthYear;
  // },
  // calcAge: function () {
  //   // console.log(this);
  //   return 2023 - this.birthYear;
  // },
  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.}`;
  },
};

console.log(irsjaad.calcAge());
console.log(irsjaad.age);
console.log(irsjaad.age);
console.log(irsjaad.age);

// Challenge
// "Irsjaad is a 32-year old developer, and he has a/no driver's license."
console.log(irsjaad.getSummary());

////////////////////////////////////////////////////////////////////////////////
// LECTURE: Iteration: The for loop
////////////////////////////////////////////////////////////////////////////////

// console.log('Lifting weights repittion 1');
// console.log('Lifting weights repittion 2');
// console.log('Lifting weights repittion 3');
// console.log('Lifting weights repittion 4');
// console.log('Lifting weights repittion 5');
// console.log('Lifting weights repittion 6');
// console.log('Lifting weights repittion 7');
// console.log('Lifting weights repittion 8');
// console.log('Lifting weights repittion 9');
// console.log('Lifting weights repittion 10');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repittion ${rep} 🏋🏽‍♀️`);
}


////////////////////////////////////////////////////////////////////////////////
// LECTURE: Looping Arrays, Breaking and Continuing
////////////////////////////////////////////////////////////////////////////////

const irsjaadArray = [
  'Irsjaad',
  'Mahabier',
  2023 - 1991,
  'developer',
  ['stef', 'daan', 'dior'],
  true,
];
const types = [];

// console.log(irsjaadArray[0])
// console.log(irsjaadArray[1])
// console.log(irsjaadArray[2])
// console.log(irsjaadArray[3])
// console.log(irsjaadArray[4])
// irsjaadArray[5] does NOT exist

for (let i = 0; i < irsjaadArray.length; i++) {
  // Reading from array
  console.log(irsjaadArray[i], typeof irsjaadArray[i]);

  // Filling types array
  // types[i] = typeof irsjaadArray[i];
  types.push(typeof irsjaadArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}
console.log(ages);

// continue and break
//CONTINUE
console.log('--- ONLY STRING ---');
for (let i = 0; i < irsjaadArray.length; i++) {
  if (typeof irsjaadArray[i] !== 'string') continue;

  console.log(irsjaadArray[i], typeof irsjaadArray[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < irsjaadArray.length; i++) {
  if (typeof irsjaadArray[i] === 'number') break;

  console.log(irsjaadArray[i], typeof irsjaadArray[i]);
}


////////////////////////////////////////////////////////////////////////////////
// LECTURE: Looping Backwards and Loops in Loops
////////////////////////////////////////////////////////////////////////////////
const irsjaad = [
  'Irsjaad',
  'Mahabier',
  2023 - 1991,
  'developer',
  ['stef', 'daan', 'dior'],
  true,
];
for (let i = irsjaad.length - 1; i >= 0; i--) {
  console.log(i, irsjaad[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------- Startig exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weights repetition ${rep} 🏋🏽‍♀️`);
  }
}
*/

////////////////////////////////////////////////////////////////////////////////
//LECTURE: The while Loop
////////////////////////////////////////////////////////////////////////////////

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repittion ${rep} 🏋🏽‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice} 🎲`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Loop has ended because dice rolled ${dice}`);
}
