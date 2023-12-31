'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Irsjaad Mahabier',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Yasmin Prins',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Daanisj Raoul Mahabier',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Ayesha Djwalapersad',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

const displayMovements = function (movements, sort = false) {
  //* Emptying the existing HTML of movements
  containerMovements.innerHTML = '';
  //? .textContent = 0 (pig game)

  // VIDEO 163
  // Sorting Arrays

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    //* creating variable for template literal
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    //* creating html with the added data
    const html = `  
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">€ ${mov}</div>
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
  displayMovements(acc.movements);
  //* Display balance
  calcDisplayBalance(acc);
  //* Display summary
  calcDisplaySummary(acc);
};

// VIDEO 153
// Reduce Method, Display total balance

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((arr, mov) => arr + mov, 0);

  labelBalance.textContent = `${acc.balance} EUR`;
};
//? calcDisplayBalance(account1.movements);

// VIDEO 155;
// The Magic of Chaining Methods

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `€${incomes} `;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `€${Math.abs(out)} `;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `€${interest} `;
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

btnLogin.addEventListener('click', function (e) {
  //* Prevent form from submitting
  e.preventDefault();
  //? console.log('LOGIN');

  currentAccount = accounts.find(
    (acc) =>
      acc.username.toLowerCase() === inputLoginUsername.value.toLowerCase()
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //* Display UI and message
    labelErrorMessage.style.opacity = 0;
    labelErrorMessage.style.visibility = 'hidden';
    labelWelcome.textContent = `Welcome back ${currentAccount.owner
      .split(' ')
      .at(0)}`;
    containerApp.style.opacity = 1;

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
  const amount = Number(inputTransferAmount.value);
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
    // Update UI
    updateUI(currentAccount);
  }
});

// VIDEO 160
// The findIndex Method

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const closeUser = inputCloseUsername.value.toLowerCase();
  const closePin = Number(inputClosePin.value);

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
  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    // Add movement
    currentAccount.movements.push(amount);

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
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// VIDEO 164
// More Ways of Creating and Filling Arrays

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    (el) => Number(el.textContent.replace('€', ''))
  );

  console.log(movementsUI);

  // const movementsUI2 = [...document.querySelectorAll('.movements__value')];
  // console.log(movementsUI2);
});

// VIDEO 166
// Array Methods Practice

// 1.
//* First make multiple arrays into 1 new array
//* Second filter on positive numbers
//* Third reduce all elements to 1 element
const bankDepositSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);

// 2.
//* First make multiple arrays into 1 new array
//* Second filter on 1000 and up
//* Third add .length
const numDeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov >= 1000).length;
console.log(numDeposits1000);

//* First make multiple arrays into 1 new array
//* Second reduce, only count if the element is 1000 or more
const numDeposits10002 = accounts
  .flatMap((acc) => acc.movements)
  // .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log(numDeposits10002);

// Prefixed ++ operator
let a = 10;
// console.log(a++);
console.log(++a);
console.log(a);

// 3.
//* First make multiple arrays into 1 new array
//* Second reduce, make the parameter dynamic
//* create an object on the accumulator
const { deposits, withdrawals } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);

// 4.
// this is a nice title -> This Is a Nice Title

//* First create function
//* Second create variable to capitalize
//* Third create variable with exceptions
//* Fourth all to lowercase
//* Fifth split the string in to an array
//* Sixth map into new array in which each word is either capitalize when not in exception
//* Seventh join back together

const convertTitleCase = function (title) {
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map((word) => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
