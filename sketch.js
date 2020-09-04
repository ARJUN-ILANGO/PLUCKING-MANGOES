
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   fruit1 = new Mangoes(1005,200,30,40);
   fruit2 = new Mangoes(1005,200,30,40);
   fruit3 = new Mangoes(1005,200,30,40);
   fruit4 = new Mangoes(1005,200,30,40);
   fruit5 = new Mangoes(1005,200,30,40);
   tree = new Tree(1005,210,350,350);
   boy = new Boy(200,340,150,400);
   stone = new Stone(200,300);
  
   ground = new Ground(800,400,1600,40);
   
   chain = new SlingShot(stone.body,{x:100, y:210});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  ground.display();
  fruit1.display();
  fruit2.display();
  fruit3.display();
  fruit4.display();
  fruit5.display();
  tree.display();
  boy.display();
  stone.display();
  chain.display();

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    chain.fly();
}



