// IMPORT MODULES under test here:
// import example from '../app.js';

const test = QUnit.test;

test('it should return true if passed anything that starts with a Y', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const word1 = 'yes';
    const word2 = 'YEAH';
    const word3 = 'YEPPERS';
    const word4 = 'YESSS';
    const expected = true;

    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = countsAsYes(word1);
    const actual2 = countsAsYes(word2);
    const actual3 = countsAsYes(word3);
    const actual4 = countsAsYes(word4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, expected);
    expect.equal(actual2, expected);
    expect.equal(actual3, expected);
    expect.equal(actual4, expected);
});
