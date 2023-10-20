// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
// const x = '23';
// if (x === 23) console.log(23);

// const calcAge = birthYear => 2037 - birthYear;
// console.log(calcAge(1991));

///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [13, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understranding the problem
// - What is the temp amplitude? Difference between highest and lowest temperatures.
// - How to compute the max and min temperatures?
// - What is a sensor error? what to do when one occurs?

// 2) Breaking up into sub-problems
// How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max value (ampliture) and return it.

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
// calcTempAmplitude([3, 7, 4, 1, 8]);
// calcTempAmplitude(temperatures);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should no receive 2 arrays of temperatures

// 1) Understranding the problem
// - Do we need to implement the funcationality twice? No, just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
// calcTempAmplitudeNew([3, 7, 4, 1, 8]);
// calcTempAmplitudeNew(temperatures);
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/

// DEBUGGING

const measureKelvin = function () {
  const measurement = {
    type: 'temperature',
    unit: 'celsius',
    // C) FIX BUG
    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  };
  // B) FIND BUG
  console.log(measurement);
  console.table(measurement);
  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY BUG
console.log(measureKelvin());

// EXAMPLE using debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
// calcTempAmplitudeBug([3, 7, 4, 1, 8]);
// calcTempAmplitudeBug(temperatures);
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

// A) IDENTIFY BUG
console.log(amplitudeBug);
