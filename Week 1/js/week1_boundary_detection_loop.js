// JavaScript Document

var canvas;
var context;
var timer;
var interval = 1000/60;
var Ball;

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	Ball = new Ball();
	
	//------Declare the Ball speed on the x and y axis------
	Ball.vx = 2;
	Ball.vy = 0;
	//----------------------------------------------------
	
	timer = setInterval(animate, interval);


function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	Ball.move();
	
	//--------------Loop the Screen----------------------
	if(Ball.x > canvas.width + Ball.width/2)
	{
		Ball.x = -Ball.width/2	
	}
	//---------------------------------------------------
	
	Ball.draw();
}
