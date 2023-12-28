'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Irsjaad Mahabier',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2023-12-23T14:11:59.604Z',
    '2023-12-25T17:01:17.194Z',
    '2023-12-26T23:36:17.929Z',
    '2023-12-28T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Yasmin Prins',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2023-12-23T14:11:59.604Z',
    '2023-12-24T17:01:17.194Z',
    '2023-12-25T23:36:17.929Z',
    '2023-12-27T10:51:36.790Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');
const labelErrorMessage = document.querySelector('.login__error-message');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// FUNCTIONS

// VIDEO 176
//* SORTING FIX

const sortMovements = function (movs, dates) {
  const arrCombined = [],
    sortedMovs = [],
    sortedDates = [];

  movs.forEach((el, i) => arrCombined.push([movs[i], dates[i]]));
  arrCombined.sort((a, b) => a[0] - b[0]);
  arrCombined.forEach((el) => {
    sortedMovs.push(el[0]);
    sortedDates.push(el[1]);
  });

  return [sortedMovs, sortedDates];
};

// VIDEO 177

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  // console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed < 7) return `${daysPassed} days ago`;
  else {
    /*
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
    */
    // VIDEO 178
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

// VIDEO 179

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

/////////////////////////////////////////////////

const displayMovements = function (acc, sort = false) {
  //* Emptying the existing HTML of movements
  containerMovements.innerHTML = '';
  //? .textContent = 0 (pig game)

  // VIDEO 163
  // Sorting Arrays

  const [movs, dates] = sort
    ? sortMovements(acc.movements, acc.movementsDates)
    : [acc.movements, acc.movementsDates];

  movs.forEach(function (mov, i) {
    //* creating variable for template literal
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(dates[i]);

    const displayDate = formatMovementDate(date, acc.locale);

    // VIDEO 179
    // const formattedMov = new Intl.NumberFormat(acc.locale, {
    //   style: 'currency',
    //   currency: acc.currency,
    // }).format(mov);
    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    //* creating html with the added data
    const html = `  
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
      <div class="movements__value">${formattedMov}</div>
    </div>
    `;

    //* adding the html to the DOM
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
//? displayMovements(account1.movements);

// console.log(containerMovements.innerHTML);
// console.log(containerMovements.textContent);

// VIDEO 151
// Compute usernames

const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map((name) => name.at(0))
      .join('');
  });
};
createUserNames(accounts);
// console.log(accounts);

const updateUI = function (acc) {
  //* Display movements
  displayMovements(acc);
  //* Display balance
  calcDisplayBalance(acc);
  //* Display summary
  calcDisplaySummary(acc);
};

// VIDEO 153
// Reduce Method, Display total balance

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((arr, mov) => arr + mov, 0);

  // VIDEO 179
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};
//? calcDisplayBalance(account1.movements);

// VIDEO 155;
// The Magic of Chaining Methods

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};
//? calcDisplaySummary(account1.movements);

// VIDEO 157;
// The Find Method

// console.log(accounts);

const account = accounts.find((acc) => acc.owner === 'Yasmin Prins');
// console.log(account);

// for of loop
let accountFor;
for (const account of accounts) {
  if (account.owner === 'Yasmin Prins') {
    accountFor = account;
    break;
  }
}
// console.log(accountFor);

// VIDEO 158;
// Implementing Login

//* Event handlers
let currentAccount;

// FAKE ALWAYS LOGIN
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 1;

btnLogin.addEventListener('click', function (e) {
  //* Prevent form from submitting
  e.preventDefault();
  //? console.log('LOGIN');

  currentAccount = accounts.find(
    (acc) =>
      acc.username.toLowerCase() === inputLoginUsername.value.toLowerCase()
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    //* Display UI and message
    labelErrorMessage.style.opacity = 0;
    labelErrorMessage.style.visibility = 'hidden';
    labelWelcome.textContent = `Welcome back ${currentAccount.owner
      .split(' ')
      .at(0)}`;
    containerApp.style.opacity = 1;

    // VIDEO 176
    // Adding dates to Bankist App
    /*
    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, 0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();
    const hour = `${now.getHours()}`.padStart(2, 0);
    const minutes = `${now.getMinutes()}`.padStart(2, 0);
    labelDate.textContent = `${day}-${month}-${year}, ${hour}:${minutes}`;
*/

    // VIDEO 178
    // Internationalizing Dates

    const now = new Date();
    const options = {
      day: 'numeric',
      // weekday: 'long', // short or narrow
      month: 'numeric', // long or 2-digit
      year: 'numeric', // 2-digit
      hour: 'numeric',
      minute: 'numeric',
    };

    // const locale = navigator.language;
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    //* Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);

    //? console.log('LOGGED IN');
  } else {
    containerApp.style.opacity = 0;
    labelErrorMessage.style.opacity = 1;
    labelErrorMessage.style.visibility = 'visible';
  }
});

// VIDEO 159;
// Implementing transfers

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value.toLowerCase()
  );
  // console.log(amount, receiverAcc);
  //* clear inputs
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // console.log('transfer valid');
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());
    // Update UI
    updateUI(currentAccount);
  }
});

// VIDEO 160
// The findIndex Method

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const closeUser = inputCloseUsername.value.toLowerCase();
  const closePin = +inputClosePin.value;

  inputCloseUsername.value = inputClosePin.value = '';

  if (
    closeUser === currentAccount.username &&
    closePin === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);
    // Delete account
    accounts.splice(index, 1);
    // Hide UI
    containerApp.style.opacity = 0;
  }
});

// VIDEO 161
// Some and Every

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    // Add movement
    currentAccount.movements.push(amount);
    // Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());
    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

// VIDEO 162
// flat and flatMap

/*
//* take out only the movement arrays
const accountMovements = accounts.map((acc) => acc.movements);
console.log(accountMovements);

//* place all elements of the arrays in a single array
const allMovements = accountMovements.flat();
console.log(allMovements);

//* reduce all elements to a single element
const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
*/
// flat

const overallBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// flatMap, combine map() and flat() but only goes 1 level deep.
const overallBalance2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// VIDEO 163
// Sorting Arrays

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

// VIDEO 172
// Remainder operator

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    // at row 0, 2, 4, 6
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    // at row 0, 3, 6, 9
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});

// VIDEO 175
// Creating Dates

console.log(new Date(account1.movementsDates[0]));

// VIDEO 176
// Adding dates to "Bankist" app
//* See functions with date.

// VIDEO 177
// Operations with Dates
//* See functions with date.

// VIDEO 178
// Internationalizing Dates (Intl)

/*
// Experimenting with Intl date API
const now = new Date();
const options = {
  day: 'numeric',
  weekday: 'long', // short or narrow
  month: 'long', // numeric or 2-digit
  year: 'numeric', // 2-digit
  hour: 'numeric',
  minute: 'numeric',
};

const locale = navigator.language;
console.log(locale);

labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);
*/
