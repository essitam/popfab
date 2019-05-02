
  fontsize = 32;

let dancingWords = [];
var jumpingo;
var texts;



function setup() {
  createCanvas(710, 400);
  textSize(fontsize);
  textAlign(CENTER, CENTER);

        createP(
        "The jumping o’s activated by the humidity-dust-meeting are the refusing of words or worlds appearing as solid units, uttering gasps and chuckles that are not-yet articulated blocks of sounds, colours, movements, sensations. An o quickly moves into a dot, just with the blink of an eye, with the falling of sand out of a stone with holes, with the stutters that will become the germs for new stories. The dots when just-not-completely-sure what is being said, written, heard, seen, felt, and even not sure who is talking, writing, hearing, seeing, feeling. An inarticulation that is full potential. For that stutter, in all its suspension, utters that which is superfluous, in need of a pause, invisible, too painful to tell, indefinable, or able to understood without the need of mediation. It slurps the event and sweeps it up into what is not yet there but already, or what was already but not anymore. What was felt in the slurping of the dots and to relay that feeling, to feel the felt, again, differently. Three dots of rhythmic suspension like three drops of liquid. Snot, rain, sweat, tears, spit, sips, drops, licks, coughs, puddles, drips, slurps, ink. Flows of liquids to attune to that which is left out, but still part of it. Like a leakage. Shifts, slippages, such slidings making gaps, rends, cuts. Not an absence though, perhaps an unwrapping."

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
