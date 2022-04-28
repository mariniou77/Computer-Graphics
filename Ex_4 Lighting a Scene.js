function setup() {
  createCanvas(600, 450, WEBGL);
}

function draw() {
  background(110);
  // set a kind of blue ambient light at meshes
  ambientLight(10,80,90);
  // set a red point light coming from the right
  pointLight(255,0,0,500,100,200);
  let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  // set a yellow directional light that goes along with the mouse movement
  directionalLight(250, 250, 25, -dirX, -dirY, -1);
  push();
  diamond();
  pop();
  push();
  cube();
  pop();
  push();
  spher();
  pop();
  push();
  cyl();
  pop();
}

function diamond(){
  translate(-80,80,50);
  rotateX(50);
  noStroke();
  cone(50,60,15)
}

function cube(){
  translate(80,-80,50);
  rotate(160);
  noStroke();
  box(60);
}

function spher(){
  translate(80,80,-50);
  noStroke();
  sphere(50);
}

function cyl(){
  translate(-80,-80,-50);
  rotateY(100);
  rotateZ(100);
  noStroke();
  cylinder(30,100);
}