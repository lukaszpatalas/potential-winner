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

