const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 

var ground, boi, stoneObj, TREE;
var mANGO1, mANGO2, mANGO3, mANGO4, mANGO5;

function preload()
{
	TREE = loadImage("sprites/tree.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	boi = new Boi(100,600);
	stoneObj = new Rocc(100,600,50);
	mANGO1 = new mANGO(500,330,20);
	mANGO2 = new mANGO(420,240,20);
	mANGO3 = new mANGO(670,310,20);
	mANGO4 = new mANGO(560,60,20);
	mANGO5 = new mANGO(615,215,20);

	//LAUNCHER = new LAUNCHER(stoneObj.body, {x:100, y:600});

	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background(0);

	//console.log(mouseX);
	//console.log(mouseY);

	image(TREE, 600,0,400,700)

	detectCollision(stoneObj, mANGO1);
	detectCollision(stoneObj, mANGO2);
	detectCollision(stoneObj, mANGO3);
	detectCollision(stoneObj, mANGO4);
	detectCollision(stoneObj, mANGO5);
	
	drawSprites();
	ground.display();
	boi.display();
	//TREE.display();
	stoneObj.display();

	mANGO1.display();
	mANGO2.display();
	mANGO3.display();
	mANGO4.display();
	mANGO5.display();

}

function detectCollision(Lstone, Lmango) {
	mangoBodyPosition = Lmango.body.position;
	stoneBodyPosition = Lstone.body.position;
	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance<=Lmango.r+Lstone.r)
	{
		Matter.Body.setStatic(Lmango.body, false);
	}
}

function mouseDragged() {
	
}

function mouseReleased() {
	Matter.Body.applyForce(stoneObj.body, stoneObj.body.position, {x: stoneObj.body.position.x - mouseX, y: stoneObj.body.position.y - mouseY})
}

function keyPressed() {
	if(keyCode === 32) {
		Matter.Body.setPosition(stoneObj.body, {x:235, y:420});
		//LAUNCHER.attach(stoneObj.body);
	}
}