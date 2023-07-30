'use strict';

////////////////////////////////////////////////////////////////////////////////
// LECTURE: Functions
////////////////////////////////////////////////////////////////////////////////
// Assignment 1

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const finland = describeCountry('Finland', 6, 'Helsinki');

const netherlands = describeCountry('Netherlands', 17, 'Amsterdam');

const curacao = describeCountry('Curacao', 4, 'Willemstad');

console.log(finland, netherlands, curacao);

////////////////////////////////////////////////////////////////////////////////
// LECTURE: Declarations vs. Expressions
////////////////////////////////////////////////////////////////////////////////
// Assignment 2
const worldPopulation = 7900;

function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}
const percentageChina = percentageOfWorld1(1441);
const percentageFinland = percentageOfWorld1(6);
const percentageNetherlands = percentageOfWorld1(18);
console.log(percentageChina, percentageFinland, percentageNetherlands);

const percentageOfWorld2 = function (population) {
  return (population / worldPopulation) * 100;
};
const percentageIndia = percentageOfWorld2(250);
const percentageBelgium = percentageOfWorld2(10);
const percentageGermany = percentageOfWorld2(80);
console.log(percentageIndia, percentageBelgium, percentageGermany);

////////////////////////////////////////////////////////////////////////////////
// LECTURE: Arrow Functions
////////////////////////////////////////////////////////////////////////////////
// Assignment 3
const percentageOfWorld3 = (population) => (population / worldPopulation) * 100;
const percPortugal = percentageOfWorld3(54);
const percVS = percentageOfWorld3(244);
const percMexico = percentageOfWorld3(89);
console.log(percPortugal, percMexico, percVS);

////////////////////////////////////////////////////////////////////////////////
// LECTURE:  Functions Calling Other Functions
////////////////////////////////////////////////////////////////////////////////
// Assignment 4

function describePopulation(country, population) {
  const percCountry = percentageOfWorld1(population);

  return `${country} has ${population} million people, which is about ${percCountry}% of the world.`;
}
console.log(describePopulation('China', 1441));

const describePopulation2 = function (country, population) {
  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
  console.log(description);
};
describePopulation2('Portugal', 10);

////////////////////////////////////////////////////////////////////////////////
// LECTURE: Introduction to Arrays
////////////////////////////////////////////////////////////////////////////////
// Assignment 5

// 1
const populations = new Array(17, 244, 35, 80);
// 2
if (populations.length == 4) console.log(true);
else console.log(false);
console.log(populations.length === 4);
// 3
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[populations.length - 1]),
];
console.log(percentages);

////////////////////////////////////////////////////////////////////////////////
// LECTURE: Basic Array Operations (Methods)
////////////////////////////////////////////////////////////////////////////////
// Assignment 6

// 1
const neighbours = ['Belgium', 'Germany', 'France', 'Luxembourg'];
console.log(neighbours);
// 2
neighbours.push('Utopia');
console.log(neighbours);
// 3
neighbours.pop();
console.log(neighbours);
// 4
if (neighbours.includes('Germany')) {
  console.log('Probably a central European country ;)');
} else {
  console.log('Probably NOT a central European country :D');
}
// 5
neighbours[neighbours.indexOf('Germany')] = 'Duitsland';
console.log(neighbours);

////////////////////////////////////////////////////////////////////////////////
// LECTURE: Introduction to Objects
////////////////////////////////////////////////////////////////////////////////
// Assignment 7

const myCountry = {
  country: 'The Netherlands',
  capital: 'Amsterdam',
  language: 'Dutch',
  population: 18,
  neighbours: ['Belgium', 'Germany', 'Denmark'],
};

////////////////////////////////////////////////////////////////////////////////
// LECTURE: Dot vs. Bracket notation
////////////////////////////////////////////////////////////////////////////////
// Assignment 8

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);
