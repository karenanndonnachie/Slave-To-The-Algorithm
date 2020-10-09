function preload() {
// Ensure the .ttf or .otf font stored in the assets directory is loaded in preload(){} before setup() and draw()
  font = loadFont('data/inconsolata.otf');
  font2 = loadFont('data/DIN.otf');
}
var spin=0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background (255);
  textFont (font2, 200); 
  //textSize(16);
  textAlign (CENTER,CENTER);
  //angleMode(DEGREES);
  frameRate(10);
}


function draw() {
  fill(0);
  translate (width/2,height/2);
  rotate(spin);
  text('hello world',0,0);
  //spin+=int(mouseX/100);
  fill (255, 80);
  //rect (0,0,400,400);
}
