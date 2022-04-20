function setup() {
  createCanvas(640, 500, WEBGL);
}

function draw() {
  background(200);
  rotateZ(frameCount * 0.01);
  push();
  box1();
  pop();
  box2();
}

function box1() {
  translate(0,100,0)
  rotateY(-frameCount * 0.01);
  box(60);
}

function box2() {
  translate(0,-100,0)
  rotateY(frameCount * 0.01);
  box(60);
}