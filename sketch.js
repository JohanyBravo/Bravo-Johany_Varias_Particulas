let s;
let v;
let t;
let s2;
let v2;
let t2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  s = new Sistema ();
  v = new Sistema ();
  s2 = new Sistema ();
  v2 = new Sistema ();
}

function draw() {
  background(0);
  s.update();
  s.display();
  v.update();
  v.display();
  s2.update();
  s2.display();
  v2.update();
  v2.display();
}
