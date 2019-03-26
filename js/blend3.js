let x;
let y;
let xspeed;
let yspeed;
let r, g, b;
let a=0;


function preload() {
result = loadStrings('assets/4tiger.txt');


}

function pickColor() {
  r = random(150, 256);
  g = random(100, 256);
  b = random(100, 256);
  //fill(r,g,b);
}


function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
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
      blendMode(DIFFERENCE);

          fill(r,g,b);
      text(result, 200, 200, window.innerWidth, window.innerHeight);

     rect(y, x, 800, 100);
     rect(x, y, 800, 200);
     rect(x, y, 800, 600);
     rect(x, y, 800, 600);
     rect(x, y, 800, 600);
      fill(r,b,b);
      ellipse(x, f, 100, 100);
      ellipse(x, -y, 100, 100);
      ellipse(x, y+200, 100, 100);
       // fill(r,g,g);
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
