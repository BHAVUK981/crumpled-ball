
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var paper1,ground,log1,log2,log3
	


function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;
	
	ground=new Ground(600,height,1200,20)
	paper1=new  paper(200,600,20)
	log1=new log(650,680,200,20)
    log2=new log(800,780,20,300)
    log3=new log(950,680,200,20)
	//Create the Bodies Here.



  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  ground.display();
  paper1.display();
log1.display();
log2.display();
log3.display();

  drawSprites();

 
}



