console.log("Script Running");

const changePosition = (horse, position) => (position <= 5 ? horse.style.setProperty('grid-column', position) : null);

let blue_position = 1;
let pink_position = 1;
let brown_position = 1;


// Query Selectors Here
const blueButton = document.querySelector("#blue-button");
const pinkButton = document.querySelector("#pink-button");
const brownButton = document.querySelector("#brown-button");

const blueHorse = document.querySelector("#blue-horse");
const pinkHorse = document.querySelector("#pink-horse");
const brownHorse = document.querySelector("#brown-horse");

const winnerBox = document.querySelector("#winner");

// OnClick Functions Here
const advanceBlue = (e) => {
  blue_position += 1;
  changePosition(blueHorse, blue_position);
  checkWinner(blue_position, "Blue");
};
const advancePink = (e) => {
  pink_position+= 1;
  changePosition(pinkHorse, pink_position);
  checkWinner(pink_position, "Pink");
};
const advancedBrown = (e) => {
  brown_position += 1;
  changePosition(brownHorse, brown_position);
  checkWinner(brown_position, "Brown");
};


// Check for a winner
const checkWinner = (position, color) => {
  if (position >= 5) {
    winnerBox.textContent = color + "horse wins! 🐎 "
    blueButton.disabled = true;
    pinkButton.disbaled = true;
    brownButton.disbaled = true;
  }
};



// Event Listeners Here
blueButton.addEventListener("click", advanceBlue);
pinkButton.addEventListener("click", advancedPink);
brownButton.addEventListener("click", advancedBrown);
)