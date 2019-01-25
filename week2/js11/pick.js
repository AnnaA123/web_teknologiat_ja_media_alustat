'use strict';

const pickn = (a, n) => {
  const checkDoubles = [];
  const choices = [];
  for (let i = 0; i < n; i++) {
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

const example = [6,31,24,58,1,8,19,39,27];
const button = document.getElementById('pick');

button.addEventListener('click', (evt) => pickn(example, 5));
