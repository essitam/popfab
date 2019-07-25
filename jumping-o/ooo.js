
  fontsize = 32;

let dancingWords = [];
var jumpingo;
var texts;
let duck;

function setup() {
  // createCanvas(710, 400);
  noCanvas();
  jumpi();
  // textSize(fontsize);
  // textAlign(CENTER, CENTER);
  
  // jumpi("a number of propositions (11, or infinite) for fabulation");
  // createElement('br');createElement('br');
  // jumpi("⛶.  Fabulation always emerges with sparks, des éclats or what Adam Wolfond adequately describes as the \"blast of the whole... forging like a mass inside my eyes.”. Fabulation is without a doubt immediate, the in-forming of forces. It thrives in and generates more appetite, always more. Appetition. Activation. ~ More life, now!");
  // createElement('br');createElement('br');
  // jumpi("Becoming pop is when the whole so-called insides of a bodying burst out from the body in a rushed plop and at the same time, get uncontained and try with all the machines to pretend containment not truly for others but mostly for the operation’s sake. Like when in the middle of reading or in the middle of walking or let’s say in the middle of wandering, ‘something’ crosses, the suggestion of a universe flashes itself out and bathes the whole fielding into a non-end-non-beginning plane that swallows it all, provoking the inevitable involuntary burst, in the feeling of burst, uncontainment becomes irresistible for itself and pushes at great speed in order to reach and join the rays of the overtaken field. Like when a bite of a mango invades all experience and leaves room for nothing else or like when a ray of purpleness cuts through the gut of the universe and swallows perception into no-longer perceptibility but mere feeling lives.");
  // createElement('br');createElement('br');
  // jumpi("⛶.  Fabulation moves in the continuous exploration of the event, which is to say in the event’s unfolding. Like Tito says “ “. This exploration is always in drift, that is, in play with all the tendencies (as virtual poles) that enter the event, making them mix but never confusing them. The nip is play and fight at the same time, or walking out with slippers in the morning at night.");
  // createElement('br');createElement('br');
  // jumpi("A glaze of infinite orange metal enamel cup sparks all experience, inflecting (reflect forward, as Bateson would say) novel universes in its wake");
  // createElement('br');createElement('br');
  // jumpi("⛶.  Fabulations move with creatures, that is, tiny creations that move on themselves. These tiny creations can vary from conceptual persona to aesthetic figures to observers, and go across concepts, sensations, and functions. A bit like what Blanchot said about Nietzsche, “[he] possesse[s] a nearly infinite capacity for precise ideas that were separate and rigorously formulable, each of them alive in the manner of a tiny organism.” (xx) Tiny organisms as creations, that is fabulatory in pop populating, whichever shape they take. They are all alive in spirit -- abstractions are very living! they are intensificators, operators of the virtual.");
  // createElement('br');createElement('br');
  // jumpi("⛶.  Fabulation populates in always in tending to the minor, that is, it concerns the population of fields, zones, planes with virtual modes of existence. “It is just that there is not a single mode of existence for all the beings that pop-ulate the world.” (Lapoujade ) If fabulation ‘fills’ by populating, it does so in the open sense of the more than: it welters, spills, and leaks because its filling is not so much the content but what exceeds it. That splash of soup that went out of the pot.");
  // createElement('br');createElement('br');
  // jumpi("a");
  // createElement('br');createElement('br');
  // jumpi("a");
  // createElement('br');createElement('br');
  // jumpi("a");
  // createElement('br');createElement('br');
     }
function jumpi() {
        // var ducki = select('eleven')
        // ducki.addClass('text').hide();
       // createP(duck).addClass('text').hide();
        
        const texts = selectAll('.text');
        

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

// function draw() {
//   // background(160);

//   // Set the gap between letters and the left and top margin
//   let gap = 50;
//   let margin = 10;
//   // translate(margin * 4, margin * 4);

//   // Set the counter to start at the character you want
//   // in this case 35, which is the # symbol
//   let counter = 35;

// }
