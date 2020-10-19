const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var myEngine, myWorld;
var ground;
var ball;
function setup() {
  myEngine=Engine.create();
  myWorld=myEngine.world;
  createCanvas(400,400);
  var ground_options={
    isStatic:true
   }
  ground=Bodies.rectangle(200,390,400,20,ground_options);
  World.add(myWorld,ground);
  var ball_options={
    restitution:1
   }
  ball = Bodies.circle(200,10,40,ball_options);
  World.add(myWorld,ball);
  
  
}

function draw() {
  Engine.update(myEngine) 
  background("black");
  rectMode(CENTER);  
  rect(ground.position.x,ground.position.y,400,50);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}