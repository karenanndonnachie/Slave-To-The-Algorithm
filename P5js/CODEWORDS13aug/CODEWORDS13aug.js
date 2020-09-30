//codewords workshop Thursaday 13 August
//Code by karen ann donnachie
// typeface by Ollie Schwan, 2019

function preload() {
  inconsolata = loadFont('data/inconsolata.otf');
  DIN = loadFont('data/DIN.otf');
  coldera=loadFont('data/Coldera.otf');
}
var spin=0;
var letterSize=24;
function setup() {
  createCanvas(600,600);
  background(240);
  fill(0);
  angleMode(DEGREES);
  textAlign(CENTER);
  frameRate(15);
}
function keyPressed(){
background(mouseX/2,mouseY/2,mouseX+mouseY/5);
}

function draw() {
  fill(0); //text ink color!
  translate(300,300);
  rotate(spin);
  textSize(letterSize);
  textFont(coldera);
  text ('THIS TEXT IS SPINNING', 0,0);
  spin+=map(mouseX,0,600,-3,3); //this will make the mouseX affect the spin direction and speed
  letterSize=map(mouseY,0,600,8,72);
  stroke(0);
  background(240,30);
}
