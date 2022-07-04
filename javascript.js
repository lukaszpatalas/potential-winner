"use strict"

const testButton = document.querySelector('.test-button');
testButton.addEventListener('click', updateText);

function updateText() {
    if (testButton.textContent === "Click me") {
        testButton.textContent = "Unclick me";
    } else {
        testButton.textContent = "Click me";
    }
}


const game = document.querySelector('select');
const quote = document.querySelector('p');

game.addEventListener('change', setGame);

function setGame() {
  const choice = game.value;

  if (choice === 'fallout') {
    quote.textContent = 'War, war never changes...';
  } else if (choice === 'witcher') {
    quote.textContent = 'I will carry on killing monsters in the ruins of this world until some monster kills me.';
  } else if (choice === 'cyberpunk') {
    quote.textContent = 'The brightest light casts the darkest shadow.';
  } else if (choice === 'wow') {
    quote.textContent = 'You are not prepared!';
  } else {
    quote.textContent = '';
  }
}

