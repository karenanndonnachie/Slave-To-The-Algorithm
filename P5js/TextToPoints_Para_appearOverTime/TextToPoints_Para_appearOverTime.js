/* 
p5js Paragraph layout with paragraph split and line-by-line 
text-to-points function and parametric margins/space settings.
by k.donnachie, for codeWords, 2020
*/
var font;
var points1=[];
var margin=50;
var topmargin = 50;
var para = 'The Earth is a very small stage in a vast cosmic arena. Think of the endless cruelties visited by the inhabitants of one corner of this pixel on the scarcely distinguishable inhabitants of some other corner, how frequent their misunderstandings, how eager they are to kill one another, how fervent their hatreds. Think of the rivers of blood spilled by all those generals and emperors so that, in glory and triumph, they could become the momentary masters of a fraction of a dot.';
var words = para.split(' ');
var wx, wy;
var typesize = 60;
var spacesize = 17; //width of space between letters
var linesize = 75; //height between lines
function preload() {
  font = loadFont('data/NotoSansMalayalam-Regular.ttf');   // this file must exist
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  textSize(typesize);
  strokeWeight(2); //point size (usually 1 or 2)
  //stroke(0); //point colour
  //noLoop();
  
}
function draw(){
  background(255);
  fill (0, 50); 
  wx = margin;
  wy = 50;
  for (let w=0; w<words.length;w++){ 
      if (wx+textWidth(words[w])<=width-margin){ //if the word fits, set the word
        points1 = font.textToPoints(words[w], wx, wy+50, typesize, 0.9);
        //insert timing delay here if you like…
        if (frameCount>10*w){ //timing delay using frameCount
          //noStroke(); //takes off outline of letters
          //text(words[w], wx, wy+50); //toggle off after debug...
          for (let i=0; i <points1.length; i++){
            stroke(255,0,0);
            point(points1[i].x, points1[i].y); //toggle on and off as needed
          }
      }
        wx+=textWidth(words[w])+spacesize;
      }
      else { //if it doesn't fit, return to the next line
        wx=margin;
        wy+=linesize;
        w--;
      }
  } 
}
