let boxX = 0, boxZ = 0;
let b = 200;
let left = false, right = false,
  forward = false, back = false;

function setup() {
  createCanvas(640, 480, WEBGL);
}

function draw() {
  background(128);
  // avatar movement
  if (back) boxZ -= 1.0;
  if (forward) boxZ += 1.0;
  if (left) boxX -= 1.0;
  if (right) boxX += 1.0;

  // bounds
  stroke("#FFE71B");
  line(b, 0, -b, b, 0, b);
  line(-b, 0, b, b, 0, b);
  line(b, 0, -b, -b, 0, -b);
  line(-b, 0, b, -b, 0, -b);

  // camera following (boxX, 0, boxZ)
  // check if the avatar is in the boundaries
  if (boxX < 200 && boxX > -200 && boxZ < 200 && boxZ > -200) {
         camera(boxX, -200, boxZ + 200, // eye
         boxX, 0, boxZ,     // lookAt
         0, 1, 0); // camera up vector
  }
  // avatar
  stroke(0);
  fill("#E87E0C");
  translate(boxX, 0, boxZ);
  box(10);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
      back = true;
    }
    if (keyCode === DOWN_ARROW) {
      forward = true;
    }
    if (keyCode === LEFT_ARROW) {
      left = true;
    }
    if (keyCode === RIGHT_ARROW) {
      right = true;
    }
}

function keyReleased() {
  if (keyCode === UP_ARROW) {
      back = false;
    }
    if (keyCode === DOWN_ARROW) {
      forward = false;
    }
    if (keyCode === LEFT_ARROW) {
      left = false;
    }
    if (keyCode === RIGHT_ARROW) {
      right = false;
    }
}