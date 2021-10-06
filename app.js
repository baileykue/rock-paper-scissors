import { didUserWin } from './funkies.js'

const throwButton = document.getElementById('throw');
const winSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');
const error = document.getElementById('error');
const result = document.getElementById('result');

let wins = 0;
let losses = 0;

throwButton.addEventListener('click', ()=>{
  const selected = document.querySelector('input[type=radio]:checked');
  if (!selected){
    return error.classList.remove('hidden');
  }
  error.classList.add('hidden');

  const userThrow = selected.value;
  const computerThrow = ['rock', 'paper', 'scissors'] [Math.floor(Math.random()*3)];
  const outcome = didUserWin(userThrow, computerThrow)
  
console.log(computerThrow)

  if (outcome === 1) {
    result.textContent = 'You win!'
    wins++;
    winSpan.textContent = wins;
  } else if (outcome === -1){
    result.textContent = 'You Lose!'
    losses++;
    lossSpan.textContent = losses;
  } else {
result.textContent = "It's a draw!"
  }

})