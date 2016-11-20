var rings = [];

var initializeRings = () => {
  background(16, 27, 51);
  for (var i = 0; i < 100; i++) {
    rings[i] = new Ring(width/2, height/2);
  }
}

var sketchRings = () => {
  background(16, 27, 51);
  for (var i = 0; i < rings.length; i++) {
    rings[i].move();
    rings[i].display();
    rings[i].expand();
  }
}

var resizeRings = () => {
  background(16, 27, 51);
}

class Ring {
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
