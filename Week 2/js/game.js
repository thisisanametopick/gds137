var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var ball



canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	var player = new GameObject();
	player.x = 0
	var ball = new GameObject();
	ball.width = 50
	ball.height = 50
	ball.vy=0
	ball.vx=-5

//Set the Animation Timer
timer = setInterval(animate, interval);



function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);

	if(w)
	{
		player.y -=5;
	}

	if(s)
	{
		player.y +=5;
	}

	

	if(player.y > canvas.height - player.height/2)
	{
		player.y = canvas.height - player.height/2
		player.vy = -player.vy
	}

	
	if(player.y < 0 +player.height/2)
	{
		player.y = 0+ player.height/2
		player.vy = - player.vy
	}

	ball.move();
	
	//--------------Loop the Screen----------------------
	if(ball.x > canvas.width - ball.width/2)
	{
		ball.x = canvas.width - ball.width/2
		ball.vx = - ball.vx
	}

	if(ball.y > canvas.height - ball.height/2)
	{
		ball.y = canvas.height - ball.height/2
		ball.vy = -ball.vy
	}

	/*if(ball.x < 0 +ball.width/2)
	{
		ball.x = 0+ ball.width/2
		ball.vx = - ball.vx
	}*/

	if(ball.y < 0 +ball.height/2)
	{
		ball.y = 0+ ball.height/2
		ball.vy = - ball.vy
	}

	
	
	

	
	ball.drawCircle();
	
	player.drawRect();
}





