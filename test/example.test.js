
import { didUserWin } from '../funkies';

const test = QUnit.test;

test('user: rock, computer: paper', (expect) => {
  
    const expected = -1;
    
    const actual = didUserWin('rock', 'scissors');

    expect.equal(actual, expected);
});


