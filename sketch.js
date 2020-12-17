const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
var ground;
var block1, block2, block3, block4, block5;
var block6, block7, block8, block9, block10, block11;
var b1, b2, b3, b4, b5, b6, b7;
var ball;
var string;


function setup() {
  createCanvas(1250, 550);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(625, 540, 1250, 20);
  block1 = new Block(700, 200, 50, 50);
  block2 = new Block(700, 200, 50, 50);
  block3 = new Block(700, 200, 50, 50);
  block4 = new Block(700, 200, 50, 50);
  block5 = new Block(700, 200, 50, 50);
  block6 = new Block(900, 200, 50, 50);
  block7 = new Block(900, 200, 50, 50);
  block8 = new Block(900, 200, 50, 50);
  block9 = new Block(900, 200, 50, 50);
  block10 = new Block(900, 200, 50, 50);
  block11 = new Block(900, 200, 50, 50);
  b7 = new Block(800, 200, 50, 50);
  b6 = new Block(800, 200, 50, 50);
  b5 = new Block(800, 200, 50, 50);
  b4 = new Block(800, 200, 50, 50);
  b3 = new Block(800, 200, 50, 50);
  b2 = new Block(800, 200, 50, 50);
  b1 = new Block(800, 200, 50, 50);
  ball = new Ball(550,200,50);
  string=new String(ball.body,{x:550,y:20});

}

function draw() {
  background(255);
  Engine.update(engine);

  ground.display();
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
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  ball.display();
  string.display();

}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{ x: mouseX, y: mouseY });
}