// Global Variables
const randomizerButton = document.getElementById('trip-randomizer');
// Placeholder variable for now, will obtain this from user input
let trip = 'Cancun, Mexico';

// Function to show dart throwing animation
// function showAnimation() {

// }


// Function for trip randomizer button click
function getRandomTrip() {
  const headerText = document.getElementById('header-text');

  // Get trip location randomly

  // Set the header to tell the user where they're going and change the text of the button
  headerText.textContent = `You're going to ${trip}!`;
  randomizerButton.textContent = 'Pick a New Trip';
}

// On button click you could instead show animation, set a timeout function after animation plays to call get random trip -- animation showing dart first then random trip stuff comes in?
// Click Events
randomizerButton.addEventListener('click', getRandomTrip);

// On button click:
// animation should pop up showing dart getting thrown at a map--> after the animation then the info about their trip will appear
//Something should happen that gets a random city or country name, unsure if this should call to some database or api or make an array of possible places

// Will need to make calls to APIs to get flight info, hotel or airbnb info, must see places and pictures of where the user is going (maybe two or three)
// Use Skyscanner API for flights based on randomly selected place as the input

// After animation ends and API calls have happened based on whatever the randomly selected location was as the input to get flights, lodging, place pictures, must see/do things
// Need to dynamically write this stuff to the page

// Somewhere on the page will need a button to randomize again or go back to first page / start over
