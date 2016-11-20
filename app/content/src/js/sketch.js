var isSmartphone = false;
if (navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/)) {
  isSmartphone = true;
}

var setup = () => {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvas');
  if (!isSmartphone) {
    initializeRings();
  }
  else {
    initializeBubbles();
  }
}

var draw = () => {
  if (!isSmartphone) {
    sketchRings();
  }
  else {
    sketchBubbles();
  }
}

var windowResized = () => {
  if (!isSmartphone) {
    resizeCanvas(windowWidth, windowHeight);
    resizeRings();
  }
  else {
    resizeBubbles();
  }
}
