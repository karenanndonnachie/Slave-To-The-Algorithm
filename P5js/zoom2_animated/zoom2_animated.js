var heads=[];
var colours=[];
var img, img2, randx, randscale, randscale2, randy, randc, imgx, imgy, img2x, img2y, direction2x,direction2y,directionx, directiony;
var myText='you are anywhere';
var words=[];
var sentence='';
function preload(){
  img=loadImage('data/1.png');
  img2=loadImage('data/1.png');
  img3=loadImage('data/1.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 100);
  background (0,100,100);
  imgx= random(width);
  imgy= random(height);
  img2x= random(height);
  img2y= random(width);
  directionx =random(-5,5);
  directiony =random(-5,5);
  direction2x =random(-5,5);
  direction2y =random(-5,5);
  randx=random(width-200)+100; //keeps it within margins
  randy=random(height-200)+100; //keeps it within margins
  randscale = random(0.1,0.5);
  randscale2 = random(0.1,0.8);
  textAlign(CENTER, CENTER);
  randc = random(100);
  words=myText.split(' ');
  img2.filter(GRAY);
  img3.filter(INVERT);
}

function draw() {
  background(randc,100,100);
  textSize(30);
  text(sentence, randx, randy);
  imgx+= directionx;
  imgy+= directiony;
  img2x+= direction2x;
  img2y+= direction2y;
  push();
  scale(randscale,randscale);
  image(img, imgx, imgy);
  pop();
  textSize(120);
  text('REIMAGINE', width/2, height/2);
  push();
  scale(randscale2,randscale2);
  image(img2, img2y, img2x);
  pop();
}


function keyTyped(){
  if (key == 'c') {
    randc = random(100);
    sentence='';
    var shwords=shuffle(words);
    for (var w=0; w<shwords.length; w++) {
    sentence += (shwords[w] +' ');
  }
  directionx =random(-5,5);
  directiony =random(-5,5);
  direction2x =random(-5,5);
  direction2y =random(-5,5);
  randscale = random(0.1,0.5);
  randscale2 = random(0.1,0.8);
  randx=random(width-200)+100; //keeps text within margins
  randy=random(height-200)+100; //keeps text within margins
  }
}
