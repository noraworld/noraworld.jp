var bubbles = [];

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvas');
  background(16, 27, 51);
  for (var i = 0; i < 100; i++) {
    bubbles[i] = new Bubble(width/2, height/2);
  }
}

function draw() {
  background(16, 27, 51);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
    bubbles[i].expand();
  }
}

function Bubble(x, y) {
  this.x = x;
  this.y = y;
  this.size = 24;
  this.distance = 40;

  this.display = function() {
    stroke(255);
    noFill();
    ellipse(this.x, this.y, this.size, this.size);
  }

  this.move = function() {
    this.randomMaximumX = (this.x > width  / 2 + this.distance) ? 0 :  1;
    this.randomMinimumX = (this.x < width  / 2 - this.distance) ? 0 : -1;
    this.randomMaximumY = (this.y > height / 2 + this.distance) ? 0 :  1;
    this.randomMinimumY = (this.y < height / 2 - this.distance) ? 0 : -1;
    this.x = this.x + random(this.randomMaximumX, this.randomMinimumX);
    this.y = this.y + random(this.randomMaximumY, this.randomMinimumY);
  }

  this.expand = function() {
    if (this.size < 200) {
      this.size = this.size + random(-1, 3);
    }
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(16, 27, 51);
}
