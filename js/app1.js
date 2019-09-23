var lines, markov, data1, data2, data3, data4, data5, data6, data7,  x = 160, y = 240;
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

  data1 = loadStrings('assets/newtxt/1.txt');
  data2 = loadStrings('assets/newtxt/alexis.txt');
  data3 = loadStrings('assets/newtxt/an_actual_occasion.txt');
  data4 = loadStrings('assets/newtxt/black_reason.txt');
  data5 = loadStrings('assets/newtxt/chris.txt');
  data6 = loadStrings('assets/newtxt/dreaming_abrahao.txt');
  data7 = loadStrings('assets/newtxt/essayperspectivism.txt');
  data8 = loadStrings('assets/newtxt/experimenting_immediation.txt');
  data9 = loadStrings('assets/newtxt/filho.txt');
  data10 = loadStrings('assets/newtxt/for_a_cinematic.txt');
  data11 = loadStrings('assets/newtxt/hijaked.txt');
  data12 = loadStrings('assets/newtxt/notes_on_space.txt');
  data13 = loadStrings('assets/newtxt/pfmf.txt');
  data14 = loadStrings('assets/newtxt/savage_marx.txt');
  data15 = loadStrings('assets/newtxt/tiger.txt');
  data16 = loadStrings('assets/newtxt/xapirimuu.txt');

  mySound = loadSound('assets/bell.mp3');
  img[0] = loadImage("img/img0.png");
  img[1] =  loadImage("img/img1.png");
  bg = loadImage("img/background.jpg");
}


function setup() {

  let createcanvas = createCanvas(window.innerWidth /2 , window.innerHeight - 150);
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
  markov.loadText(data16.join(' '));
  drawText();

  jumpi("ooo");
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
}

function scrollToBottom(id){
   var div = document.getElementById(id);
   div.scrollTop = div.scrollHeight - div.clientHeight;
}



// function myF() {
// (datta+n).includes(lines);
// }
// function myF(){
// var expr = expr.includes(lines);
// switch (expr) {
//   case datta1:
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case datta2:
//   case datta3:
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log('Sorry, we are out of ' + expr + '.');
// }
// }
//
function myF() {
//   switch (fruit) {
//     case datta1.includes(lines) :
//       let newa = createA("assets/newtxt/1.txt", lines);
//       break;
//     }
//     function myF() {
//     return datta1 ? function ()
//     {newa = createA("assets/newtxt/1.txt", lines);}
//          // : condition2 ? value2
//          // : condition3 ? value3
//           : value4;
// }
//
//   }
  var pf1 = datta1.includes(lines);
  var pf2 = datta2.includes(lines);
  var pf3 = datta3.includes(lines);
  var pf4 = datta4.includes(lines);
  var pf5 = datta5.includes(lines);
  var pf6 = datta6.includes(lines);
  var pf7 = datta7.includes(lines);
  var pf8 = datta8.includes(lines);
  var pf9 = datta9.includes(lines);
  var pf10 = datta10.includes(lines);
  var pf11 = datta11.includes(lines);
  var pf12 = datta12.includes(lines);
  var pf13 = datta13.includes(lines);
  var pf14 = datta14.includes(lines);
  var pf15 = datta15.includes(lines);
  var pf16 = datta16.includes(lines);

 let newa;
  if (pf1==true){
      newa = createA("assets/newtxt/1.txt", lines);
  }
  if (pf2==true){
      newa = createA("assets/newtxt/alexis.txt", lines);
  }
  if (pf3==true){
      newa = createA("assets/newtxt/an_actual_occasion.txt", lines);
  }
  if (pf4==true){
     newa = createA("assets/newtxt/black_reason.txt", lines);
  }
  if (pf5==true){
      newa = createA("assets/newtxt/chris.txt", lines);
  }
  if (pf6==true){
      newa = createA("assets/newtxt/dreaming_abrahao.txt", lines);
  }
  if (pf7==true){
      newa = createA("assets/newtxt/essayperspectivism.txt", lines);
  }
  if (pf8==true){
      newa = createA("assets/newtxt/experimenting_immediation.txt", lines);
  }
  if (pf9==true){
     newa = createA("assets/newtxt/filho.txt", lines);
  }
  if (pf10==true){
      newa = createA("assets/newtxt/for_a_cinematic.txt", lines);
  }
  if (pf11==true){
      newa = createA("assets/newtxt/hijaked.txt", lines);
  }
  if (pf12==true){
      newa = createA("assets/newtxt/notes_on_space.txt", lines);
  }
  if (pf13==true){
      newa = createA("assets/newtxt/pfmf.txt", lines);
  }
  if (pf14==true){
     newa = createA("assets/newtxt/savage_marx.txt", lines);
  }
  if (pf15==true){
      newa = createA("assets/newtxt/tiger.txt", lines);
  }
  if (pf16==true){
      newa = createA("assets/newtxt/xapirimuu.txt", lines);
  }
 // // console.log('1');
 // switch (n = n.includes(lines)) {
 // case n = datta1.includes(lines) == true:
 // console.log("datta1");
 // // var newa = document.createElement('a');
 // //  var createAText = document.createTextNode(lines);
 // //    newa.setAttribute('href', "assets/newtxt/1.txt");
 // //    newa.appendChild(createAText);
 // //    getTheTableTag.appendChild(createA)
 // newa = createA("assets/newtxt/1.txt", lines);
 // break;
 // case datta2.includes(lines) == true:
 // console.log("datta2");
 // break;
 // case datta3.includes(lines) == true:
 // console.log("datta3");
 // break;
 // case datta4.includes(lines) == true:
 // console.log("datta4");
 // break;
 // case datta5.includes(lines) == true:
 // console.log("datta5");
 // break;
 // case datta6.includes(lines) == true:
 // console.log("datta6");
 // break;
 // case datta7.includes(lines) == true:
 // console.log("datta7");
 // break;
 // case datta8.includes(lines) == true:
 // console.log("datta8");
 // break;
 // case datta9.includes(lines) == true:
 // console.log("datta9");
 // break;
 // case datta10.includes(lines) == true:
 // console.log("datta10");
 // break;
 // case datta11.includes(lines) == true:
 // console.log("datta11");
 // break;
 // case datta12.includes(lines) == true:
 // console.log("datta12");
 // break;
 // case datta13.includes(lines) == true:
 // console.log("datta13");
 // break;
 // case datta14.includes(lines) == true:
 // console.log("datta14");
 // break;
 // case datta15.includes(lines) == true:
 // console.log("datta15");
 // break;
 // case datta16.includes(lines) == true:
 // console.log("datta16");
 // break;
 // let consol = getElementById('consolog');
 // consol.appendChild(newa);

  newa.style('font-family', 'monospace');
  newa.style('color', 'green');
  newa.style('font-size', '12pt');
  newa.parent('consolog');
  newa.class('pulse');

  let newb = createElement('br');
  newb.parent('consolog');
  scrollToBottom('consolog');
// }
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

function jumpi(duck) {
         createP(duck).addClass('textit').hide();

        const texts = selectAll('.textit');

       for (let i = 0; i < texts.length; i++) {
          const paragraph = texts[i].html();
          const words = paragraph.split('');
          for (let j = 0; j < words.length; j++) {
            if (words[j]=='o'){
            var jumpingo = createA('#', words[j]);
            jumpingo.mousePressed(becomeApple);
          } else if(words[j]==' '){
            var spacer = createA('#', words[j]);
            spacer.mousePressed(becomeApple2);
          } else {
            const spannedWord = createSpan(words[j]);
          }

        }
      }

     function becomeApple(){
       this.addClass('growing');
     }
     function becomeApple2(){
       this.addClass('spacing');
     }

  }
//
// function onoverlay() {
//   document.getElementById("overlay").style.display = "block";
//   // jumpi("jjjjjooo");
// }
function onoverlay() {
  document.getElementById("overlay").style.display = "block";
  // jumpi("jjjjjooo");
}

function offoverlay() {
  document.getElementById("overlay").style.display = "none";
}
