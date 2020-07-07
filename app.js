// import functions and grab DOM elements
//import { countsAsYes } from './functions.js';

const theButton = document.getElementById('quiz-button');
const resultSpan = document.getElementById('results');
// initialize state
// set event listeners to update state and DOM
theButton.addEventListener('click', () => {
    const userName = prompt('What is your name?');
    const really = confirm(`${userName} do you really want to take the quiz?`);

    if (!really) return;

    const answer1 = prompt('Is a Microphone a transducer?');
    // answer1 should return yes
    const answer2 = prompt('Is the word Mic short for Microphone?');
    //answer2 should return yes
    const answer3 = prompt('Are microphones a new technology?');
    //answer 3 should return no

    let score = 0;

    //if the first answer is yes, add one to the score
    if (answer1 === 'yes') {
        score++;
        // score = score +1
    }
    //if the second answer is yes, add two to the score
    if (answer2 === 'yes') {
        score++;
        // score = score +1
    }
    //if the third answer is no, add three to the score
    if (answer3 === 'no') {
        score++;
        // score = score +1
    }
   

    resultSpan.textContent = userName + ' your score is: ' + score;
    //takes score and places it in result span on bottom of page
    

});
  

