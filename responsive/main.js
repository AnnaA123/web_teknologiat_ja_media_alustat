'use strict';

const wrap = document.querySelector('.wrapper');
const layerOne = document.querySelector('.layer1');
const topC = document.querySelector('#topCoordinates');
const centerC = document.querySelector('#centerCoordinates');

const cx = wrap.clientWidth/2;
const cy = wrap.clientHeight/2;

document.addEventListener('mousemove', (evt) => {

  let mouseX = evt.clientX,
      mouseY = evt.clientY;

  let coor = "Coordinates from this corner<br> X: " + mouseX + ", Y: " + mouseY;
  topC.innerHTML = coor;

  let from_center_x = cx - mouseX;
  let from_center_y = cy - mouseY;

  let coor2 = "Coordinates from the center<br> X: " + from_center_x + ", Y: " + from_center_y;
  centerC.innerHTML = coor2;

  layerOne.style.transform = 'translateX(' + from_center_x/100 + '%) translateY(' + from_center_y/100 + '%)';


});


/*
let point = null;
const coordinates = document.querySelector('#topCoordinates');
window.addEventListener("mousemove", event => {
  if (!point) {
    setTimeout(() => {
      coordinates.innerHTML =
          `Mouse at ${point.pageX}, ${point.pageY} from corner`;
      point = null;
    });
  }
  point = event;
});

const wrap = document.querySelector('.wrapper');
const centerX = wrap.clientWidth/2;
const centerY = wrap.clientHeight/2;
*/