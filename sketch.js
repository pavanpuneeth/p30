const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var platform1, platform2;
var block1;
var block2;
var block3;
var block4;
var block5;
var block6;
var block7;
var block8;
var block9;
var block10;
var block11;
var block12;
var block13;
var block14;
var block15;
var block16;
var block17;
var block18;
var block19;
var block20;
var polygon, polygonImg;
var slingshot;
var bg;

function preload() 
{
 bg = loadImage("bg.png");
}

function setup() {
  createCanvas(900,400);
    
  
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,390,1200,20);
    platform1 = new Ground(300,350,300,10);
    platform2 = new Ground(650,275,300,10);

     block1 = new Box(175,325,50,50);
     block2 = new Box(225,325,50,50);
     block3 = new Box(275,325,50,50);
     block4 = new Box(325,325,50,50);
     block5 = new Box(375,325,50,50);
     block6 = new Box(425,325,50,50);
   

     block7 = new Box(225,275,50,50);
     block8 = new Box(275,275,50,50);
     block9 = new Box(325,275,50,50);
     block10 = new Box(375,275,50,50);
   

     block11 = new Box(275,225,50,50);
     block12 = new Box(325,225,50,50);
    

     block13 = new Box(300,175,50,50);
     
     
     block14 = new Box(575,250,50,50);
     block15 = new Box(625,250,50,50);
     block16 = new Box(675,250,50,50);
     block17 = new Box(725,250,50,50);
    
     
     block18 = new Box(625,200,50,50);
     block19 = new Box(675,200,50,50);
     

     block20 = new Box(650,150,50,50);
     

    polygon = new Polygon;

    slingshot = new SlingShot(polygon.body,{x:100, y:100});
    

  
    Engine.run(engine);
}

function draw() {
 background("black");
  Engine.update(engine);

  ground.display();
  platform1.display();
  platform2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  polygon.display();
  slingshot.display();


  
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(polygon.body,{x:100,y:100})
    slingshot.attach(polygon.body);
  }
}
