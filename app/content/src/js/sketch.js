// switch sketch between mobiles and PCs
var isMobile = false;
if (navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/)) {
  isMobile = true;
}

// should push sketch name if added new sketch file
var sketch = [
  'bubble',
  'ring'
];
var rand = Math.floor(Math.random() * sketch.length);

var setup = () => {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvas');
  if (!isMobile) {
    switch (sketch[rand]) {
      case 'bubble' : initializeBubbles();  break;
      case 'ring'   : initializeRings();    break;
      default       : initializeRings();
    }
  }
  else {
    initializeBubbles();
  }
}

var draw = () => {
  if (!isMobile) {
    switch (sketch[rand]) {
      case 'bubble' : sketchBubbles();  break;
      case 'ring'   : sketchRings();    break;
      default       : sketchRings();
    }
  }
  else {
    sketchBubbles();
  }
}

var windowResized = () => {
  if (!isMobile) {
    resizeCanvas(windowWidth, windowHeight);
    switch (sketch[rand]) {
      case 'bubble' : resizeBubbles();  break;
      case 'ring'   : resizeRings();    break;
      default       : resizeRings();
    }
  }
  else {
    resizeBubbles();
  }
}
