//working with midform text
var myText
function preload() {
  //myText = loadStrings('data/text.txt');
}
var myText= "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people’s hats off—then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball.";


function setup() {
  createCanvas(windowWidth, windowHeight);
  background (255);
  textSize (24);
  noStroke();
  textFont("Times");
  textAlign(CENTER);
  fill(0);
}


function draw() {
  background(255);
  textLeading(sin(frameCount*0.01)*50);
  //textLeading(mouseY/5);
  text(myText, int(windowWidth/8), windowHeight/8, int(windowWidth/4*3), windowHeight);
  
}
