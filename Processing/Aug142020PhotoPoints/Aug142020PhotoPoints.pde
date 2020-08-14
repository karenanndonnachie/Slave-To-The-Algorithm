//sketch 14th august 2020
PImage photo;
int smallPoint, largePoint, x,y,dotSize,t;
color pix;
float pointillise;
void setup(){
size(480,480);
background (120);
imageMode(CENTER);
photo = loadImage("karen_fbProfile.jpg");
smallPoint=1;
largePoint=100;
frameRate(60);
}

void draw(){
//image (photo,240,240); //this loads the image to fill the sketch
x=int(random(photo.width)); // finds random() point across the sketch (x)
y=int(random(photo.height)); 
pointillise =map(mouseX, 0, width, smallPoint, largePoint); //map (input, lowest value in, highest value in, lowest value out, highest value out)
dotSize=int(pointillise);
pix=photo.get(x,y); //this gets the color value from where my mouse is
t=int(random(256));
strokeWeight(3);
//stroke (pix,t); // this updates the color of the fill() to the pixel values
fill(pix,t); 
noStroke(); // this removes the outline of the circle 
ellipse (x,y,dotSize,dotSize);
//line(x,y,x+dotSize,y+dotSize); // this draws the lines
}
