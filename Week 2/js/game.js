var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var player2;
var ball;
var prevX;



canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	var player = new GameObject();
	player.x = 0
	var player2 = new GameObject();
	player2.x = 1024
	var ball = new GameObject();
	ball.width = 50
	ball.height = 50
	ball.vy=0
	ball.vx=-8

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

	if(up)
		{
			player2.y -=5;
		}
	
		if(down)
		{
			player2.y +=5;
		}
	
		
	
		if(player2.y > canvas.height - player2.height/2)
		{
			player2.y = canvas.height - player2.height/2
			player2.vy = -player2.vy
	
			
		}
	
		
		if(player2.y < 0 +player2.height/2)
		{
			player2.y = 0+ player2.height/2
			player2.vy = - player2.vy
		}

	ball.move();
	
	//--------------Loop the Screen----------------------
	/*if(ball.x > canvas.width - ball.width/2)
	{
		ball.x = canvas.width - ball.width/2
		ball.vx = - ball.vx
	}*/

	if(ball.y > canvas.height - ball.height/2)
	{
		ball.y = canvas.height - ball.height/2
		ball.vy = -ball.vy
	}
	
	//ball restart 
	if(ball.x < 0 -ball.width/2)
	{
		ball.x = 500+ ball.width/2
		ball.vx = + ball.vx
	}

	if(ball.y < 0 -ball.height/2)
	{
		ball.y = 0- ball.height/2
		ball.vy = + ball.vy
	}

	if(ball.x > 1024 +ball.width/2)
		{
			ball.x = 500+ ball.width/2
			ball.vx = + ball.vx
		}
	
		if(ball.y < 0 -ball.height/2)
		{
			ball.y = 0- ball.height/2
			ball.vy = + ball.vy
		}

	
	

	
	if(ball.hitTestObject(player))
		{
			ball.x = 5+ ball.width/2
		    ball.vx = - ball.vx
			
			player.x = prevX;
			console.log("colliding");
		}
		else
		{
			prevX = player.x;
			

		}
		// ball move with paddle eges
	if(ball.hitTestObject(player))
		{
			if(ball.y < player.y - player.height/6)
				{
					ball.vx = 5;
					ball.vy = -5;
				}

				if(ball.y > player.y + player.height/6)
					{
						ball.vx = 5;
						ball.vy = 5;
					}

		}

	
			// ball move with paddle eges
		if(ball.hitTestObject(player2))
			{ball.vx = -5
				if(ball.y < player2.y - player2.height/6)
					{
						
						ball.vy = 5;
					}
	
					if(ball.y > player2.y + player2.height/6)
						{
							ball.vy = -5;
	
						}
						
			}
		

	
	ball.drawCircle();
	
	player.drawRect();
	player2.drawRect();
	
	
	
	
		
	
	
		
	
		
	
		
	
	
}