//Responsive header function
function myFunction() {
    var x = document.getElementById("myTopNav");
    if (x.className === "topNav") {
      x.className += " responsive";
    } else {
      x.className = "topNav";
    }
  }
//Seconds counter
  const timeContainer = document.getElementById("time-container");
        const START_DAY = "08-17-2022";
        const START_DAY_DATE = new Date(START_DAY);
        const intlNumberFormatter = new Intl.NumberFormat("en-US");
    
        setInterval(() => {
          const now = new Date();
          const difference = Math.floor(
            (now.getTime() - START_DAY_DATE.getTime()) / 1000
          );
    
          timeContainer.innerText = intlNumberFormatter.format(difference);
        }, 1000);

    //Number Guesser
    let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  let randomNum = Math.floor(Math.random() * 10);
  return randomNum;
};

const compareGuesses = (human, comp, secretNum) => {
   if (Math.abs(secretNum - human) <= Math.abs(secretNum - comp)) {
    return true;
  } else return false;
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else computerScore++;
};

const advanceRound = () => {
  currentRoundNumber++;
};

// Generate a random hexadecimal string
const generateBackgroundColor = () => {
  const hexadecimals = '0123456789ABCDEF';
  let randomHexString = '#';
  for (let i = 0; i < 6; i++) {
    const randomHexChar = hexadecimals[Math.floor(Math.random() * hexadecimals.length)];
    randomHexString += randomHexChar;
  };
  return randomHexString;
};

// Grab the element with ID #colorBtn from the DOM
const colorBtn = document.querySelector('#colorBtn');

// Change the background color and display the color on the page
const changeColor = () => {
    const randomBackgroundColor = generateBackgroundColor();
  document.body.style.backgroundColor = randomBackgroundColor;
  document.querySelector('#randomColorText').innerHTML = randomBackgroundColor;
}

// Write your event handler here
// Fix: Remove the # symbol when using getElementById
let colorChangeButton = document.getElementById('colorBtn');
colorChangeButton.addEventListener('click', changeColor);

