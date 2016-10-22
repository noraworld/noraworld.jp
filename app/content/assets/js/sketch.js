function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvas');
  noStroke();
  background(0);
}

function draw() {
  fill(random(255), random(255), random(255));
  ellipse(mouseX, mouseY, 40, 40);
}
