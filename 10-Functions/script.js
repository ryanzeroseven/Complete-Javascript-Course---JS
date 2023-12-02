'use strict';

// VIDEO 128
// Default parameters

const bookings = [];

const createBooking = function (
  // ES6
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123'); //{flightNum: 'LH123', numPassengers: 1, price: 199}
createBooking('LH123', 2, 800); // {flightNum: 'LH123', numPassengers: 2, price: 800}
createBooking('AZ453', 5); // {flightNum: 'AZ453', numPassengers: 5, price: 995}
createBooking('Db453', undefined, 1000); // {flightNum: 'Db453', numPassengers: 1, price: 1000}

// VIDEO 129
// How passing arguments work: Value vs Reference

const flight = 'AK1234'; // primitive type
const irsjaad = {
  name: 'Irsjaad Mahabier',
  passport: 97641234842,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name; // reference type of the same object in memory heap

  if (passenger.passport === 97641234842) {
    // alert('Checked in');
  } else {
    // alert('Wrong passport!');
  }
};

checkIn(flight, irsjaad);
console.log(flight); // AK1234
console.log(irsjaad);

// Is the same as doing...
const flightNum = flight;
const passenger = irsjaad;

// passing an object to function is like copying the object, this is not the case with primitive values. BE CAREFUL WITH THIS BEHAVIOR!!

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(irsjaad); // passing object and then changes the object attribute and passport number has now changed.
checkIn(flight, irsjaad);

// VIDEO 130
// First-Class and Higher-Order Functions

// VIDEO 131
// Functions accepting callback functions (higher order functions)

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const UpperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', UpperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('🖐');
};

document.getElementsByTagName('H1')[0].addEventListener('click', high5);
['Irsjaad', 'Yasmin', 'Daanisj'].forEach(high5);

// VIDEO 132

// Functions returning functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');

greeterHey('Irsjaad');

greeterHey('Daanisj');

greet('Hello')('Irsjaad');

// Challenge Arrow function

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

greetArr('Yo')('Irsjaad');

// VIDEO 133

// The call and apply Methods

// This key pointing towards the object lufthansa

const lufthansa = {
  airline: 'Lufthansa',

  iataCode: 'LH',

  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );

    this.bookings.push({ flight: `${this.iataCode}${flightNum}, ${name}` });
  },
};

lufthansa.book(239, 'Irsjaad Mahabier');

lufthansa.book(579, 'Yasmin Prins');

console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',

  iataCode: 'EW',

  bookings: [],
};

const book = lufthansa.book;

// the function is now a regular function no longer a method thus the 'this' keyword points to undefined.

// DOES NOT WORK

// book(23, 'Sarah Williams');

// CALL METHOD

// call function redirects the 'this' keyword

book.call(eurowings, 23, 'Sara Williams');

console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');

console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',

  iataCode: 'LX',

  bookings: [],
};

book.call(swiss, 693, 'Mary Condo');

console.log(swiss);

// APPLY METHOD

const flightData = [583, 'George Cooper'];

book.apply(swiss, flightData);

console.log(swiss);

// this is the same if you use spread instead of apply method

book.call(swiss, ...flightData);

// VIDEO 134

// The bind Method
// book.call(eurowings, 23, 'Sara Williams');
// the bind method will give you a new function where the 'this' keyword is now bound to eurowings instead of lufthansa
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Irsjaad Mahabier');
bookEW23('Yasmin Prins');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application (preset parameters)

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * .23

console.log(addVAT(100));
console.log(addVAT(23));

// Challenge
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

// VIDEO 135
// Coding Challenge 1 (see file)

// VIDEO 136
// Immediately Invoked Function Expressions (IIFE)

// You can always call this function from any point later in the code
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// Tricking JavaScript to call it once! Put 'function' in parenthesis and end with parenthesis.
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

// NOT POSSIBLE
// console.log(isPrivate);

(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 23; // not accessible outside of a block
  var notPrivate = 46; // accessible outside of a block
}
// console.log(isPrivate);
console.log(notPrivate);

// VIDEO 137
// Closures

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

// A closure gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preservers the scope chain throughout time.

// A closure makes sure that a function doesn't loose connection to variables that existed at the function's birth place

// A closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were present in the environment where the function was created.

console.dir(booker);
