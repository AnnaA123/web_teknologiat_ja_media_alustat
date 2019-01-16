'use strict';
const a = document.getElementById('num1');
const b = document.getElementById('num2');
let r = 1;
let q = 1;

const calculate = document.getElementById('calculate');
const answer = document.getElementById('answer');

calculate.addEventListener('click', (evt) => {
  while (r > 0) {
    q = (a.value - (a.value % b.value)) / b.value;
    r = a.value % b.value;

    console.log(' ' + a.value + ' = ' + q + ' * ' + b.value + ' + ' + r + ' ');
    // a.value = q * b.value + r
    if (r === 0) {
      answer.innerHTML = '<p>The gcd of '+ b.value +'/'+ a.value +' is '+ b.value +'.</p>';
    } else {
      a.value = b.value;
      b.value = r;
    }

  }
});
