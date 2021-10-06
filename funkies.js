
    const throws = ['rock', 'paper', 'scissors']

export function didUserWin(userChoice, actualChoice) {
    if (userChoice === actualChoice) {
        return result.textContent = 'Its a draw';
    } else if (userChoice.throws[0] && actualChoice.throws[2]){
        return result.textContent = 'You win!';
    } else if (userChoice.throws[1] && actualChoice.throws[0]){
        return result.textContent = 'You win!';
    } else if (userChoice.throws[2] && actualChoice.throws[1]){
        return result.textContent = 'You win!';
    } else { return result.textContent = 'You lose!'}

}

