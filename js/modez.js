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
var pfing=null;
var p=0;

function pickColor() {
  r = random(150, 256);
  g = random(100, 256);
  b = random(100, 256);
  c1 = color(204, 102, 0);
  c2 = color(0, 102, 153);
}


function preload() {
  data1 = loadStrings('assets/txtfilez/cisco.txt');
  data2 = loadStrings('assets/txtfilez/alexis.txt');
  data3 = loadStrings('assets/txtfilez/sher.txt');
  data4 = loadStrings('assets/txtfilez/dos.txt');
  data5 = loadStrings('assets/txtfilez/chris.txt');
  data6 = loadStrings('assets/txtfilez/abrahao.txt');
  data7 = loadStrings('assets/txtfilez/andre.txt');
  data8 = loadStrings('assets/txtfilez/erin.txt');
  data9 = loadStrings('assets/txtfilez/filho.txt');
  data10 = loadStrings('assets/txtfilez/come.txt');
  data11 = loadStrings('assets/txtfilez/fabi.txt');
  data12 = loadStrings('assets/txtfilez/mont.txt');
  data13 = loadStrings('assets/txtfilez/aaaa.txt');
  data14 = loadStrings('assets/txtfilez/jean.txt');
  data15 = loadStrings('assets/txtfilez/tiger.txt');
  data16 = loadStrings('assets/txtfilez/sebastian.txt');
  data17 = loadStrings('assets/txtfilez/morales.txt');

}

function loadme(){
  document.querySelector('body').classList.add("loaded")
}



function setup() {
  let ccc = createCanvas(window.innerWidth, window.innerHeight);
  ccc.parent('hellooo');
  x= 0;
  y= 0;
  f = noise(100,256);
  xspeed= noise(2,5);
  yspeed= 5;
  // slider = createSlider(0, 250, 60, 40);
  // slider.position(0, 0);
  // slider.style('width', '80px');
  // slider2 = createSlider(0, 250, 60, 40);
  // slider2.position(100, 10);
  // slider2.style('width', '80px');
  current = createVector(0,0);
  previous = createVector(0,0);

     lines = ["click to place your order!"];

    // create a markov model w' n=4
    markov = new RiMarkov(8);

    datta1 = data1.join(' ');
    datta2 = data2.join(' ');
    datta3 = data3.join(' ');
    datta4 = data4.join(' ');
    datta5 = data5.join(' ');
    datta6 = data6.join(' ');
    datta7 = data7.join(' ');
    datta8 = data8.join(' ');
    datta9 = data9.join(' ');
    datta10 = data10.join(' ');
    datta11 = data11.join(' ');
    datta12 = data12.join(' ');
    datta13 = data13.join(' ');
    datta14 = data14.join(' ');
    datta15 = data15.join(' ');
    datta16 = data16.join(' ');
    datta17 = data17.join(' ');

    // load text into the model
    markov.loadText(datta1);
    markov.loadText(datta2);
    markov.loadText(datta3);
    markov.loadText(datta4);
    markov.loadText(datta5);
    markov.loadText(datta6);
    markov.loadText(datta7);
    markov.loadText(datta8);
    markov.loadText(datta9);
    markov.loadText(datta10);
    markov.loadText(datta11);
    markov.loadText(datta12);
    markov.loadText(datta13);
    markov.loadText(datta14);
    markov.loadText(datta15);
    markov.loadText(datta16);
    markov.loadText(datta17);
    loadme();
    buttonzz();
    pickColor();
    collideDebug(true);

  }

    function draw(){

      if (pfing === 2){
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
      if (pfing===0){
        background(0,100,30);
        blendMode(EXCLUSION);
        fill(255);
        noStroke();
        rect(100, 100, 1000,100);
        rect(150,150,150,150);
        ellipse(mouseX,mouseY,45,45);
      }
        if (pfing===1){
          background('red');
          // var val = slider.value();
          // var vall = slider2.value();
          c1 = color(100, 102, 0);
          c2 = color(0, 100, 153);
          setGradient(mouseX, mouseY, 100 , 100, c1, c2, X_AXIS);
          ellipse(mouseX, mouseY, 150, 150);

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
        if (pfing===3){
          background (r, 215, 20);
          //text(p1, 100, 100);
          blendMode(DIFFERENCE);
        //  p1 (600,600);
        //  rect(x, y, 80, 60);
        //Draw the DVD logo
        //tint(r,g,b);
        //  image(dvd, x, y);
          //rect (100,100,100,100);
        /*  if (mouseIsPressed){
            fill(none);
            }
            else{
              fill(r,g,b);
            }
        */
            fill(r,g,b);
            noStroke();

            ////dvd
        rect(x,y,31,31);
        rect(y,x,31,31);
        rect(x,x,31,31);
        //fill(r,g,b);
          x = x + xspeed;
          y = y + yspeed;

          if (x + 100 >= width){
            xspeed = -xspeed;
            x= width - 100;
            pickColor();
          } else if (x <= 0){
            xspeed = -xspeed;
            x = 0;
            pickColor();
          }

          if (y + 100 >= height){
            yspeed = -yspeed;
            y = height - 100;
            pickColor();
          } else if (y<=0){
            yspeed = -yspeed;
            y  = 0;
            pickColor();
          }

        ////////mice
        var circlerad = 31;
          ellipse(mouseY, mouseX, circlerad, circlerad);
          ellipse(mouseY*2, mouseX, circlerad, circlerad);
          ellipse(mouseX, mouseX-300, circlerad, circlerad);
          ellipse(mouseY*1.5, mouseX, circlerad, circlerad);
          ellipse(mouseY, mouseX, circlerad, circlerad);


        /////////drift
        p = p + 1;

        ellipse(p, y, circlerad);


        /////////still
        rect(200, 200, 500, 20);

        noStroke();
        vertex(x,255);
        vertex(200,y);
        vertex(20,490);
        vertex(48,x-20);
        vertex(637,255);
        endShape();
        }
        if (pfing===4){
          if (mouseIsPressed){
            ellipse(mouseX, mouseY, 100, 100);
            fill(0,0,0)

          }

          else {

            setGradient(mouseX, mouseY, 50,100, c1, c2, Y_AXIS);
            // rect(mouseX,mouseY, 50, 100);
            fill(255,255,255);
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
