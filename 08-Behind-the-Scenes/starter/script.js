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
