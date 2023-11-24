'use strict';

const allDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingTimes = {
  [allDays[3]]: {
    open: 12,
    close: 22,
  },
  [allDays[4]]: {
    open: 11,
    close: 23,
  },
  [allDays[5]]: {
    open: 0, // Open 24 hours
    close: 12 + 12,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  //ES6 enhanced object literals
  openingTimes,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} & ${ing3}!`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

// VIDEO 103
// DESTRUCTURING ARRAYS

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z); // 2, 3, 4
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary); // Italian, 'skipped', Vegetarian

//SWITCHING VARIABLES

// solution to switch variables wihtout destructuring
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, maincourse] = restaurant.order(2, 0);
console.log(starter, maincourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Setting default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 9, 8, 1

// VIDEO 104
// DESTRUCTURING OBJECTS

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Renaming object properties
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Settig default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables in objects
let s = 111;
let d = 999;
const obj = { s: 23, d: 7, f: 14 };
({ s, d } = obj);
console.log(s, d);

// Nested objects
const {
  fri: { open: o, close: e },
} = openingHours;
console.log(o, e);

// VIDEO 105
// THE SPREAD OPERATOR

const array = [7, 8, 9];
const badNewArr = [1, 2, array[0], array[1], array[2]];
console.log(badNewArr);

const newArr = [1, 2, ...array];
console.log(newArr); // 1, 2, 7, 8, 9

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 or more arrays
const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(fullMenu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Irsjaad';
const letters = [...str, '', 'M.'];
console.log(letters); //['I', 'r', 's', 'j', 'a', 'a', 'd', '', 'M.']
console.log(...str); // I r s j a a d
// console.log(`${...str} Mahabier`); Not possible

// Real world example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Mario' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

// VIDEO 106
// Rest Pattern and Parameters

// 1) DESTRUCTURING

// ARRAYS

// SPREAD, because on the RIGHT side of the '=' operator
const arrayNew = [1, 2, ...[3, 4]];

// REST, because on the LEFT side of the '=' operator
// REST operations collects unused elements and places them in an array
const [g, h, ...others] = [1, 2, 3, 4, 5];
console.log(g, h, others); // 1 2 [3, 4, 5]

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood); //Pizza Risotto ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// OBJECTS
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

// 2) FUNCTIONS
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(5, 3, 7, 2, 9, 3, 4, 6);

const xy = [23, 5, 7];
add(...xy);

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach'); //mushroom [onion, olives, spinach]
restaurant.orderPizza('mushroom'); // mushroom []

// VIDEO 107
// Short circuiting (&& and ||)
// Use ANY data type, return ANY data type, short-circuiting

console.log('------ OR -------');
// || operator returns (short-circuits) the first truth(y) value of all the operants or the last if all others are false(y)
// Practical application = set default values

console.log(3 || 'Irsjaad'); // 3
console.log('' || 'Irsjaad'); // Irsjaad - empty string is a falsey value
console.log(true || 0); // true - first value is true
console.log(undefined || null); // null -  undefined is a falsey value, so is null but the first one was falsey

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello - first truthy value

// Practical example
// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // 10 - restaurant.numGuests does not exists

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('------ AND -------');
// && operator returns (short-circuits) the first value false(y) or the last thruth(y) value if all others are truthy
// Practical application = execute code in second operant if first operant is true

console.log(0 && 'Irsjaad'); // 0
// && operator returns the last thruthy value if all other values are true
console.log(7 && 'Irsjaad'); // Irsjaad

console.log('Hello' && 23 && null && 'Irsjaad'); // null - null is falsey value, evaluation is false and short circuits then returns null

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('bresaola', 'buratta');

// VIDEO 108
// The Nullish Coalesching Operator (??)

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); // 10

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guests); // 10 - 0 or '' are seen as truthy values

// VIDEO 109
// Logical assignment Operators

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR (||) assigment operator: assigns value to variable if that variable is false(y)
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// same as above
// rest1.numGuests ||= 10; // 20
// rest2.numGuests ||= 10; // 10, rest2 does not have this variable

// nullish (??) assigment operator
rest1.numGuests ??= 10; // 0
rest2.numGuests ??= 10; // 10

// AND (&&) assignment operator: assigns value to variable that has a truthy property
// rest1.owner = rest1.owner && '<ANONYMOUS>'; // undefined, property is not available
// rest2.owner = rest2.owner && '<ANONYMOUS>'; // <ANONYMOUS>

// same as above
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

// VIDEO 110
// Coding challenge see other file

// VIDEO 111
// Looping Arrays: The for-of loop

const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu2) console.log(item);

for (const [i, el] of menu2.entries()) {
  // console.log(`${item[0] + 1}: ${item[1]}`);
  console.log(`${i + 1}: ${el}`);
}

// console.log([...menu2.entries()]);

// VIDEO 112
// Enhanced Object Literals
// See the restaurant object for enhanced changes to the arrays or openingTimes and no longer needing function ()

// VIDEO 113
// Optional Chaining (?)

if (restaurant.openingTimes && restaurant.openingTimes.mon)
  console.log(restaurant.openingTimes.mon.open);

// console.log(restaurant.openingTimes.mon.open);

// WITH optional chaining
console.log(restaurant.openingTimes.mon?.open);
console.log(restaurant.openingTimes?.mon?.open);

// Example

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  // console.log(day);
  const open = restaurant.openingTimes[day]?.open ?? 'closed';
  if (open == 'closed') {
    console.log(`On ${day}, we are ${open}`);
  } else console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Irsjaad', email: 'Hello@irsjaad.io' }];

console.log(users[0]?.name ?? 'User array empty');

// VIDEO 114
// Looping Objects: Object Keys, Values and Entries

// Porperty NAMES
const properties = Object.keys(openingTimes);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(`${openStr}`);

// Porperty VALUES
const values = Object.values(openingTimes);
console.log(values);

// Entire object
const entries = Object.entries(openingTimes);
// console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`on ${key} we open at ${open} and close at ${close}`);
}

// VIDEO 115
// Coding challenge see other file

// VIDEO 116
// Sets
// Sets can have only unique values and order does not matter
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet); // Set(3) {'Pasta'  'Pizza',  'Risotto'} removing all duplicates

console.log(new Set('Irsjaad')); // Set)6) {'I', 'r', 's', 'j', 'a','d'}

// How many items in set
console.log(ordersSet.size); // 3

// Is this value in set
console.log(ordersSet.has('Pizza')); // true
console.log(ordersSet.has('Bread')); // false

// Add this item to the set
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet); // Set(4) {'Pasta', 'Pizza', 'Risotto', 'Garlic Bread'} only once garlic bread is added

// Delete this item from the set
ordersSet.delete('Risotto');
console.log(ordersSet); // Set(4) {'Pasta', 'Pizza', 'Garlic Bread'} only once garlic bread is added

// Empty  set
// ordersSet.clear(); // Set(0) {size: 0}

// Retrieving values from a set you dont need indexes since all values are unique
console.log(ordersSet[0]); // undefined, there are no indexes.

// Looping
for (const order of ordersSet) console.log(order);
// Pasta
// Pizza
// Garlic Bread

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = new Set(staff);
console.log(staffUnique); // Set(3) {'Waiter', 'Chef', 'Manager'}
// Turn Set into an array
const staffSetToArray = [...new Set(staff)];
console.log(staffSetToArray); //(3) ['Waiter', 'Chef', 'Manager']

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('irsjaadmahabier').size);

// VIDEO 117
//Maps : Fundamentals

const rest = new Map();
// Add new element to the data structure
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed :(');

//read data from a map
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// check if map contains certain key
console.log(rest.has('categories'));
// remove elements in map
rest.delete(2);
// remove all elements
// rest.clear();
console.log(rest);
// Size
console.log(rest.size);

const arrMap = [1, 2];
rest.set(arrMap, 'Test');
rest.set(document.querySelector('h1'), 'Heading'); //get html elements
console.log(rest);

// this array does not refer to the array above. place tha rray in a variable and call that variable to work
// console.log(rest.get([1, 2]));
console.log(rest.get(arrMap));

// VIDEO 118
// Maps : Iteration

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎊'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingTimes));
const hoursMap = new Map(Object.entries(openingTimes));
console.log(hoursMap);

//QUIZZ APP
// Iteration
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key == 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));
3;

// Convert Map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

// VIDEO 119
// Summary: Which data structure to use?

// VIDEO 120
// Coding challenge #3

// VIDEO 121
// Working with strings - part 1

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2
console.log('B737'[0]); // B

console.log(airline.length); // 16
console.log('B737'.length); // 4

console.log(airline.indexOf('r')); // 6 tap aiR portugal
console.log(airline.lastIndexOf('r')); // 10 tap air poRtugal
console.log(airline.indexOf('Portugal')); // 8
console.log(airline.indexOf('portugal')); // -1 case sensitive so not found

// Substring
console.log(airline.slice(4)); // Air Portugal, 4 is the A, it starts at the 4th
console.log(airline.slice(4, 7)); // Air it stops before the end, any letter after r in air is sliced off, the lenght is end minus beginning thus 3
console.log(airline.slice(4, 7).length); // 3, the lenght is End - Beginning thus 3

console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal, plus 1 otherwise you get the space

console.log(airline.slice(-2)); // al, last 2
console.log(airline.slice(1, -1)); // AP Air Portuga, start from index 1 and removed the last index

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat 😁');
  } else {
    console.log('You got lucky 😎');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// VIDEO 122
// Working with strings - part 2

console.log(airline.toLowerCase()); // tap air portugal
console.log(airline.toUpperCase()); // TAP AIR PORTUGAL
console.log('irsjaad'.toUpperCase()); // IRSJAAD

// Fix capitalization in name
const passenger = 'irSjaAD'; // Irsjaad
const passengerLower = passenger.toLowerCase();
const passenerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passenger, passengerLower, passenerCorrect);

const passengerNameFix = function (name) {
  const nameLower = name.toLowerCase();
  // console.log(nameLower);
  const nameFix = nameLower[0].toUpperCase() + nameLower.slice(1);
  console.log(nameFix);
};

passengerNameFix('ALLCAPS');
passengerNameFix('yaSmIn');
passengerNameFix('mahaBier');

// Comparing email login
const email = 'hello@irsjaad.io';
const loginEmail = '  Hello@Irsjaad.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

const compareEmail = function (email, inputEmail) {
  const normalizedEmail = inputEmail.toLowerCase().trim();
  if (email === normalizedEmail) {
    console.log(`You're email address is valid`);
  } else {
    console.log(`Please check your email address`);
  }
};
compareEmail('irmahabier@gmail.com', 'irmahabier@gmail.com    \n');

// Replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passenges come to boarding door 23. Boarding door 23!';

console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replaceAll(/door/g, 'gate'));

// Booleans
const planeNew = 'Airbus A320neo';
console.log(planeNew.includes('A320')); // true
console.log(planeNew.includes('Boeing')); // false
console.log(planeNew.startsWith('Air')); // true
console.log(planeNew.startsWith('Aib')); // false

if (planeNew.startsWith('Airbus') && planeNew.endsWith('neo')) {
  console.log('Part of the new Airbus family');
}

// Practise exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('i have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

// VIDEO 123
// Working with strings - part 3

// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Irsjaad Mahabier'.split(' '));

const [firstName, lastName] = 'Irsjaad Mahabier'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('irsjaad ryan mahabier');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Irsjaad'.padStart(20, '+').padEnd(30, '+'));

// Masking
const maskCreditCard = function (number) {
  const str = number + '';
  const first4 = str.slice(0, 4);
  const last4 = str.slice(-4);
  console.log(first4, last4);
  // return last4.padStart(str.length, '*');
  return first4 + last4.padStart(str.length - first4.length, '*');
};

console.log(maskCreditCard(4563214569854789));
console.log(maskCreditCard('4563214569854789'));

// Repeat
const messageWeather = 'Bad weather... All Departures Delayed... ';
console.log(messageWeather.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};
planesInLine(5);
planesInLine(12);
planesInLine(3);

// VIDEO 124
// Coding challenge #4

// VIDEO 125
// String Methods Practice

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// console.log(flights.split('+'));

const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🛑' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(44);
  console.log(output);
}
