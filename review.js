// selecting an html element
const greeting = document.querySelector('#greeting');
const marquee_field = document.querySelector('#marquee-field');
const marquee_btn = document.querySelector('#marquee-btn');
const msg = document.querySelector('#msg');

// GET current date and time today:
const now = new Date(); // Get the current date and time
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true, // Change to true for 12-hour format
};
const formattedDateTime = now.toLocaleString('en-US', options);

// default state of marquee:
greeting.textContent = formattedDateTime;

// Variable to store the last random number
let lastRandomNumber = null;

marquee_btn.addEventListener('click', function () {
  let randomNumber;

  do {
    randomNumber = Math.floor(Math.random() * 3) + 1;
  } while (randomNumber === lastRandomNumber); // Ensure the new number is not the same as the last one

  lastRandomNumber = randomNumber; // Update the last random number

  const user_input = marquee_field.value;

  switch (randomNumber) {
    case 1:
      greeting.textContent =
        'SPONSOR: "This portion is brought to you by Jabolin Spicy.. Mas mesherep kapag may red flag 🥵🥵🥵"';
      break;
    case 2:
      if (user_input === '') {
        return (greeting.textContent =
          'ERROR: Huh?! Did you enter [your name]??! 🤔');
      }
      greeting.textContent = `Hello, ${user_input}! Welcome to Find Your Bestie! Yeasss!! 💅💅`;
      break;
    case 3:
      // regenerate an updated date and time
      const now = new Date(); // Get the current date and time
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true, // Change to true for 12-hour format
      };
      const formattedDateTime = now.toLocaleString('en-US', options);
      // default state of marquee:
      greeting.textContent = formattedDateTime;
      break;
    default:
      greeting.textContent =
        'Error: Whoops! didnt see that coming.. some unknown error occured.';
  }
});

// auto update year:
const current_year = new Date().getFullYear();
const footer_text = `&copy; ${current_year} Faux Adoption Center. All rights reserved.`;

document.getElementById('copyright').innerHTML = footer_text;
