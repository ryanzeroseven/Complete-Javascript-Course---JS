// VIDEO 170
// Converting and Checking Numbers

console.log(23 === 23.0);

// Base 10 = 0 to 9. 1/10 = 0.1 3/10 = 3.333333e
// Binary base 2 = 0 to 1
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

//* Convert to number
console.log(Number('23'));
console.log(+'23');

//* Parsing number from string
console.log(Number.parseInt('30px', 10)); // 30
console.log(Number.parseInt('e23', 10)); // NaN not a number

//* Parsing decimals
console.log(Number.parseInt('2.5rem')); // 2
console.log(Number.parseFloat('2.5rem')); // 2.5
// console.log(parseFloat('2.5rem')); // 2.5

//* isNaN, check if value is NaN
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20X')); // true
console.log(Number.isNaN(23 / 0)); // true

//* isFinite, checking is the value is a real number
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20X')); // false
console.log(Number.isFinite(23 / 0)); // false

console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true
console.log(Number.isInteger(23 / 0)); // false

// VIDEO 171
// Math and Rounding

//* Square root
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5
console.log(8 ** (1 / 3)); // 2

//* Max & Min
console.log(Math.max(5, 18, 23, 11, 2)); // 23
console.log(Math.max(5, 18, '23', 11, 2)); // 23
console.log(Math.max(5, 18, '23px', 11, 2)); // NaN

console.log(Math.min(5, 18, '23', 11, 2)); // 2

//* Constants
console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

//* Random number generator
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// console.log(randomInt(10, 20));

//* Rounding integers

//* Round
console.log(Math.round('23.3')); // 23
console.log(Math.round(23.7)); // 24

//* Ceil, nearest upper integer
console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil('23.7')); // 24

//* Floor nearest lower integer
console.log(Math.floor(23.3)); // 23
console.log(Math.floor('23.7')); // 23

//? trunc and floor work the same for positive numbers, but for negative numbers floor is more accurate.
console.log(Math.trunc(23.3)); // 23

console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); // -24

// Decimals (Floating point numbers)
console.log((2.7).toFixed(0)); // 3 - string
console.log((2.7).toFixed(3)); // 2.700 - string
console.log((2.345).toFixed(2)); // 2.35 - string
console.log(+(2.345).toFixed(2)); // 2.35 - number

// VIDEO 172
// Remainder operator

console.log(5 % 2); // 1
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3); // 2
console.log(8 / 3); // 8 = 2 * 3 + 2

console.log(6 % 2); // 0
console.log(6 / 2); // 3

console.log(7 % 2); // 1
console.log(7 / 2); // 3.5

isEven = (n) => n % 2 === 0;
console.log(isEven(8)); // true
console.log(isEven(23)); // false
console.log(isEven(514)); // true
console.log(isEven(517)); // false

// VIDEO 173
// Numeric Separators
//* The engine ignores the underscores, they can only be placed between numbers and not doubled. Only use with numbers cannot use it in strings.

// 287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter); // 287460000000

const price = 345_99;
console.log(price); // 34599

const transferFee1 = 15_00;
const transferFee2 = 1_500;

console.log(Number('230_000')); // NaN

// VIDEO 174
// Working with BigInt

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

//* BigInt
console.log(48921563148945141641658461684168351683168835n);
console.log(BigInt(4892156314));

// Operations
console.log(10000n + 10000n);
console.log(1352168131861316823153783n * 1321651516513165131851153156n);
// console.log(Math.sqrt(16n)); //! Not possible

const huge = 1213165186657851563156n;
const num = 23;
// console.log(huge * num); //! Error cannot mix BigInt with other types
console.log(huge * BigInt(num));

// Exceptions
console.log(20n > 15); // true
console.log(20n === 20); // false
console.log(typeof 20n); // bigint
console.log(20n == '20'); // true

console.log(huge + ' is REALLY BIG');

// Divisions
console.log(10n / 3n); // 3n, cuts of the decimal
console.log(10 / 3);

// VIDEO 175
// Creating Dates

// Create a date
/*
const now = new Date();
console.log(now);

console.log(new Date('Dec 21 2023 11:29:03'));
console.log(new Date('December 25, 2023'));
console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));
*/

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2139571380000));

console.log(new Date(Date.now()));

future.setFullYear(2040);
console.log(future);

// VIDEO 176
// Adding dates to "Bankist" app
//* See functions with date.

// VIDEO 177
// Operations with Dates

console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

const days1 = calcDaysPassed(
  new Date(2037, 3, 4),
  new Date(2037, 3, 14, 10, 8)
);

console.log(days1);

// VIDEO 178
// Internationalizing Dates (Intl)

// VIDEO 179
// Internationalizing Numbers (Intl)

const num2 = 3884764.24;

const options = {
  // style: 'percentage',
  // style: 'unit',
  // unit: 'mile-per-hour',
  // unit: 'celsius',
  style: 'currency',
  currency: 'EUR',
  // useGrouping: false,
};

console.log('US', new Intl.NumberFormat('en-US', options).format(num2));
console.log('UK', new Intl.NumberFormat('en-UK', options).format(num2));
console.log('NL', new Intl.NumberFormat('nl-NL', options).format(num2));
console.log('DE', new Intl.NumberFormat('de-DE', options).format(num2));
console.log('SY', new Intl.NumberFormat('ar-SY', options).format(num2));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num2)
);

// VIDEO 180
// Timers, setTimeout and setInterval

// setTimeout
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} & ${ing2} 🍕`),
  3000,
  ...ingredients
);

console.log('Waiting...');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval
const clock = setInterval(function () {
  const now = new Date();
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  console.log(new Intl.DateTimeFormat(navigator.language, options).format(now));
}, 1000);

document.querySelector('body').addEventListener('click', function () {
  clearInterval(clock);
});

// VIDEO 181
// Implementing a Countdown Timer
