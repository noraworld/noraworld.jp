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
  resizeCanvas(windowWidth, windowHeight);
  background(16, 27, 51);
}
