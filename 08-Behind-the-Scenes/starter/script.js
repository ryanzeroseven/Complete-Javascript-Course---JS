'use strict';

function calcAge(birthyear) {
  const age = 2037 - birthyear;
  // console.log(firstName);

  function printAge() {
    const output = `${firstName}, you are ${age} and born in ${birthyear}`;
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Irsjaad';
calcAge(1991);
// console.log(age);
// printAge;
