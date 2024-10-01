const firstname = 'adfinem';
const lastname = 'rising';
const fullname = firstname + ' ' + lastname;

// console.log(`good day, ${fullname}!`);

// selecting an html element
const greeting = document.querySelector('#greeting');
greeting.textContent = `Hello, ${fullname}!`;
