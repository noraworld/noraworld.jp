var bubbles = [];

var initialize = () => {
  for (var i = 0; i < 100; i++) {
    bubbles[i] = new Bubble(width/2, height/2);
  }
}

var sketch = () => {
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
    bubbles[i].expand();
  }
}

class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 24;
    this.distance = 40;
  }

  display() {
    colorMode(HSB);
    stroke(random(255), 22, 255);
    colorMode(RGB);
    noFill();
    ellipse(this.x, this.y, this.size, this.size);
  }

  move() {
    this.randomMaximumX = (this.x > mouseX + this.distance) ? 0 :  1;
    this.randomMinimumX = (this.x < mouseX - this.distance) ? 0 : -1;
    this.randomMaximumY = (this.y > mouseY + this.distance) ? 0 :  1;
    this.randomMinimumY = (this.y < mouseY - this.distance) ? 0 : -1;
    this.x = this.x + random(this.randomMaximumX, this.randomMinimumX);
    this.y = this.y + random(this.randomMaximumY, this.randomMinimumY);
  }

  expand() {
    if (this.size < 200) {
      this.size = this.size + random(-1, 3);
    }
  }
}
