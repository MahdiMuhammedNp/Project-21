
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
function preload() {

}

function setup() {
	createCanvas(1200, 500);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width / 2, 400, width, 20);
	wall1 = new Ground(750, 330, 10, 120);
	wall2 = new Ground(900, 330, 10, 120);

	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 0.3
	}

	//Create the Bodies Here.
	ball = Bodies.circle(200, 100, 50, ball_options)
	World.add(world, ball)


	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background(0);
	ground.display();
	wall1.display();
	wall2.display();

	ellipse(ball.position.x, ball.position.y + 26, 50, 50)


	drawSprites();

}


function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, ball.position, { x: 80, y: -60 })
	}
}


