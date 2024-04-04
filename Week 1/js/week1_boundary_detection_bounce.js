// JavaScript Document

var canvas;
var context;
var timer;
var interval = 1000/60;
var Ball;

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	Ball = new Ball();
	
	
	//------Declare the Ball's speed on the x and y axis------
	Ball.vx = 2;
	Ball.vy = 5;
	
	
	//----------------------------------------------------
	
	timer = setInterval(animate, interval);
	

function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//----Movement Using the Ball's move() function----
	Ball.move();
	
	//---------------------------------------------------
	
	//--------------Bounce of Right----------------------
	if(Ball.x > canvas.width - Ball.width/2)
	
	{
		Ball.vx = -Ball.vx;	
	} 
	

	//---------------------------------------------------
	
	Ball.draw();
}
