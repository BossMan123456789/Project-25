
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
/*
TO CREATE AN OBJECT FROM A CLASS
1. create a variable for the object outside the function setup() --> var objectName;
2. mention that the variable belongs to the specific class inside the function setup()
	objectName = new ClassName()
3. call the display function of the class inside the function draw()

*/

var groundObject;
var boxBottom;
var boxLeft;
var boxRight;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(1400, 500);

	engine = Engine.create();
	world = engine.world;

groundObject = new Ground(700, 470);
boxBottom = new Dustbin(1200, 455,200, 20);
boxLeft = new Dustbin(1100, 415, 20, 100);
boxRight = new Dustbin(1300, 415, 20, 100);
paper = new Paper();

}


function draw() {
  
  background(0);
  Engine.update(engine);

  //objectName.functionName();
groundObject.groundDisplay();
boxBottom.dustbinDisplay();
boxRight.dustbinDisplay();
boxLeft.dustbinDisplay();
paper.paperDisplay();
  drawSprites();
 
}

function keyPressed(){
  if (keyIsDown === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
  }
}