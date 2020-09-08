var song; // here we give name to our song variable
var analyzer;
//function preload (){
//  song = loadSound ('data/beat.mp3');  
//}
// preload is used for larger files usually 
function setup() {
  song = loadSound ('data/beat.mp3'); // here we link our song to our variable
  createCanvas (windowWidth, windowHeight); // create full window canvas
  background (0); // background of canvas
  fill (0,255,0); // starting colour of our objects
  song.loop();
  //set analyzer to check amplitude
  analyzer = new p5.Amplitude ();
  analyzer.setInput (song);
  stroke (255);

}

function draw() {
  background (0,50);
  var volume=analyzer.getLevel(); // this will exact the volume of the song that we have sent to the volumizer of the song
  volume=(volume*200)+10; //using the volumn in the song as a numeric value. We are not chnaging the volume of the song
  ellipse (windowWidth/2, windowHeight/2, volume, volume); // object drawn to screen
  
}

function mousePressed (){ //triggers on mousepress
  if (song.isPlaying()){ //checks if the song is playing
    song.stop(); // if it is, then stop the song
    song.noLoop ();
    fill (0,255,0);
  } 
  else { fill (255, 0, 0); //changes fill to red
song.play();  //if it isn't then play the song
  song.loop ();
} 
}
