// VIDEO 186
// Selecting, Creating and Deleting Elements

//* Selecting

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//* Creating and inserting elements
// .insertAdjacentHTML()

const div = document.createElement('div');
div.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics.'
div.innerHTML = //? replace the complete inner HTML
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message); //? insert as first child
// header.append(message); //? insert as last child
// header.append(message.cloneNode(true)); //? clone child

// header.before(message); //? before the element (sibling)
// header.after(message); //? after the element (sibling)

// VIDEO 187
// StyleSheet, Attributes and Classes

//* Styles
div.style.backgroundColor = '#37383d';
console.log(div.style.backgroundColor); // rgb(55, 56, 61)
console.log(div.style.height); //? '', because this only works for inline styles we have set before.

console.log(getComputedStyle(message).color); // rgb(187, 187, 187)
console.log(getComputedStyle(message).height); // 50px

// document.documentElement.style.setProperty('--color-primary', 'orangered');

//* Attributes
const logo = document.querySelector('.nav__logo');

//? Standard attributes
console.log(logo.alt);
console.log(logo.src); //? Absolute path:http://127.0.0.1:5501/img/logo.png
console.log(logo.getAttribute('src')); //? Relative path: img/logo.png
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

//? Non-standard attributes
console.log(logo.designer); // undefined
console.log(logo.getAttribute('designer')); // Jonas Schmedtman
console.log(logo.setAttribute('company', 'Bankist'));

//? Absolute and relative paths of the href
const navBtn = document.querySelector('.nav__link--btn');
console.log(navBtn.href);
console.log(navBtn.getAttribute('href'));

//* Data attributes
console.log(logo.dataset.versionNumber);

//* Classes
logo.classList.add('a');
logo.classList.remove('a');
logo.classList.toggle('a');
logo.classList.contains('a');

//! Don't use, it will overwrite all other classes and allows only 1 class.
// logo.className = 'irsjaad';

// VIDEO 188
// Implementing smooth scrolling

/*
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();

  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.scrollX, window.scrollY);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //* Scrolling

  //? Old Way
  window.scrollTo(
    s1coords.left + window.scrollX,
    s1coords.top + window.scrollY
  );
  //? Old Way
  window.scrollTo({
    left: s1coords.left + window.scrollX,
    top: s1coords.top + window.scrollY,
    behavior: 'smooth',
  });

  //? New Way
  section1.scrollIntoView({
    behavior: 'smooth',
  });
});
*/
