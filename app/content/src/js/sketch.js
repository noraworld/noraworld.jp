// This code is spaghetti code :-(
// Please teach me the best practice...

// switch sketch between mobiles and PCs
var isMobile = false;
if (navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/)) {
  isMobile = true;
}

// should push sketch name if added new sketch file
var sketch = [
  ['bubble', '105'],
  [  'ring', '255']
];
var rand = Math.floor(Math.random() * sketch.length);

var setup = () => {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvas');
  if (!isMobile) {
    switch (sketch[rand][0]) {
      case 'bubble' : initializeBubbles();  break;
      case 'ring'   : initializeRings();    break;
      default       : initializeRings();
    }
    changeArrowColor(sketch[rand][1]);
  }
  else {
    initializeBubbles();
    changeArrowColor(sketch[0][1]);
  }
}

var draw = () => {
  if (!isMobile) {
    switch (sketch[rand][0]) {
      case 'bubble' : sketchBubbles();  break;
      case 'ring'   : sketchRings();    break;
      default       : sketchRings();
    }
    changeArrowColor(sketch[rand][1]);
  }
  else {
    sketchBubbles();
    changeArrowColor(sketch[0][1]);
  }
}

var windowResized = () => {
  if (!isMobile) {
    resizeCanvas(windowWidth, windowHeight);
    switch (sketch[rand][0]) {
      case 'bubble' : resizeBubbles();  break;
      case 'ring'   : resizeRings();    break;
      default       : resizeRings();
    }
    changeArrowColor(sketch[rand][1]);
  }
  else {
    resizeBubbles();
    changeArrowColor(sketch[0][1]);
  }
}

var changeArrowColor = (color) => {
  document.querySelector('.scroll-down').style.color = 'rgba(' + color + ', ' + color + ', ' + color + ', .8)';
}
