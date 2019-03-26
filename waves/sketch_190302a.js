let yoff = 0.0; // 2nd dimension of perlin noise

function setup() {
  createCanvas(710, 400);
}

function draw() {
  background(60, 147, 255);

  fill(66, 134, 244);
  // We are going to draw a polygon out of the wave points
  textSize(28)
  text('the jumping o really comes with the letter it comes with: not after and not before, since when I hit ctrl+T for a new tab on my browser, then often it performs the command that comes with ctrl+o, which is to open a file. that seems to suggest the o comes before the t. however, when I write ‘t’, then if the o appears (because it is never sure if it will – it is more likely to when the laptop is warmed up from either running too many programmes or being in a warm room) it will appear after the ‘t’, thus writing: to.', 0, 0, 710, 400);
  beginShape();

  let xoff = 0; // Option #1: 2D Noise
  // let xoff = yoff; // Option #2: 1D Noise

  // Iterate over horizontal pixels
  for (let x = 0; x <= width; x += 10) {
    // Calculate a y value according to noise, map to

    // Option #1: 2D Noise
    let y = map(noise(xoff, yoff), 0, 1, 138, 500);

    // Option #2: 1D Noise
    // let y = map(noise(xoff), 0, 1, 200,300);

    // Set the vertex
    vertex(x, y);
    // Increment x dimension for noise
    xoff += 0.04;
  }
  // increment y dimension for noise
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}
