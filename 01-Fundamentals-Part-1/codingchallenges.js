// JAVASCRIPT FUNDAMENTALS 1

////////////////////////////////////////////////////////////////////////////////
// CODING CHALLENGE #1
////////////////////////////////////////////////////////////////////////////////

let markMass = 78;
let markHeight = 1.69;

let johnMass = 92;
let johnHeight = 1.95;

console.log(markMass / markHeight ** 2);
console.log(johnMass / johnHeight ** 2);

markHigherBMI = markMass / markHeight ** 2 > johnMass / johnHeight ** 2;
console.log(markHigherBMI);

markMass = 78;
markHeight = 1.88;

johnMass = 92;
johnHeight = 1.76;

console.log(markMass / markHeight ** 2);
console.log(johnMass / johnHeight ** 2);

markHigherBMI = markMass / markHeight ** 2 > johnMass / johnHeight ** 2;
console.log(markHigherBMI);

// Solution Coding Challenge #1

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

////////////////////////////////////////////////////////////////////////////////
// CODING CHALLENGE #2
////////////////////////////////////////////////////////////////////////////////
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

// Solution Coding Challenge #2
if (BMIMark > BMIJohn) {
  console.log("Mark's BMI is higher than John's!");
} else {
  console.log("John's BMI is higher than Mark's!");
}
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

////////////////////////////////////////////////////////////////////////////////
// CODING CHALLENGE 3
////////////////////////////////////////////////////////////////////////////////
// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110

// 1
const avgScoreDolphins = (96 + 108 + 89) / 3;
console.log(avgScoreDolphins);
const avgScoreKoalas = (88 + 91 + 110) / 3;
console.log(avgScoreKoalas);

// 2
if (avgScoreDolphins > avgScoreKoalas) {
  console.log(`Dolphins win with a average score of ${avgScoreDolphins}`);
} else if (avgScoreKoalas > avgScoreDolphins) {
  console.log(`Koalas win with a average score of ${avgScoreKoalas}`);
} else if (avgScoreDolphins === avgScoreKoalas) {
  console.log(
    `Dolphins and Koalas have tied with a score of ${avgScoreDolphins}`
  );
}

// Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// 3
const avgDolphins = (97 + 112 + 101) / 3;
console.log(avgDolphins);
const avgKoalas = (109 + 95 + 106) / 3;
console.log(avgKoalas);
const minScore = 100;

if (avgDolphins > avgKoalas && avgDolphins >= minScore) {
  console.log(`Dolphins win with a average score of ${avgDolphins}`);
} else if (avgKoalas > avgDolphins && avgKoalas >= minScore) {
  console.log(`Koalas win with a average score of ${avgKoalas}`);
} else if (avgDolphins === avgKoalas && avgDolphins > minScore) {
  console.log(`Dolphins and Koalas have tied with a score of ${avgDolphins}`);
}
// 4
else if (
  avgDolphins === avgKoalas &&
  avgDolphins > minScore &&
  avgKoalas > minScore
) {
  console.log('Dolphins and Koalas have tied with a score higher then 100');
} else console.log('No one wins');

// Solution Coding Challenge #3
// 1
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);
// 2
if (scoreDolphins > scoreKoalas) {
  console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins) {
  console.log('Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas) {
  console.log('Both win the trophy 🏆');
}
// 3 Bonus 1
const scoreDolphinsBonus = (97 + 112 + 101) / 3;
const scoreKoalasBonus = (109 + 95 + 123) / 3;
console.log(scoreDolphinsBonus, scoreKoalasBonus);

if (scoreDolphinsBonus > scoreKoalasBonus && scoreDolphinsBonus >= 100) {
  console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalasBonus > scoreDolphinsBonus && scoreKoalasBonus >= 100) {
  console.log('Koalas win the trophy 🏆');
} else if (scoreDolphinsBonus === scoreKoalasBonus) {
  console.log('Both win the trophy 🏆');
}

// 4 Bonus 2
const scoreDolphinsBonus2 = (97 + 112 + 101) / 3;
const scoreKoalasBonus2 = (109 + 95 + 106) / 3;
console.log(scoreDolphinsBonus2, scoreKoalasBonus2);

if (scoreDolphinsBonus2 > scoreKoalasBonus2 && scoreDolphinsBonus2 >= 100) {
  console.log('Dolphins win the trophy 🏆');
} else if (
  scoreKoalasBonus2 > scoreDolphinsBonus2 &&
  scoreKoalasBonus2 >= 100
) {
  console.log('Koalas win the trophy 🏆');
} else if (
  scoreDolphinsBonus2 === scoreKoalasBonus2 &&
  scoreDolphinsBonus2 >= 100 &&
  scoreKoalasBonus2 >= 100
) {
  console.log('Both win the trophy 🏆');
} else {
  console.log('No one wins the trophy 😢');
}

////////////////////////////////////////////////////////////////////////////////
// CODING CHALLENGE 4
////////////////////////////////////////////////////////////////////////////////

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? 15 / 100 : 20 / 100;
console.log(
  `The bill was ${bill}, the tip was ${bill * tip} and the total value ${
    bill + bill * tip
  }`
);

// Solution Coding Challenge #4

const bill2 = 275;
const tip2 = bill2 <= 300 && bill2 >= 50 ? bill * 0.15 : bill2 * 0.2;
console.log(
  `The bill was ${bill2}, the tip was ${tip2}, and tht total value ${
    bill2 + tip2
  }`
);
