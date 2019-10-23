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
function scrollToBottom(id){
   var div = document.getElementById(id);
   div.scrollTop = div.scrollHeight - div.clientHeight;
}
function cons() {
  xxx = 100;
  yyy = 220;
  lines = markov.generateSentences(3);
  // drawText();
  matchymatchy();
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
  str17 ? imgy = "img/button3.png": null;


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
function toggle_visibility(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'none')
      e.style.display = 'block';

}
function toggle_visibility2(id) {
        var f = document.getElementById(id);
        if(f.style.display == 'block')
           f.style.display = 'none';
         }
function buttonzz() {
  document.getElementById('gradientt').classList.add('hell');
  var imgArray = ["img/button8.png", "img/button18.png", "img/button15.png","img/button16.png", "img/button10.png", "img/button11.png", "img/button22.png" ];
  //blackcat
  const iimg = document.createElement("IMG");
  iimg.setAttribute("src", imgArray[0]);
  iimg.addEventListener("click", function(){
    blackcat('gradientt');
  }, true);
  const para =  document.getElementById('buttonz');           // Insert text
  para.appendChild(iimg);
  // blender
  const iimg2 = document.createElement("IMG");
  iimg2.setAttribute("src", imgArray[1]);
  iimg2.addEventListener("click", function(){
    document.getElementById('scroll').className = '';
    toggle_visibility('hellooo');
    document.getElementById('gradientt').className = 'hell';
    pfing=true;
  }, true);
  para.appendChild(iimg2);
  //redredredpopopop
  const iimg3 = document.createElement("IMG");
  iimg3.setAttribute("src", imgArray[2]);
  iimg3.addEventListener("click", function(){
    toggle_visibility('hellooo');
    document.getElementById('scroll').className = '';
    document.getElementById('gradientt').className = 'redredred';
    pfing=false;
  }, true);
  para.appendChild(iimg3);
  //menu
  const iimg4 = document.createElement("IMG");
  iimg4.setAttribute("src", imgArray[3]);
  iimg4.addEventListener("click", function(){
    cons();
  }, true);
  para.appendChild(iimg4);
  //jumping o
  const iimg5 = document.createElement("IMG");
  iimg5.setAttribute("src", imgArray[4]);
  iimg5.addEventListener("click", function(){
    blackc('gradientt', ['o']);
  }, true);
  //double gradient
  para.appendChild(iimg5);
  const iimg6 = document.createElement("IMG");
  iimg6.setAttribute("src", imgArray[5]);
  iimg6.addEventListener("click", function(){
    document.getElementById('gradientt').className = 'propo';
    document.getElementById('hellooo').style.display = 'none';
    document.getElementById('scroll').classList.add('bgrnd');
  }, true);
  para.appendChild(iimg6);
  // const iimg7 = document.createElement("IMG");
  // iimg7.setAttribute("src", imgArray[6]);
  // iimg7.addEventListener("click", function(){
  //   document.getElementById('hellooo').style.display = 'none';
  // }, true);
  // para.appendChild(iimg7);
  para.classList.add('float-right');

};
