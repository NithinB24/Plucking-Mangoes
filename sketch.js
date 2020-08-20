
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, treeimg,boy,boyimg;
var mango1,mango2,mango3,mango4,mango5;
var ground1;
var slingshot1,rock1;


function preload(){
 
treeimg= loadImage("tree.png");
boyimg = loadImage("boy.png");
}

function setup() {
	createCanvas(800,800);

	engine = Engine.create();
	world = engine.world;

	mango1 = new Mango(600,250,50,50);
	mango2 = new Mango(500,400,50,50);
	mango3 = new Mango(550,300,50,50);
	mango4 = new Mango(650,350,50,50);
	mango5 = new Mango(700,275,50,50);

	rock1 = new Rock(143,502,50,50);
	
	slingshot1 = new Slingshot(rock1.body,{x:143,y:502});

	ground1 = new Ground(400,750,800,20)

	Engine.run(engine);

	tree = createSprite(625,400);
	tree.addImage(treeimg);

	boy = createSprite(200,500);
	boy.addImage(boyimg);
	boy.scale = 0.5;
	
	
}


function draw() {
Engine.update(engine);
  rectMode(CENTER);
  background("white");
  
  drawSprites();
    
  slingshot1.display();

  ground1.display();
  
  mango1.display();
  mango2.display();  
  mango3.display();  
  mango4.display();  
  mango5.display();  
  
  rock1.display();

 isTouching(rock1,mango1);
 isTouching(rock1,mango2);
 isTouching(rock1,mango3);
 isTouching(rock1,mango4);
 isTouching(rock1,mango5);

}

function mouseDragged(){

	Matter.Body.setPosition(rock1.body,{x:mouseX,y:mouseY})	
	  
  }
  
  function mouseReleased(){
  
	slingshot1.fly();
  
  }

  /*function detectcollision(lrock,lmango){
   
  var mangoBodyPosition = lmango.body.position;
  var rockBodyPosition = lrock.body.position;

	var distance = dist(rockBodyPosition.x,rockBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
   //if(distance>=lmango.r+lrock.r)
  if((rockBodyPosition.x >= mangoBodyPosition.x) && (rockBodyPosition.y >= mangoBodyPosition.y))
   {
	
	Matter.Body.setStatic(lmango.body,false);

   }
  }*/


  function keyPressed (){
    if (keyCode === 32){
    
    slingshot1.attach(rock1.body)

    Matter.Body.setPosition(rock1.body,{x:200,y:50})

    }

}

function isTouching (object1,object2){
    /*if(object1.x-object2.x<=object1.width/2+object2.width/2
      &&object2.x-object1.x<=object1.width/2+object2.width/2
      &&object1.y-object2.y<=object1.height/2+object2.height/2
      &&object2.y-object1.y<=object1.height/2+object2.height/2){
	}*/
	var mangoBodyPosition = object1.body.position;
  var rockBodyPosition = object2.body.position;
	var distance = dist(rockBodyPosition.x,rockBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if((rockBodyPosition.x >= mangoBodyPosition.x) && (rockBodyPosition.y >= mangoBodyPosition.y) )
   {
	
	Matter.Body.setStatic(object2.body,false);

   }
}