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
var slider;
var slider2;
// All the paths
let paths = [];
// Are we painting?
let painting = false;
// How long until the next circle
let next = 0;
// Where are we now and where were we?
let current;
let previous;
var pfing=true;

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
  slider = createSlider(0, 250, 60, 40);
  slider.position(0, 0);
  slider.style('width', '80px');
  slider2 = createSlider(0, 250, 60, 40);
  slider2.position(100, 10);
  slider2.style('width', '80px');
  current = createVector(0,0);
  previous = createVector(0,0);
  }

    function draw(){

      if (pfing === true){
        background ('yellow');

        noStroke();
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
        if (pfing===false){
          background('red');
          var val = slider.value();
          var vall = slider2.value();
          c1 = color(val, 102, 0);
          c2 = color(0, vall, 153);
          setGradient(mouseX, mouseY, 100 , 100, c1, c2, X_AXIS);
          ellipse(mouseX, mouseY, 150, 10);

          // If it's time for a new point
          if (millis() > next && painting) {

            // Grab mouse position
            current.x = mouseX;
            current.y = mouseY;

            // New particle's force is based on mouse movement
            let force = p5.Vector.sub(current, previous);
            force.mult(0.05);

            // Add new particle
            paths[paths.length - 1].add(current, force);

            // Schedule next circle
            next = millis() + random(100);

            // Store mouse values
            previous.x = current.x;
            previous.y = current.y;
          }

          // Draw all paths
          for( let i = 0; i < paths.length; i++) {
            paths[i].update();
            paths[i].display();
          }
        }



}


// Stop
function mouseReleased() {
  painting = false;
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
  next = 0;
  painting = true;
  previous.x = mouseX;
  previous.y = mouseY;
  paths.push(new Path());
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


// A Path is a list of particles
class Path {
  constructor() {
    this.particles = [];
    this.hue = random(100);
  }

  add(position, force) {
    // Add a new particle with a position, force, and hue
    this.particles.push(new Particle(position, force, this.hue));
  }

  // Display plath
  update() {
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].update();
    }
  }

  // Display plath
  display() {
    // Loop through backwards
    for (let i = this.particles.length - 1; i >= 0; i--) {
      // If we shold remove it
      if (this.particles[i].lifespan <= 0) {
        this.particles.splice(i, 1);
      // Otherwise, display it
      } else {
        this.particles[i].display(this.particles[i+1]);
      }
    }

  }
}

// Particles along the path
class Particle {
  constructor(position, force, hue) {
    this.position = createVector(position.x, position.y);
    this.velocity = createVector(force.x, force.y);
    this.drag = 0.95;
    this.lifespan = 255;
  }

  update() {
    // Move it
    this.position.add(this.velocity);
    // Slow it down
    this.velocity.mult(this.drag);
    // Fade it out
    this.lifespan--;
  }

  // Draw particle and connect it with a line
  // Draw a line to another
  display(other) {
    // stroke(0, this.lifespan);
    fill(c2, this.lifespan/2);
    noStroke();
    // fill(blue);
    ellipse(this.position.x,this.position.y, 150, 150);
    // If we need to draw a line
    if (other) {
      line(this.position.x, this.position.y, other.position.x, other.position.y);
    }
  }
}