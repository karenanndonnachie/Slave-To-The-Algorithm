var song; //here we give a name to our song variable
var analyzer;
function preload(){
  song = loadSound('data/lucky_dragons_-_power_melody.mp3'); // here we link the sound file to our song variable
}
function setup() {
  createCanvas(windowWidth, windowHeight); // create full window canvas
  background(0); // background of canvas
  fill(0,255,0); // starting colour of our objects
  //song.loop();
  // set analyzer to check amplitude
  analyzer= new p5.Amplitude();
  analyzer.setInput(song);
  stroke(255);
}
function draw() { 
  background(0,1);
  var volume=analyzer.getLevel(); //this will extract the volume of the song we have sent to the analyzer
  volume=(volume*windowWidth)+60;
  ellipse(windowWidth/2,windowHeight/2,volume,volume); //object drawn to screen 
}
function mousePressed(){ //triggers on mousepress
  if (song.isPlaying()){ //checks if the song is playing!!
  song.stop(); // if it is, then stop the song
  song.noLoop();
  fill(0,255,0);
  } 
  else { fill(255,0,0); //changes fill to red
  song.play(); // if it isn't then play the song
  song.loop();
}
}
