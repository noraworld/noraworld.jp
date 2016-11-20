var bubbles = [];

var initializeBubbles = () => {
  background(221, 255, 246);
}

var sketchBubbles = () => {
  background(221, 255, 246);
  if (bubbles.length < 5) {
    bubbles[bubbles.length] = new Bubble(random(windowWidth), random(windowHeight), random(255));
  }
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].appear();
    bubbles[i].expand();
    if (bubbles[i].alpha <= 0) {
      bubbles[i].disappear(i);
    }
  }
}

var resizeBubbles = () => {
  background(221, 255, 246);
}

class Bubble {
  constructor(x, y, color) {
    this.x     = x;
    this.y     = y;
    this.color = color;
    this.alpha = random(0.5, 1);
    this.size  = 100;
  }

  appear() {
    noStroke();
    colorMode(HSB);
    fill(this.color, 20, 255, this.alpha);
    colorMode(RGB);
    ellipse(this.x, this.y, this.size, this.size);
  }

  expand() {
    this.size = this.size + 20;
    this.alpha = this.alpha - 0.01;
  }

  disappear(index) {
    bubbles.splice(index, 1);
  }
}
