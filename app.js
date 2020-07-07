// import functions and grab DOM elements
import {isCorrect} from './functions.js';

const theButton = document.getElementById('quiz-button');
const result = document.getElementById('results');
// initialize state
theButton.addEventListener('click', () => {
    alert('welcome to my quiz!');
    const confirmation = confirm('Do you really want to take my quiz?')
    console.log(confirmation);

    const answer = prompt()
}

// set event listeners to update state and DOM