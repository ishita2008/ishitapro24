
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper
var box1,box2
var box3


function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	paper=new Paper(20,400,30,20)

	ground=new Ground(200,550,1500,20)

	box1=new Box(330,500,30,90);
	
	box2=new Box(770,500,30,90);

	box3=new Box(550,530,400,20);

	


	
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  paper.display();

  box1.display();
  box2.display();
  box3.display();

  ground.display();
  




  
  keypressed();


  
  drawSprites();
 
}
function keypressed() {
	if(keyDown(UP_ARROW)){
	
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	
	}
	}
	


