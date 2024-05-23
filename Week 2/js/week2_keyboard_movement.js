//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;


	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new GameObject();
	
	// Get the code from week1_boundary_detection_loop and put it here

	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	
	//Move the Player to the right
	if(w)
	{
		//console.log("Moving up");
		player.y -= 5;
	}
	if(s)
	{
		//console.log("Moving down");
		player.y += 5;
	}

	
	
	//Update the Screen
	player.drawRect();
	

	
}

