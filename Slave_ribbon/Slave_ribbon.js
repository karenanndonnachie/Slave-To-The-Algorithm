/*
Original Textchain codepen by Kirk Israel https://codepen.io/kirkjerk/pen/rxgdox
elaborated by k.donnachie for Slave to the Algorithm 2020
*/
let font;
let points, rand, newArtist, nameBounds, lineX, lineY, pg, BG, tSize;
let bounds, word, size, heroImages;
let students=[];
let names=[];
let links=[];
var x = [];
var y = [];
var segLength = 30;
var numSegs = 10;
var CHAINDETAILS = {
  text:"Slave to the Algorithm",
  textR:255,
  textG:0,
  textB:0,
  textsize:50,
  textspacing:1
};
function preload(){
  heroImages = ['data/Sylvain.jpg', 'data/Alice.jpg', 'data/Sam.jpg']; // 'data/louis.jpg', 'data/Maddy.jpg'
  //for (let i=0; i<heroImages.length; i++){
    BG=loadImage(random(heroImages));
  //}
 font= loadFont("data/HelveticaNowDisplay.otf");
}

function setup(){
    var canvas = createCanvas(windowWidth, windowHeight);
    pg=createGraphics(width, height);
    pg.background(255,0);
    pg.attribute("position", "absolute");
    pg.attribute("z-index","99");
    canvas.parent("canvasParent");
    strokeWeight(2);
    tSize=width/24;
    textSize(tSize);
    lineX=0-tSize;
    lineY=tSize;
    textAlign(CENTER,CENTER);
    students=['Slave to the Algorithm', 'Vinny Bartels', 'Nicholas Winter', 'Louis Eastaugh', 'Michael Lam', 'Alice Yu', 'Chantel  Lai', 'Connor McNamara', 'Luka Jerkovic', 'Chae Young Shin', 'Yang Hu', 'Shidi  Xue', 'Sam Koesterke', 'Hun Lee', 'Jinni Low', 'Yerim Kim', 'Kaiqi Chen', 'Hao Xiao', 'Tzu Yen Kung', 'Kawai MAK', 'Sylvain Girard', 'Shuchen  Wu', 'Maddy Bryson', 'Yasmin Harith Brewer', 'Minh Anh Nguyen', 'Shane Lee', 'yang hu'];
    links=['digbeyond.com/slave', 'Vinny Bartels', 'Nicholas Winter', 'Louis Eastaugh', 'Michael Lam', 'Alice Yu', 'Chantel  Lai', 'Connor McNamara', 'Luka Jerkovic', 'Chae Young Shin', 'Yang Hu', 'Shidi  Xue', 'Sam Koesterke', 'Hun Lee', 'Jinni Low', 'Yerim Kim', 'Kaiqi Chen', 'Hao Xiao', 'Tzu Yen Kung', 'Kawai MAK', 'Sylvain Girard', 'Shuchen  Wu', 'Maddy Bryson', 'Yasmin Harith Brewer', 'Minh Anh Nguyen', 'Shane Lee', 'yang hu'];
    for(s=0; s<students.length; s++){
      newArtist = new Artist(students[s], random(0, width-50), random(0, height-50), links[s]);
      names.push(newArtist);  
    }
    cursor(CROSS);
    reload();
};
function draw(){
   background(255, 100);
   //if (width>height){ image(BG, 0, 0, width, width/BG.width * height);}
   //else { image(BG, 0, 0, height/BG.height*BG.width, height); tSize=width/16;}
   lineX=tSize;
   lineY=tSize;
   for (let s=0; s<students.length; s++){
    //names[s].update();
    //names[s].display();
  }  
  fill(CHAINDETAILS.textR,CHAINDETAILS.textG,CHAINDETAILS.textB);
  dragSegment(0, mouseX, mouseY);
   for(var i=0; i < CHAINDETAILS.text.length-1; i++) {
     dragSegment(i+1, x[i], y[i]);
    } 
    image(pg,0,0);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
class Artist{
  constructor(name, posX, posY, link){
    this.name = name;
    this.x= posX;
    this.y= posY;
    this.link=link;
    this.ahref=createA(this.link, name, '_blank'); 
    this.bounds = font.textBounds(this.name, 0, 0, tSize);
    //this.ahref.attribute('onclick', 'return confirm(\"Are you sure ?\")');
  }
  update() {
    //rand=random(-3,3);
    //if (width-50 > this.x+rand > 0){this.x +=rand;}
    //rand=random(-3,3);
    //if (height-14 > this.y+rand > 20){this.y +=rand;}
  }
  display() {
    fill(0);
    textSize(tSize);
    if (lineX+tSize+this.bounds.w > width*0.98){
      lineX=tSize;
      lineY+=tSize*1.1;
    }
    else if (lineX == tSize){}
    else {
      //lineX+=tSize;
    }
    this.ahref.position(lineX, lineY);
    this.ahref.style("font-size", tSize);
    this.ahref.style("z-index", "0");
    this.ahref.style("font-weight", "bold");
    if (mouseX > lineX && mouseX < lineX + this.bounds.w && mouseY < lineY+tSize && mouseY > lineY-5 ){ this.ahref.style("color", "grey");}
    else {this.ahref.style("color", "black");}
    this.ahref.style("font-family", "Helvetica, Arial, Sans-serif");
    if (this.name == 'Grid View' | this.name == 'Slave to the Algorithm' | this.name == 'House of Leaves'){this.ahref.style('color', 'green');}
    lineX+=this.bounds.w+tSize;
    //else {
    //this.ahref.style('color', 'white');}
    //this.ahref.mousePressed(goLink);
    //text (this.name, this.x, this.y);
    
  }
}
/**********************
* TEXTCHAIN FUNCTIONS */
function segment(c,w,x,y,a){
  push();
  translate(x, y);
  rotate(a+PI);
  //line(0, 0, -w, 0);
  //ellipse(0,0,10,10);
  
  text(c,0,0);
  pg.text(c,0,0);
  pop();
}

function reload(){
  // eval("CHAINDETAILS = "+document.getElementById('setup').value);
  stroke(CHAINDETAILS.textR,CHAINDETAILS.textG,CHAINDETAILS.textB);
  fill(CHAINDETAILS.textR,CHAINDETAILS.textG,CHAINDETAILS.textB);
  //fill(map(mouseX, 0, width, 0, 255), map(mouseY, 0, width, 0, 255), map((mouseX+mouseY), 0, width+height, 0, 255));
  for(var i=0; i < CHAINDETAILS.text.length; i++) {
      x.push(width/2);
      y.push(height/2);
   }
 textSize(CHAINDETAILS.textsize);
}
function dragSegment(i, xin, yin){
  var dx = xin - x[i];
  var dy = yin - y[i];
  var angle = atan2(dy,dx);
  
  var thisLetter = CHAINDETAILS.text[i];
  var prevLetter = CHAINDETAILS.text[i-1];
  if(! prevLetter) {
    prevLetter = " ";
  }
  var w = (
     textWidth(thisLetter)
     +
     textWidth(prevLetter)
     ) * (CHAINDETAILS.textspacing / 2);
  x[i] = xin - cos(angle) * w;
  y[i] = yin - sin(angle) * w;
  segment(CHAINDETAILS.text[i],w,x[i],y[i],angle);
}
