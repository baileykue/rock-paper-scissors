import { didUserWin } from './funkies.js';

const throwButton = document.getElementById('throw');
const winSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');
const drawSpan = document.getElementById('draws');
const error = document.getElementById('error');
const result = document.getElementById('result');
const restartButton = document.getElementById('restart');
const restartSpan = document.getElementById('restart-count');
const restartText = document.getElementById('restart-text');

let wins = 0;
let losses = 0;
let draws = 0;
let restarts = 0;

throwButton.addEventListener('click', ()=>{
    const selected = document.querySelector('input[type=radio]:checked');
    if (!selected){
        return error.classList.remove('hidden');
    }
    error.classList.add('hidden');
    restartButton.classList.remove('hidden');

    const userThrow = selected.value;
    const computerThrow = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
    const outcome = didUserWin(userThrow, computerThrow);
  
    if (outcome === 1) {
        result.textContent = 'You win!';
        wins++;
        winSpan.textContent = wins;
    } else if (outcome === -1){
        result.textContent = 'You Lose!';
        losses++;
        lossSpan.textContent = losses;
    } else {
        result.textContent = "It's a draw!";
        draws++;
        drawSpan.textContent = draws;
    }

});

restartButton.addEventListener('click', ()=>{
    wins = 0;
    winSpan.textContent = wins;
    losses = 0;
    lossSpan.textContent = losses;
    draws = 0;
    drawSpan.textContent = draws;
    restartButton.classList.add('hidden');
    restartText.classList.remove('hidden');
    restarts++;
    restartSpan.textContent = restarts;
});