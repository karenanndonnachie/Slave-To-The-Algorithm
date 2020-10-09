function preload() {
// Ensure the .ttf or .otf font stored in the assets directory is loaded in preload(){} before setup() and draw()
  font = loadFont('data/inconsolata.otf');
  font2 = loadFont('data/DIN.otf');
}
var spin=0;

function setup() {
  createCanvas(800,600);
  background (255);
  textFont (font2, 32); 
  //textSize(16);
  textAlign (CENTER);
  angleMode(DEGREES);
  frameRate(10);
}


function draw() {
  fill(0);
  translate (400,300);
  rotate(spin);
  text('hello world',0,0);
  spin+=int(mouseX/100);
  fill (255, 80);
  rect (0,0,400,400);
}
