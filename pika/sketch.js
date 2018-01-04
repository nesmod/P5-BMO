var img;

function preload() 
{
	img = loadImage('Pikachu.png');
}

function setup() 
{
	createCanvas(640, 480);
}


function draw() 
{
background(255, 0, 0);

	strokeWeight(15);
	stroke(255, 255, 255);
	fill(200, 0, 255);
	ellipse(mouseX, mouseY, 230, 230); 
	//strokeWeight(5);
	//stroke(0, 0, 255);
	//fill(255, 0 ,0);
	//triangle(mouseX, mouseY-30, mouseX-30, mouseY+30, mouseX+30, mouseY+30);

	// this is where I draw pikachu 

	image(img, mouseX-128, mouseY-128);
	//
	//}
}