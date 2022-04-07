let v1 , v2, n;

function setup() {
  createCanvas(640, 480);
  v1 = createVector(120, 60);
  v2 = createVector(40, 200);
  centerPoint = createVector(200,240);
  n = createVector(2, 2).normalize();
}

function draw() {
  background(50);
  
  v1 = createVector(centerPoint.x - mouseX, 
                    centerPoint.y - mouseY);
  
  v2 = p5.Vector.add(v1, 
                     p5.Vector.mult(n, -2 * p5.Vector.dot(n, v1)));
  // draw:
  strokeWeight(3)
  stroke("#ffc71e");
  line(centerPoint.x - 80,
       centerPoint.y + 80,
       centerPoint.x + 80,
       centerPoint.y - 80);
  stroke("#5bc11c");
  drawVector(centerPoint.x - v1.x, 
             centerPoint.y - v1.y, 
             v1);
  stroke("#e44c62");
  drawVector(centerPoint.x, 
             centerPoint.y, 
             v2);
}

function drawVector(x, y, v) {
  line(x, y, v.x + x, v.y + y);
  ellipse(v.x + x, v.y + y, 5, 5);
}
