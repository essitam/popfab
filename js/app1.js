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
  datta17 = data17.join(' ');

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
  markov.loadText(data17.join(' '));
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

for (var x = 0; x < lines.length; x++) {

  var str1 = match(datta1, lines[x]);
  var str2 = match(datta2, lines[x]);
  var str3 = match(datta3, lines[x]);
  var str4 = match(datta4, lines[x]);
  var str5 = match(datta5, lines[x]);
  var str6 = match(datta6, lines[x]);
  var str7 = match(datta7, lines[x]);
  var str8 = match(datta8, lines[x]);
  var str9 = match(datta9, lines[x]);
  var str10 = match(datta10, lines[x]);
  var str11 = match(datta11, lines[x]);
  var str12 = match(datta12, lines[x]);
  var str13 = match(datta13, lines[x]);
  var str14 = match(datta14, lines[x]);
  var str15 = match(datta15, lines[x]);
  var str16 = match(datta16, lines[x]);
  var str17 = match(datta17, lines[x]);

  let linky;
  let imgy;

  str1 ? linky = "anarchival_cinema_and_the_powers_of_the_false.html": null;
  str2 ? linky = "in_between_hunger_and_appetite.html": null;
  str3 ? linky = "epistolary_romantics.html": null;
  str4 ? linky = "black_reason_racism_and_ase.html": null;
  str5 ? linky = "fabulation_as_a_somatic_apparatus_to_be_other.html": null;
  str6 ? linky = "dreaming_and_the_collective_management_of_dreams_as_transformational_operators.html": null;
  str7 ? linky = "a_perspectivist_semiotics_essay.html": null;
  str8 ? linky = "experimenting_immediation.html": null;
  str9 ? linky = "a_body_a_room.html": null;
  str10 ? linky = "for_a_cinematic_mode_of_existence.html": null;
  str11 ? linky = "hijacked.html": null;
  str12 ? linky = "notes_on_space.html": null;
  str13 ? linky = "pfmf.html": null;
  str14 ? linky = "savage_marx.html": null;
  str15 ? linky = "when_a_tiger_travels_to_other_planets.html": null;
  str16 ? linky = "xapirimuu": null;
  str17 ? linky = "passages.html": null;
  str1 ? imgy = "img/button2.png": null;
  str2 ? imgy = "img/button20.png": null;
  str3 ? imgy = "img/button11.png": null;
  str4 ? imgy = "img/button12.png": null;
  str5 ? imgy = "img/button13.png": null;
  str6 ? imgy = "img/button14.png": null;
  str7 ? imgy = "img/button15.png": null;
  str8 ? imgy = "img/button16.png": null;
  str9 ? imgy = "img/button17.png": null;
  str10 ? imgy = "img/button18.png": null;
  str11 ? imgy = "img/button19.png": null;
  str12 ? imgy = "img/button10.png": null;
  str13 ? imgy = "img/button21.png": null;
  str14 ? imgy = "img/button22.png": null;
  str15 ? imgy = "img/tiger.png": null;
  str16 ? imgy = "img/button3.jpg": null;
  str17 ? imgy = "img/button15.png": null;


  const anchor = document.createElement('a');
  const list = document.getElementById('suppy');
  const li = document.createElement('ul');
  const iimg = document.createElement("IMG");
  iimg.setAttribute("src", imgy);
  anchor.href = linky;
  anchor.innerText = lines[x];
  anchor.classList.add("fabfabfab");
  anchor.appendChild(iimg);
  li.appendChild(anchor);
  list.appendChild(li);
  scrollToBottom("suppy");
  scrollToBottom("buttonz");
}
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
  lines = markov.generateSentences(3);
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
