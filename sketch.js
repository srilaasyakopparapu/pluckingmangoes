
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boyImage
var stone1
var mango1, mango2, mango3, mango4, mango5
var detectollision
var stoneobj
function preload(){
	boyImage = loadImage("boy.png")
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
stone1 = new stone(600, 200, 20, 10)
mango1 = new mango(200, 100, 10, 10)
mango2 = new mango(200, 50, 10, 10)
mango3 = new mango(200, 45, 10, 10)
mango4 = new mango(200, 75, 10, 10)
mango5 = new mango(200, 30, 10, 10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
detectollision(stoneobj, mango1);
detectollision(stoneobj, mango2);
detectollision(stoneobj, mango3);
detectollision(stoneobj, mango4);
detectollision(stoneobj, mango5);


  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode ===32)
Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
launcherObject.attach(stoneObj.body);
}


