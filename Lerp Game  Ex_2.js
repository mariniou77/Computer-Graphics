// enemies
let e_a = [],
    e_b = [],
    e_p = [];
let e_f = [],
    e_m = [];
let num_enemies = 10;
// player
let a, b, position;
let f = 0;
let clicks = 0;

function setup() {
  createCanvas(640, 480);
  // init the enemies
  for (let i = 0; i < num_enemies; i++) { // for each enemy
    // random route:
    e_a[i] = createVector(random(20, 620), 
                          random(20, 460));
    e_b[i] = createVector(random(20, 620), 
                          random(20, 460));
    // random start and movement speed:
    e_f[i] = random(0, 1);
    e_m[i] = random(0.005, 0.025);
  }
  // init the player
  a = createVector(10, 10);
  b = createVector(10, 10);
  
  f = 0;
}

function draw() {
  background(0);
  
  
  noStroke();
  fill("#00FF00");
  position = p5.Vector.add(p5.Vector.mult(a, 
										  1 - ease(f)),
                                          p5.Vector.mult(b, ease(f)));
  ellipse(position.x, 
          position.y, 
          25, 
          25);
  if (f < 1) {
    f = f + 0.05;
  }
  // move and paint the enemy:
  stroke("#FF0000");
  fill("#FF0000");
  
  for (let i = 0; i < num_enemies; i++) {
    e_p[i] = p5.Vector.add(p5.Vector.mult(e_a[i], 
										  1 - ease(e_f[i])),
										  p5.Vector.mult(e_b[i],                                                     
										  ease(e_f[i])));
    ellipse(e_p[i].x, 
            e_p[i].y, 
            25, 
            25);
    // move per frame:
    e_f[i] = e_f[i] + e_m[i];
    // turn around after reaching end point:
    if (e_f[i] >= 1 || e_f[i] <= 0)
      e_m[i] = -e_m[i];   
   
  }
  
  noStroke();
  fill(255);
  textSize(15);
  textAlign(CENTER);
  //displaying number of clicks
  text("Current Score : " + clicks, 
       width/2, 
       height/20);
  for (let i = 0; i < num_enemies; i++){
    var dis = dist(position.x,
                   position.y,
                   e_p[i].x,
                   e_p[i].y);
    if(dis < 25){
      noStroke();
      fill(255);
      textSize(25);
      textAlign(CENTER, CENTER);
      //displaying number of clicks
      text("You Lost !! \n Total Score : " + clicks,
           width/2,
           height/2);
      exit;
    }
  }
}

function mouseReleased() {
  a = createVector(position.x, position.y);
  b = createVector(mouseX, mouseY);
  f = 0;
}

function ease(f) {
  return (1 - f) * (f * f * f) + (f) * (1 - (1 - f) * (1 - f) * (1 - f)); 
}

function mousePressed() {
  //add 1 to variable clicks
  clicks ++;
}