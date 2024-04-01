// JavaScript Document
function Ball()
{
	//Ball location
	this.x = canvas.width/2;
	this.y = canvas.height/2;
	
	//Ball dimensions
	this.radius = 50;
	
	
	//Ball velocity or speed on each axis
	this.vx = 0;
	this.vy = 0;
	
	//Ball color
	this.color = "#ff000";
	
	//This draws the Ball to the screen
	this.draw = function()
	{
		context.save();
			context.fillStyle = this.color;
			context.beginPath();
			context.arc(this.x, this.y, this.radius, 0,360*Math.PI/180,true);
			context.fill();
			closePath();
		context.restore();
		
	}	
	
	//This changes the Ball's position
	this.move = function()
	{
		this.x += this.vx;
		this.y += this.vy;
	}
}
