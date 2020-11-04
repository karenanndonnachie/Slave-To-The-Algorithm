/*
Original Textchain codepen by Kirk Israel https://codepen.io/kirkjerk/pen/rxgdox
elaborated by k.donnachie for Slave to the Algorithm 2020
*/
let font, cursorImage;
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
  //cursorImage = loadImage('data/CURSER_150px.png');
  //for (let i=0; i<heroImages.length; i++){
    //BG=loadImage(random(heroImages));
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
    if (width>height){
      tSize=width/24;
    }
    else {tSize = height/24;}
    textSize(tSize);
    lineX=0-tSize;
    lineY=tSize;
    textAlign(CENTER,CENTER);
  //'Maddy Bryson', 'https://mabryson.github.io/'
  students=['Slave to the Algorithm', 'Michael Lam', 'Sam Koesterke', 'Louis Eastaugh', 'Sylvain Girard', 'Hao Xiao', 'Shane Lee', 'Alice Yu', 'Yasmin Harith Brewer', 'Hun Lee', 'Shidi Xue', 'Yerim Kim', 'Chae Young Shin', 'Connor McNamara', 'Yang Hu', 'Nicholas Winter', 'KaiQi Chen', 'Vincent Bartels', 'Luka Jerkovic', 'Jinni Low', 'Wu Shuchen', 'Evie Kung', 'Kawai Mak', 'Kathy Nguyen'];    
    links=['http://digbeyond.com/slavetotheAlgorithm/list.php','https://mikewlam.github.io/visceral-nonsense/projectfile/index.html', 'https://samkoesterke.github.io/slave-1/IF_BY_ARTEFACT_YOU_MEAN__A_DUSTY_OBJECT/', 'https://louiseastt.github.io/SURFBOR3D/generator/', 'https://sylvain-girard.github.io/Slave2theAlgo2020/week12/Chromaesthetor/', 'https://kasperhao.github.io/Slave-to-the-Algorithm/Dancing_match_2020_10_12_11_15_10/', 'https://shanelee102.github.io/', 'https://aliceyu1111.github.io/Slave-to-the-Algorithm/Week%2012/NotifyMyAddiction/', 'https://yasminhb.github.io/', 'https://hunoong.github.io/Hun_Lee/The_Beauty_of_the_Eaten_Path/', 'https://www.openprocessing.org/sketch/988332', 'https://yerim-kim.github.io/slave2algorithm/', 'https://s3661656.github.io/slave-to-algorithm/', 'https://connor-mcnamara.github.io/Slave-to-the-algorithm/Articulation_/', 'https://yanghu199.github.io/slave-to-the-algorithm./homepage', 'https://nicholaswinter.github.io/slave2al/FinalSubmission/hey/index.html', 'https://youtu.be/apVpvDNcP1o', 'https://v1nnyb4rt3l5.github.io/Slave-To-The-Algorithm-/Week%2012./MyTypeGenerator/index.html', 'https://arrthuzdkdkdk.github.io/algorithmslave/jazzcats2/', 'https://jinnilow.github.io/slavetoalgorithm/MEMCO_JINNI/', 'https://shuchenwuu.github.io/Slave-to-algorithm//Processing/Emotion_Printer/', 'https://evie102214.github.io/slave_to_the_algorithm_2020/homepage_ass3/', 'https://github.com/GarveyMak123/Slave-to-the-Algorithm/tree/master/StarField', 'https://kathyminhanh97.github.io/slavetothealgorithm/showcase'];
    for(s=0; s<students.length; s++){
      newArtist = new Artist(students[s], random(0, width-50), random(0, height-50), links[s]);
      names.push(newArtist);  
    }
    cursor(CROSS);
    reload();
};
function draw(){
  push();
  let m=minute();
  colorMode(HSB, width);
  for (let j = 0; j < width; j++) {
    stroke(m/60*width,j, 3*width/4);
    line(j, 0, j, height);
  }
  pop();
   background(255, 100);
   //image (BG, width*0.1, width*0.1, width*0.8, width/BG.width*0.8 * height);
   //if (width>height){ image(BG, 0, 0, width, width/BG.width * height);}
   //else { image(BG, 0, 0, height/BG.height*BG.width, height); tSize=width/16;}
   lineX=tSize;
   lineY=tSize;
   for (let s=0; s<students.length; s++){
    names[s].update();
    names[s].display();
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
  if (width>height){
      tSize=width/24;
    }
    else {tSize = width/18;}
}

class Artist{
  constructor(name, posX, posY, link){
    this.name = name;
    this.x= posX;
    this.y= posY;
    this.link=link;
    this.ahref=createA(this.link, name, '_blank'); 

    //this.ahref.attribute('onclick', 'return confirm(\"Are you sure ?\")');
  }
  update() {
    this.bounds = font.textBounds(this.name, 0, 0, tSize);
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
    //this.ahref.style("background-color", "#FFF");
    this.ahref.style("font-weight", "bold");
    if (mouseX > lineX && mouseX < lineX + this.bounds.w && mouseY < lineY+tSize && mouseY > lineY-5 ){ this.ahref.style("color", "grey");}
    else {this.ahref.style("color", "black");}
    this.ahref.style("font-family", "Helvetica, Arial, Sans-serif");
    if (this.name == 'Grid View' | this.name == 'Slave to the Algorithm' | this.name == 'House of Leaves'){this.ahref.style('color', 'blue'); lineX+=tSize;}
    if (this.name == 'Yasmin Harith Brewer' | this.name == 'Sylvain Girard' ){
      lineX+=(tSize/2);
    }
    lineX+=this.bounds.w;
    lineX+=(tSize*2.2/2);
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
  
  //pg.text(c,0,0);
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
