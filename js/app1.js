var lines, markov, data1, data2, x = 160, y = 240;
var mySound;
let myCanvas;
var randomImageLocation;
let img = [];
var index = 0;
var typed="";
var ellipsecolor = 44;
var timer = 10;
var nextTime = timer;
let button;
let anotherStrata;
let myfi;
let datta1;


function preload() {

  data1 = loadStrings('assets/1.txt');
  data2 = loadStrings('assets/2.txt');
  data3 = loadStrings('assets/3kekes.txt');
  data4 = loadStrings('assets/4tiger.txt');
  data5 = loadStrings('assets/5hijacked.txt')
  mySound = loadSound('assets/bell.mp3');
  img[0] = loadImage("img/img0.png");
  img[1] =  loadImage("img/img1.png");
  bg = loadImage("img/background.jpg");
}


function setup() {

  let createcanvas = createCanvas(window.innerWidth /2 , window.innerHeight/2);
  createcanvas.parent('mycanvas');
  //create a new canvas (only appears if you spccc right now)
  anotherStrata = createGraphics(window.innerWidth /2 , window.innerHeight/2);
  anotherStrata.clear();
  // mobilenet = ml5.imageClassifier('MobileNet', modelReady);
  bg = loadImage("img/background.jpg");
  textFont('avenir');
  textSize(20 + (mouseX / width)*72);
  // image(img[index], 200, 200, 100, 200);
  // textAlign(LEFT);
  frameRate(30);

   fill('beige');
   lines = ["click to place your order!"];

  // create a markov model w' n=4
  markov = new RiMarkov(8);

  datta1 = data1.join(' ');
  datta2 = data2.join(' ');
  datta3 = data3.join(' ');
  datta4 = data4.join(' ');
  datta5 = data5.join(' ');
  // load text into the model
  markov.loadText(data1.join(' '));
  markov.loadText(data2.join(' '));
  markov.loadText(data3.join(' '));
  markov.loadText(data4.join(' '));
  markov.loadText(data5.join(' '));
  drawText();
  // var firstPDF = createA('pdfs/humanbutnonhuman.pdf', 'They are not human but they are not non-human', 1000, 700);
  // firstPDF.class("btn btn-dark rounded float-top");
  // var secondPDF = createA('pdfs/anarchivalcinema.pdf', 'Anarchival Cinema', 1000, 700);
  // secondPDF.class("btn btn-dark rounded ml-1 float-right");


                    //   button = createButton('submit');
                    //     button.position(100 + 200, 65);
                    //     button.mousePressed(speak);
                    //     button.parent('notice');

}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

function ellipsee(){

   if (millis() > nextTime){
    ellipsecolor +=1;
    nextTime = millis() + timer;

    }
}

function draw(){

  image(anotherStrata, 0, 0)
  line(mouseX, mouseY, pmouseX, pmouseY);
  //print(pmouseX + ' -> ' + mouseX);
  translate (mouseX, mouseY);
  fill(ellipsecolor);
  var value = random(0, 600);
  ellipse(mouseX, mouseY, 0.4, 0.4);
  //

}


function drawText() {

  background(bg);
  textSize(20 + (mouseX / width)*33);
  myfi = text(lines.join(' '), 50, 201, 400, 530);
  // text('PDF1', 1000, 700);
  // text('PDF2', 1080, 700);

  // console.log(lines);
}

function myF() {
  // console.log(datta1);
  // var r = lines.toString();
  // console.log(r);
  // var str = datta1;
  var n = datta1.includes(lines);
  var m = datta2.includes(lines);
  var o = datta3.includes(lines);
  var p = datta4.includes(lines);
  var q = datta5.includes(lines);

  if (n==true){
        let newa = createA("assets/1.txt", lines);
        newa.parent('consolog');
        newa.style('font-family', 'inconsolota');

        // createP();
      // a.select("demo");
  }
  if (m==true){
      let newa = createA("assets/2.txt", lines);
      newa.parent('consolog');
      // createP();

      // a.select("demo");
  }

  if (o==true){
      let newa = createA("assets/3kekes.txt", lines);
      newa.parent('consolog');
      // createP();

      // a.select("demo");
  }

  if (p==true){
     createA("assets/4tiger.txt", lines);
     createP();

      // a.select("demo");
  }

  if (q==true){
      createA("assets/5hijacked.txt", lines);
      createP();

      // a.select("demo");
  }
  // document.getElementById("demo").innerHTML = n;
}

function theSound(){

    var mytimer = setInterval(function(){

      var voices = speechSynthesis.getVoices();
    if (voices.length !=0){
            var msg = new SpeechSynthesisUtterance(lines.join(' '), 50, 201, 400, 530);
          msg.volume = 0.25;
          msg.rate = 0.75;
          var counter = 0
          msg.voice = voices[counter];
          window.speechSynthesis.speak(msg);
          counter++
        }  }, 1000)
         window.speechSynthesis.cancel();

}



function mouseClicked() {


  typed="";

  x = 100;
  y = 220;
  lines = markov.generateSentences(1);
  drawText();
  mySound.play();
  anotherStrata.clear();
  myF();
}

function keyTyped(){

  if (keyCode === 32){
    anotherStrata.line(0, mouseY, 300, mouseY)
  } else
  if (keyCode != RETURN) typed += key;
  push(); // push and pop create a bubble: when pop () is activated, the state of things gets back to push(); although this was of no use
  translate (mouseX, mouseY)
  text(typed, 0, 0); // Draw at coordinate
  pop();


}


function mouseReleased(){
           index = index + 1;
          if (index == img.length){
              index = index - img.length;

    }

}
