

export function didUserWin(userChoice, actualChoice) {
    if (userChoice === actualChoice) {
        return 0;
    } else if (userChoice === 'rock' && actualChoice === 'scissors'){
        return 1;
    } else if (userChoice === 'paper' && actualChoice === 'rock'){
        return 1;
    } else if (userChoice === 'scissors' && actualChoicen === 'paper'){
        return 1;
    } else { return -1; }

}

