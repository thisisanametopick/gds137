var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');
var fps = 1000/60
var timer = setInterval(main, fps);

var fx = .5;
var fy = .5;
var gravity = 1;


var player = new GameObject();
player.force = 8;

function main()
{
	context.clearRect(0,0,canvas.width,canvas.height);

	if(w)
	{
		player.vx += player.px * player.force;
	}
	/*if(a)
	{
		player.vx += player.px * -player.force
	}*/
	if(s)
	{
		player.vx += player.px * -player.force
	}
	/*if(d)
	{
		player.vx += player.px * player.force
	}*/


	if(player.y > canvas.height)
	{
		player.y = canvas.height
	}


	
	

	player.vy += gravity
	
	player.vx *= fx;
	player.vy *= fy;
	
	player.move();
	player.drawRect();
}