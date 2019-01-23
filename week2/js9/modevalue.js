'use strict';

const exArray = [13,7,28,40,7,7,34,18,28,19];

const returnMode = (a) => {
  console.log(a);
  let most = 0;
  let current = 0;
  let biggest = 0;
  for (let i = 0; i < a.length; i++){
    for (let j = 0; j < a.length; j++) {
      if (a[i] === a[j]){
        current++;
      }
    }
    if (current > biggest) {
      biggest = current;
      most = a[i];
      current = 0;
    } else {
      current = 0;
    }
  }
  console.log('The mode of this array is ' + most);
};

const findMode = document.getElementById('findMode');

findMode.addEventListener('click', (evt) => returnMode(exArray));
