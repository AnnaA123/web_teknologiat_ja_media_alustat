'use strict';
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const calculate = document.getElementById('calculate');
const answer = document.getElementById('answer');

calculate.addEventListener('click', (evt) => {
  let m = height.value;
  let kg = weight.value;

  let bmi = (kg / Math.pow(m, 2));

  if (isNaN(bmi) === true){
    bmi = 'undefined';
  }

  console.log('BMI is ' + bmi);
  answer.innerHTML = '<p> Your BMI value is ' + bmi + '.</p>';
});
