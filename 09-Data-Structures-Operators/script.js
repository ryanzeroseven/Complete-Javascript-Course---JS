'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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
    close: 24,
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
