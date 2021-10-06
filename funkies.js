

export function didUserWin(userChoice, actualChoice) {
    if (userChoice === actualChoice) {
        return 0;
    } else if (userChoice.value === 'rock' && actualChoice.value === 'scissors'){
        return 1;
    } else if (userChoice.value === 'paper' && actualChoice.value === 'rock'){
        return 1;
    } else if (userChoice.value === 'scissors' && actualChoice.value === 'paper'){
        return 1;
    } else { return -1; }

}

