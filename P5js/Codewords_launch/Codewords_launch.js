let font;
let points;
let bounds, word, size;

function preload() {
  font = loadFont('data/HelveticaNowDisplay.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  word = 'CodeWords';
  size = 200;
  points = font.textToPoints(
    word, 0, 0, size, {
      sampleFactor: 0.75,
      simplifyThreshold: 0
    });

  bounds = font.textBounds(
    word, 0, 0, size);

  cursor(CROSS);
  fill(255, 127);
  noStroke();
}

function draw() {
  background(0);
  stroke(51);
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);
  push();
  textSize(24);
  textFont(font);
  textAlign(CENTER,CENTER);
  fill(255);
  noStroke();
 text('SHOWCASE LAUNCH 15 OCTOBER 2020', width/2, 4*height/5);
 pop();
  //noStroke();
  
  let centerDist = dist(mouseX, mouseY, width / 2, height / 2);

  let transparency = map(centerDist, 0, width / 2, 200, 50);
  transparency = constrain(transparency, 50, 200);
  fill(255, transparency);
  
  let jiggle = map(centerDist, 0, width, 1, 300);

  translate((width - abs(bounds.w)) / 2, 
            (height + abs(bounds.h)) / 2);
  
//   stroke(255, 0, 0);
//   rect(bounds.x, bounds.y, bounds.w, bounds.h);
  
//   console.log("x: " + bounds.x 
//               + ", y: " + bounds.y
//               + ", w: " + bounds.w
//               + ", h: " + bounds.h);
  
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    stroke(255);
    if (mousePressed) {
      var dotSize=int(random(30));
      ellipse(p.x + jiggle * randomGaussian(), p.y + jiggle * randomGaussian(), dotSize, dotSize);
    }
    else{
      line(p.x + jiggle * randomGaussian(), p.y + jiggle * randomGaussian(), p.x, p.y );
    }
  }
  
  //noLoop();
}
//function keyTyped() {
//  word = key;
//}
