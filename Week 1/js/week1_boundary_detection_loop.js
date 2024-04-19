// JavaScript Document

var canvas;
var context;
var timer;
var mainTimer = setInterval(animate, 1000/60); 
var ball;

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	ball = new Ball();
	
	//------Declare the Ball speed on the x and y axis------
	ball.vx = 6;
	ball.vy = -7;
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

	if(ball.y > canvas.height - ball.height/2)
	{
		ball.y = canvas.height - ball.height/2
		ball.vy = -ball.vy
	}

	if(ball.x < 0 +ball.width/2)
	{
		ball.x = 0+ ball.width/2
		ball.vx = -ball.vx
	}

	
	
	//---------------------------------------------------
	
	ball.draw();
}
