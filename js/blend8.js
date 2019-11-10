let x;
let y;
let xspeed;
let yspeed;
//let dvd;
let r, g, b;
let blend;
let p=0;
/*
function preload() {
//  dvd= loadImage('thingies/compost.png');

}*/

function pickColor() {
  r = random(100, 256);
  g = random(100, 256);
  b = random(100, 256);
  fill(r,g,b);
}


function setup() {
  createCanvas(2000,1000);
  x= 400;
  y= 100;
  xspeed= 1;
  yspeed= 1;
  pickColor();

  let p1 = selectAll('#banana');
  for (var i = 0; i < p1.length; i++) {
    p1[i].size(100, 100);
  }
  //createDiv(p1);

  //p1.fillStyle(pickColor());
//  p1.position(500,500);
}

function draw(){
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
rect(x,y,100,100);
rect(y,x,100,100);
rect(x,x,100,100);
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
  ellipse(mouseY, mouseX, 100, 100);
  ellipse(mouseY*2, mouseX, 100, 100);
  ellipse(mouseX, mouseX-300, 100, 100);
  ellipse(mouseY*1.5, mouseX, 100, 100);
  ellipse(mouseY, mouseX, 100, 100);


/////////drift
p = p + 1;

ellipse(p, y, 100, 100);


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
