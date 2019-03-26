window.onload = choosePic;


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


function preload() {

  data1 = loadStrings('vreytext/vrey_1.txt');
  data2 = loadStrings('vreytext/vrey_2.txt');
  data3 = loadStrings('vreytext/vrey_3.txt');
  data4 = loadStrings('vreytext/vrey_4.txt');
  data5 = loadStrings('vreytext/vrey_5.txt');
  data6 = loadStrings('vreytext/vrey_6.txt');
  data7 = loadStrings('vreytext/vrey_7.txt');
  data8 = loadStrings('vreytext/vrey_8.txt');
  data9 = loadStrings('vreytext/vrey_9.txt');
  data10 = loadStrings('vreytext/vrey_10.txt');
  data11 = loadStrings('vreytext/vrey_11.txt');
  data12 = loadStrings('vreytext/vrey_12.txt');
  data13 = loadStrings('vreytext/vrey_13.txt');
  data14 = loadStrings('vreytext/vrey_14.txt');
  data15 = loadStrings('vreytext/vrey_15.txt');
  mySound = loadSound('../assets/bell.mp3');
  img[0] = loadImage("img/img0.png");
  img[1] =  loadImage("img/img1.png");
  bg = loadImage("background.jpg");
}


function setup() {

  let createcanvas = createCanvas(window.innerWidth /2 , window.innerHeight);
  createcanvas.parent('#text');
  // mobilenet = ml5.imageClassifier('MobileNet', modelReady);
  bg = loadImage("background.jpg");
  textFont('avenir');
  textSize(20 + (mouseX / width)*72);
  // image(img[index], 200, 200, 100, 200);
  // textAlign(LEFT);
  frameRate(30);

   fill('beige');
   lines = ["click to place your order!"];
    
  // create a markov model w' n=4
  markov = new RiMarkov(8);

  // load text into the model
  markov.loadText(data1.join(' '));
  markov.loadText(data2.join(' '));
  markov.loadText(data3.join(' '));
  markov.loadText(data4.join(' '));
  markov.loadText(data5.join(' '));
  markov.loadText(data6.join(' '));
  markov.loadText(data7.join(' '));
  markov.loadText(data8.join(' '));
  markov.loadText(data9.join(' '));
  markov.loadText(data10.join(' '));
  markov.loadText(data11.join(' '));
  markov.loadText(data12.join(' '));
  markov.loadText(data13.join(' '));
  markov.loadText(data14.join(' '));
  markov.loadText(data15.join(' '));
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

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function ellipsee(){

   if (millis() > nextTime){
    ellipsecolor +=1;
    nextTime = millis() + timer;

    }
}

function draw(){
  
  line(mouseX, mouseY, pmouseX, pmouseY);
  print(pmouseX + ' -> ' + mouseX);
  translate (mouseX, mouseY);
  fill(ellipsecolor);
  var value = random(0, 600);
  ellipse(mouseX, mouseY, 0.4, 0.4);
  
}


function drawText() {

  clear();
//   background(bg);
  textSize(20 + (mouseX / width)*33);
  stroke('#222222');
    strokeWeight(2.5);
    fill('yellow')
  text(lines.join(' '), 0, 50, 500, 600);
  // text('PDF1', 1000, 700);
  // text('PDF2', 1080, 700);
  
}

// function theSound(){
    
//     var mytimer = setInterval(function(){
      
//       var voices = speechSynthesis.getVoices();
//     if (voices.length !=0){
//             var msg = new SpeechSynthesisUtterance(lines.join(' '), 50, 201, 400, 530);
//           msg.volume = 0.25;
//           msg.rate = 0.75;
//           var counter = 0
//           msg.voice = voices[counter];
//           window.speechSynthesis.speak(msg);
//           counter++
//         }  }, 1000)
//          window.speechSynthesis.cancel();
       
// }



function mouseClicked() {

  typed="";
  x = 100;
  y = 220;
  lines = markov.generateSentences(10);
  drawText();
  
 
  
}

function keyTyped(){
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


var imgArr = ["catsquirrel.gif", "death.jpg", "derridacat.jpg", "flowers.png", "image4.jpg", "image6.png", "image9.jpg", "image11.jpg", "image12.jpg",
"image14.jpg", "image15.jpg", "image16.jpg", "image17.png", "image18.jpg", "image19.png", "image20.jpg", "image21.jpg", "image22.png", "image23.png",
"image24.jpg", "image25.jpg", "image27.jpg", "image28.png", "image30.jpg", "image31.png", "image32.jpg", "image33.jpg", "image35.jpg", "image36.jpg", 
"image37.jpg", "image38.jpg", "image38.png", "image39.png", "image40.jpg", "laundromat.jpg", "laundryindenmark.jpg", "metering_low.gif", "naughty.png",
"nighttrain.jpg", "pxl2000.gif", "raccoon.jpg", "tape.gif", "typewriter.jpg", "vrumvrum.png", "yellow_thingie.png", "laundroverse.jpg", "image41.jpg"]

var bgArr = ["bg/bg1.jpg", "bg/bg2.jpg", "bg/bg3.jpg", "bg/bg4.jpg", "bg/bg5.jpg", "bg/bg7.jpg", "bg/bg8.jpg", "bg/bg9.jpg", "bg/bg10.jpg", "bg/bg11.jpg", "bg/bg12.jpg", "bg/bg13.jpeg", "bg/bg16.jpg", "bg/bg17.jpg"];


function displayImg(){
    var num = Math.floor(Math.random() * (imgArr.length));
    document.canvas.src="img/"+imgArr[num];
}

// function choosePic() {
//     var randomNum = Math.floor((Math.random() * bgArr.length));
//     document.getElementById("headerAnimation").style.backgroundImage =
//         "url(" + bgArr[randomNum] + ")";
// }

function choosePic() {
    var randomNum = Math.floor((Math.random() * bgArr.length));
    document.getElementById("headerAnimation").style.backgroundImage =
        "url(" + bgArr[randomNum] + ")";
    document.getElementById('headerAnimation').style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover"
}

