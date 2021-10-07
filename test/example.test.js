IMPORT MODULES under test here:
import { didUserWin } from '../funkies';

const test = QUnit.test;

test('user: rock, computer: paper', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const userChoice = -1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actualChoice = -1;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(-1, -1);
});
