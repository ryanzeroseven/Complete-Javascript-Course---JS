// LECTURE: Values and Variables
//Assignment 1
let country = 'Netherlands';
let continent = 'Europe';
let population = 17000000;

console.log(country, continent, population);

// LECTURE: Data Types
//Assignment 2
let isIsland = false;
let language;

console.log(typeof isIsland, population, country, language);

// LECTURE: let, const and var
// Assignment 3
language = 'Dutch';
const myLanguage = 'Dutch';
const myContinent = 'Europe';
const myIsIsland = false;
console.log(language, myLanguage, myContinent, myIsIsland);
console.log(typeof language, myLanguage, myContinent, myIsIsland);

// LECTURE: Basic Operators
// Assignment 4
console.log(population / 2);
population++;
console.log(population);

const popFinland = 6000000;
console.log(population > popFinland);

const avgPopulation = 33000000;
console.log(population < avgPopulation);

const description =
  country +
  ' is in ' +
  continent +
  ', and its ' +
  population +
  ' speak ' +
  language;
console.log(description);

//LECTURE: Strings and Template Literals
// Assignment 5
const description2 = `${country} is in ${continent} and its ${population} million people speak ${language}`;
console.log(description2);

//LECTURE: Taking Decisions: if / else Statements
// Assignment 6

if (population > avgPopulation) {
  console.log(`${country}'s population is above average.`);
} else {
  console.log(
    `${country}'s population is ${
      avgPopulation - population
    } million below average.`
  );
}

// LECTURE: Type Conversion and Coercion
// Assignment 6

const a = '9' - '5';
// 4
const b = '19' - '13' + '17';
// -1298 ( 19-13 =6) 617
const c = '19' - '13' + 17;
// 23
const d = '123' < 57;
// false
const e = 5 + 6 + '4' + 9 - 4 - 2;
// 53 (5+6=11) 114 + (9-4-2 = 3) = 1143
console.log(a, b, c, d, e);

// LECTURE: Equality Operators: == vs. ===
// Assignment 7

// 1 / 7
/*
const numNeighbours = Number(
  prompt('How many neighbour countries does your country have?')
);
// 2 / 6
console.log(numNeighbours);
if (numNeighbours === 1) {
  console.log('Only 1 border!');
  // 3
} else if (numNeighbours > 1) {
  console.log('More than 1 border');
  // 4
} else console.log('No borders');
*/

// LECTURE: Logical Operators
// Assignment 8

// 2
if (language === 'english' && !isIsland && population < 50000000) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

// LECTURE: The switch Statement
// Assignment 9

const languageSwitch = 'hindi';

switch (languageSwitch) {
  case 'chinese':
  case 'mandarin':
    console.log('MOST number of native speakers!');
    break;
  case 'spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'english':
    console.log('3rd place');
    break;
  case 'hindi':
    console.log('Number 4');
    break;
  case 'arabic':
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great language too :D');
}

// LECTURE: The Conditional (Ternary) Operator
// Assignment 10

const level = population > 33000000 ? 'above' : 'below';
console.log(`${country}'s population is ${level} average.`);
