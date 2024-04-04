//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var Ball;


	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	

	//Instantiate the Ball
	Ball = new Ball();
	
	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//Move the Ball
	Ball.x += 4;
	
	
	//Update the Screen
	Ball.draw();
	
}
