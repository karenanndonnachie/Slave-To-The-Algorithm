//this sketch will allow us to 'paint with type'
//Slave to the Algorithm, August 14 2020
//by Karen ann Donanchie

PFont myfont; //initiating a font variable
int randchar, randSize; //initiating our variables
char letter; // 

color randColorR,randColorG, randColorB;
void setup(){
size (500,500);
background(200);
myfont=loadFont("Harrington-60.vlw");//this font needs to be in your data folder (use the "create font")
}

void draw(){
  fill(0);
  textFont(myfont);
  randchar=int(random(120)+1);//this will pluck a random character out of our 'type pack'
  randSize=int(random(60)+1);
  letter=char(randchar);
  textSize(int(randSize)+1);
  if (mousePressed){
    text(letter,mouseX,mouseY);
  }
}

void keyPressed(){
  randColorR=int(map(mouseX, 0,width,0,255));
  randColorG=int(map(mouseY, 0,height,0,255));
  randColorB=int(map(mouseX+mouseY,0,width+height,0,255));
  background(randColorR,randColorG,randColorB);
}
