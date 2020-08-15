	var ball;
	var ground;
	var bucket1;
	var bucket2;

	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;


function setup() {
	createCanvas(800, 400);
	rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bucket1 = new Bucket(500,268,70,5);
	bucket1.scale = 0.1;
	
	
	ball = new Ball(200,80,50,50);
	ball.scale = 0.1;
	


	ground = new Ground(319,300,100000,5);	

	ball.velocityX = 10;

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
	Engine.update(engine);
	strokeWeight(4);
  bucket1.display();
  ball.display();
  ground.display();
 
}


    
