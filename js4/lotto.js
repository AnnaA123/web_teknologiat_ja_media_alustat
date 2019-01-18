'use strict';

const drawNumber = (low, high) => {
  let num = Math.floor(Math.random() * high) + low;
  console.log('RANDOM NUM: ' + num);
  return num;
};

const valueIsIn = (a, v) => {
  let wellIsIt = a.includes(v);
  console.log(wellIsIt);
  return wellIsIt;
};

const drawNumbers = (low, high, count) => {
  const numbers = [];
  while(numbers.length < count){
    let newNumber = drawNumber(low, high);
    let isIt = valueIsIn(numbers, newNumber);

    console.log('newNumber: ' + newNumber);
    if (isIt === false){
      numbers.push(newNumber);
    }
    console.log('Array: ' + numbers);
  }
  const numSorter = (a, b) => {
    return a - b;
  };

  numbers.sort(numSorter);
  return numbers;
};


const button = document.getElementById('new');
const list = document.getElementById('numbers');

button.addEventListener('click', (evt) => {
  list.innerHTML = '<p>' + drawNumbers(1,40,7) + '</p>';
});


