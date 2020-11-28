
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var d1,d2,d3;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	d1=new Dustbin (1300,665,170,20);
	d2=new Dustbin (1205, 615, 20, 120);
	d3=new Dustbin(1395,615,20,120);
	paper1=new Paper(100,360,25);
	ground=new Ground(600,690,1900,20);
	//Create the Bodies Here.

/*	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });
  
	  
	  Render.run(render);*/
	
  
}


function draw() {
  rectMode(CENTER);
  background("lightskyblue");
  Engine.update(engine)
  d1.display();
  d2.display();
  d3.display();
  ground.display();
 paper1.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:55,y:-30});
	}
}

