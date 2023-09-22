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
