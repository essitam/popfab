var lines, markov, data1, data2, data3, data4, data5, data6, data7, data8, data9, data10,  x = 160, y = 240;
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

  // jumpi("ooo");
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
}

function scrollToBottom(id){
   var div = document.getElementById(id);
   div.scrollTop = div.scrollHeight - div.clientHeight;
}


const matchymatchy = () => {
  var str1 = match(datta1, lines);
  var str2 = match(datta2, lines);
  var str3 = match(datta3, lines);
  var str4 = match(datta4, lines);
  var str5 = match(datta5, lines);
  var str6 = match(datta6, lines);
  var str7 = match(datta7, lines);
  var str8 = match(datta8, lines);
  var str9 = match(datta9, lines);
  var str10 = match(datta10, lines);
  var str11 = match(datta11, lines);
  var str12 = match(datta12, lines);
  var str13 = match(datta13, lines);
  var str14 = match(datta14, lines);
  var str15 = match(datta15, lines);
  var str16 = match(datta16, lines);
  let linky;
  str1 ? linky = "assets/newtxt/1.txt": null;
  str2 ? linky = "assets/newtxt/alexis.txt": null;
  str3 ? linky = "assets/newtxt/an_actual_occasion.txt": null;
  str4 ? linky = "assets/newtxt/black_reason.txt": null;
  str5 ? linky = "assets/newtxt/chris.txt": null;
  str6 ? linky = "assets/newtxt/dreaming_abrahao.txt": null;
  str7 ? linky = "assets/newtxt/essayperspectivism.txt": null;
  str8 ? linky = "assets/newtxt/experimenting_immediation.txt": null;
  str9 ? linky = "assets/newtxt/filho.txt": null;
  str10 ? linky = "assets/newtxt/for_a_cinematic.txt": null;
  str11 ? linky = "assets/newtxt/hijaked.txt": null;
  str12 ? linky = "assets/newtxt/notes_on_space.html": null;
  str13 ? linky = "assets/newtxt/pfmf.txt": null;
  str14 ? linky = "assets/newtxt/savage_marx.txt": null;
  str15 ? linky = "assets/newtxt/tiger.txt": null;
  str16 ? linky = "assets/newtxt/xapirimuu.txt": null;

  const anchor = document.createElement('a');
  const list = document.getElementById('suppy');
  const li = document.createElement('ul');
  const iimg = document.createElement("IMG");
  iimg.setAttribute("src", "img/button8.png");
  anchor.href = linky;
  anchor.innerText = lines;
  anchor.classList.add("fabfabfab");
  anchor.appendChild(iimg);
  li.appendChild(anchor);
  list.appendChild(li);
  scrollToBottom("consolog");
};
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
  // myF();
  matchymatchy();
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

// function jumpi(duck) {
//          createP(duck).addClass('textit').hide();
//
//         const texts = selectAll('.textit');
//
//        for (let i = 0; i < texts.length; i++) {
//           const paragraph = texts[i].html();
//           const words = paragraph.split('');
//           for (let j = 0; j < words.length; j++) {
//             if (words[j]=='o'){
//             var jumpingo = createA('#', words[j]);
//             jumpingo.mousePressed(becomeApple);
//           } else if(words[j]==' '){
//             var spacer = createA('#', words[j]);
//             spacer.mousePressed(becomeApple2);
//           } else {
//             const spannedWord = createSpan(words[j]);
//           }
//
//         }
//       }
//
//      function becomeApple(){
//        this.addClass('growing');
//      }
//      function becomeApple2(){
//        this.addClass('spacing');
//      }
//
//   }

function onoverlay() {
  document.getElementById("overlay").style.display = "block";
}

function offoverlay() {
  document.getElementById("overlay").style.display = "none";
}
