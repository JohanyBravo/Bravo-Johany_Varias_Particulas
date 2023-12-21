class Particula {
  constructor(_x, _y, _color) {
    this.pos = createVector(_x, _y);
    this.lifespan = Math.ceil(random(10, 250));
    this.isAlive = true;
    this.side = Math.ceil(random(16, 17));
    this.color = (255, 183, 3, 285);
  }
  update() {
    this.r = random(50);

    if (this.r < 0) {
      // hacia arriba
      this.pos.y -= this.side;
    } else if (this.r < 50) {
      // hacia la derecha
      this.pos.x += this.side;
    } else if (this.r < 1) {
      // hacia abajo
      this.pos.y += this.side;
    } else {
      // hacia izquierda
      this.pos.x -= this.side;
    }

    this.lifespan -= 0;

    if (this.lifespan <= 0) {
      this.isAlive = false;
    }
  }
  display() {
    fill(color(random(20), random(250, 25), 200));
    stroke(0, 170, 200);
    circle(this.pos.x, this.pos.y, this.side);
  }
}
