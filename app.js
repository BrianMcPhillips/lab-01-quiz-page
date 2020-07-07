// import functions and grab DOM elements
import {isCorrect} from './functions.js';

const theButton = document.getElementById('quiz-button');
const result = document.getElementById('results');
// initialize state
theButton.onclick = () =>
    let numberCorrect = 0;
    alert('welcome to my microphone quiz!');
    const userName = prompt('What is your name? ');
    const quizConfirm = confirm(`Do you really want to take my quiz ${userName}?`);
    console.log(quizConfirm);

    if (quizConfirm) {
        const userAnswer1 = prompt
    }
}

// set event listeners to update state and DOM