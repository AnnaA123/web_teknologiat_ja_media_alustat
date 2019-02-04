'use strict';
const capOn = document.querySelector('#on');
const capOff = document.querySelector('#off');
const markerDraw = document.querySelector('#draw');

class Marker {
  constructor (cap, ink) {
    this._cap = cap;
    this._ink = ink;
  }

  putCapOn () {
    console.log('The cap is on.');
    return this._cap = true;
  }

  takeCapOff () {
    console.log('The cap is off.');
    return this._cap = false;
  }

  draw () {
    if (this._cap === true) {
      console.log("You can't draw with the cap on!");
    } else if (this._ink > 0){
      console.log("You drew a nice picture.");
      return this._ink = this._ink - 1;
    } else {
      console.log('You ran out of ink.')
    }
  }
}

const blueMarker = new Marker(true, 20);

capOn.addEventListener('click', (evt) => blueMarker.putCapOn());
capOff.addEventListener('click', (evt) => blueMarker.takeCapOff());
markerDraw.addEventListener('click', (evt) => blueMarker.draw());
