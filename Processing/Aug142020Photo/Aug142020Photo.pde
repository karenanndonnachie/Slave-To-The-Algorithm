//sketch 14th august 2020
PImage photo;

void setup(){
size(480,480);
background (0);
imageMode(CENTER);
photo = loadImage("karen_fbProfile.jpg");
}

void draw(){
image (photo,240,240); //this loads the image to fill the sketch
color pix=photo.get(mouseX,mouseY); //this gets the color value from where my mouse is
fill (pix); //this updates the color of the fill() to the pixel values as set by color
noStroke(); //this removes the outline of the circle
ellipse(mouseX,mouseY,60,60); //this draws the circle
}
