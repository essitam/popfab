var lines, markov, data1, data2, data3, data4, data5, data6, data7, data8, data9, data10,  xxx = 160, yyy = 240;
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
//
// function preload() {
//   data1 = loadStrings('assets/newtxt/1.txt');
//   data2 = loadStrings('assets/newtxt/alexis.txt');
//   data3 = loadStrings('assets/newtxt/an_actual_occasion.txt');
//   data4 = loadStrings('assets/newtxt/black_reason.txt');
//   data5 = loadStrings('assets/newtxt/chris.txt');
//   data6 = loadStrings('assets/newtxt/dreaming_abrahao.txt');
//   data7 = loadStrings('assets/newtxt/essayperspectivism.txt');
//   data8 = loadStrings('assets/newtxt/experimenting_immediation.txt');
//   data9 = loadStrings('assets/newtxt/filho.txt');
//   data10 = loadStrings('assets/newtxt/for_a_cinematic.txt');
//   data11 = loadStrings('assets/newtxt/hijaked.txt');
//   data12 = loadStrings('assets/newtxt/notes_on_space.txt');
//   data13 = loadStrings('assets/newtxt/pfmf.txt');
//   data14 = loadStrings('assets/newtxt/savage_marx.txt');
//   data15 = loadStrings('assets/newtxt/tiger.txt');
//   data16 = loadStrings('assets/newtxt/xapirimuu.txt');
//   data17 = loadStrings('assets/newtxt/door.txt');
// }

//
// function setit() {
//
//    lines = ["click to place your order!"];
//
//   // create a markov model w' n=4
//   markov = new RiMarkov(8);
//
//   datta1 = data1.join(' ');
//   datta2 = data2.join(' ');
//   datta3 = data3.join(' ');
//   datta4 = data4.join(' ');
//   datta5 = data5.join(' ');
//   datta6 = data6.join(' ');
//   datta7 = data7.join(' ');
//   datta8 = data8.join(' ');
//   datta9 = data9.join(' ');
//   datta10 = data10.join(' ');
//   datta11 = data11.join(' ');
//   datta12 = data12.join(' ');
//   datta13 = data13.join(' ');
//   datta14 = data14.join(' ');
//   datta15 = data15.join(' ');
//   datta16 = data16.join(' ');
//   datta17 = data17.join(' ');
//
//   // load text into the model
//   markov.loadText(data1.join(' '));
//   markov.loadText(data2.join(' '));
//   markov.loadText(data3.join(' '));
//   markov.loadText(data4.join(' '));
//   markov.loadText(data5.join(' '));
//   markov.loadText(data6.join(' '));
//   markov.loadText(data7.join(' '));
//   markov.loadText(data8.join(' '));
//   markov.loadText(data9.join(' '));
//   markov.loadText(data10.join(' '));
//   markov.loadText(data11.join(' '));
//   markov.loadText(data12.join(' '));
//   markov.loadText(data13.join(' '));
//   markov.loadText(data14.join(' '));
//   markov.loadText(data15.join(' '));
//   markov.loadText(data16.join(' '));
//   markov.loadText(data17.join(' '));
//   drawText();
//
// }


function scrollToBottom(id){
   var div = document.getElementById(id);
   div.scrollTop = div.scrollHeight - div.clientHeight;
}

function cons() {
  xxx = 100;
  yyy = 220;
  lines = markov.generateSentences(1);
  // drawText();

  // myF();
  matchymatchy();
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
  var str17 = match(datta17, lines);
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


  str1 ? imgy = "img/button9.png": null;
  str2 ? imgy = "img/button10.png": null;
  str3 ? imgy = "img/button11.png": null;
  str4 ? imgy = "img/button12.png": null;
  str5 ? imgy = "img/button13.png": null;
  str6 ? imgy = "img/button14.png": null;
  str7 ? imgy = "img/button15.png": null;
  str8 ? imgy = "img/button16.png": null;
  str9 ? imgy = "img/button17.png": null;
  str10 ? imgy = "img/button18.png": null;
  str11 ? imgy = "img/button19.png": null;
  str12 ? imgy = "img/button20.png": null;
  str13 ? imgy = "img/button21.png": null;
  str14 ? imgy = "img/button22.png": null;
  str15 ? imgy = "img/button2.png": null;
  str16 ? imgy = "img/button3.png": null;
  str17 ? imgy = "img/button9.png": null;


  const anchor = document.createElement('a');
  const list = document.getElementById('suppy');
  const li = document.createElement('ul');
  const iimg = document.createElement("IMG");
  iimg.setAttribute("src", imgy);
  anchor.href = linky;
  anchor.innerText = lines;
  anchor.classList.add("fabfabfab");
  anchor.appendChild(iimg);
  li.appendChild(anchor);
  list.appendChild(li);
  scrollToBottom("suppy");
  scrollToBottom("buttonz");
};
