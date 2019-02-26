'use strict';
let dog = document.querySelector('.dog');

let dogTimer = setTimeout(() => {
  console.log('The dog is walking');
  dog.classList.add('dogwalk');
},50);


let duck1 = document.querySelector('#duck1');
let duck2 = document.querySelector('#duck2');
let duck3 = document.querySelector('#duck3');

let duckFall = (duckNum) => {
  console.log('got one!');
  duckNum.classList.add('duckpause');
  duckNum.classList.add('down');
  //duckNum.classList.add('duckfall');
};

duck1.addEventListener('click', (evt) => duckFall(duck1));
duck2.addEventListener('click', (evt) => duckFall(duck2));
duck3.addEventListener('click', (evt) => duckFall(duck3));

/*
let duckTimer = setTimeout(() => {
  console.log('The ducks are flying');
  duck.classList.add('duckfly');
},50);

*/