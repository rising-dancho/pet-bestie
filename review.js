const firstname = 'adfinem';
const lastname = 'rising';
const fullname = firstname + ' ' + lastname;

// console.log(`good day, ${fullname}!`);

// selecting an html element
const greeting = document.querySelector('#greeting');
const berry_field = document.querySelector('#berry-field');
const berry_btn = document.querySelector('#berry-btn');
const msg = document.querySelector('#msg');

// marquee
greeting.textContent = `Hello, ${fullname}!`;

berry_btn.addEventListener('click', function () {
  greeting.textContent = 'Bitlog';
});
