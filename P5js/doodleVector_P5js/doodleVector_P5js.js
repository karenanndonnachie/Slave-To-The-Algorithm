
// All the paths
var paths = [];
var particles= [];
// Are we painting?
let painting = false;
// How long until the next circle
let next = 0;
// Where are we now and where were we?
let current, howMany;
let previous;

function setup() {
  createCanvas(windowWidth, windowHeight);
  current = createVector(0,0);
  previous = createVector(0,0);
  howMany =0;
  textSize(36);
  textFont("Helvetica");
};

function draw() {
  background(200);
  
  // If it's time for a new point
  if (millis() > next && painting) {

    // Grab mouse position      
    current.x = mouseX;
    current.y = mouseY;

    // New particle's force is based on mouse movement
    let force = p5.Vector.sub(current, previous);
    force.mult(0.02);

    // Add new particle
    paths[paths.length - 1].add(current, force);
    
    // Schedule next circle
    next = millis() + random(100);

    // Store mouse values
    previous.x = current.x;
    previous.y = current.y;
  }

  // Draw all paths
  for( let i = 0; i < paths.length; i++) {
    paths[i].update();
    paths[i].display();
  }
  fill(0);
  noStroke();
  text(howMany,50,50);
  howMany=0;
}

// Start it up
function mousePressed() {
  next = 0;
  painting = true;
  previous.x = mouseX;
  previous.y = mouseY;
  paths.push(new Path());
  
}

// Stop
function mouseReleased() {
  painting = false;

}
function keyPressed(){
   if (key == ' '){
   paths = [];
   
  }
}


// A Path is a list of particles
class Path {
  constructor() {
    this.particles = [];
    this.hue = random(100);
  }

  add(position, force) {
    // Add a new particle with a position, force, and hue
    this.particles.push(new Particle(position, force, this.hue));
  }
  
  // Display path
  update() {  
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].update();
      
    }
  }  
  // Display path
  display() { 
    // Loop through backwards
    howMany+=this.particles.length;   
    for (let i = 1; i <this.particles.length; i++) {
      // If we shold remove it   
        this.particles[i].display(this.particles[i-1]);    
    }  
  }  
  
}
// Particles along the path
class Particle {
  constructor(position, force, hue) {
    this.position = createVector(position.x, position.y);
    this.velocity = createVector(force.x, force.y);
    this.drag = 0.95;
    this.lifespan = 255;
  }
  update() {
    // Move it
    this.position.add(this.velocity);
    // Slow it down
    this.velocity.mult(this.drag);
    // Fade it out
    this.lifespan--;
  }
  // Draw particle and connect it with a line
  // Draw a line to another
  display(other) {
    stroke(0, this.lifespan);
    fill(0, this.lifespan/2);    
    ellipse(this.position.x,this.position.y, 8, 8); 
    line(this.position.x, this.position.y, other.position.x, other.position.y);

    // If we need to draw a line
    if (other) {
      strokeWeight(4);
      
      line(this.position.x, this.position.y, other.position.x, other.position.y);
    }}
}
