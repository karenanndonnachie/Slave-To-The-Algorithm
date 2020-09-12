let gifLength = 180;
let canvas;


var ball = {
	x: 300,
	y: 200,
	xspeed: 4,
	yspeed: -3
}


function setup() {
	var p5Canvas = createCanvas(600,400);
	canvas = p5Canvas.canvas;

	capturer.start();
}

function draw() {
	background(0);

	//call the functions
	move();
	bounce();
	display();

	if (frameCount < gifLength) {
		capturer.capture(canvas);
	} else if (frameCount === gifLength) {
		capturer.stop();
		capturer.save();
	}
}

 //defining the functions
function move() {
	ball.x += ball.xspeed;
	ball.y += ball.yspeed;
}

function bounce() {
if (ball.x > width-12 || ball.x < 12) {
		ball.xspeed *= -1;
	}
	if (ball.y > height-12 || ball.y < 12) {
		ball.yspeed *= -1;
	}
}

function display() {
	stroke(255);
	strokeWeight(4);
	noFill();
	ellipse(ball.x, ball.y, 24, 24);	
}