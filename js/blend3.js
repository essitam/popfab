let x;
let y;
let xspeed;
let yspeed;
let r, g, b;
let a = 0;
let Y_AXIS = 1;
let X_AXIS = 2;
let  c1;
let  c2;
let img3;
var nav = false;

function pickColor() {
  r = random(150, 256);
  g = random(100, 256);
  b = random(100, 256);
  c1 = color(204, 102, 0);
  c2 = color(0, 102, 153);
}

function setup() {
  let ccc = createCanvas(window.innerWidth, window.innerHeight);
  ccc.parent('hellooo');
  x= 0;
  y= 0;
  f = noise(100,256);
  xspeed= noise(2,5);
  yspeed= 5;
  pickColor();
  collideDebug(true);
  }

    function draw(){
      background ('yellow');
     if (mouseIsPressed) {
    blendMode(DIFFERENCE);
    fill(r,g,b);
    ellipse(100,100,100,100);
    rect(y, x, 800, 100);
    setGradient(0, 0, width , height, c1, c2, X_AXIS);
    setGradient(x, y, 800, 200, c2, c1, Y_AXIS);
    rect(x, y, 800, 600);
    fill(r,b,b);
    ellipse(x, f, 100, 100);
    ellipse(x, -y, 100, 100);
    ellipse(x, y+200, 100, 100);
    ellipse(x*3, y, 100, 100);
    rect(y, x, 800, 600);
    rect(y*3, x, 800, 600);
    rect(y*5, y, 800, 600);
    ellipse(f, y, 100, 100);
    ellipse(f, x, 100, 100);
    ellipse(x, f, 100, 100);
      a=a-1;
      x = x + xspeed + f;
      y = y + yspeed + f;
        if (x >= width){
          xspeed = -xspeed;
          x= width - f;
          pickColor();
        } else if (x <= -1000){
          xspeed = -xspeed;
          x = f-100;
          pickColor();
        }

        if (y >= height){
          yspeed = -yspeed;
          y = height - f;
          pickColor();
        } else if (y<=-1000){
          yspeed = -yspeed;
          y = f-100;
          pickColor();
        }
      }


}



function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 100, 100);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);

  }
}
//   loop();
// }
// function mouseReleased() {
//   noLoop();
// }


function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}
