'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// VIDEO 142;
// Simple Array Methods

let arr = ['a', 'b', 'c', 'd', 'e'];

//* SLICE (does not mutate original array)
console.log(arr.slice(2)); // ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // ['c', 'd']
console.log(arr.slice(-2)); //  ['d', 'e']
console.log(arr.slice(-1)); //  ['e']
console.log(arr.slice(1, -2)); // ['b', 'c']

//? Shallow copy - either slice or spread operator. Use slice if you will use multiple methods after each other.
console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e']
console.log([...arr]); // ['a', 'b', 'c', 'd', 'e']

//* SPLICE (mutates original array), common use case to delete elements from array.

console.log(arr.splice(2)); // ['c', 'd', 'e']
//? after splice the original array has been mutated and whats left over see below.
console.log(arr); // ['a', 'b']

//? Common use case to delete the last item in the array.
arr.splice(-1);
console.log(arr); // ['a']

arr = ['a', 'b', 'c', 'd', 'e'];

arr.splice(-1); // remove last item
console.log(arr); // ['a', 'b', 'c', 'd']
arr.splice(1, 2); // start at position 1, remove 2 elements
console.log(arr); // ['a', 'd']

//* REVERSE (mutates original array)
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // ['f', 'g', 'h', 'i', 'j']
console.log(arr2); // ['f', 'g', 'h', 'i', 'j']

//* CONCAT (does not mutate original array)
const letters = arr.concat(arr2);
//? first array is concatenated with second array
console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log([...arr, ...arr2]); //['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

//* JOIN
console.log(letters.join(' - ')); // a - b - c - d - e - f - g - h - i - j
//? Result is a string with a dash between each item of the array.

// VIDEO 143;
// The new at Method

const arr3 = [23, 11, 64];
console.log(arr3[0]); // array at position 0 - 23
console.log(arr3.at(0)); // array at position 0 - 23

//* Getting last element in array
console.log(arr3[arr3.length - 1]); // 64
console.log(arr3.slice(-1)); // new array with 64
console.log(arr3.slice(-1)[0]); // 64

//? At method, use in method chaining
console.log(arr3.at(-1)); // 64

console.log('Irsjaad'.at(0)); // I
console.log('Irsjaad'.at(-1)); // d

// VIDEO 144;
// Looping Arrays: forEach

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//* For...of Loop
// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  //? Access counter variable, current index
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

//* forEach Method
console.log('--------FOREACH--------');

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
//? 0: function(200)
//? 1: function(450)
//? 2: function(400)
//? ...etc

// VIDEO 144;
// forEach With Maps and Sets

//* MAP
const currencies = new Map([
  //[Key, Value]
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
console.log(currencies);
//? 0: {"USD" => "United States dollar"}
//?   key: "USD"
//?   value: "United States dollar"

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//* SET
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
