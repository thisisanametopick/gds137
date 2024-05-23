//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;




//This is used to stop the player from moving through obstacles.
var prevX;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new GameObject();
	player.x = 100;
	
	
	
	var prevX2;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	
	//lBlock1 = new GameObject(canvas.width - 750, canvas.height/2+75, 100, 100,"#00ff00");
	//lBlock2 = new GameObject(canvas.width - 550, canvas.height/2+75, 100, 100,"#00ff00");
	//rBlock1 = new GameObject((canvas.width-350), canvas.height/2, 100, 100, "orange");
	//rBlock2 = new GameObject((canvas.width-50), canvas.height/2, 100, 100, "blue");

	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	
	/*//Move the Player to the right
	if(w)
	{
		//console.log("Moving Right");
		player.y += 2;
	}
	
	if(s)
	{
		//console.log("Moving Right");
		player.y += -2;
	}*/
	
	
	//Check Collisions
	
	//Demonstrates Accuracy of Bounding Box Collision
	if(lBlock1.hitTestObject(player))
	{
		//change color
		lBlock2.color = "yellow";
	}
	else
	{
		lBlock2.color = "#00ff00";
	}
	
	//Shows Bounding Boxes
	if(lBlock2.hitTestObject(player))
	{
		//draw bounding boxes
		context.strokeRect(lBlock2.x- lBlock2.width/2, lBlock2.y - lBlock2.height/2, lBlock2.width, lBlock2.height)
		context.strokeRect(player.x- player.width/2, player.y - player.height/2, player.width, player.height)
		
	}

	if(lBlock2.hitTestObject(player2))
		{
			//draw bounding boxes
			context.strokeRect(lBlock2.x- lBlock2.width/2, lBlock2.y - lBlock2.height/2, lBlock2.width, lBlock2.height)
			context.strokeRect(player2.x- player2.width/2, player2.y - player2.height/2, player2.width, player2.height)
			
		}

	


	
	
	//Demonstrates how often collisions take place
	if(rBlock1.hitTestObject(player))
	{
		console.log("colliding");

		
	}

	
	//Impede movement
	if(rBlock2.hitTestObject(player))
	{
		player.x = prevX;
		console.log("colliding");
	}
	else
	{
		prevX = player.x;
		
	}

	if(rBlock2.hitTestObject(player2))
		{
			player2.x = prevX;
			console.log("colliding");
		}
		else
		{
			prevX = player2.x;
			
		}
	

	


	

	//Update the Screen
	player.drawCircle();
	lBlock1.drawCircle();
	lBlock2.drawCircle();
	rBlock1.drawRect();
	rBlock2.drawRect();

}

