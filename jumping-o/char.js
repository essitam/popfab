
  fontsize = 32;

let dancingWords = [];
var jumpingo;
var texts;



function setup() {
  createCanvas(710, 400);
  textSize(fontsize);
  textAlign(CENTER, CENTER);

        createP(
          'I learn in this Letter, that Don Peter of Aragon, ' +
            ' comes this night to Messina'
        ).addClass('text').hide();

        texts = selectAll('.text');

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


     }


     function becomeApple(){
       this.addClass('growing');
     }
     function becomeApple2(){
       this.addClass('spacing');
     }

function draw() {
  background(160);

  // Set the gap between letters and the left and top margin
  let gap = 50;
  let margin = 10;
  // translate(margin * 4, margin * 4);

  // Set the counter to start at the character you want
  // in this case 35, which is the # symbol
  let counter = 35;

}
