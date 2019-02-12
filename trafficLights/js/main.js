'use strict';

const redLight = document.querySelector("#redLight");
const yellowLight = document.querySelector("#yellowLight");
const greenLight = document.querySelector("#greenLight");

let redClicks = 0, yellowClicks = 0, greenClicks = 0;

const youClicked = document.querySelector("#youClicked");
const theColour = document.querySelector("#theColour");
const redCount = document.querySelector("#redCount");
const yellowCount = document.querySelector("#yellowCount");
const greenCount = document.querySelector("#greenCount");


redLight.addEventListener('click', (evt) => {
  youClicked.innerHTML = 'You clicked the red lamp';
  theColour.innerHTML = 'The colour is red';
  redClicks++;
  redCount.innerHTML = 'Red: ' + redClicks;
});

yellowLight.addEventListener('click', (evt) => {
  youClicked.innerHTML = 'You clicked the yellow lamp';
  theColour.innerHTML = 'The colour is yellow';
  yellowClicks++;
  yellowCount.innerHTML = 'Yellow: ' + yellowClicks;
});

greenLight.addEventListener('click', (evt) => {
  youClicked.innerHTML = 'You clicked the green lamp';
  theColour.innerHTML = 'The colour is green';
  greenClicks++;
  greenCount.innerHTML = 'Green: ' + greenClicks;
});
