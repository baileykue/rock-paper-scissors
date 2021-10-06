import { didUserWin } from './funkies.js'

const throwButton = document.getElementById('throw');
const winSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');
const error = document.getElementById('error');

let wins = 0;
let losses = 0;

throwButton.addEventListener('click', ()=>{
  const selected = document.querySelector('input[type=radio]:checked');
  if (!selected){
    return error.classList.remove('hidden');
  }
  error.classList.add('hidden');

  const userThrow = selected.value;
  const computerThrow = throws[Math.ceil(Math.random()*3)];

  
  if (didUserWin(userThrow, computerThrow)) {
    wins++
  } else {
    losses++
  }

  console.log(wins.value);
})