// JavaScript Document

var canvas;
var context;
var timer;
var mainTimer = setInterval(animate, 1000/60); 
var Ball;

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	ball = new Ball();
	
	//------Declare the Ball speed on the x and y axis------
	ball.vx = 2;
	ball.vy = 5;
	//----------------------------------------------------
	
	timer = setInterval(animate, interval);


function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	ball.move();
	
	//--------------Loop the Screen----------------------
	if(ball.x > canvas.width - ball.width/2)
	{
		ball.x = canvas.width - ball.width/2
	}
	
	//---------------------------------------------------
	
	ball.draw();
}
