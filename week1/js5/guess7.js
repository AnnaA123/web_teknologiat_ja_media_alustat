'use strict';


//ex 4 =============================================================================
const drawNumber = (low, high) => {
  let num = Math.floor(Math.random() * high) + low;
  return num;
};

const valueIsIn = (a, v) => {
  let wellIsIt = a.includes(v);
  return wellIsIt;
};

const numSorter = (a, b) => {
  return a - b;
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
  }
  console.log('Array: ' + numbers);
  numbers.sort(numSorter);
  return numbers;
};

//ex 5 =============================================================================
const valuesInRange = (a, low, high) => {
  let isTrue = 0;
  for (let i = 0; i <= a.length; i++) {
    if (a[i] >= low && a[i] <= high){
      isTrue++;
    }
  }

  if (isTrue === a.length) {
    return true;
  } else {
    return false;
  }
};

const valuesUnique = (a) => {
  let isUnique = 0;
  for (let i = 0; i <= a.length; i++) {
    let fakeArray = a.slice();
    fakeArray.splice(i, 1);
    let doubles = fakeArray.includes(+a[i]);
    if (doubles === false) {
      isUnique++;
    }
  }
  if ((isUnique -1) === a.length) {
    return true;
  } else {
    return false;
  }
};

const numbersLegal = (a, low, high) => {
  let vir = valuesInRange(a, low, high);
  let vu = valuesUnique(a);

  if (vir === true && vu === true){
    return true;
  } else {
    return false;
  }
};


// Using the functions =============================================================================

const list = document.getElementById('numbers');
const guess = document.getElementById('submitGuess');


guess.addEventListener('click', (evt) => {
  let randomNum = drawNumbers(1,40,7);
  console.log('RANDOMLY GENERATED NUMBERS: ' + randomNum);

  let no1 = document.getElementById('guess1');
  let no2 = document.getElementById('guess2');
  let no3 = document.getElementById('guess3');
  let no4 = document.getElementById('guess4');
  let no5 = document.getElementById('guess5');
  let no6 = document.getElementById('guess6');
  let no7 = document.getElementById('guess7');

  let sevenNumbers = [no1.value, no2.value, no3.value, no4.value, no5.value, no6.value, no7.value];

  const legal = numbersLegal(sevenNumbers, 1, 40);

  if (legal === true) {
    sevenNumbers.sort(numSorter);
    if (sevenNumbers === randomNum) {
      list.innerHTML = '<p> Congratulations! You win! </p>';
      console.log ('win');
    } else {
      list.innerHTML = '<p> Oh no! You lose! </p>';
      console.log('lose')
    }
  }
});

