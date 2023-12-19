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

// VIDEO 150;
// The Map Method
//? Returns a new array with the changed elements

const eurToUsd = 1.1;

//? const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// Arrow function
const movementsUSD = movements.map((mov) => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsUSDFor = [];
for (const mov of movements) {
  movementsUSDFor.push(mov * eurToUsd);
}
console.log(movementsUSDFor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);

// VIDEO 152;
// The Filter Method

const deposits = movements.filter((mov) => mov > 0);
console.log(movements);
console.log(deposits);

// For loop
const depositsFor = [];
for (const mov of movements) {
  if (mov > 0) {
    depositsFor.push(mov);
  }
}
console.log(depositsFor);

const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals);

// VIDEO 153;
// The Reduce Method

console.log(movements);

// *accumulator is like a snowball
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc} + ${cur}`);
//   return acc + cur;
// }, 0);

// Arrow function
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

// For loop
let balanceFor = 0;
for (const mov of movements) balanceFor += mov;
console.log(balanceFor);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements.at(0));
console.log(max);

// VIDEO 155;
// The Magic of Chaining Methods

// PIPELINE
const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  //? .map((mov) => mov * eurToUsd)
  .map((mov, i, arr) => {
    //? console.log(arr);
    return mov * eurToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

// VIDEO 156;
// Coding Challenge 3

// VIDEO 157;
// The Find Method

//* Will not return a new array but the first element in the array that satisfies the condition
const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

// VIDEO 161
// Some and Every

//? SOME
console.log(movements);

//* Testing for EQUALITY, true or false.
console.log(movements.includes(-130));

//* Check on CONDITION
console.log(movements.some((mov) => mov === -130));

//* Checking for any element for which the condition is true, it will be true.
const anyDeposits = movements.some((mov) => mov > 1500);
console.log(anyDeposits);

//? EVERY
//* If all of the elements satisfy the condition then its true
console.log(movements.every((mov) => mov > 0)); // false

// Separate callback
const deposit = (mov) => mov < 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

// VIDEO 162
// flat and flatMap

//* Remove nested arrays and flatten the array into single array, parameter to specify how deep, default = 1
const arrFlat = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arrFlat.flat()); // (8) [1, 2, 3, 4, 5, 6, 7, 8]

//* Deeper nested arrays, parameter 2
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// flatMap see script.js

// VIDEO 163
// Sorting Arrays

//! MUTATES THE ORIGINAL
//? Sorting converts it to strings and then sort alphabetically

// Strings
const owners = ['Irsjaad', 'Yasmin', 'Daanisj', 'Ayesha'];
console.log(owners.sort());

// Numbers
console.log(movements);
// console.log(movements.sort());

//* return < 0, A, B (keep order)
//* return > 0, B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);

// VIDEO 164
// More Ways of Creating and Filling Arrays

const arr164 = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x); // [empty × 7]
console.log(x.map(() => 5)); //[empty × 7]

// Empty arrays + Fill method
//* Mutates array
// x.fill(1);
console.log(x); // [1, 1, 1, 1, 1, 1, 1]

//? specify start parameter
// x.fill(1, 3);
console.log(x); // [empty × 3, 1, 1, 1, 1]

//? specify send parameter
x.fill(1, 3, 5);
console.log(x); // [empty × 3, 1, 1, empty × 2]

//* Fill existing array
arr164.fill(23, 2, 6);
console.log(arr164); // [1, 2, 23, 23, 23, 23, 7]

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y); // [1, 1, 1, 1, 1, 1, 1]

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z); // [1, 2, 3, 4, 5, 6, 7]

// VIDEO 166
// Array Methods Practice
