'use strict';

////////////////////////////////////////////////////////////////////////////////
// Challenge 1
////////////////////////////////////////////////////////////////////////////////
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (scoreDolphins >= 2 * scoreKoalas) {
    console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`);
  } else if (scoreKoalas >= 2 * scoreDolphins) {
    console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins})`);
  } else console.log('Nobody won');
};

checkWinner(scoreDolphins, scoreKoalas);

//---------SOLUTION---------
const calcAverage2 = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage2(3, 4, 5));

//Test 1
let scoreDolphins2 = calcAverage2(44, 23, 71);
let scoreKoalas2 = calcAverage2(65, 54, 49);
console.log(scoreDolphins2, scoreKoalas2);

const checkWinner2 = function (avgDolphins2, avgKoalas2) {
  if (scoreDolphins2 >= 2 * avgKoalas2) {
    console.log(`Dolphins win (${avgDolphins2} vs. ${avgKoalas2})`);
  } else if (scoreKoalas2 >= 2 * avgDolphins2) {
    console.log(`Koalas win (${avgKoalas2} vs. ${avgDolphins2})`);
  } else {
    console.log('No team wins...');
  }
};
checkWinner2(scoreDolphins2, scoreKoalas2);

// Test 2
scoreDolphins2 = calcAverage2(85, 54, 41);
scoreKoalas2 = calcAverage2(23, 34, 27);
console.log(scoreDolphins2, scoreKoalas2);
checkWinner2(scoreDolphins2, scoreKoalas2);

////////////////////////////////////////////////////////////////////////////////
// Challenge 2
////////////////////////////////////////////////////////////////////////////////

// 1
const calcTip = function (bill) {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  console.log(tip);
  return tip;
};
calcTip(1000);
// 2
const bills = [125, 555, 44];
console.log(bills[0]);
// 3
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// 4
const total = [
  bills[0] + calcTip(bills[0]),
  bills[1] + calcTip(bills[1]),
  bills[2] + calcTip(bills[2]),
];
console.log(total);

//---------SOLUTION---------

// 1
const calcTip2 = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// Arrow function
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// 2
const bills2 = [125, 555, 44];

// 3
const tips2 = [calcTip2(bills2[0]), calcTip2(bills2[1]), calcTip2(bills2[2])];

// 4
const totals = [bills2[0] + tips[0], bills2[1] + tips[1], bills2[2] + tips[2]];
console.log(bills2, tips2, totals);
