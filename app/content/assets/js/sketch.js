var bubbles = [];

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvas');
  background(16, 27, 51);
  initialize();
}

function draw() {
  background(16, 27, 51);
  sketch();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(16, 27, 51);
}
