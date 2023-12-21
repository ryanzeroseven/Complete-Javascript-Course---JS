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
//  Working with BigInt

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
