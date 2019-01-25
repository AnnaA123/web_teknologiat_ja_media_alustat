'use strict';

const pickn = (a, n) => {
  const checkDoubles = [];
  const choices = [];
  for (let i = 0; i < n; i++) {
    console.log('for the ' + i + 'th time');
    const pick = Math.floor(Math.random() * a.length);
    if (checkDoubles.length === a.length) {
      break;
    }else if (checkDoubles.includes(a[pick]) === true) {
      i--;
    }else {
      choices[i] = a[pick];
      checkDoubles.push(a[pick]);
    }
  }
  console.log(choices);
};

const intRange = (low, high, step) => {
  const integers = [];
  let newValue = low;
  while (newValue < high) {
    newValue = newValue + step;
    integers.push(newValue);
  }
  console.log(integers);
  return integers;
};

const lotto = () => {
  let y = Math.floor(Math.random() * 5) + 1;
  pickn(intRange(1,40,y), 7);
};

const pick7 = document.getElementById('pickNumbers');
pick7.addEventListener('click', (evt) => lotto());
