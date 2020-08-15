//playing with text
PFont helvNow;
float spin=0;
void setup(){
  size(500,500);
  background(255);
  fill(0);
  smooth();
  helvNow=loadFont("Serif-60.vlw");
  textAlign(CENTER,CENTER); //horizontal align,vertical align
  frameRate(10); //this sets the animation speed (frames per second)
}
void draw(){
  fill(0);
  pushMatrix(); //this stores the style changes so they can be 'reversed' later
  translate(int(width/2),int(height/2));
  spin+=map(mouseX, 0,width, -0.1,0.1); //this controls the rotation value (mapped to mouseX)
  rotate(spin);
  textFont(helvNow);
  textSize(52);
  text("Slave to The Algorithm",0,0); // text(font, X, Y)
  fill(255,15);
  //noStroke();
  translate(-width/2,-height/2);//walks back translate to top left
  rect(0,0,width,height);
  popMatrix(); //this 'reverses' any settings made since 'pushMatrix()' set this higher if you don't want the rect ouline to show.
}
void keyPressed(){
  background(255); //clears the background
}
