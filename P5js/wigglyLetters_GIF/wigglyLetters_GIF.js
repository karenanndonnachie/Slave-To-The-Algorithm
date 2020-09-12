var letter,size,rand,speed,xposition, yposition;
var wigglyLetters = [];
var canvas;
var gifLength = 180;
function setup() {
  var p5Canvas = createCanvas(windowWidth/2,windowHeight/2);
  canvas = p5Canvas.canvas;
  background(0);
  textSize(32);
  textFont("Times");
  xposition = 0;
  yposition = 50;
  capturer.start();
  
}
function draw() {
  fill(255);
  background(0);
  //each of the wiggly letters that we have
  for (var i=0; i<wigglyLetters.length ; i++){
    wigglyLetters[i].wiggle();
    wigglyLetters[i].display();
  }
  if (frameCount < gifLength) {
    capturer.capture(canvas);
  } else if (frameCount === gifLength) {
    capturer.stop();
    capturer.save();
  }
}
function mousePressed(){
   rand = int(random(65,160));
   letter = char(rand);
   size= int(random(6,100));
   speed=int(100-size)/4;
   wigglyLetters.push(new Wiggle (mouseX, mouseY, size, letter, speed));
}
function keyTyped(){
  wigglyLetters.push(new Wiggle (xposition, yposition, 54, key, 1));
  xposition+=54;
}
function keyPressed(){
  if (keyCode === LEFT_ARROW){
   wigglyLetters=[];
   xposition = 0;
   yposition = 50;
  }
  else if (keyCode === RIGHT_ARROW) {
   yposition +=60;
   xposition = 0;
  }
  else if (keyCode === DOWN_ARROW) {
   capturer.capture(canvas);
  }
  else if (keyCode === UP_ARROW) {
   capturer.stop();
   capturer.save();
  }
}
class Wiggle {
 constructor(x, y, size, letter, speed){
   this.x= x;
   this.y= y;
   this.textSize=size;
   this.letter=letter;
   this.speed=speed;
 }
 wiggle() {  //randomwalker
   // x+=4  add 4 to the variable
   this.x += random(-this.speed, this.speed);
   this.y += random (-this.speed, this.speed);
   if (this.x <0){
     this.x += this.speed;
   }
 }
 display() {
   textSize(this.textSize);
   text(this.letter, this.x, this.y);
 }
}
