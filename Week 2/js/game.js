var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;


canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	var player = new GameObject();
	player.x = 0
	

//Set the Animation Timer
timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	
	//Check Collisions
	
	
	
	
    player.drawRect();

	
	

}

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
	
	

	player.drawRect();
}





