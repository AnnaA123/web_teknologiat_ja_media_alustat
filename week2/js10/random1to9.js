'use strict';

const rndIntFromTo = (from, to) => {
  let x = Math.floor(Math.random() * to) + from;
  //console.log('The number is ' + x);
  return x;
};

const rand = document.getElementById('randomNum');

//rand.addEventListener('click', (evt) => rndIntFromTo(1,9));

const average = [0,0,0,0,0,0,0,0,0,0];

for (let i = 0; i < 10000; i++) {
  let num = rndIntFromTo(1,9);
  average[num] += 1;
}

rand.addEventListener('click', (evt) => console.log('the number: ' + rndIntFromTo(1,9) + '\nthe average: ' + average));