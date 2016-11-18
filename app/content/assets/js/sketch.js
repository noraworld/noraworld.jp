var isSmartphone = false;
if (navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/)) {
  isSmartphone = true;
}

var setup = () => {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvas');
  background(16, 27, 51);
  initialize();
}

var draw = () => {
  background(16, 27, 51);
  sketch();
}

var windowResized = () => {
  if (!isSmartphone) {
    resizeCanvas(windowWidth, windowHeight);
  }
  background(16, 27, 51);
}
