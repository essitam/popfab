//to view text in full
var cnv;
var p;
var textOne;
var x;
var y;

function setup(){
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0,0);
  //cnv.parent('thecanvas');
  cnv.style('z-index', '-1');
  background(240, 255, 181);



// select all
    p = selectAll('p');
    for (var i = 0; i < p.length; i++){
      var x = floor(random(windowWidth));
      var y = floor(random(windowHeight));
       // p[i].mouseOver(hhh);
       // p[i].mouseOut(unhigh);
       p[i].position(x,y);
       p[i].class('hide');
      // p[i].mouseClicked(spaz);
    };

//Anarchival Cinema
   var button = select("#btn");
   button.mouseClicked(appear);

//Kekes
   var button2 = select("#btn2");
   button2.mouseClicked(appear2);
//spacing
   var button3 = select("#btn3");
   button3.mouseClicked(spzzz);

   var button4 = select("#btn4");
   button4.mouseClicked(moveee);

   var button5 = select("#btn5");
   button5.mouseClicked(glideee);


    textOne = select('#one');
    textTwo = select('#kekes');


}

function appear(){
   for (var i = 0; i < p.length; i++){
  //    // p[i].mouseOver(hhh);
  //    // p[i].mouseOut(unhigh);
  //    // var x = floor(random(windowWidth));
  //    // var y = floor(random(windowHeight));
   p[i].position(x,y);
  //    p[i].removeClass('hide');
  //    p[i].addClass('show');
  //   // p[i].mouseClicked(spaz);
   };
  //this.position(x,y);
  textOne.removeClass('hide');
  textOne.addClass('green');
  //textOne.addClass('green');
}
function appear2(){
  // for (var i = 0; i < p.length; i++){
  //    // p[i].mouseOver(hhh);
  //    // p[i].mouseOut(unhigh);
  //    // var x = floor(random(windowWidth));
  //    // var y = floor(random(windowHeight));
  //    // p[i].position(x,y);
  //    p[i].removeClass('hide');
  //    p[i].addClass('show');
  //   // p[i].mouseClicked(spaz);
  // };
//  this.position(x,y);
  textTwo.removeClass('hide');
  textTwo.addClass('show');
}
function spzzz(){
  for (var i = 0; i < p.length; i++){
   p[i].addClass('spacing');
  };

}

function moveee(){
  for (var i = 0; i < p.length; i++){
    var x = floor(random(windowWidth));
    var y = floor(random(windowHeight));
     // p[i].mouseOver(hhh);
     // p[i].mouseOut(unhigh);
     p[i].position(x,y);
     //p[i].class('hide');
    // p[i].mouseClicked(spaz);
  };
}

function glideee(){
  for (var i = 0; i < p.length; i++){
    var x = x+1;
    var y = y+1;
     // p[i].mouseOver(hhh);
     // p[i].mouseOut(unhigh);
     p[i].position(x,y);
     //p[i].class('hide');
    // p[i].mouseClicked(spaz);
  };
}
