'use strict';

const wrap = document.querySelector('.wrapper');
const layerOne = document.querySelector('.layer1');
const layerTwo = document.querySelector('.layer2');
const topC = document.querySelector('#topCoordinates');
const centerC = document.querySelector('#centerCoordinates');

const cx = wrap.clientWidth/2;
const cy = wrap.clientHeight/2;

document.addEventListener('mousemove', (evt) => {

  let mouseX = evt.clientX,
      mouseY = evt.clientY;

  topC.innerHTML = "Coordinates from this corner<br> X: " + mouseX + ", Y: " + mouseY;

  //from center
  let fcx = cx - mouseX;
  let fcy = cy - mouseY;

  centerC.innerHTML = "Coordinates from the center<br> X: " + fcx + ", Y: " + fcy;

  layerOne.style.transform = 'translateX(' + fcx/100 + '%) translateY(' + fcy/100 + '%)';
  layerTwo.style.transform = 'translateX(' + fcx/200 + '%) translateY(' + fcy/200 + '%)';

});
