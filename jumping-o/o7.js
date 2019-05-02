var txt;
var regex;

function setup(){
  var txt = "The jumping o’s activated by the humidity-dust-meeting are the refusing of words or worlds appearing as solid units, uttering gasps and chuckles that are not-yet articulated blocks of sounds, colours, movements, sensations. An o quickly moves into a dot, just with the blink of an eye, with the falling of sand out of a stone with holes, with the stutters that will become the germs for new stories. The dots when just-not-completely-sure what is being said, written, heard, seen, felt, and even not sure who is talking, writing, hearing, seeing, feeling. An inarticulation that is full potential. For that stutter, in all its suspension, utters that which is superfluous, in need of a pause, invisible, too painful to tell, indefinable, or able to understood without the need of mediation. It slurps the event and sweeps it up into what is not yet there but already, or what was already but not anymore. What was felt in the slurping of the dots and to relay that feeling, to feel the felt, again, differently. Three dots of rhythmic suspension like three drops of liquid. Snot, rain, sweat, tears, spit, sips, drops, licks, coughs, puddles, drips, slurps, ink. Flows of liquids to attune to that which is left out, but still part of it. Like a leakage. Shifts, slippages, such slidings making gaps, rends, cuts. Not an absence though, perhaps an unwrapping.";
  var regex = /\w/g;
  var newString = txt.replace(regex, replacer);
  var results = txt.match(regex);
  console.log(txt);
  // createP(txt);


    function replacer() {
      return 'o'
    }

    var l =   createP(newString);
    l.class('spacing');
}
