'use strict';

function calcAge(birthyear) {
  const age = 2037 - birthyear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthyear}`;
    console.log(output);

    if (birthyear >= 1981 && birthyear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope variable
      const firstName = 'Steven'; //Because the const firstName is within the scope, JS wont look outside to the global variables

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

//global variable therefore useable in the function above
const firstName = 'Irsjaad';

calcAge(1991);
// console.log(age);
// printAge();

// VIDEO 95
// HOISTING

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Irsjaad';
let job = 'developer';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

// declarations
function addDecl(a, b) {
  return a + b;
}
// expression
const addExpr = function (a, b) {
  return a + b;
};

// arrow
var addArrow = (a, b) => a + b;

// EXAMPLE
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log(`All products deleted`);
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

// VIDEO 97
// this
console.log(this);

const calcAgeThis = function (birthyear) {
  console.log(2037 - birthyear);
  console.log(this);
};
calcAgeThis(1991);

const calcAgeArrow = birthyear => {
  console.log(2037 - birthyear);
  console.log(this);
};
calcAgeArrow(1980);

const irsjaad = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
irsjaad.calcAge();

const yasmin = {
  year: 2017,
};

yasmin.calcAge = irsjaad.calcAge;
yasmin.calcAge();

const f = irsjaad.calcAge;
// f();

// VIDEO 98
// This keyword in practice

// Creating objects in the window, DO NOT USE
// var firstName1 = 'Yasmin';

const irm = {
  firstName: 'Irsjaad',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
irm.greet();
irm.calcAge();

// arguments keyword
const addExpr2 = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr2(2, 5);
addExpr2(2, 5, 8, 12);

var addArrow = (a, b) => {
  // console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);

// VIDEO 99
// Primitive vs Reference types

let age = 30; // first age is 30
let oldAge = age; // oldAge is before the new age is set so also still 30
age = 31; // new age is 31 but old age is still 30 because this line is after oldAge
console.log(age);
console.log(oldAge);

const myself = {
  name: 'Irsjaad',
  age: 30,
};
const friend = myself;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me:', myself);

// VIDEO 100
// Primitive vs Reference types in practice

// Primitive types saved in the stack
let lastName = 'Mahabier';
let oldLastName = lastName;
lastName = 'Prins';
console.log(lastName, oldLastName);

// Reference types saved in the heap but does not create a new object in heap
// point to same memory address in the stack and therefore in the heap
const yas = {
  firstName: 'Yas',
  lastName: 'Prins',
  age: 32,
};
const marriedYas = yas;
marriedYas.lastName = 'Mahabier';
console.log('Before marriage', yas);
console.log('After marriage', marriedYas);

// Copying objects
const yas2 = {
  firstName: 'Yas',
  lastName: 'Prins',
  age: 32,
  family: ['Erwin', 'Reina'],
};

const yasCopy = Object.assign({}, yas2);
yasCopy.lastName = 'Mahabier';

yasCopy.family.push('Irsjaad');
yasCopy.family.push('Daanisj');

console.log('Before marriage', yas2);
console.log('After marriage', yasCopy);
