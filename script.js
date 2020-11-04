// Global Variables
const randomizerButton = document.getElementById('trip-randomizer');
const headerText = document.getElementById('header-text');

// Function for trip randomizer button click
function getRandomTrip() {
  // Get trip location randomly
  // Should return a place name so that it can get passed into API calls

  // Placeholder return for now, later will return the randomly selected place
  return 'Cancun, Mexico';
}

//Write API call functions here
// API call to skyscanner
function findFlights(tripLocation) {
  // you will pass in the actual
  alert(tripLocation);
}

// Function to show dart throwing animation
function showAnimation() {
  const header = document.querySelector('header');
  const dartDiv = document.getElementById('dart-animation');

  // Remove the hide class to show the dart div and add hide to the header
  dartDiv.classList.remove('hide');
  header.classList.add('hide');

  // Create timeout function to add back the hide class on dart div and remove on header

  // Call function to add content to page based on randomly selected location for user
  writePlaceToPage();
}

function writePlaceToPage() {
  // Call function to get random location for user
  let tripLocation = getRandomTrip();
  // since this should return the location name, you can pass this variable into your api calls here to set the other divs up
  // API call to skyscanner
  findFlights(tripLocation);

  // Set the header to tell the user where they're going and change the text of the button
  // will really use tripLocation variable once you get instead of predefined trip variable
  headerText.textContent = `You're going to ${trip}!`;
  randomizerButton.textContent = 'Pick a New Trip';

  // Make your API calls
  // give the divs where the stuff from API calls will go a class that hides them and also remove that from all of them after the timeout
}

// Click Events
randomizerButton.addEventListener('click', showAnimation);

// On button click:
// animation should pop up showing dart getting thrown at a map--> after the animation then the info about their trip will appear
//Something should happen that gets a random city or country name, unsure if this should call to some database or api or make an array of possible places

// Will need to make calls to APIs to get flight info, hotel or airbnb info, must see places and pictures of where the user is going (maybe two or three)
// Use Skyscanner API for flights based on randomly selected place as the input

// After animation ends and API calls have happened based on whatever the randomly selected location was as the input to get flights, lodging, place pictures, must see/do things
// Need to dynamically write this stuff to the page

// Somewhere on the page will need a button to randomize again or go back to first page / start over

// Might need to add dom loaded function
